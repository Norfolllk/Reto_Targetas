function crearTarjetas() {
    let desde = parseInt(txtDesde.value);
    let hasta  = parseInt(txtHasta.value);
    let salto = parseInt(txtSalto.value);

    if (isNaN(salto)) {
        salto = 1;
    }
    let contenido = "";
    for (let i = desde; i <= hasta; i += salto) {
        contenido = contenido + "<div class='item'>" + i + "</div>";
        divTarjetas.innerHTML = contenido;
    }
}
