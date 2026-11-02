function ispisPauza(n,k) {
    if(k>n)
    {
        console.log("Broj za pauzu veci od broja ponavljanja!");
        return;
    }
    console.log(`=== PLAN AKTIVNOSTI (Ukupno: ${n}, Pauza svakih: ${k}) ===`);
    for (let i = 1; i <= n; i++) {
        console.log("Ponavljanje broj: " + i);
        if (i % k === 0 && i!=n) {
            console.log("--- VRIJEME JE ZA PAUZU! ---");
        }
    }
    console.log("=== KRAJ PLANA ===");
}

function pokreniProgram() {
    
  
    let vrijednost1;
    while (true) {
        let unos1 = prompt("Unesite broj ponavljanja (n):");
        
       
        if (unos1 === null || unos1.trim() === "") {
            alert("Niste unijeli ništa, pokušajte ponovo!");
            continue; 
        }
    
        
        vrijednost1 = Number(unos1);

      
        if (isNaN(vrijednost1) || vrijednost1 < 1) {
            alert("Greška: Unijeli ste slova ili negativan broj! Kraj programa.");
            return; 
        }
        break; 
    }


    let vrijednost2;
    while (true) {
        let unos2 = prompt("Unesite razmak pauze (k):");
        
        
        if (unos2 === null || unos2.trim() === "") {
            alert("Niste unijeli ništa, pokušajte ponovo!");
            continue; 
        }
        
        vrijednost2 = Number(unos2);

        if (isNaN(vrijednost2) || vrijednost2 < 1) {
            alert("Greška: Unijeli ste slova ili negativan broj! Kraj programa.");
            return; 
        }
        break; 
    }

    ispisPauza(vrijednost1, vrijednost2);
}


pokreniProgram();