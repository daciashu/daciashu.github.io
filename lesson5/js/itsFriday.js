function itsFriday() {
    var d = new Date().getDay();
    if (d == 5){
        document.getElementById("itsFriday").innerHTML = "block";
    }
    else{
      document.getElementById("itsFriday").style.display = "none";
    }
  }