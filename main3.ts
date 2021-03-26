class Point {
    // adding question marks makes arguments optional
    // every argument to the right of the first optional argument should be optional as well
    // this is useful since you can define a single constructor in TypeScript
    constructor(public x?: number, private y?: number) {
    }
    
    draw () {
        console.log('X: ' + this.x + ', Y: ' + this.y);
    }
}

let point = new Point(1, 2);
point.draw();
