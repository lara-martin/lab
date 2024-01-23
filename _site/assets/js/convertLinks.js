function convertLinks() {
  var y = document.getElementsByTagName("a");
  var i;
  for (i = 0; i < y.length; i++) {
    var parent = y[i].parentNode;
    /*if (parent.getAttribute("class") == "navbar-nav" || parent.getAttribute("id") == "stay"){
      continue;
    }*/
    if (y[i].hasAttribute("href")){
      if (y[i].getAttribute("href").charAt(0) === "#"){ continue;}
    }
    if (y[i].getAttribute("id") === "unscramble"){
      continue;
    }
    y[i].setAttribute("target", "_blank");
    y[i].setAttribute("rel", "noopener noreferrer");
  }
}
