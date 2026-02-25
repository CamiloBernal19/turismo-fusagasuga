// Lógica de Idioma
function toggleLanguage() {
    const esElements = document.querySelectorAll('.lang-es');
    const enElements = document.querySelectorAll('.lang-en');
    
    esElements.forEach(el => el.style.display = el.style.display === 'none' ? 'block' : 'none');
    enElements.forEach(el => el.style.display = el.style.display === 'none' ? 'block' : 'none');
}

// Lógica del Mapa centrado en Fusagasugá
var map = L.map('map').setView([4.3365, -74.3638], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// Ejemplo de pin para una experiencia real
L.marker([4.3365, -74.3638]).addTo(map)
    .bindPopup('Fusagasugá: Ciudad Jardín');
