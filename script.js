const questionContainer = document.querySelector(".question-container");
const resultContainer = document.querySelector(".result-container");
const gifResult = document.querySelector(".gif-result");
const heartLoader = document.querySelector(".cssload-main");
const yesBtn = document.querySelector(".js-yes-btn");
const noBtn = document.querySelector(".js-no-btn");

const noBtnTexts = [
  "No 😒", "Please? 😭", "Why not? 😱", "Com'on 😫", "Please 🥺",
  "The pink one! 💕", "Don't do this 😢", "Reconsider? 🙏",
  "Not fair! 😤", "Just say yes! 💖", "I'll be sad 😔", "Heart broken 💔",
];

let noBtnIndex = 0;
noBtn.style.position = "fixed";

function moveNoBtn() {
  const btnW = noBtn.offsetWidth + 20;
  const btnH = noBtn.offsetHeight + 20;
  const newX = Math.floor(Math.random() * (window.innerWidth - btnW)) + 10;
  const newY = Math.floor(Math.random() * (window.innerHeight - btnH)) + 10;
  noBtn.style.left = `${newX}px`;
  noBtn.style.top = `${newY}px`;
  noBtn.style.right = "auto";
  noBtn.style.bottom = "auto";
  noBtnIndex = (noBtnIndex + 1) % noBtnTexts.length;
  noBtn.textContent = noBtnTexts[noBtnIndex];
}

document.addEventListener("mousemove", (e) => {
  const rect = noBtn.getBoundingClientRect();
  const cx = rect.left + rect.width / 2;
  const cy = rect.top + rect.height / 2;
  if (Math.sqrt(Math.pow(e.clientX - cx, 2) + Math.pow(e.clientY - cy, 2)) < 130) {
    moveNoBtn();
  }
});
noBtn.addEventListener("touchstart", (e) => { e.preventDefault(); moveNoBtn(); });
noBtn.addEventListener("mouseover", moveNoBtn);

yesBtn.addEventListener("click", () => {
  questionContainer.style.display = "none";
  heartLoader.style.display = "inherit";

  setTimeout(() => {
    heartLoader.style.display = "none";
    resultContainer.style.display = "inherit";
    if (gifResult) gifResult.play();

    const goToBirthday = () => { window.location.href = "birthday.html"; };
    const t = setTimeout(goToBirthday, 3000);
    document.addEventListener("click", () => { clearTimeout(t); goToBirthday(); }, { once: true });
  }, 3000);
});
