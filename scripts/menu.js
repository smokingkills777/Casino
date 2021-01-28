function myFunction() {
    document.getElementById("myDropdown").classList.toggle("activeMenu");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('activeMenu')) {
        openDropdown.classList.remove('activeMenu');
      }
    }
  } else {
    openDropdown.classList.remove('activeMenu');
  }
}