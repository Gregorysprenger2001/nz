/*
Skript für Neuseelandreie

*/

//Karte initialisieren
let lat=-37.882778
let lng= 175.636667
let zoom=11

let stop= {  
    nr: 4,
    title: "Cormandel Peninsula",
    usr:"Gregorysprenger2001",
    lat: -37.882778,
    lng: 175.636667,
    zoom: 11,
}
 
let map = L.map('map').setView([lat, lng], zoom);

//Hintergrundkarte definieren

        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);

        //Marker zeichnen

        let marker = L.marker([lat, lng]).addTo(map);
        //Popup definieren und öffnen
        
            marker.bindPopup(`
                <b>Hello world!</b>
                <br>
                <h2>Cormandel Peninsula</h2>
                <ul>
                <li> Geogr. Breite: ${lat.toFixed(5)}°</li>
                <li> Geogr. Länge: ${lng.toFixed(5)}°</li>
                </ul>
                `).openPopup();
