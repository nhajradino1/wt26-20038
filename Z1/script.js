window.onload = function() {
    var form = document.querySelector("form");
    var dugmadi = form.querySelectorAll("input[type='button']");
    var resetBtn = document.getElementById("resetBtn");
    
    azurirajPrikaz();

    for (var i = 0; i < dugmadi.length; i++) {
        dugmadi[i].addEventListener("click", function() {
            promjeniStanje(this);
        });
    }
    
    resetBtn.addEventListener("click", function() {
        resetujSve();
    });
};

function promjeniStanje(referenca) {
    var labela = document.querySelector('label[for="' + referenca.id + '"]');
    
    if (referenca.value === "Check") {
        referenca.value = "Uncheck";
        if (labela) {
            labela.style.textDecoration = "line-through";
            labela.style.color = "green";
        }
    } else {
        referenca.value = "Check";
        if (labela) {
            labela.style.textDecoration = "none";
            labela.style.color = "black";
        }
    }
    
    azurirajPrikaz();
}

function azurirajPrikaz() {
    var form = document.querySelector("form");
    var dugmadi = form.querySelectorAll("input[type='button']");
    var zavrseno = 0;
    
    for (var i = 0; i < dugmadi.length; i++) {
        if (dugmadi[i].value === "Uncheck") {
            zavrseno++;
        }
    }
    
    var progress = document.getElementById("progressBar");
    var tekst = document.getElementById("progressText");
    
    progress.value = zavrseno;
    tekst.innerHTML = "Završeno " + zavrseno + " od " + dugmadi.length + " stavki";
}

function resetujSve() {
    var form = document.querySelector("form");
    var dugmadi = form.querySelectorAll("input[type='button']");
    
    for (var i = 0; i < dugmadi.length; i++) {
        dugmadi[i].value = "Check";
        var labela = document.querySelector('label[for="' + dugmadi[i].id + '"]');
        if (labela) {
            labela.style.textDecoration = "none";
            labela.style.color = "black";
        }
    }
    
    azurirajPrikaz();
}