/**
 * Created by lalo on 27/08/15.
 */

$(document).ready(function () {

    $('#moveUp').click(function () {
        $('#changeMe').animate({top: '60px'}, 500);
    });

    $('#moveDown').click(function () {
        $('#changeMe').animate({top: '300px'}, 500);
    });


    $('#color').click(function () {
        $('#changeMe').css("color", "red");
    });


    $('#disappear').click(function () {
        $('#changeMe').toggle("slow")
    });
});

