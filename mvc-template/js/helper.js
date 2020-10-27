var Helper = {};

Helper.getValue = function (tag) {
    return document.getElementById(tag).value;
}

Helper.setValue = function (tag, value) {
    document.getElementById(tag).value = value;
}

Helper.setHtml = function (tag, html) {
    document.getElementById(tag).innerHTML = html;
}

Helper.getHtml = function (tag) {
    return document.getElementById(tag).innerHTML;
}

Helper.show = function (tag) {
    document.getElementById(tag).style.display="block";
}

Helper.hide = function (tag) {
    document.getElementById(tag).style.display="none";
}

Helper.onClick = function (tag, action) {
    document.getElementById(tag).addEventListener("click", action);
}

document.addEventListener('DOMContentLoaded', function() {
    let classes = document.getElementsByClassName('is-numeric');
    for (var i = 0; i < classes.length; ++i) {
        classes[i].addEventListener("keypress", function (event) {
            if (window.event) {                     
                keyCode = event.keyCode; // IE
            } 
            else {                   
                keyCode = event.which;  // Netscape/Firefox/Opera
            }
            if (!(keyCode >= 48 && keyCode <= 57)) {
                event.preventDefault();
            }
        });
    }
});