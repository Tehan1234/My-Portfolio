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



  const scriptURL = 'https://script.google.com/macros/s/AKfycbwo9LvHzaHsi61DZnRAzo96BCrubgKhrLK_c-Dqf8GGc3gYWW8_C86_mvL3Jn9iM20b/exec'
  const form = document.forms['submit-to-google-sheet']

  const msg = document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML= "Message sent successfully"
        setTimeout(function(){
          msg.innerHTML = ""
        },5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })
