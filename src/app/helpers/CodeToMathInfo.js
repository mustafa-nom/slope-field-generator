"use client";
import React from "react";
import dynamic from "next/dynamic";
import { CodeBlock, dracula } from "react-code-blocks";

const CodeBlockEx = dynamic(
  () =>
    import("react-code-blocks").then((module) => ({
      default: ({ text, language, showLineNumbers }) => (
        <module.CodeBlock
          text={text}
          language={language}
          showLineNumbers={showLineNumbers}
          theme={dracula}
        />
      ),
    })),
  { ssr: false }
);

const CodeToMathInfo = () => {
  const samplecode = String.raw`const rungeKutta = (dydx, x0, y0, xEnd, h) => {
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
  };`;

  return (
    <div>
      <h1 className="text-3xl text-center py-0.5 font-bold mt-4">
        How It{" "}
        <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-bold">
          Works
        </code>
      </h1>

      <div className="flex mt-4">
        <div className="md:w-1/2 m-4 bg-gray-900 rounded-xl overflow-hidden shadow-md">
          <CodeBlockEx
            text={samplecode}
            language="javascript"
            showLineNumbers={true}
          />
        </div>

        <div className="md:w-1/2 m-4">
          <div className="text-center font-verdana">
            <h3 className="text-2xl">Mathematical explanation</h3>
            <p className="text-muted-foreground font-semibold text-md">4<sup>th</sup> Order Runge-Kutta (RK4)</p>
          </div>
          <p className="font-verdana mb-2">
            The RK4 is a technique used for first-order ordinary differential equations, 
            giving an approximate solution using 4 intermediate steps 
            to calculate the next value of y over a given range x. 
            The math behind it is as follows:
          </p>

          <div className="bg-gray-100 p-4 rounded shadow-md">
            <p>
              Given ordinary differential equation{" "}
              <span className="font-semibold">y' = f(x, y)
              </span> & <span className="font-semibold">h</span> as the stepsize:
            </p>
            <ul className="flex flex-col items-center mt-2 space-y-2">
              <li>
                <span className="font-semibold">k₁ = h * f(x, y)</span>
              </li>
              <li>
                <span className="font-semibold">
                  k₂ = h * f(x + h/2, y + k₁/2)
                </span>
              </li>
              <li>
                <span className="font-semibold">
                  k₃ = h * f(x + h/2, y + k₂/2)
                </span>
              </li>
              <li>
                <span className="font-semibold">
                  k₄ = h * f(x + h, y + k₃)
                </span>
              </li>
            </ul>
            <p className="mt-4">
              The solution is updated as:
              <br />
              <span className="flex flex-col items-center font-semibold">
                yₙ₊₁ = yₙ + (1/6)(k₁ + 2k₂ + 2k₃ + k₄)
              </span>
              <span className="flex flex-col items-center font-semibold">xₙ₊₁ = xₙ + h</span>
            </p>
          </div>

          <p className="font-verdana mt-2">
            Each intermediate value of k is calculated with respect to the prior value, where the first
            uses the initial point of (x₀, y₀) to initialize the curve from that point. 
            <br />
            Normally, the curve is only drawn from the direction of the given stepsize, but if you want to
            draw it going left and right, you can run the rungeKutta function with both a positive and negative stepsize.
            Then, you combine the points together to create an array of all of the points and graph that.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CodeToMathInfo;
