/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite klasę "Movie" (naudokte ES6), kuri gebės sukurti objektus 3 savybėm ir 1 metodu.

Savybės:
title: string
director: string
budget: number

Metodas: 
wasExpensive() - jeigu filmo "budget" yra daugiau nei 100 000 000 mln USD, tada grąžins true, kitu atveju false. 
------------------------------------------------------------------------------------------------------ */

class Movie {
  constructor(title, director, budget) {
    this.title = title;
    this.director = director;
    this.budget = budget;
  }

  wasExpensive() {
    let expensive = this.budget >= 1e8 ? true : false;
    return expensive;
  }
}

let piktujuKarta = new Movie("Piktųjų karta", "Emilis Velyvis", 1e6);
let avengers = new Movie("Avengers: Endgame", "Anthony Russo", 356e6);

console.log("piktujuKarta.wasExpensive() ===", piktujuKarta.wasExpensive());
console.log("avengers.wasExpensive() ===", avengers.wasExpensive());
