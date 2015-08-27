/**
 * Created by lalo on 27/08/15.
 */

$(document).ready(function () {

    $('#clickMe').click(function () {
        $("img").fadeIn(500);
        $("#pickFrame").slideToggle("fast");
    });
});

