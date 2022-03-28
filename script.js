document.getElementById("defaultOpen").click();
function tabOpener(evt, kat) {
    var i, tabcontent, tablinks;

    tabcontent= document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(kat).style.display = "flex";
  evt.currentTarget.className += " active";
}




//Modal
var modal = document.getElementById("myModal");

var btn = document.getElementById("myBtn")

var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}