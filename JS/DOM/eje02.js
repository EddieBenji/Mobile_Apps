/**
 * Created by lalo on 25/08/15.
 */
function init() {

    //var p = document.getElementById("p01");
    //alert(p.innerHTML);
    //p.innerHTML = "Nuevo párrafo";
    //p.setAttribute("class", "paragraph");

    //All the div's ids, with the description (details)
   // hide("details_p1");
    //hide("details_p2");
    //hide("details_p3");
}


function hide(id) {
    var details = document.getElementById(id);
    details.style.display = 'none';
}

function show(id) {
    var details = document.getElementById(id);
    //details.style.display = 'block';
    if (details.className=="show"){
        details.setAttribute('class', 'disappear');
    }else{
        details.setAttribute('class','show')
    }
}

//We make the callback():
window.onload = init; //without the braces ().

