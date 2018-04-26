const CountriesView = function(){

  CountriesView.prototype.renderDropdown = function (apiCountriesData) {
    const select = document.querySelector('#countries-dropdown');

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
      const img = document.createElement('img');
      img.src = country.flag;
      li.appendChild(img);
      ul.appendChild(li);

    });
  };

  CountriesView.prototype.renderOne = function (country) {
      const ul = document.querySelector('#countries');
      const li = document.createElement('li');
      li.textContent = country.name;
      const img = document.createElement('img');
      img.src = country.flag;
      li.appendChild(img);
      ul.appendChild(li);

  };


}
module.exports = CountriesView;
