const CountriesView = require('./views/view.js');
const Request = require('./services/request.js');

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
  serverRequest.post({name: event.target.value}, (response) => {
    countriesView.renderOne(event.target.value);
  });
}
