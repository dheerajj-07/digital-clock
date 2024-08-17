
function updateTime(){
    const montharr= ["January","Feburary","March","April","May","June","July","August","September","October"," November","December"];
    const daysarr = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
    let date = new Date();
    
    let hrs = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let day = date.getDate();
    let month = date.getMonth(); // month is zero indexes
    let year = date.getFullYear();
    let today = date.getDay()-1; // daysarr is zero indexed but getDay is 1 indexed

    // conver time into am or pm

    const period = hrs >= 12 ? 'PM' : 'AM';
    hrs = hrs%12;
    hrs = hrs ? hrs : 12;  // if hrs = 0 then 12 is shown

    // to format numbers in 01 insted of 1 (make it two digits numbers)
    let formatted_hrs = (hrs < 10 ? '0' : '')+hrs;
    let formatted_min = (min < 10 ? '0' : '')+min;
    let formatted_sec = (sec < 10 ? '0' : '')+sec;

    document.getElementById("date").innerText = `${day} ${montharr[month]} ${year}`;
    document.getElementById("day").innerText = daysarr[today];

    document.getElementById("hrs").innerText = formatted_hrs;
    document.getElementById("min").innerText = formatted_min;
    document.getElementById("sec").innerText = formatted_sec;
    document.getElementById("am-pm").innerText = period;

}
setInterval(updateTime,1000);

updateTime();

