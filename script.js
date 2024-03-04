//header自動打字功能
const textEL = document.getElementById("text2");
const text = "WeHelp#5 Application Website";

let idx = 1;
let speed = 90;

function writeText() {
  textEL.innerText = text.slice(0, idx);
  idx++;

  setTimeout(writeText, speed);
}

writeText();

//sticky nav 往下滑動到某定點時出現
const nav = document.querySelector(".nav");
window.addEventListener("scroll", fixNav);

function fixNav() {
  if (window.scrollY > nav.offsetHeight + 210) {
    nav.classList.add("show");
  } else {
    nav.classList.remove("show");
  }
}

//faq點擊icon可打開頁面
const toggles = document.querySelectorAll(".faq-toggle");

toggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    toggle.parentNode.classList.toggle("active");
  });
});
