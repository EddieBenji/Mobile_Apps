/**
 * Created by lalo on 25/08/15.
 */
function init() {

    //var p = document.getElementById("p01");
    //alert(p.innerHTML);
    //p.innerHTML = "Nuevo párrafo";
    //p.setAttribute("class", "paragraph");

}

function show(id) {
    var details = document.getElementById(id);

    if (details.className == "show")
        details.setAttribute('class', 'disappear');
    else
        details.setAttribute('class', 'show')

}

//We make the callback():
window.onload = init; //without the braces ().

