var hour = document.getElementById("hour")
var min = document.getElementById("minute")
var sec = document.getElementById("second")
var ampm = document.getElementById("ampm")

const updateTime = () =>{
    var time = new Date()
    var h = time.getHours()
    var m = time.getMinutes()
    var s = time.getSeconds()
    min.innerText = m<10?"0"+m:m
    sec.innerText = s<10?"0"+s:s
    if(h<12)
    ampm.innerText = "AM"
    else{
    ampm.innerText="PM"
    h=h%12
    }
    hour.innerText = h<10?"0"+h:h
   
}

setInterval(updateTime,1000)