class shape {
    constructor() {
        this.color = ``;
    }
    setColor(color) {
        this.color = color;
    }
}

class Circle extends shape {
    rander() {
        return `<circle cx="200" cy="200" r="100" style="fill:${this.color}" />`;
    }
}

class Rectangle extends shape {
    rander() {
        return `<rect width="300" height="100" style="fill:${this.color}" />`;
    }
}

class Square extends shape {
    rander() {
        return `<rect x="50" y="20" width="200" height="150" style="fill:${this.color}" />`;
    }
}

class Triangle extends shape {
    rander() {
        return `<polygon points="150,50 50,150 250,150" style="fill:${this.color}" />`;
    }
}

module.exports = {
    shape,
    Circle,
    Rectangle,
    Square,
    Triangle,
}