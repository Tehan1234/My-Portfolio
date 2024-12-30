var tabLinks = document.getElementsByClassName("tab-links");
var tabContents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  for (tabLink of tabLinks) {
    tabLink.classList.remove("active-link");
  }
  for (tabcontent of tabContents) {
    tabcontent.classList.remove("active-tab");
  }

  event.currentTarget.classList.add("active-link")
  document.getElementById(tabname).classList.add("active-tab");
}

var sidemenu = document.getElementById("slidemenu");

function openmenu(){
  sidemenu.style.right = "0";
}

function closemenu(){
  sidemenu.style.right = "-200px";
}
