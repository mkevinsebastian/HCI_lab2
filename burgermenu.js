function myFunction() {
    var x = document.getElementById("header-right");
    if (x.className === "header-right") {
      x.className += " responsive";
    } else {
      x.className = "header-right";
    }
  }