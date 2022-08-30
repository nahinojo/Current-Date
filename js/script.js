function zeroFormat(val){
    if (val < 10){
        val = "0" + val; 
    }
    return val
}
function updateTime () {
    const d = new Date();
    var hour = d.getHours();
    var min = d.getMinutes();
    var sec = d.getSeconds();
    min = zeroFormat(min);
    sec = zeroFormat(sec);
    var time = hour + ":" + min + ":" + sec;
    document.body.innerHTML = time;
}

setInterval(updateTime,10)

