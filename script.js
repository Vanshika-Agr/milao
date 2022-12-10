//$(document).ready(function() {
//$('.search-box').focus();
//});

const wrapper = document.querySelector(".wrap");
const header = document.querySelector(".main");

wrapper.addEventListener("scroll", (e) => {
 e.target.scrollTop > 30
  ? header.classList.add("main-shadow")
  : header.classList.remove("main-shadow");
});

const toggleButton = document.querySelector(".dark");

toggleButton.addEventListener("click", () => {
 document.body.classList.toggle("dark-mode");
});

const jobCards = document.querySelectorAll(".jobs-card");
const logo = document.querySelector(".logo12");
const jobLogos = document.querySelector(".jobs-logos");
const jobDetailTitle = document.querySelector(
 ".jobs-explain-content .jobs-card-title"
);
const jobBg = document.querySelector(".jobs-bg");

jobCards.forEach((jobCard) => {
 jobCard.addEventListener("click", () => {
  const number = Math.floor(Math.random() * 10);
  const url = `https://unsplash.it/640/425?image=${number}`;
  jobBg.src = url;

  const logo = jobCard.querySelector("svg");
  const bg = logo.style.backgroundColor;
  console.log(bg);
  jobBg.style.background = bg;
  const title = jobCard.querySelector(".jobs-card-title");
  jobDetailTitle.textContent = title.textContent;
  jobLogos.innerHTML = logo.outerHTML;
  wrapper.classList.add("detail-page");
  wrapper.scrollTop = 0;
 });
});

logo.addEventListener("click", () => {
 wrapper.classList.remove("detail-page");
 wrapper.scrollTop = 0;
   jobBg.style.background = bg;
});