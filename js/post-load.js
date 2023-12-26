// Load Main Content
document.getElementById('menu-desktop').innerHTML = indexmenu();
document.getElementById('menu-mobile').innerHTML = mobilemenu();
// document.getElementById('header').innerHTML = head();
document.getElementById('footer').innerHTML = footer();

// Menu Toggle Desktop/Mobile
// Get the element with class "mobilemenu1"
var mobileMenu = document.querySelector(".mobilemenu1");

// Add a click event listener to the element
mobileMenu.addEventListener("click", function() {
  // Toggle the class "mobilemenu2"
  if (mobileMenu.classList.contains("mobilemenu2")) {
    mobileMenu.classList.remove("mobilemenu2");
  } else {
    mobileMenu.classList.add("mobilemenu2");
  }
});