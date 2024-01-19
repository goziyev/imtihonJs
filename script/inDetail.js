import { createCardDetail } from "./function.js";
let main = document.getElementById("main");
let back = document.getElementById("back");

back &&
  back.addEventListener("click", function () {
    window.location.assign("../index.html");
  });

document
  .addEventListener("DOMContentLoaded", function () {
    let location = window.location.href.substring(
      window.location.href.search("id") + 2
    );
    if (!location.length) {
        
    }
    fetch(`https://countries-api-v7sn.onrender.com/countries/slug/${location}`)
      .then((res) => res.json())

      .then((data) => {
        main.innerHTML = createCardDetail(data);
        let  allButtons  =  document.querySelectorAll("p.card-border-countries");
        if (allButtons.length) {
         allButtons.forEach((el) => {
             el.addEventListener("click", function () {
                 let btn = this.getAttribute("id");
                 console.log(btn);
                     window.location.assign(`./detail.html?id${btn}`);
               });
           });
       }
      })
    //   .catch(window.location.assign("../index.html"));
    
     
})
