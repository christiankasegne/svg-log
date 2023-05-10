const fs = require("fs")
const inquirer = require("inquirer");
const {shape, Circle, Rectangle, Square, Triangle} = require ("./lib/shapes");

const questions = [
    {
        type: "input",
        name: "text",
        message: "Enter text for the logo. (Must not be more than three characters.)",
        validate: (input) => input.Length <= 3,

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
        message: "Enter a text color (keyword or hex)",

    },
];

