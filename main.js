var map = L.map('map').setView([-37.882778, 175.636667], 11);
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);
        var marker = L.marker([-37.882778, 175.636667]).addTo(map);
        marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();