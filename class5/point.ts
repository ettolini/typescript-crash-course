// we can't use this class in another doc if we don't export it
// we can consider whatever we export as a "module"
export class Point {
    constructor(private _x?: number, private _y?: number) {
    }
    
    draw () {
        console.log('X: ' + this._x + ', Y: ' + this._y);
    }
}
