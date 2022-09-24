"use strict";
//! I used deprecated method [addRule] just for test

//* All Variables & Elements [Start]
let colorGenerator = document.getElementById("color-generator"),
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
  switcher = false,
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
  button = document.getElementById("scroll-to-top-button"),
  labels = document.querySelectorAll(".label"),
  menu = document.querySelector(".hover-section"),
  otherLinksButton = document.querySelector(".other-links"),
  closerHeader = document.querySelector(".close-header"),
  header = document.querySelector("header"),
  switchHeader = false,
  closeOpenHeaderSound = new Audio("sounds-effect/header-sound.m4a");
//* All Variables & Elements [End]

//! Colors Theme Codes [Start]
// Set Default Color Website
if (localStorage.websiteThemeColor === undefined) {
  localStorage.websiteThemeColor = "blue";
  html.classList.add(localStorage.websiteThemeColor);
}

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
  element.addEventListener("click", (e) => {
    html.className = "";
    window.localStorage.websiteThemeColor = element.dataset.color;
    html.classList.add(window.localStorage.websiteThemeColor);
    closeSwitcher();
  });
});

function closeSwitcher() {
  document.styleSheets[1].addRule(
    ".color-generator .switch-colors-on-off::before",
    "right: 3px;"
  );
  bodySwitcher.style.backgroundColor = "#ff1818";
  clearInterval(timer);
  switcher = false;
}

var timer;
switchColorsButton.onclick = () => {
  let i = 0;
  let length = 11;
  let speed = 500;
  if (!switcher) {
    document.styleSheets[1].addRule(
      ".color-generator .switch-colors-on-off::before",
      "right: 14px;"
    );
    bodySwitcher.style.backgroundColor = "#65ccff";
    timer = setInterval(() => {
      if (i < length) {
        html.className = "";
        html.classList.add(colors[i]);
        i++;
      } else {
        i = 0;
      }
    }, speed);
    switcher = true;
  } else {
    closeSwitcher();
  }
};
//! Colors Theme Codes [End]

//? Scroll Button [Start]
window.onscroll = () => {
  if (scrollY >= 600) {
    button.style.visibility = "visible";
  } else {
    button.style.visibility = "hidden";
  }
};

button.addEventListener("click", () => {
  scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});
//? Scroll Button [End]

//! Add alt attribute to images [Start]
let allImages = document.images;
let countImages = 1;

for (let i = 0; i < allImages.length; i++) {
  if (allImages[i].alt === "") {
    allImages[i].removeAttribute("alt");
  }
  if (!allImages[i].hasAttribute("alt")) {
    allImages[i].setAttribute("alt", `Image${countImages}`);
    countImages++;
  }
}
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
let skillsContainer = document.querySelector(".skills-container");
let levelSkills = document.querySelectorAll(".skills-container .label");
function addLevels() {
  document.styleSheets[1].addRule(
    `.our-skills .container .skills-container .label[data-skills='${levelSkills[0].dataset.skills}']::before`,
    `width: ${levelSkills[0].dataset.skills}`
  );
  document.styleSheets[1].addRule(
    `.our-skills .container .skills-container .label[data-skills='${levelSkills[1].dataset.skills}']::before`,
    `width: ${levelSkills[1].dataset.skills}`
  );
  document.styleSheets[1].addRule(
    `.our-skills .container .skills-container .label[data-skills='${levelSkills[2].dataset.skills}']::before`,
    `width: ${levelSkills[2].dataset.skills}`
  );
  document.styleSheets[1].addRule(
    `.our-skills .container .skills-container .label[data-skills='${levelSkills[3].dataset.skills}']::before`,
    `width: ${levelSkills[3].dataset.skills}`
  );
}

window.addEventListener("scroll", () => {
  if (
    scrollY >
    skillsContainer.offsetHeight + skillsContainer.offsetTop - innerHeight
  ) {
    addLevels();
  }
});
//! Our Skills Animation on scroll [End]

//? Hide/Show Header [Start]
function toggleHeader(moveTo) {
  if (!switchHeader) {
    closeOpenHeaderSound.play();
    header.style.left = moveTo;
    closerHeader.style.color = "#23fa23";
    switchHeader = true;
  } else {
    closeOpenHeaderSound.play();
    header.style.left = "0";
    closerHeader.style.color = "#ff3434";
    switchHeader = false;
  }
}

closerHeader.addEventListener("click", () => {
  if (innerWidth > 1400) {
    toggleHeader("-97.7%");
  } else if (innerWidth <= 1200 && innerWidth >= 992) {
    toggleHeader("-96.6%");
  } else if (innerWidth <= 992 && innerWidth >= 855) {
    toggleHeader("-96%");
  } else if (innerWidth <= 855 && innerWidth >= 700) {
    toggleHeader("-95%");
  } else if (innerWidth <= 700 && innerWidth >= 600) {
    toggleHeader("-94%");
  } else if (innerWidth <= 600 && innerWidth >= 510) {
    toggleHeader("-93%");
  } else if (innerWidth <= 610 && innerWidth > 388) {
    toggleHeader("-92%");
  } else if (innerWidth <= 388) {
    toggleHeader("-90%");
  }
});

closerHeader.addEventListener("mouseenter", () => {
  closerHeader.style.color = "#ffff2e";
});

closerHeader.addEventListener("mouseout", () => {
  if (!switchHeader) closerHeader.style.color = "#ff3434"; //red
  else closerHeader.style.color = "#23fa23";
});
//? Hide/Show Header [End]

//! Show Menu With Click [Start]
menu.style.display = "none";
otherLinksButton.onclick = () => {
  menu.style.display === "none"
    ? (menu.style.display = "flex")
    : (menu.style.display = "none");
};
//! Show Menu With Click [End]
