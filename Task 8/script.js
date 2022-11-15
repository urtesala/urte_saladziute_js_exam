/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite klase "Calculator", kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

class Calculator {
  sum(a, b) {
    return a + b;
  }
  subtraction(a, b) {
    return a - b;
  }
  multiplication(a, b) {
    return a * b;
  }
  division(a, b) {
    return a / b;
  }
}

const count = new Calculator();

console.log("count.sum(433,211) ===", count.sum(23, 2));
console.log("count.division(32,12) ===", count.division(32, 12));
console.log("count.multiplication(1,7) ===", count.multiplication(1, 7));
console.log("count.subtraction(34,2) ===", count.subtraction(34, 2));
