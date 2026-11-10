window.onload = function() {
    var dugme = document.getElementsByTagName("button")[0];
        dugme.addEventListener("click", function() {
            var zapremina=zapreminaKugle(parseFloat(document.getElementById("radijus").value));
            document.getElementById("zapremina").value=zapremina;
        });
 
};

function zapreminaKugle(radijus) {
    if (isNaN(radijus) || radijus < 0) {
        return "greska";
    }
    return (4 / 3) * Math.PI * Math.pow(radijus, 3);
}