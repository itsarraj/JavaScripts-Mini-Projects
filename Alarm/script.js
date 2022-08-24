var a_hour = window.prompt("Enter the hour/s");
var a_minutes = window.prompt("Enter the minute/s");
var a_seconds = window.prompt("Enter the second/s");


function current_date() {
    const d = new Date();
    let hours = d.getHours();
    let minutes = d.getMinutes();
    let seconds = d.getSeconds();
    document.querySelector('.current_time').textContent = hours + ":" + minutes + ":" + seconds;
    document.querySelector('.alarm_time').textContent = a_hours + ":" + a_minutes + ":" + a_seconds;
    if((a_hour == hours) && (a_minutes == minutes) && (a_seconds == seconds))   {
        document.querySelector(".alarm").textContent = "Time is over"     

    }
    setTimeout(current_date, 1000);
    
}
current_date();


