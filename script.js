"use strict";

//* All Variables & Elements [Start]
const colorGenerator = document.getElementById("color-generator"),
  tool = document.getElementById("tool-gen"),
  html = document.getElementById("my-html"),
  colorsContainer = document.querySelectorAll(".colors-container div"),
  red = document.getElementById("red-theme"),
  blue = document.getElementById("blue-theme"),
  green = document.getElementById("green-theme"),
  purple = document.getElementById("purple-theme"),
  yellow = document.getElementById("yellow-theme"),
  purplePink = document.getElementById("purple-pink-theme"),
  pink = document.getElementById("pink-theme"),
  orange = document.getElementById("orange-theme"),
  idkName = document.getElementById("idk-name-theme"),
  black = document.getElementById("black-theme"),
  gray = document.getElementById("gray-theme"),
  switchColorsButton = document.querySelector(".switch-colors-on-off"),
  bodySwitcher = document.querySelector(".switch-colors-on-off"),
  button = document.getElementById("scroll-to-top-button"),
  labels = document.querySelectorAll(".label"),
  menu = document.querySelector(".hover-section"),
  otherLinksButton = document.querySelector(".other-links"),
  header = document.querySelector("header"),
  closeOpenHeaderSound = new Audio("assets/sounds-effect/header-sound.m4a"),
  syncImgs = document.querySelectorAll('img:not([decoding="async"])');


let switcher = false,
  colors = [
    "red",
    "blue",
    "green",
    "purple",
    "yellow",
    "purple-pink",
    "pink",
    "orange",
    "idk-name",
    "gray",
    "black",
  ],
  switchHeader = false;
//* All Variables & Elements [End]

//! Colors Theme Codes [Start]
// Set Default Color Website
if (localStorage.websiteThemeColor === undefined) {
  localStorage.websiteThemeColor = "blue";
  html.classList.add(localStorage.websiteThemeColor);
} else {
  html.className = "";
  html.classList.add(localStorage.websiteThemeColor);
}

// set Timer to close Color Theme Settings
var timer10second;
tool.onclick = () => {
  let limitedTime = 10000;
  if (colorGenerator.style.left === "0px") {
    colorGenerator.style.left = "-130px";
    tool.classList.remove("active-tool");
  } else {
    timer10second = setTimeout(() => {
      if (colorGenerator.style.left === "0px") {
        colorGenerator.style.left = "-130px";
        tool.classList.remove("active-tool");
      }
    }, limitedTime);
    tool.classList.add("active-tool");
    colorGenerator.style.left = "0";
  }
};

colorsContainer.forEach((element) => {
  element.addEventListener("click", () => {
    html.className = "";
    localStorage.websiteThemeColor = element.dataset.color;
    html.classList.add(localStorage.websiteThemeColor);
  });
});
//! Colors Theme Codes [End]

//? Scroll Button [Start]
window.onscroll = () => {
  scrollY >= 2000
    ? (button.style.visibility = "visible")
    : (button.style.visibility = "hidden");
};

button.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});
//? Scroll Button [End]

//! Add alt attribute to images [Start]
let allImages = document.querySelectorAll("img");
let countImages = 1;

allImages.forEach((image) => {
  if (!image.hasAttribute("alt"))
    image.setAttribute("alt", `Image${countImages}`);
  countImages++;
});
//! Add alt attribute to images [End]

//? popup for gallery images [Start]
let galleryImages = document.querySelectorAll(".boxes-container .main-box");
let overlay = document.createElement("div");
let popupBox = document.createElement("div");
let popupImage = document.createElement("img");
galleryImages.forEach((img) => {
  img.addEventListener("click", () => {
    overlay.className = "popup-overlay";
    popupBox.className = "popup-box";
    popupImage.src = img.children[0].children[0].src;
    document.body.append(overlay);
    popupBox.append(popupImage);
    document.body.append(popupBox);
  });
});
overlay.addEventListener("click", () => {
  overlay.remove();
  popupBox.remove();
  popupImage.remove();
});
//? popup for gallery images [End]

//! Our Skills Animation on scroll [Start]
const skillsContainer = document.querySelector(".skills-container"),
  levelSkills = document.querySelectorAll(
    ".skills-container .skill .label span"
  );

let levelSkillsActive = false;

window.addEventListener("scroll", () => {
  let heightLevels = skillsContainer.offsetHeight + skillsContainer.offsetTop;
  if (scrollY - 250 > heightLevels - innerHeight) {
    if (!levelSkillsActive) {
      levelSkills.forEach(
        (skill) => (skill.style.width = skill.dataset.skills)
      );
      levelSkillsActive = true;
    }
  }
});
//! Our Skills Animation on scroll [End]

//! Show Menu With Click [Start]
menu.style.display = "none";
otherLinksButton.onclick = () => {
  menu.style.display === "none"
    ? (menu.style.display = "flex")
    : (menu.style.display = "none");
};
//! Show Menu With Click [End]

//? set time count down until new year [Start]
let timerUnites = document.querySelectorAll(
  ".latest-events .main-part .info .timer span"
);

let second = 1000,
  minute = second * 60,
  hour = minute * 60,
  day = hour * 24;

let newYearTimer = setInterval(() => {
  let timeNow = new Date().getTime(),
    newYear = new Date(`${new Date().getFullYear() + 1}`).getTime(),
    newYearTime = newYear - timeNow;

  timerUnites[0].textContent = Math.floor(newYearTime / day);
  timerUnites[1].textContent = Math.floor((newYearTime % day) / hour);
  timerUnites[2].textContent = Math.floor((newYearTime % hour) / minute);
  timerUnites[3].textContent = Math.floor((newYearTime % minute) / second);
}, 1000);

// Set the new year message
let nextYear = new Date().getFullYear() + 1;
const textNewYear = document.querySelector(".new-year-msg");
textNewYear.textContent = textNewYear.textContent + nextYear;

//? set time count down until new year [End]

//! Increment counter [Start]
let stats = document.querySelectorAll(".stats .box .stat");
let statsContainer = document.querySelector(".stats");

function startCount() {
  stats.forEach((ele) => {
    let timer = setInterval(() => {
      ele.textContent++;
      if (ele.textContent >= +ele.dataset.stat) {
        clearInterval(timer);
        ele.textContent = ele.dataset.stat;
      }
    }, 1000 / parseInt(ele.textContent));
  });
}

window.addEventListener("scroll", () => {
  let eleHeight = statsContainer.getBoundingClientRect().top;
  if (eleHeight + statsContainer.clientHeight < window.innerHeight)
    startCount();
});
//! Increment counter [End]

//* handle all images
syncImgs.forEach((img) => {
  img.setAttribute("decoding", "async");
  img.setAttribute("width", "100%");
  img.setAttribute("height", "100%");
});