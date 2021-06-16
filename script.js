let image_tracker = "boys";
function change() {
    let image = document.getElementById("headerPic2");
    image.src = "Images/boys.jpg"
    if (image_tracker == "boys") {
        image.src = "Images/run-dmc.jpg";
        image_tracker = "run";
    } else {
        image.src = "Images/boys.jpg";
        image_tracker = "boys";
    }
}
var timer = setInterval('change();', 2000);

function stop() {
    clearInterval(timer);
}