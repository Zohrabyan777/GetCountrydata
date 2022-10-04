"use strict";
const countriesContainer = document.querySelector(".countries");

///////////////////////////////////////////

function getCountryData(country) {
  const request = new XMLHttpRequest(); //we creat a request
  request.open("GET", `https://restcountries.com/v2/name/${country}`); ///we open the request
  request.send();
  request.addEventListener("load", function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);
    const html = `
  <article class="country">
  <img class= "county" src="${data.flag}">
  <div class="country_data">
  <h3 class="country_name">  Country name:${data.name}</h3>
  <h4 class="country_region"> Region:${data.region}</h4>
  <p class="country_row">Population:${(+data.population / 1000000).toFixed(
    2
  )} million </p>
  <p class="country_row">LANG :${data.languages[0].name}</p>
  <p class="country_row">CUR: ${data.currencies[0].name} </p>
  </div></article>`;
    countriesContainer.insertAdjacentHTML("afterbegin", html);
    countriesContainer.style.opacity = 1;
  });
}

getCountryData("USA");
getCountryData("Armenia");
