const image_tracker = 'orange';
function change() {
    var image = document.getElementById('headerPic2');
    if (image_tracker == 'run-dmc') {
        image.src = 'boys.jpg';
        image_tracker = 'blue';
    }
    else {
        image.src = 'run-dmc';
        image_tracker = 'orange';
    }
}
var timer = setInterval('change();', 1000);
function stop() {
    clearInterval(timer); //the clearInterval method stops the timer from running
}
