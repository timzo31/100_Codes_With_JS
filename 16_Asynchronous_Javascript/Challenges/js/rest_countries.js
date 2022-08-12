'use strict';
const countriesList = document.getElementById('country');
// const countriesOptions = document.querySelector('.country');
const capital = document.querySelector('.country');
const dialingCode = document.querySelector('.dialing-code');
const population = document.querySelector('.population');
let currencies = document.querySelector('.currencies');
let region = document.querySelector('.region');
let subregion = document.querySelector('.subregion');
const flagImg = document.querySelector('.flag-img');

//////////////////////////////////////////

// countriesList.addEventListener('change', function (e) {
//   const selectedCountry = e.target.value;

//   displayCountryInfo(selectedCountry);
// });
let countries;

const newCountrySelection = event => {
  displayCountryInfo(event.target.value);
};

countriesList.addEventListener('change', newCountrySelection);

const url = `https://restcountries.com/v3.1/all`;
fetch(url)
  .then(res => res.json())
  .then(data => {
    //console.log(data);
    renderCountries(data);
  })
  .catch(err => `Error: ${err.message}`);

const renderCountries = function (countriesData) {
  countries = countriesData;
  console.log(countries);
  let options = ``;
  /*for (let i = 0; i < countries.length; i++) {
    options += `<option value="${countries[i].cioc}">${countries[i].name.common} (${countries[i].idd.root}${countries[i].idd.suffixes})</option>`;
  }*/
  countries.forEach(
    country =>
      (options += `<option value="${country.cca2}">${country.name.common} (${country.idd.root}${country.idd.suffixes})</option>`)
  );

  countriesList.innerHTML += options;
  // console.log(countriesList);
  // console.log(countriesList.value);
  // console.log(countriesList.length);
  // console.log(countriesList[10]);
  // console.log(countriesList[10].value);
  // console.log(countriesList[10].text);
  const index = Math.floor(Math.random() * countriesList.length);
  displayCountryInfo(countriesList[index]);
};

const displayCountryInfo = function (countryByAlphaCode) {
  const countryData = countries.find(
    country => countryByAlphaCode === country.cca2
  );
  //console.log(countryData);
  flagImg.src = `${countryData.flags.svg}`;
  flagImg.alt = `Flag of ${countryData.name.common}`;
  capital.innerHTML = `${countryData.capital}`;
  dialingCode.innerHTML = `${countryData.idd.root}${countryData.idd.suffixes}`;

  // FIXME
  population.innerHTML = `${Math.round(
    countryData.population / 1000000
  ).toFixed(2)} Millions`;
  // currencies.innerHTML
  //FIXME:
  currencies.innerHTML = countryData.currencies.map(
    cur => `${cur[0].name} (${cur[0].symbol})`
  );
  //FIXME:
  region.innerHTML = `${countryData.region}`;
  subregion.innerHTML = `${countryData.subregion}`;
};

// TODO:
