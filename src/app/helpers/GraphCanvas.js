"use client";
import React, { useEffect, useRef, useState } from "react";
import * as math from "mathjs";
import { Button } from "@/components/ui/button";

const GraphCanvas = ({ formData }) => {
  const canvasRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [additionalCurves, setAdditionalCurves] = useState([]);
  const stepSize = 0.05;

  useEffect(() => {
    const resizeCanvas = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const container = canvas.parentElement;
      canvas.width = container.clientWidth;
      canvas.height = container.clientWidth * 0.8; // Adjust aspect ratio
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    return () => window.removeEventListener("resize", resizeCanvas);
  }, []);

  const rungeKutta = (dydx, x0, y0, xEnd, h) => {
    const points = [];
    let x = x0;
    let y = y0;

    points.push({ x, y });

    while ((h > 0 && x < xEnd) || (h < 0 && x > xEnd)) {
      const k1 = h * dydx(x, y);
      const k2 = h * dydx(x + h / 2, y + k1 / 2);
      const k3 = h * dydx(x + h / 2, y + k2 / 2);
      const k4 = h * dydx(x + h, y + k3);

      const deltaY = (k1 + 2 * k2 + 2 * k3 + k4) / 6;
      x += h;
      y += deltaY;

      points.push({ x, y });
    }

    return points;
  };

  const compileDiffEq = (equation) => {
    try {
      return math.compile(equation);
    } catch (error) {
      console.error("Error compiling differential equation:", error);
      return null;
    }
  };

  const dydx = (compiledEq, x, y) => {
    try {
      const scope = { x, y };
      return compiledEq.evaluate(scope);
    } catch (error) {
      console.error("Error evaluating differential equation:", error);
      return 0;
    }
  };

  const drawGraph = () => {
    if (!formData || !canvasRef.current) return;

    const { xMin, xMax, yMin, yMax, numXPoints, numYPoints, x0, y0, diffEQ } =
      formData;

    if (
      !xMin ||
      !xMax ||
      !yMin ||
      !yMax ||
      !numXPoints ||
      !numYPoints ||
      !x0 ||
      !y0 ||
      !diffEQ
    ) {
      return;
    }

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // complile diffEQ
    const compiledEq = compileDiffEq(diffEQ);
    if (!compiledEq) return;

    // scaling factors
    const xScale = canvas.width / (xMax - xMin);
    const yScale = canvas.height / (yMax - yMin);

    const drawAxes = () => {
      ctx.strokeStyle = "blue";
      ctx.lineWidth = 1;

      // x-axis
      const xStep = (xMax - xMin) / 10; // # of labels
      for (let x = parseFloat(xMin); x <= xMax; x += xStep) {
        const canvasX = (x - xMin) * xScale;
        ctx.beginPath();
        ctx.moveTo(canvasX, canvas.height);
        ctx.lineTo(canvasX, canvas.height - 10);
        ctx.stroke();

        ctx.font = "10px Verdana";
        ctx.fillText(x.toFixed(1), canvasX - 10, canvas.height - 15);
      }

      // y-axis
      const yStep = (yMax - yMin) / 10;
      for (let y = parseFloat(yMin); y <= yMax; y += yStep) {
        const canvasY = canvas.height - (y - yMin) * yScale;
        ctx.beginPath();
        ctx.moveTo(0, canvasY);
        ctx.lineTo(10, canvasY);
        ctx.stroke();

        ctx.font = "10px Verdana";
        ctx.fillText(y.toFixed(1), 15, canvasY + 3);
      }
    };

    // slope function
    const drawSlopeField = () => {
      const xStep = (xMax - xMin) / numXPoints;
      const yStep = (yMax - yMin) / numYPoints;

      for (let x = parseFloat(xMin); x <= xMax; x += xStep) {
        for (let y = parseFloat(yMin); y <= yMax; y += yStep) {
          const slope = dydx(compiledEq, x, y);
          const angle = Math.atan(slope);
          const length = Math.min(xStep, yStep) * 0.4;
          const x1 = x - (length / 2) * Math.cos(angle);
          const y1 = y - (length / 2) * Math.sin(angle);
          const x2 = x + (length / 2) * Math.cos(angle);
          const y2 = y + (length / 2) * Math.sin(angle);

          const canvasX1 = (x1 - xMin) * xScale;
          const canvasY1 = canvas.height - (y1 - yMin) * yScale;
          const canvasX2 = (x2 - xMin) * xScale;
          const canvasY2 = canvas.height - (y2 - yMin) * yScale;

          ctx.beginPath();
          ctx.moveTo(canvasX1, canvasY1);
          ctx.lineTo(canvasX2, canvasY2);
          ctx.strokeStyle = "black";
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
    };

    // solution curve function
    const drawSolutionCurve = (x0, y0) => {
      const forwardPoints = rungeKutta(
        (x, y) => dydx(compiledEq, x, y),
        parseFloat(x0),
        parseFloat(y0),
        parseFloat(xMax),
        stepSize
      );

      const backwardPoints = rungeKutta(
        (x, y) => dydx(compiledEq, x, y),
        parseFloat(x0),
        parseFloat(y0),
        parseFloat(xMin),
        -stepSize
      );

      const allPoints = [...backwardPoints.reverse(), ...forwardPoints];

      ctx.strokeStyle = "red";
      ctx.lineWidth = 2;

      ctx.beginPath();
      allPoints.forEach((point, index) => {
        const canvasX = (point.x - xMin) * xScale;
        const canvasY = canvas.height - (point.y - yMin) * yScale;

        if (index === 0) {
          ctx.moveTo(canvasX, canvasY);
        } else {
          ctx.lineTo(canvasX, canvasY);
        }
      });
      ctx.stroke();
    };

    drawAxes();
    drawSlopeField();

    // Draw initial solution curve
    drawSolutionCurve(x0, y0);

    // Draw additional curves
    additionalCurves.forEach(({ x, y }) => drawSolutionCurve(x, y));
  };

  const handleMouseClick = (e) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();

    const x = ((e.clientX - rect.left) / canvas.width) * (formData.xMax - formData.xMin) + parseFloat(formData.xMin);
    const y = ((rect.bottom - e.clientY) / canvas.height) * (formData.yMax - formData.yMin) + parseFloat(formData.yMin);

    setAdditionalCurves((prev) => [...prev, { x, y }]);
  };

  const handleMouseMove = (e) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();

    const x = ((e.clientX - rect.left) / canvas.width) * (formData.xMax - formData.xMin) + parseFloat(formData.xMin);
    const y = ((rect.bottom - e.clientY) / canvas.height) * (formData.yMax - formData.yMin) + parseFloat(formData.yMin);

    setMousePos({ x: x.toFixed(2), y: y.toFixed(2) });
  };

  const handleReset = () => {
    setAdditionalCurves([]);
  };

  useEffect(() => {
    drawGraph();
  }, [formData, additionalCurves]);

  return (
    <div className="relative flex flex-col items-center">
      <canvas
        ref={canvasRef}
        className="border border-gray-300 max-w-4xl max-h-screen"
        onMouseMove={handleMouseMove}
        onClick={handleMouseClick}
      />
      <div className="absolute top-2 right-2 bg-white p-2 border border-gray-400 rounded shadow">
        <p className="text-xs font-verdana">x: {mousePos.x}</p>
        <p className="text-xs font-verdana">y: {mousePos.y}</p>
      </div>
      <Button
        onClick={handleReset}
        className="mt-4 bg-red-200 hover:bg-red-600 text-red-950 hover:text-white px-4 py-2 rounded"
      >
        Reset Graph
      </Button>
    </div>
  );
};

export default GraphCanvas;
