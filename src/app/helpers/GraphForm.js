"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import React, { useState } from "react";
import { Separator } from "@/components/ui/separator";


const GraphForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    xMin: "",
    xMax: "",
    yMin: "",
    yMax: "",
    numXPoints: "",
    numYPoints: "",
    x0: "",
    y0: "",
    diffEQ: "",
  });

  const handleDefaultValues = () => {
    const defaultValues = {
      xMin: "-5",
      xMax: "5",
      yMin: "-5",
      yMax: "5",
      numXPoints: "10",
      numYPoints: "10",
      x0: "0",
      y0: "0",
      diffEQ: "x - y",
    };

    setFormData(defaultValues);
    onSubmit(defaultValues); // update graph w/ default values
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit(formData);
  }

  return (
    <form onSubmit={handleSubmit} className="motion-preset-blur-right-md motion-duration-2000">
      <Card className="flex flex-col mx-auto justify-center max-w-md max-h-fit">
        <CardHeader className="flex items-center">
          <CardTitle className="text-3xl tracking-tight">Graph Values</CardTitle>
          <CardDescription>Customize coordinates & points here</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col space-y-8">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-y-4">
              <div>
                <Label htmlFor="xMin">xMin</Label>
                <Input id="xMin" type="number" value={formData.xMin} onChange={handleChange} placeholder="Enter your xMin value" />
              </div>
              <div>
                <Label htmlFor="xMax">xMax</Label>
                <Input id="xMax" type="number" value={formData.xMax} onChange={handleChange} placeholder="Enter your xMax value" />
              </div>
              <div>
                <Label htmlFor="yMin">yMin</Label>
                <Input id="yMin" type="number" value={formData.yMin} onChange={handleChange} placeholder="Enter your yMin value" />
              </div>
              <div>
                <Label htmlFor="yMax">yMax</Label>
                <Input id="yMax" type="number" value={formData.yMax} onChange={handleChange} placeholder="Enter your yMax value" />
              </div>
            </div>

            <div className="flex flex-col gap-y-1">
              <div>
                <Label htmlFor="numXPoints"># of x pts</Label>
                <Input id="numXPoints" type="number" value={formData.numXPoints} onChange={handleChange} placeholder="Enter # of x pts" />
              </div>
              <div className="mb-1">
                <Label htmlFor="numYPoints"># of y pts</Label>
                <Input id="numYPoints" type="number" value={formData.numYPoints} onChange={handleChange} placeholder="Enter # of y pts" />
              </div>
              <div>
                <p className="text-sm font-semibold mt-2">
                  Initial Point (x₀, y₀)
                </p>
                <div className="flex flex-col gap-y-2">
                  <div>
                    <Label htmlFor="x0">Initial x₀ value</Label>
                    <Input id="x0" type="number" value={formData.x0} onChange={handleChange} placeholder="Enter your initial x₀" />
                  </div>
                  <div>
                    <Label htmlFor="y0">Initial y₀ value</Label>
                    <Input id="y0" type="number" value={formData.y0} onChange={handleChange} placeholder="Enter your initial y₀" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Separator className="my-4" />

          
          <div>
            <Label htmlFor="diffEQ">Differential Equation</Label>
            <Input id="diffEQ" type="text" value={formData.diffEQ} onChange={handleChange} placeholder="Enter your dy/dx equation" />
          </div>
        </CardContent>
      </Card>

      <CardFooter className="flex flex-row items-center justify-center gap-4 mt-4">
        <Button type="submit" className="px-6 py-2 bg-black text-white">
          Draw Graph
        </Button>

        <Button
          type="button"
          className="px-6 py-2 bg-gray-200 text-black hover:text-white hover:bg-gray-900"
          onClick={handleDefaultValues}
        >
          Generate Default Graph
        </Button>
      </CardFooter>
    </form>
  );
};

export default GraphForm;
