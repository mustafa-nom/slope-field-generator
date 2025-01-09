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
import React from "react";

const GraphForm = () => {
  return (
    <form className="motion-preset-blur-right-md motion-duration-2000">
      <div>
        <Card className="flex flex-col mx-auto justify-center max-w-md max-h-fit">
          <CardHeader className="flex items-center">
            <CardTitle className="text-3xl tracking-tight">Graph Values</CardTitle>
            <CardDescription>Customize coordinates & points here</CardDescription>
          </CardHeader>
          <CardContent className="flex gap-x-8">
            <div className="flex flex-col gap-y-4">
              <div>
                <Label htmlFor="xMin">xMin</Label>
                <Input id="xMin" type="number" placeholder="Enter your xMin value" />
              </div>
              <div>
                <Label htmlFor="xMax">xMax</Label>
                <Input id="xMax" type="number" placeholder="Enter your xMax value" />
              </div>
              <div>
                <Label htmlFor="yMin">yMin</Label>
                <Input id="yMin" type="number" placeholder="Enter your yMin value" />
              </div>
              <div>
                <Label htmlFor="yMax">yMax</Label>
                <Input id="yMax" type="number" placeholder="Enter your yMax value" />
              </div>
            </div>

            <div className="flex flex-col gap-y-2">
              <div>
                <Label htmlFor="numXPoints"># of x pts</Label>
                <Input id="numXPoints" type="number" placeholder="Enter # of x pts" />
              </div>
              <div className="mb-1">
                <Label htmlFor="numYPoints"># of y pts</Label>
                <Input id="numYPoints" type="number" placeholder="Enter # of y pts" />
              </div>

              <div>
                <p className="text-sm font-semibold">
                  Initial Point (x₀, y₀)
                </p>
                <div className="flex flex-col gap-y-2">
                  <div>
                    <Label htmlFor="x0">Initial x₀ value</Label>
                    <Input id="x0" type="number" placeholder="Enter your initial x₀" />
                  </div>
                  <div>
                    <Label htmlFor="y0">Initial y₀ value</Label>
                    <Input id="y0" type="number" placeholder="Enter your initial y₀" />
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Button type="submit" className="flex mx-auto justify-center mt-4">
        Draw Graph
      </Button>
    </form>
  );
};

export default GraphForm;
