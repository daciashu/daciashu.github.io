function itsFriday() {
    var d = new Date().getDay();
    if (d == 3){
        document.getElementById("itsFriday").style.display = "banner";
    }
    else{
      document.getElementById("itsFriday").style.display = "none";
    }
  }