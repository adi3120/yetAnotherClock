function updateClock() {
    let now = new Date();
    let sec = now.getSeconds();
    let min = (now.getMinutes()) + (sec / 60);
    let hour = (now.getHours() % 12) + (min / 60);

    let minangle = min * 6; //6 degree per minute
    let hourangle = hour * 30; //30 degree per hour
    let secangle = sec * 6;

    let minhand = document.querySelector("#clock .minutehand");
    let hourhand = document.querySelector("#clock .hourhand");
    let sechand = document.querySelector("#clock .sechand");

    minhand.setAttribute("transform", `rotate(${minangle},50,50)`);
    hourhand.setAttribute("transform", `rotate(${hourangle},50,50)`);
    sechand.setAttribute("transform", `rotate(${secangle},50,50)`);


}


setInterval(updateClock, 1);