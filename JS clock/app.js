setInterval(()=>{
    d = new Date();
    hr = d.getHours();
    min = d.getMinutes();
    sec = d.getSeconds();
    hrotate = 30*hr + min/2; 
    mrotate = 6*min;
    srotate = 6*sec;

    hour.style.transform = `rotate(${hrotate}deg)`;
    minute.style.transform = `rotate(${mrotate}deg)`;
    second.style.transform = `rotate(${srotate}deg)`;

}, 1000)