// if don't know a variable's value ahead of time, use type anotations
var a;
var b;
var c;
var d;
var e = [1, 2, 3];
var f = [1, true, "a", false]; // Avoid this
// consts should be typed with Pascal Case
// enum enumeration happens by default, but doing it manually is a good practice to keep track of values
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var backgroundColor = Color.Red;
