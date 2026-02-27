// 1. FUNCIONALIDAD DE IDIOMAS
function toggleLanguage() {
    const esElements = document.querySelectorAll('.lang-es');
    const enElements = document.querySelectorAll('.lang-en');
    const isEnglish = enElements[0].style.display === 'block';

    if (isEnglish) {
        // Cambiar a Español
        enElements.forEach(el => el.style.display = 'none');
        esElements.forEach(el => el.style.display = 'block');
    } else {
        // Cambiar a Inglés
        esElements.forEach(el => el.style.display = 'none');
        enElements.forEach(el => el.style.display = 'block');
    }
}

// 2. CONFIGURACIÓN DEL MAPA (LEAFLET)
// Coordenadas de Fusagasugá
const fusaCoords = [4.3361, -74.3638];

// Inicializar el mapa
const map = L.map('map').setView(fusaCoords, 13);

// Añadir capa de OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// 3. AÑADIR PUNTOS DE INTERÉS (MARCADORES)
// Ejemplo: Hacienda Coloma
L.marker([4.3285, -74.3540]).addTo(map)
    .bindPopup('<b>Hacienda Coloma</b><br>Tour del Café / Coffee Tour');

// Ejemplo: Cerro del Quininí (Ubicación aproximada de acceso)
L.marker([4.3000, -74.4500]).addTo(map)
    .bindPopup('<b>Cerro del Quininí</b><br>Senderismo / Hiking');

// Ejemplo: Plaza Mayor
L.marker([4.3368, -74.3631]).addTo(map)
    .bindPopup('<b>Plaza Mayor</b><br>Cultura / Culture');
