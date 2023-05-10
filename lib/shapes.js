class Shape {
    constructor() {
        this.color = ``;
    }
    setColor(color) {
        this.color = color;
    }
}

class Circle extends shape {
    rander() {
        return `<circle cx="100" cy="100" r="100" style="fill:${this.color}" />`;
    }
}

class Rectangle extends shape {
    rander() {
        return `<rect width="200" height="100" style="fill:${this.color}" />`;
    }
}

class Square extends shape {
    rander() {
        return `<rect width="200" height="200" style="fill:${this.color}" />`;
    }
}

class Triangle extends shape {
    rander() {
        return `<polygon points="150,50 50,150 250,150" style="fill:${this.color}" />`;
    }
}

module.exports = {
    Shape,
    Circle,
    Rectangle,
    Square,
    Triangle,
}