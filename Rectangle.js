var com = com || {};
(function (c) {
    function Rectangle(base, height) {
        c.Shape.call(this, "rectangle");
        this.base = base;
        this.height = height;
    }

    Rectangle.prototype = Object.create(c.Shape.prototype);
    Rectangle.prototype.constructor = Rectangle;

    Rectangle.prototype.area = function () {
        this._area = this.base * this.height;
        c.Shape.prototype.area.call(this);
    }
    Rectangle.prototype.parameter = function () {
        this._parameter = 2 * (this.base + this.height);
        c.Shape.prototype.parameter.call(this);
    }
    c.Rectangle = Rectangle;
})(com);