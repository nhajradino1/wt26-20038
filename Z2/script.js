// 1. ORIGINALNI MODUL
function napraviProfilStari() {
  let profil = { naziv: "Početni" };
  return {
    pregled: function () { return profil; }, 
    postaviNaziv: function (n) { profil.naziv = n; }
  };
}

const stari = napraviProfilStari();
const o1 = stari.pregled();
o1.naziv = "Hakovan";
console.log(stari.pregled().naziv); 


// 2. ISPRAVLJENI MODUL

function napraviProfil() {
  let profil = { naziv: "Početni", godine: 20 };
  return {
    pregled: function () {
      return { naziv: profil.naziv, godine: profil.godine };
    },
    postaviNaziv: function (n) {
      profil.naziv = n;
    }
  };
}

const p = napraviProfil();
const o2 = p.pregled();
o2.naziv = "Hakovan";
o2.godine = 99;
console.log(p.pregled()); 

p.postaviNaziv("Novi");
console.log(p.pregled()); 


/* Varijabla profil je privatna jer joj pozivalac ne može pristupiti po imenu
(živi samo u zatvorenju). Ali ako metoda vrati sam objekat, pozivalac dobija
referencu na isti objekat u memoriji i može ga mijenjati. Privatnost imena
ne znači privatnost objekta, zato pregled vraća kopiju. */