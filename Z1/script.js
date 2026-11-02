function procijeniKvalitetZraka(pm25, p1, p2) {
    if (pm25 <= p1) {
        return "Dobar kvalitet";
    } else if (pm25 <= p2) {
        return "Umjereno zagađen";
    } else {
        return "Opasan po zdravlje";
    }
}

const PRAG_1 = 12;
const PRAG_2 = 35;


let dugme = document.getElementById("dugmeMjerenje");

dugme.addEventListener("click", function(ev) {
    let unos = prompt("Unesite izmjerenu koncentraciju PM2.5 čestica (µg/m³):");

    if (unos === null || unos.trim() === "") {
        alert("Mjerenje je otkazano.");
        return;
    }

    let vrijednost = Number(unos);

  
    if (isNaN(vrijednost) || vrijednost < 0) {
        alert("Greška: Morate unijeti validan nenegativan broj za koncentraciju!");
        return;
    }

   
    let kategorija = procijeniKvalitetZraka(vrijednost, PRAG_1, PRAG_2);
    
    document.getElementById("rezultat").innerText = 
        `PM2.5: ${vrijednost} µg/m³ -> Status: ${kategorija}`;
}, false);