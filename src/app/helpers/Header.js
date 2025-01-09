"use client";
import React from 'react';
import { Separator } from "@/components/ui/separator";

const Header = () => {
  return (
    <div className="flex flex-col justify-center items-center space-y-4 py-8">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl motion-preset-blur-right-lg motion-duration-2000">Slope Field Generator</h1>
        <div className="text-lg text-gray-600 font-medium flex h-5 items-center space-x-4 motion-preset-blur-right-lg motion-duration-2000">
          <div>Mustafa N</div>
          <Separator orientation="vertical" />
          <div>Brandon T</div>
          <Separator orientation="vertical" />
          <div>Parsia B</div>
        </div>
        <p className="text-sm text-center text-muted-foreground max-w-xl motion-preset-blur-right-lg motion-duration-2000">This application is for creating slope field graphs. <br /> More customization will come in the future.</p>
    </div>
  )
}

export default Header