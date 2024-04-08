const ham = document.getElementById("hamburgerIcon");
const sideMenu = document.getElementById("sideMenu");
const nabvar = document.querySelector(".navbar");
const links = document.querySelectorAll(".side");

links.forEach((link) => {
  link.addEventListener("click", () => {
    close();
  });
});

let flag = true;
ham.addEventListener("click", () => {
  if (flag) open();
  else close();
});

const close = () => {
  ham.classList.remove("is-active");
  sideMenu.classList.remove("active");
  nabvar.style.backgroundColor = " #f2f4f9";
  nabvar.style.transition = "background-color 1s ";
  nabvar.style.boxShadow = " 0 0 10px rgba(0, 0, 0, 0.04)";
  flag = !flag;
};

const open = () => {
  ham.classList.add("is-active");
  sideMenu.classList.add("active");
  nabvar.style.backgroundColor = "transparent";
  nabvar.style.transition = "background-color 0s 0s";
  nabvar.style.boxShadow = " 0 0 10px rgba(0, 0, 0, 0.00)";
  flag = !flag;
};
