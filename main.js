
setInterval(() => {
    let date= new Date();
       let hrs=date.getHours();
       let min=date.getMinutes();
       let sec=date.getSeconds();
       let hrotate=30*hrs+1/2*min;
       let mrotate=6*min+1/10*sec;
       let srotate=6*sec;
       console.log(hrotate,mrotate,srotate);
       const hs=document.getElementById("hrs");
       const ms=document.getElementById("min");
       const ss=document.getElementById("sec");
       hs.style.transform=`rotate(${hrotate}deg)`;
       ms.style.transform=`rotate(${mrotate}deg)`;
       ss.style.transform=`rotate(${srotate}deg)`;
}, 1000);
