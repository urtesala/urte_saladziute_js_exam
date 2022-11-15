/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: rezultatas turi būti matomas pateikus formą ir atvaizduojamas
<div id="output"></div> viduje. Gautus atsakymus stilizuokite naudojant CSS;
------------------------------------------------------------------- */

// DOM elements

const valueEl = document.getElementById("search");
const submitEl = document.getElementById("submit-btn");
const outputEl = document.getElementById("output");

submitEl.addEventListener("click", function (e) {
  e.preventDefault();
  let kg = valueEl.value;
  pounds = kg * 2.2046;
  grams = kg / 0.001;
  oz = kg * 35.274;
  outputEl.innerHTML = `<p>${kg} kilogramai yra ${pounds} svarai</p>
  <p>${kg} kilogramai yra ${grams} gramai</p>
  <p>${kg} kilogramai yra ${oz} uncijos</p>
  `;
});
