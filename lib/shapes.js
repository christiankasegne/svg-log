class shapeColor {
    constructor() {
        this.color = ``;
    }
    setColor(color) {
        this.color = color;
    }
}

class circle extends shapeColor {
    rander() {
        return `<circle cx="200" cy="150" r="75" style="fill:${this.color}" />`;
    }
}