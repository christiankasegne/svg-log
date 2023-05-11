class Shape {
    constructor() {
        this.color = ``;
    }
    setColor(color) {
        this.color = color;
    }
}

class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="100" r="100" style="fill:${this.color}"/>`;
    }
}

class Rectangle extends Shape {
    render() {
        return `<rect x="75" y="50" width="200" height="100" style="fill:${this.color}"/>`;
    }
}

class Square extends Shape {
    render() {
        return `<rect x="50" y="50" width="200" height="200" style="fill:${this.color}"/>`;
    }
}

class Triangle extends Shape {
    render() {
        return `<polygon points="150 0, 0 150, 300 150" style="fill:${this.color}"/>`;
    }
}

module.exports = {
    Shape,
    Circle,
    Rectangle,
    Square,
    Triangle,
}