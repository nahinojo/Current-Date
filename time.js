function zeroFormat(val) {
    if (val < 10){
        val = "0" + val; 
    }
    return val
}

function getSuffix(val) {
    var rem = val % 10;
    if (rem > 9){
        rem %=10;
    }
    if (rem == 1) {
        return "st" 
    } 
    if (rem == 2) {
        return "nd"
    }
    if (rem == 3) {
        return "rd"
    }
    return "th"
}

function updateClock () {
    const d = new Date();
    var year = d.getFullYear();
    var month = d.toLocaleString("en-US", {month:"long"}); 
    var day = d.getDate();
    var suffix = getSuffix(day);
    var hour = d.getHours();
    var min = zeroFormat(d.getMinutes());
    var sec = zeroFormat(d.getSeconds());

    if (hour == 0) {
        hour = 12;
    } else if (hour >= 12){
        document.getElementById('meridiem').innerHTML = "PM";
        if (hour >= 13){
            hour -= 12;
        }
    }

    document.getElementById('year').innerHTML = year;
    document.getElementById('month').innerHTML = month;
    document.getElementById('day').innerHTML = day;
    document.getElementById('suffix').innerHTML = suffix;
    document.getElementById('hour').innerHTML = hour;
    document.getElementById('min').innerHTML = min;
    document.getElementById('sec').innerHTML = sec;
    document.getElementById('colon-hm').innerHTML = ':';
    document.getElementById('colon-ms').innerHTML = ':';
    document.getElementById('comma').innerHTML = ', ';
}

setInterval(updateClock,250)

