window.onload = function() {
    var dodajBtn = document.getElementById("dodajBtn");
    dodajBtn.addEventListener("click", dodajStavku);
};

function dodajStavku() {
    var nazivInput = document.getElementById("nazivInput");
    var iznosInput = document.getElementById("iznosInput");
    var greskaDiv = document.getElementById("greska");

    var naziv = nazivInput.value.trim();
    var iznosTekst = iznosInput.value.trim();

    if (naziv === "" || iznosTekst === "") {
        prikaziGresku("Greška: Sva polja moraju biti popunjena!");
        return;
    }

    var iznos = parseFloat(iznosTekst);
    if (isNaN(iznos) || iznos < 0) {
        prikaziGresku("Greška: Iznos mora biti validan nenegativan broj!");
        return;
    }

    greskaDiv.style.display = "none";
    greskaDiv.innerHTML = "";

    var tabela = document.getElementById("troskoviTabela");
    var tbody = tabela.getElementsByTagName("tbody")[0];
    
    var noviRed = tbody.insertRow();
    var celijaNaziv = noviRed.insertCell(0);
    var celijaIznos = noviRed.insertCell(1);

    celijaNaziv.innerText = naziv;
    celijaIznos.innerText = iznos.toFixed(2);

    azurirajZbir(tbody);

    nazivInput.value = "";
    iznosInput.value = "";
}

function prikaziGresku(poruka) {
    var greskaDiv = document.getElementById("greska");
    greskaDiv.innerHTML = poruka;
    greskaDiv.style.display = "block";
}

function azurirajZbir(tbody) {
    var redovi = tbody.getElementsByTagName("tr");
    var ukupno = 0;

    for (var i = 0; i < redovi.length; i++) {
        var tekstIznosa = redovi[i].getElementsByTagName("td")[1].innerText;
        ukupno += parseFloat(tekstIznosa);
    }

    var zbirCelija = document.getElementById("zbirCelija");
    zbirCelija.innerText = ukupno.toFixed(2);
}