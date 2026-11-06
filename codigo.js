const mensaje = "Bienvenido a nuestro sitio web"; 
const nombreproducto = 'Producto ABC';
const letraseleccionada = 'C';

function multiplicar(p1, p2) {
    return p1 * p2;
}

// Se ejecuta al cargar el DOM para asegurar que <p id="demo"> ya existe
document.addEventListener("DOMContentLoaded", () => {
    const demoElement = document.getElementById("demo");
    if (demoElement) {
        demoElement.innerHTML = multiplicar(4, 3);
    }
});