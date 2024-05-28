let hamburger = document.getElementById("hamburger");
let navlist = document.getElementById("navlist");

hamburger.addEventListener("click", () => {
  navlist.classList.toggle("navlist-active");
});
