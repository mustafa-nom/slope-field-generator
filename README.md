# **Slope Field Generator**

A modern web application built with **Next.js**, **React**, and **Tailwind CSS** to create interactive slope field graphs for differential equations. This project showcases advanced frontend development, mathematical computation, and dynamic graph rendering.

---

## **Live Demo**
Check out the live version here: **[Slope Field Generator](https://slope-field-generator.vercel.app/)**

---

## **Tech Stack**

- **Frontend Framework**: [Next.js](https://nextjs.org/)  
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)  
- **Mathematical Computation**: [Math.js](https://mathjs.org/)  
- **Canvas Rendering**: Native HTML5 Canvas API  
- **Code Highlighting**: [React Code Blocks](https://github.com/rajinwonderland/react-code-blocks)

---

## **Features**

- **Interactive Graphing**: Users can input a differential equation and customize graph parameters to generate dynamic slope fields.
- **4th Order Runge-Kutta (RK4)**: Implements RK4 numerical methods to compute solution curves for differential equations.
- **Dynamic Rendering**: 
  - Slope fields and solution curves are rendered dynamically on an HTML canvas.
  - Graphs update in real-time based on user input.
- **Customizable Parameters**:
  - Initial points, x/y ranges, number of points, and step sizes can all be configured.
- **Responsive Design**:
  - Adapts to various screen sizes, ensuring usability on desktops and mobile devices.
- **Clear UI**:
  - Built with Tailwind CSS for a clean, professional appearance.
  - Motion effects enhance user experience.

---

## **How It Works**

### **Mathematical Foundation**
The project uses **4th Order Runge-Kutta (RK4)**, a numerical method for solving ordinary differential equations (ODEs).  

### **RK4 Formula**

- `k₁ = h * f(x, y)`
- `k₂ = h * f(x + h/2, y + k₁/2)`
- `k₃ = h * f(x + h/2, y + k₂/2)`
- `k₄ = h * f(x + h, y + k₃)`

**Update Solution**:
- `yₙ₊₁ = yₙ + (1/6) * (k₁ + 2k₂ + 2k₃ + k₄)`

### **Graphing Workflow**
1. **Slope Field**: 
   - At every grid point, the slope \( dy/dx \) is calculated using the user-defined differential equation.
2. **Solution Curve**: 
   - RK4 is used to calculate the trajectory of solutions starting from an initial point.

### **Interactive Features**
- **Mouse Interaction**: Users can click on the graph to generate additional solution curves starting from new initial points.
- **Reset**: A button clears the graph for fresh inputs.

---

## **Key Files**

| **File**                   | **Description**                                                                 |
|----------------------------|---------------------------------------------------------------------------------|
| `GraphForm.jsx`            | Handles user input for graph parameters and differential equations.            |
| `GraphCanvas.jsx`          | Renders the slope field and solution curves dynamically using HTML5 Canvas.    |
| `CodeToMathInfo.jsx`       | Explains the underlying mathematical concepts (RK4) with code and formulas.    |

---

## **Preview**

### **Graphing UI**
Users can input values like:
- Differential equation (e.g., `dy/dx = x - y`)
- x/y range, grid points, and initial conditions.

### **Dynamic Graph Rendering**
- Real-time graphing of slope fields and solution curves.

---

## **Contact & Credits**

---

- **Created by**: Mustafa Nomair  
- **Email**: [nomair@usc.edu](mailto:nomair@usc.edu)  
- **LinkedIn**: [Mustafa Nomair](https://www.linkedin.com/in/mustafa-nomair/)  
- **Inspiration**: Thanks to Mr. Magallon for teaching Calculus III & Differential Equations!

---
