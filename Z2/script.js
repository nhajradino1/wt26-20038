window.onload = function() {
    var pregledBtn = document.getElementById("pregledBtn");
    var resetBtn = document.getElementById("resetBtn");

    pregledBtn.addEventListener("click", prikaziObavijest);
    resetBtn.addEventListener("click", resetujFormu);
};

function prikaziObavijest() {
    var naslovInput = document.getElementById("naslovInput");
    var tekstInput = document.getElementById("tekstInput");
    var greskaDiv = document.getElementById("greska");
    
    var odabranaKategorija = null;
    var radioVazno = document.getElementById("katVazno");
    var radioZabava = document.getElementById("katZabava");

    if (radioVazno.checked) {
        odabranaKategorija = "vazno";
    } else if (radioZabava.checked) {
        odabranaKategorija = "zabava";
    }

    if (naslovInput.value.trim() === "" || tekstInput.value.trim() === "" || odabranaKategorija === null) {
        greskaDiv.innerHTML = "Greška: Sva polja (naslov, tekst i kategorija) moraju biti popunjena!";
        greskaDiv.style.display = "block";
        return;
    }

    greskaDiv.style.display = "none";
    greskaDiv.innerHTML = "";

    var prikazNaslov = document.getElementById("prikazNaslov");
    var prikazKategorija = document.getElementById("prikazKategorija");
    var prikazTekst = document.getElementById("prikazTekst");
    var pregledKontejner = document.getElementById("pregledKontejner");

    prikazNaslov.innerText = "Naslov: " + naslovInput.value;
    prikazKategorija.innerText = "Kategorija: " + (odabranaKategorija === "vazno" ? "Važno" : "Zabava");
    prikazTekst.innerText = "Tekst: " + tekstInput.value;

    pregledKontejner.className = "";
    if (odabranaKategorija === "vazno") {
        pregledKontejner.classList.add("stil-vazno");
    } else {
        pregledKontejner.classList.add("stil-zabava");
    }
}

function resetujFormu() {
    document.getElementById("naslovInput").value = "";
    document.getElementById("tekstInput").value = "";
    
    document.getElementById("katVazno").checked = false;
    document.getElementById("katZabava").checked = false;
    
    var greskaDiv = document.getElementById("greska");
    greskaDiv.style.display = "none";
    greskaDiv.innerHTML = "";

    document.getElementById("prikazNaslov").innerText = "";
    document.getElementById("prikazKategorija").innerText = "";
    document.getElementById("prikazTekst").innerText = "";
    
    var pregledKontejner = document.getElementById("pregledKontejner");
    pregledKontejner.className = "";
}