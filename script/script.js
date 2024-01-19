import { createCard } from "./function.js";

const wrapper = document.getElementById("cards-wrapper");
const maiInput  = document.getElementById('main-input');

document.addEventListener("DOMContentLoaded", function () {
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
      });
      
      
    })
    .catch((err) => {
      console.log(err);
    });
});

