function crearTarjetas() {
    let contenido = "";
    for (let i = 1; i <= 5; i++) {
        contenido = contenido + "<div class='item'>" + i + "</div>";
        divTarjetas.innerHTML = contenido;
    }
}