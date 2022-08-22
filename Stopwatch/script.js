
var ms = 0, s=0, m=0;
var counter;
var start = document.querySelector('.start')
var stop_timer = document.querySelector('.stop')
var reset_timer = document.querySelector('.reset')
var time = document.querySelector('.time')
start.addEventListener('click', function() {
    if(!counter) {
        counter = setInterval(run, 10)
    }

    function run() {
time.textContent = currentTime()
ms++
if (ms==100) {
ms=0;
s++;
}
if (s==60) {
    s=0;
    m++
}
}
})
stop_timer.addEventListener('click', function() {
    clearInterval(counter);
    counter = false;
})
reset_timer.addEventListener('click', function() {
clearInterval(counter);
counter = false;
ms=0,s=0,m=0;
time.textContent = currentTime()
})
function currentTime() {
    return m + ":" + s + ":" + ms
}