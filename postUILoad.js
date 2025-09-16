// The code in this file needs to be run after everything has
// loaded (defer) due to some parts of the website having
// having not been loaded

updateResize();

function updateResize() {
    stringToDisplay = "";
    var el = document.getElementById('art');
    var style = window.getComputedStyle(el, null).getPropertyPriority('font-size');
    var widthBoundary = Math.round(((window.innerWidth) / 7));
    var heightBoundary = Math.round((window.innerHeight / 4) / 12);
    for (var y = 0; y < heightBoundary; y++) {
        for (var x = 0; x < widthBoundary; x++) {
            if ((x == 0 && y == 0) || 
                (x == 0 && y == heightBoundary - 1) ||
                (x == widthBoundary - 1 && y == 0) ||
                (x == widthBoundary - 1 && y == heightBoundary - 1)) {
                stringToDisplay += "X"
            }
            else if (x == 0 || x == widthBoundary - 1) {
                stringToDisplay += "|"
            }
            else if (y == 0 || y == heightBoundary - 1) {
                stringToDisplay += "-"
            }
            else {
                stringToDisplay += "."
            }
        }
        stringToDisplay += "\n"
    }
    document.getElementById("art").innerHTML = stringToDisplay;
}

//
window.onresize = function(event) {
    updateResize();
}