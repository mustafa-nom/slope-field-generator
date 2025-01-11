"use client";
import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="grid grid-cols-2">
        <div className="bg-gray-800 text-white p-6">
        <h3 className="text-lg font-bold">Credits</h3>
        <p className="mt-2 text-sm">
            Thank you Mr. Magallon for teaching us Calc III and Differential Equations
            <br />
            © 2025 Mustafa Nomair
        </p>
        </div>

        <div className="bg-gray-200 text-gray-800 p-6">
            <div className="grid grid-cols-3 gap-4">
                <div>
                    <h4 className="font-bold">Contact</h4>
                    <ul className="text-sm space-y-2">
                        <li>
                            <a href="mailto:nomair@usc.edu" className="text-gray-500 hover:text-gray-800 transition-all ease-in-out">
                            Email
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/mustafa-nomair/" className="text-gray-500 hover:text-gray-800 transition-all ease-in-out">
                            LinkedIn
                            </a>
                        </li>
                    </ul>
                </div>
            
                {/* Volunteer Section */}
                <div>
                    <h4 className="font-bold">Repo Link</h4>
                    <ul className="text-sm space-y-2">
                        <li>
                            <a href="https://github.com/mustafa-nom/slope-field-generator" className="text-gray-500 hover:text-gray-800 transition-all ease-in-out">
                            Github
                            </a>
                        </li>
                    </ul>
                </div>
            
                {/* Projects Section */}
                <div>
                    <h4 className="font-bold">Projects</h4>
                    <ul className="text-sm space-y-2">
                        <li>
                            <a href="#" className="text-gray-500 hover:text-gray-800 transition-all ease-in-out">
                            Coming soon...
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer