// 1. FUNCIÓN PARA EL MAPA (Se ejecuta al cargar la página)
document.addEventListener('DOMContentLoaded', function() {
    const mapElement = document.getElementById('map');
    if (mapElement) {
        // Inicializar mapa en Fusagasugá
        var map = L.map('map').setView([4.3361, -74.3633], 13);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; OpenStreetMap contributors'
        }).addTo(map);

        L.marker([4.3361, -74.3633]).addTo(map)
            .bindPopup('¡Bienvenidos a Fusagasugá!')
            .openPopup();
    }
});

// 2. FUNCIÓN PARA IDIOMAS (Se ejecuta al tocar el botón)
function toggleLanguage() {
    const esElements = document.querySelectorAll('.lang-es');
    const enElements = document.querySelectorAll('.lang-en');

    if (esElements.length === 0 || enElements.length === 0) {
        console.log("No se encontraron elementos con las clases lang-es o lang-en");
        return;
    }

    // Leemos el estado real del primer elemento en español
    const isSpanishVisible = window.getComputedStyle(esElements[0]).display !== 'none';

    if (isSpanishVisible) {
        // OCULTAR ESPAÑOL - MOSTRAR INGLÉS
        esElements.forEach(el => el.style.display = 'none');
        enElements.forEach(el => el.style.display = 'block');
    } else {
        // MOSTRAR ESPAÑOL - OCULTAR INGLÉS
        esElements.forEach(el => el.style.display = 'block');
        enElements.forEach(el => el.style.display = 'none');
    }
}
