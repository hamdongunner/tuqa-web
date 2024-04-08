const push = document.getElementById("marjuha");
const flipCard = document.querySelector(".card__content");
const marjuhaBtn = document.getElementById("marjuhaBtn");
const marjuhaSidebar = document.getElementById("marjuhaSidebar");

gsap.to(".illustrator", {
  opacity: 1,
  duration: 0.7,
  y: 0,
  scale: 1,
  delay: 1,
});
gsap.from(".animIcon", {
  duration: 1,
  x: 200,
  stagger: 0.5,
  delay: 2,
  // ease: "back.out(1)",
});
gsap.to(".contacts", { x: 0, duration: 0.5, delay: 1.7, ease: "back.out(2)" });

gsap.to(".animText", { duration: 1, y: 0, opacity: 1, stagger: 0.2 });
gsap.from(".ctaAnim", {
  y: 200,
  opacity: 0,
  duration: 0.5,
  scale: 0,
  ease: "back.out(2)",
  delay: 1.2,
  stagger: 0.2,
});

push.addEventListener("click", () => {
  marjuhaFunc();
});
marjuhaBtn.addEventListener("click", () => {
  marjuhaFunc();
});

const marjuhaFunc = () => {
  gsap.fromTo(
    ".card__content",
    { rotateY: "180deg", duration: 1 },
    {
      rotateY: "0",
      duration: 1,
      delay: 8,
    }
  );

  gsap.fromTo(
    ".marjuha-sidebar",
    { duration: 1, x: "0%" },
    { duration: 1, x: "-100%", delay: 8 }
  );
};
