function napraviResurs(pocetnaKolicina) {
  let stanje = pocetnaKolicina < 0 ? 0 : pocetnaKolicina;

  return {
    potrosi: function (kolicina) {
      if (kolicina < 0 || kolicina > stanje) {
        return false;
      }
      stanje -= kolicina;
      return true;
    },
    preostalo: function () {
      return stanje;
    }
  };
}

const papir = napraviResurs(100);
const minute = napraviResurs(30);

console.log(papir.potrosi(40));
console.log(papir.preostalo());
console.log(papir.potrosi(70));
console.log(papir.potrosi(-5));
console.log(papir.preostalo());

console.log(minute.preostalo());
console.log(minute.potrosi(10));
console.log(minute.preostalo());
console.log(papir.preostalo());