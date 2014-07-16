/*jslint browser: true*/
/*global $, jQuery, alert*/

$(document).ready(function () {
    $("div").hover(
        function () {$(this).addClass("white"); },
        function () {
            $(this).removeClass("white");
        }
    );
});

var pixel = 500;
var pixelRow;
var pixelColumn;

var setGrid = function () {
    var pixel = prompt("Enter number of pixels", 500);
    $("div").css("height", pixel / pixelRow);
    $("div").css("width", pixel / pixelColumn);
};

var alignGrid = function (boxesPerRow, rows) {
    for (var i = 0; i < rows * boxesPerRow; i++) {
        if (i % boxesPerRow === 0) {
            $("body").append("<br>");
        }
        $("body").append("<div></div>");
    }
    $("div").css("height", this.pixel / rows);
    $("div").css("width", this.pixel / boxesPerRow);
    pixelRow = rows;
    pixelColumn = boxesPerRow;
};

var buttonClick = function () {
    var rows = Number(prompt("Enter rows", "16"));
    var columns = Number(prompt("Enter columns", "16"));
    $("div").remove();
    $("br").remove();
    alignGrid(rows, columns);
    $("div").hover(
        function () {$(this).addClass("white");},
        function () {$(this).removeClass("white");}
    );
};