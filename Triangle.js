var com = com || {};
(function (c) {
    function Triangle(base, altitude) {
        c.Shape.call(this, "triangle");
        this.base = base;
        this.altitude = altitude;
    }

    Triangle.prototype = Object.create(c.Shape.prototype);
    Triangle.prototype.constructor = Triangle;

    Triangle.prototype.area = function () {
        this._area = 0.5 * this.base * this.altitude;
        c.Shape.prototype.area.call(this);
    }
    Triangle.prototype.parameter = function () {
        this._parameter = 0.5 * this.base * this.altitude;
        c.Shape.prototype.parameter.call(this);
    }
    c.Triangle = Triangle;
})(com);