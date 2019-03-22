var com = com || {};
(function (c) {
    function Shape(type) {
        this.type = type;
    }

    Shape.prototype.area = function () {
        console.log(`Area of ${this.type} is ${this._area}`);
    }

    Shape.prototype.parameter = function () {
        console.log(`Parameter of ${this.type} is ${this._parameter}`);
    }
    c.Shape = Shape;
})(com);
