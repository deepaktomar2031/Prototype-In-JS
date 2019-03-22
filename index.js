window.onload = function () {
    var tri = new com.Triangle(2, 3);
    tri.area();
    tri.parameter();

    var rect = new com.Rectangle(2, 3);
    rect.area();
    rect.parameter();

    var sq = new com.Square(3);
    sq.area();
    sq.parameter();

    console.log(tri);
    console.log(rect);
    console.log(sq);
}