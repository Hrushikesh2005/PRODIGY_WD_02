let ms = 0, s = 0, m = 0, h = 0;
var timer;
var display = document.querySelector(".timer")
var laps = document.querySelector(".laps");
var lapDiv = document.querySelector(".lap_div");

function start(){
    if(!timer){
        timer = setInterval(run, 10)
    }
} 

function run(){
    display.innerHTML = getTimer()
    ms++
    if(ms == 100){
        ms = 0
        s++
    }
    if(s == 60){
        s = 0
        m++
    }
    if(m == 60){
        m = 0
        h++
    }
    if(h == 13){
        h = 1
    }
}

function getTimer(){
    return (h < 10 ? "0" + h : h) + " : " + (m < 10 ? "0" + m : m) + " : " + (s < 10 ? "0" + s : s) + " : " + (ms < 10 ? "0" + ms : ms);

}

function pause(){
    clearInterval(timer)
    timer = false
}

function reset(){
    pause()
    ms = 0
    s = 0
    m = 0
    h = 0
    display.innerHTML = getTimer()
}

function restart(){
    reset()
    start()
}

function lap() {
    if (timer) {
        if (!document.getElementById("lapHeading")) {
            var lapHeading = document.createElement("div");
            lapHeading.id = "lapHeading";
            lapHeading.className = "heading";
            lapHeading.innerText = "LAPS:";
            lapDiv.prepend(lapHeading);
        }
        var li = document.createElement("li");
        li.innerHTML = getTimer();
        laps.appendChild(li);
    }
}

function clearLap() {
    laps.innerHTML = "";
    var lapHeading = document.getElementById("lapHeading");
    if (lapHeading) {
        lapHeading.remove();
    }
}