"use client";
import React from 'react'

const Footer = () => {
    const rishiPoem = `
    Oh Rishi Mistry, the sigma of brains,
    Where spacetime bends, your intellect reigns.
    Physics unfolds in your radiant glow,
    Multivariable king, the cosmos you show.

    With Jacobian swag and gradients on deck,
    Integral demon, you drip interconnects,
    Oh king of the grind, so based, so clear,
    Grateful for your rizz that transcends the sphere
    `;


  return (
    <footer className="grid grid-cols-2">
        <div className="bg-gray-800 text-white p-6">
        <h3 className="text-lg font-bold">Credits</h3>
        <p className="mt-2 text-sm">
            Thank you Mr. Magallon for teaching us Calc III and Differential Equations.
        </p>

        </div>

        <div className="bg-gray-200 text-gray-800 p-6">
        <h3 className="text-lg font-bold">Poem to Rishi</h3>
        <p className="mt-2 text-sm whitespace-pre-wrap italic">
            {/*Email: support@example.com
            <br />
            Phone: +123 456 7890*/}
            {rishiPoem}
        </p>
        </div>
    </footer>
  )
}

export default Footer