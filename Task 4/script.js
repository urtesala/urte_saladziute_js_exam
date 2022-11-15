/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, kuris vartotojui atėjus į tinklapį kreipsis į cars.json failą ir 
atvaizduos visus automobilių gamintojus bei pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.

Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
būti stilizuota su CSS ir būti responsive;
-------------------------------------------------------------------------- */

const divEl = document.getElementById("output");

const ENDPOINT = "cars.json";

// === MAIN ===

getData(ENDPOINT).then((cars) => {
  generateCards(cars);
});

//=== MAIN ===

//FUNKCIJOS

//get cars

async function getData(url) {
  return fetch(url)
    .then((resp) => resp.json())
    .then((dataInJs) => dataInJs)
    .catch((err) => console.warn("HUSTON WE HAVE A PROBLEM", err));
}

// create one element

function crEl(tagName, destination, elClass, text) {
  const el = document.createElement(tagName);
  el.className = elClass;
  el.textContent = text;
  destination.append(el);
  return el;
}

// creating one card

function generateCard(obj) {
  const articleEl = crEl("article", divEl, "card");
  const ulEl = crEl("ul", articleEl, "brand", obj.brand);
  obj.models.forEach((carModel) => {
    const liEl = crEl("li", ulEl, "model", carModel);
  });
}

// creating all cards

function generateCards(arr) {
  arr.forEach((carObj) => {
    generateCard(carObj);
  });
}
