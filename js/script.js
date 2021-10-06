const menuIcon = document.getElementById("menu-bar"),
      menuItems = document.getElementById("menu");

menuIcon.addEventListener("click", () => {
  menuItems.classList.toggle("active");
  if (menuIcon.classList.contains("fa-bars")) {
    menuIcon.classList.remove("fa-bars");
    menuIcon.classList.add("fa-times");
  }
  else {
    menuIcon.classList.remove("fa-times");
    menuIcon.classList.add("fa-bars");
  }
});
window.addEventListener("scroll", ()=> {
  menuIcon.classList.remove("fa-times");
  menuIcon.classList.add("fa-bars");
  menuItems.classList.remove("active");
  if(window.scrollY > 60){
    document.querySelector('#scroll-top').classList.add('active');
  }
  else{
    document.querySelector('#scroll-top').classList.remove('active');
  }
});
window.addEventListener("load", ()=> {
  setInterval(() => {
    document.querySelector(".loader-container").classList.add("fade-out");
  }, 3000);
});