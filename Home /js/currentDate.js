let daynames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];
let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];
let d = newDate();
let dayName = daynames[d.getDay()];
let monthName = months[d.getMonth()];
let year = d.getFullYear();
let fulldate = dayName + " , " + monthName + " " + d.getDate() +", " + year;

document.getElementById('currentDate').textcontent = fulldate;

try {
    let options = {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
    };
    document.getElementById("currentDate2").textContent = new Date().toLocaleDateString("en-us", options); 
} catch (e) {
    alert("Error with code or your browser does not support locale");
}
