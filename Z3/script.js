function generisiTablicu() {
    document.write("<table>");
    
    document.write("<thead>");
    document.write("<tr>");
    document.write("<th>X</th>");
    
    for (let j = 1; j <= 10; j++) {
        document.write("<th>" + j + "</th>");
    }
    document.write("</tr>");
    document.write("</thead>");
    
    document.write("<tbody>");
    for (let i = 1; i <= 10; i++) {
        let klasaReda = (i % 2 === 0) ? "red-paran" : "red-neparan";
        
        document.write("<tr class='" + klasaReda + "'>");
        document.write("<th>" + i + "</th>");
        
        for (let j = 1; j <= 10; j++) {
            document.write("<td>" + (i * j) + "</td>");
        }
        
        document.write("</tr>");
    }
    document.write("</tbody>");
    
    document.write("</table>");
}

generisiTablicu();