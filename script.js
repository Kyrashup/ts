var Point = /** @class */ (function () {
    function Point() {
    }
    return Point;
}());
var point = new Point();
point.x = 1;
var Rect = /** @class */ (function () {
    function Rect(x, y) {
        this.MAX_COORD = 1000;
        this.x1;
        this.x1 = x;
    }
    Rect.prototype.square = function () {
        return Math.abs(this.x1 - this.x2) *
            Math.abs(this.y1 - this.y2);
    };
    return Rect;
}());
var rect1 = new Rect(10, 20);
// rect1.x1 = 5
rect1.x2 = 5;
console.log(rect1.square());
