function reqListener() {
  console.log(this.responseText);
  const countryData = JSON.parse(this.responseText);
  const countries = [
      { name: 'China', continent: 'Asia', population: '103452' },
      { name: 'India', continent: 'Asia', population: '200543' },
      { name: 'Nepal', continent: 'Asia', population: '175897' }
  ];

  let asianCountries = countries.filter(country => {
      return country.continent === 'Asia' && country.population > 200000;
  });
  
  console.log(asianCountries);
}
const req = new XMLHttpRequest();
req.addEventListener("load", reqListener);
req.open("GET", "https://restcountries.com/v3.1/all");
req.send();
