/*
Skript für Neuseelandreie

*/

//Karte initialisieren
let lat=-37.882778
let lng= 175.636667
let zoom=11

let map = L.map('map').setView([lat, lng], zoom);

//Hintergrundkarte definieren

        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);

        //Marker zeichnen

        let marker = L.marker([lat, lng]).addTo(map);
        //Popup definieren und öffnen
        
        marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();