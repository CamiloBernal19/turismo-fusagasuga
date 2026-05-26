// --- 1. FUNCIÓN DE IDIOMAS ---
function toggleLanguage() {
    const esElements = document.querySelectorAll('.lang-es');
    const enElements = document.querySelectorAll('.lang-en');

    if (esElements.length === 0) return;

    // Detectamos si el español está visible
    const isSpanishVisible = window.getComputedStyle(esElements[0]).display !== 'none';

    if (isSpanishVisible) {
        esElements.forEach(el => el.style.setProperty('display', 'none', 'important'));
        enElements.forEach(el => el.style.setProperty('display', 'block', 'important'));
    } else {
        esElements.forEach(el => el.style.setProperty('display', 'block', 'important'));
        enElements.forEach(el => el.style.setProperty('display', 'none', 'important'));
    }
}

// --- 2. CONFIGURACIÓN DEL MAPA ---
document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('map')) {
        var map = L.map('map').setView([4.3361, -74.3633], 13);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; OpenStreetMap contributors'
        }).addTo(map);

        L.marker([4.3361, -74.3633]).addTo(map)
            .bindPopup('¡Bienvenidos a Fusagasugá!')
            .openPopup();
    }
});
