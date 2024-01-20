import { createCard } from "./function.js";
const mainInput  = document.getElementById('main-input');
const wrapper = document.getElementById("cards-wrapper");
const filterRegion = document.getElementById('filter_select');
const search = document.querySelector('.search')
const header = document.getElementById('header')
const body = document.querySelector('body');
const modeImg = document.querySelector('.mode-img')
const loader  = document.querySelector(".loader")
const mainLoader  = document.querySelector(".main-loader")
mainLoader.style.display= "none";

function loaderCallback() {
loader.style.display= "none";
mainLoader.style.display= "block";
}



let icon  = document.querySelector('.mode');
icon.onclick = function(){
  
  
  let a = localStorage.getItem('mode')
  body.classList.toggle('dark-theme');
  
  
  localStorage.setItem('mode',`${localStorage.getItem('mode') == 'dark-theme' ? 'white-theme' : "dark-theme" }`)
  
  if (body.classList.contains('dark-theme')) {
    modeImg.setAttribute("src","../icons/sun.png")
  }else{
    modeImg.setAttribute("src","../icons/moon.png")
  }
}



document.addEventListener("DOMContentLoaded", function () {
  if (localStorage.getItem('mode') == 'dark-theme') {
    body.classList = "dark-theme";
    if (body.classList.contains('dark-theme')) {
      modeImg.setAttribute("src","../icons/sun.png")
    }else{
      modeImg.setAttribute("src","../icons/moon.png")
    }
}
   
if (localStorage.getItem('mode') == 'white-theme') {
  body.classList.toggle("white-theme");
  if (body.classList.contains('white-theme')) {
    modeImg.setAttribute("src","../icons/moon.png")
  }else{
    modeImg.setAttribute("src","../icons/sunn.png")
  }
}
  
  fetch("https://countries-api-v7sn.onrender.com/countries?limit=250",{
    method:"GET"
  })
  .then((res) => res.json())
  .then((data) => {
  
      data.data.forEach(element => {
        
        let card = createCard(element);
        wrapper.innerHTML += card
      });
      const cards = document.querySelectorAll(".card");
      cards.forEach(el => {
        el.addEventListener("click", function () {
          let elId = this.getAttribute("id");
          window.location.assign(`./pages/detail.html?id${elId}`);
        });
        loaderCallback();
      });
      
    
     
      
    })
    .catch((err) => {
      console.log(err);
    });
});


function myScript() {
  fetch(
    `https://countries-api-v7sn.onrender.com/countries?search=${mainInput.value}`
  )
    .then((data) => data.json())
    .then((data) => {
      wrapper.innerHTML = "";
      data.data.forEach((element) => {
        let card = createCard(element);
        wrapper.innerHTML += card;
      });
      const cards = document.querySelectorAll(".card");
      cards.forEach((el) => {
        el.addEventListener("click", function () {
          let elId = this.getAttribute("id");
          window.location.assign(`./pages/detail.html?id${elId}`);
        });
      });
    })
    .catch((err) => {
      console.log(err);
    });
}


function myfilterScript() {
    fetch(
      `https://countries-api-v7sn.onrender.com/countries?region=${filterRegion.value}`
    )
      .then((data) => data.json())
      .then((data) => {
        wrapper.innerHTML = "";
        data.data.forEach((element) => {
          let card = createCard(element);
          wrapper.innerHTML += card;
        });
        const cards = document.querySelectorAll(".card");
        cards.forEach((el) => {
          el.addEventListener("click", function () {
            let elId = this.getAttribute("id");
            window.location.assign(`./pages/detail.html?id${elId}`);
          });
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

mainInput.addEventListener("keyup", myScript);

filterRegion.addEventListener('change',myfilterScript)




