/**
 * Created by lalo on 25/08/15.
 */
function init() {

    //var p = document.getElementById("p01");
    //alert(p.innerHTML);
    //p.innerHTML = "Nuevo párrafo";
    //p.setAttribute("class", "paragraph");

}

function show(details, btn) {

    if (details.className == "show") {
        details.setAttribute('class', 'disappear');
        btn.innerHTML = "Mostrar";
    }
    else {
        details.setAttribute('class', 'show');
        btn.innerHTML = "No mostrar";

    }

}

//We make the callback():
window.onload = init; //without the braces ().

