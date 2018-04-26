const CountriesView = require('./views/countriesView.js');
const Request = require('./services/request.js');
const Country = require('./models/country.js');

const restCountriesRequest = new Request("https://restcountries.eu/rest/v2/all");
const serverRequest = new Request("http://localhost:3000/countries");
const countriesView = new CountriesView();

document.addEventListener('DOMContentLoaded', () => {
  const countriesDropdown = document.querySelector('#countries-dropdown');

  const populateDropdown = function() {
    restCountriesRequest.get((data)=> {
      countriesView.renderDropdown(data);
      countriesDropdown.addEventListener('change', onCountrySelect);
    });
  }

  serverRequest.get(countriesView.renderDB);

  populateDropdown();
});


const onCountrySelect = function(event){
  const restApiRequest = new Request(`https://restcountries.eu/rest/v2/name/${event.target.value}`);
  restApiRequest.get((response) => {
    const newCountry = new Country(response[0].name,response[0].latlng,response[0].flag);
    console.log(response);
    console.log(newCountry);
    serverRequest.post(newCountry, (response) => {
      countriesView.renderOne(newCountry);
    });
  });
}
