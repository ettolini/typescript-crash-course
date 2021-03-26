// Camel notation to name fields
// atributtes should be prefixed with "_" to avoid clash with getter and setter methods
class Point {
    constructor(private _x?: number, private _y?: number) {
    }
    
    draw () {
        console.log('X: ' + this._x + ', Y: ' + this._y);
    }

    get x() {
        return this._x;
    }

    set x(value) {
        if (value < 0)
            throw new Error('value cannot be less than 0.')
        
        this._x = value;
    }
}

let point = new Point(1, 2);
let x = point.x;
point.x = 10;
point.draw();
