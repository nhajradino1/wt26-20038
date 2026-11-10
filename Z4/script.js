window.onload = function() {
    var cvorovi = document.getElementsByClassName("cvor");

    for (var i = 0; i < cvorovi.length; i++) {
        cvorovi[i].addEventListener("click", function() {
            var znak = this.getElementsByClassName("znak")[0];
            var podstablo = this.nextElementSibling;

            if (podstablo.style.display === "none") {
                podstablo.style.display = "block";
                znak.innerHTML = "-";
            } else {
                podstablo.style.display = "none";
                znak.innerHTML = "+";
            }
        });
    }
};