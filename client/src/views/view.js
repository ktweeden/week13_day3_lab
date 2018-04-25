const CountriesView = function(){
  this.countries = [];

  CountriesView.prototype.renderDropdown = function (apiCountriesData) {
    const select = document.querySelector('#countries-dropdown');

    // this.countries = countriesData;

    apiCountriesData.forEach((country, index) => {
      const option = document.createElement('option');
      option.value = country.name;
      option.textContent = country.name;
      select.appendChild(option);
    });
  };

  CountriesView.prototype.renderDB = function (dbCountriesData) {
      const ul = document.querySelector('#countries');

    dbCountriesData.forEach((country) => {
      const li = document.createElement('li');
      li.textContent = country.name;
      ul.appendChild(li);

    });

  };

  CountriesView.prototype.renderOne = function (countryName) {
      const ul = document.querySelector('#countries');
      const li = document.createElement('li');
      li.textContent = countryName;
      ul.appendChild(li);
  };


}
