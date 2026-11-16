const brojac = (function () {
  let vrijednost = 0;

  return {
    dodaj: function () {
      return vrijednost += 1;
    },
    resetuj: function () {
      vrijednost = 0;
    }
  };
})();

console.log(brojac.dodaj());
console.log(brojac.dodaj());
console.log(brojac.dodaj());
brojac.resetuj();
console.log(brojac.dodaj());
