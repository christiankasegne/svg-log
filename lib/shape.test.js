const {Shape, Circle, Rectangle, Square, Triangle} = require ("./shapes");

describe('Shape', () => {
    const shape = new Shape();
    shape.setColor("blue");
    expect(shape.render()).toEqual(expexted);
});

describe('Circle', () => {
    const shape = new Circle();
    shape.setColor("blue");
    expect(shape.render()).toEqual('<circle cx="100" cy="100" r="100" style="fill:blue" />');
});

describe(' Rectangle', () => {
    const shape = new  Rectangle();
    shape.setColor("blue");
    expect(shape.render()).toEqual('<rect width="200" height="100" style="fill:blue" />');
});

describe('Square', () => {
    const shape = new Square();
    shape.setColor("blue");
    expect(shape.render()).toEqual('<rect width="200" height="200" style="fill:blue" />');
});
describe('Triangle', () => {
    const shape = new Triangle();
    shape.setColor("blue");
    expect(shape.render()).toEqual('<polygon points="150,50 50,150 250,150" style="fill:blue" />');
});