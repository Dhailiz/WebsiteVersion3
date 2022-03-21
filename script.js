document.getElementById("defaultOpen").click();
function tabOpener(evt, kat) {
    var i, tabcontent, tablinks;

    document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(kat).style.display = "block";
  evt.currentTarget.className += " active";
}