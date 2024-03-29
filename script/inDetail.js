import { createCardDetail } from "./function.js";
let main = document.getElementById("main");
let back = document.getElementById("back");

const body = document.querySelector("body");
const modeImg = document.querySelector(".mode-img");
const mainLoader = document.querySelector(".main-loader");
const loader = document.querySelector(".loader");

mainLoader.style.display = "none";

function loaderCallback() {
  loader.style.display = "none";
  mainLoader.style.display = "block";
}

let icon = document.querySelector(".mode");
icon.onclick = function () {
  body.classList.toggle("dark-theme");
  if (body.classList.contains("dark-theme")) {
    modeImg.setAttribute("src", "../icons/sun.png");
  } else {
    modeImg.setAttribute("src", "../icons/sun.png");
  }
};

back &&
  back.addEventListener("click", function () {
    window.location.assign("../index.html");
  });

document.addEventListener("DOMContentLoaded", function () {
  if (localStorage.getItem("mode") == "dark-theme") {
    body.classList = "dark-theme";
    if (body.classList.contains("dark-theme")) {
      modeImg.setAttribute("src", "../icons/sun.png");
    } else {
      modeImg.setAttribute("src", "../icons/moon.png");
    }
  }

  if (localStorage.getItem("mode") == "white-theme") {
    body.classList.toggle("white-theme");
    if (body.classList.contains("white-theme")) {
      modeImg.setAttribute("src", "../icons/moon.png");
    } else {
      modeImg.setAttribute("src", "../icons/sunn.png");
    }
  }
  let location = window.location.href.substring(
    window.location.href.search("id") + 2
  );
  if (!location.length) {
  }
  fetch(`https://frontend-mentor-apis-6efy.onrender.com/countries/${location}`)
    .then((res) => res.json())

    .then((data) => {
      main.innerHTML = createCardDetail(data);
      let allButtons = document.querySelectorAll("p.card-border-countries");
      if (allButtons.length) {
        allButtons.forEach((el) => {
          el.addEventListener("click", function () {
            let btn = this.getAttribute("id");
            console.log(btn);
            window.location.assign(`./detail.html?id${btn}`);
          });
        });
      }
      loaderCallback();
    });
  //   .catch(window.location.assign("../index.html"));
});
