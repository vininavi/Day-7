function reqListener() {
  console.log(this.responseText);
  const countryData = JSON.parse(this.responseText);
  const countries = [
  { name: "USA", capital: "Washington, D.C.", flag: "🇺🇸" },
  { name: "India", capital: "Delhi", flag: "india" },
  { name: "UK", capital: "London", flag: "🇫🇷" }
];
countries.forEach(country => {
  console.log("Name: " + country.name);
  console.log("Capital: " + country.capital);
  console.log("Flag: " + country.flag);
});
}

const req = new XMLHttpRequest();
req.addEventListener("load", reqListener);
req.open("GET", "https://restcountries.com/v3.1/all");
req.send();
