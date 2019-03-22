var com = com || {};
(function (c) {
    function Square(side) {
        c.Shape.call(this, "square");
        this.base = side;
    }

    Square.prototype = Object.create(c.Shape.prototype);
    Square.prototype.constructor = Square;

    Square.prototype.area = function () {
        this._area = this.base * this.base;
        c.Shape.prototype.area.call(this);
    }
    Square.prototype.parameter = function () {
        this._parameter = 4 * this.base;
        c.Shape.prototype.parameter.call(this);
    }
    c.Square = Square;
})(com);