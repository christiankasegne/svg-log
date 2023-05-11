const {Shape, Circle, Rectangle, Square, Triangle} = require ("./shapes");

describe("Shape", () => {
    it("set color", () => {
        const shape = new Shape();
        shape.setColor("blue");
        expect(shape.color).toEqual("blue");
    });
});

describe("Circle", () => {
    it("render a blue circle", () => {
        const shape = new Circle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<circle cx="150" cy="100" r="100" style="fill:blue"/>');
    });
});

describe("Rectangle", () => {
    it("render a blue rectangle", () => {
        const shape = new  Rectangle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<rect x="75" y="50" width="200" height="100" style="fill:blue"/>'); 
    });
});

describe("Square", () => {
    it("render a blue square", () => {
        const shape = new Square();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<rect x="50" y="50" width="200" height="200" style="fill:blue"/>');
    });
});
describe("Triangle", () => {
    it("render a blue triangle", () => {
        const shape = new Triangle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<polygon points="150 0, 0 150, 300 150" style="fill:blue"/>')
    });
});