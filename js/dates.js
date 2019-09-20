const options = {weekday:'long', day:'numeric', month:'long', year:'numeric'};
document.getElementById('currentDate').textcontent = new Date().toLocaleDateString('en-US', options);
