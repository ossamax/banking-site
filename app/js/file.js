const btnHamburger = document.querySelector("#btnHamburger");
const header = document.querySelector(".header");
const overlay = document.querySelector(".overlay");
const headerMobileMenu = document.querySelector(".header__mobile__menu");

btnHamburger.addEventListener("click", function () {
  if (header.classList.contains("open")) {
    header.classList.remove("open");
    overlay.classList.remove("fade-in");
    overlay.classList.add("fade-out");

    //header menu animation
    headerMobileMenu.classList.remove("fade-in");
    headerMobileMenu.classList.add("fade-out");
  } else {
    header.classList.add("open");
    overlay.classList.remove("fade-out");
    overlay.classList.add("fade-in");

    //header animation delet
    headerMobileMenu.classList.remove("fade-out");
    headerMobileMenu.classList.add("fade-in");
  }
});

//navbar fixed on scroll ofset top

$(window).on("scroll", function () {
  if ($(window).scrollTop()) {
   $("header").removeClass("open");
   // overlay.css("visibility", "hidden");
  
  } else {
    return;
  }
});
