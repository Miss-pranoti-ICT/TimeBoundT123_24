document.addEventListener("contextmenu", (event) => {
    event.preventDefault();
});

document.onkeydown = function (e) {
    if (
        (e.ctrlKey && e.shiftKey && e.keyCode === 73) || // Ctrl + Shift + I
        (e.ctrlKey && e.shiftKey && e.keyCode === 74) || // Ctrl + Shift + J
        (e.ctrlKey && (e.keyCode === 67 || e.keyCode === 86 || e.keyCode === 85 || e.keyCode === 117)) // Ctrl + C, Ctrl + V, Ctrl + U
    ) {
        return false;
    } else {
        return true;
    }
};

$(document).keypress("u", function (e) {
    if (e.ctrlKey) {
        return false;
    } else {
        return true;
    }
});
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
  });