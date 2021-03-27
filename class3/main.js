var Point = /** @class */ (function () {
    // adding question marks makes arguments optional
    // every argument to the right of the first optional argument should be optional as well
    // this is useful since you can define a single constructor in TypeScript
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.draw = function () {
        console.log('X: ' + this.x + ', Y: ' + this.y);
    };
    return Point;
}());
var point = new Point(1, 2);
point.draw();
