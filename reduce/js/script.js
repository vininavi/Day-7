function reqListener() {
  console.log(this.responseText);
  const countryData = JSON.parse(this.responseText);
 
const countries = [
  { name: "India", population: 1500 },
  { name: "SouthKorea", population: 4000 },
  { name: "France", population: 6500 }
];
}
let asiaCountries = countries.reduce((accumulator, current) =>{
  return accumulator + current.population;
  } ,0);

  console.log(asiaCountries);

const req = new XMLHttpRequest();
req.addEventListener("load", reqListener);
req.open("GET", "https://restcountries.com/v3.1/all");
req.send();
