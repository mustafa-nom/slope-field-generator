"use client";
import React from 'react';
import { Separator } from "@/components/ui/separator";

const Header = () => {
  return (
    <div className="flex flex-col justify-center items-center space-y-4 pt-8 pb-4">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl motion-preset-blur-right-lg motion-duration-2000">Slope Field Generator</h1>
        <p className="text-sm text-center text-muted-foreground max-w-xl motion-preset-blur-right-lg motion-duration-2000">
          This application is for creating slope field graphs. 
          <br /> More customization will come in the future.
          <br /> Inspiration: Mr. Magallon
        </p>
    </div>
  )
}

export default Header