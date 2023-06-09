const fs = require("fs")
const inquirer = require("inquirer");
const {Shape, Circle, Rectangle, Square, Triangle} = require ("./lib/shapes");

const questions = [
    {
        type: "input",
        name: "text",
        message: "Enter text for the logo. (Must not be more than three characters.)",
        

    },
    {
        type: "input",
        name: "textColor",
        message: "Enter a text color (keyword or hex)",

    },
    {
        type: "list",
        name: "shape",
        message: "Select a shape for the logo?",
        choices: ["Circle", "Rectangle", "Square", "Triangle"],

    },
    {
        type: "input",
        name: "shapeColor",
        message: "Enter a shape color (keyword or hex)",

    },
];

inquirer.prompt(questions).then ((answers) => {
    const {text, textColor, shape, shapeColor} = answers;
    const shapeObject = new  Shape()
    let svgEl = "";

    shapeObject. setColor(shapeColor);

    switch (shape) {
        case "Circle":
            const circle = new Circle();
            circle.setColor(shapeColor);
            svgEl = circle.render();
            break;

        case "Rectangle":
            const rectangle = new Rectangle();
            rectangle.setColor(shapeColor);
            svgEl = rectangle.render();
            break;

        case "Square":
            const square = new Square();
            square.setColor(shapeColor);
            svgEl = square.render();
            break;
    
        case "Triangle":
            const triangle = new Triangle();
            triangle.setColor(shapeColor);
            svgEl = triangle.render();
            break;
    }

    let x = 150, y = 120;
    if (shape === "Rctangle") {
        y = 145;
    }else if (shape === "Square") {
        y = 145;
    }else (shape === "Triangle") 
        y = 135;
    

    const finalSvg = `<svg  xmlns="http://www.w3.org/2000/svg" width="300" height="200">${svgEl}
    <text x="${x}" y="${y}" text-anchor="middle" fill="${textColor}" font-size="5rem" font-family="monospace">${text}</text></svg>`;
      
    fs.writeFileSync("log.svg", finalSvg);
    console.log("Generated logo.svg");
 
})