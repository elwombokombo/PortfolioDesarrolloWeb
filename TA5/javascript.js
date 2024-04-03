// Enlazamos el archivo CSS
var link = document.createElement('link');
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = 'style5.css';
document.getElementsByTagName('head')[0].appendChild(link);

// Función principal que se ejecuta cuando el DOM está completamente cargado
document.addEventListener("DOMContentLoaded", function() {
    // Tu código JavaScript puede ir aquí
    
    // Por ejemplo, puedes seleccionar un elemento del HTML y cambiar su estilo
    var titulo = document.getElementById('titulo');
    titulo.style.color = 'blue';
});
