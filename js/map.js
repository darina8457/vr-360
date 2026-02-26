// Създаване на картата
var map = L.map('map').setView([42.605, 23.037], 14);

// Слой с картата
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// група за всички пинчета
var allMarkers = L.featureGroup().addTo(map);

// === Пинчета върху картата ===

L.marker([42.60929431177179, 23.03019893839841])
  .addTo(allMarkers)
  .bindTooltip('Минна дирекция')
  .on('click', function () {
    window.location.href = 'landmarks/minna-direkcia.html';
  });

L.marker([42.60961081112981, 23.029401197926184])
  .addTo(allMarkers)
  .bindTooltip('Минен музей')
  .on('click', function () {
    window.location.href = 'landmarks/minen-muzei.html';
  });

L.marker([42.59461123055173, 23.017650438397528])
  .addTo(allMarkers)
  .bindTooltip('Крепост Кракра')
  .on('click', function () {
    window.location.href = 'landmarks/krakra.html';
  });

L.marker([42.60959429996185, 23.030656423052687])
  .addTo(allMarkers)
  .bindTooltip('Църква Св. Иван Рилски')
  .on('click', function () {
    window.location.href = 'landmarks/ivan-rilski.html';
  });

L.marker([42.6066932204157, 23.029074951888948])
  .addTo(allMarkers)
  .bindTooltip('Дворец на културата')
  .on('click', function () {
    window.location.href = 'landmarks/palace.html';
  });

  // червени пинчета
const redIcon = L.icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

L.marker([42.4960150374879, 23.195839011598828], { icon: redIcon })
  .addTo(allMarkers)
  .bindTooltip('Пещера Духлата')
  .on('click', function () {
    window.location.href = 'landmarks/duhlata.html';
  });

L.marker([42.52436077641349, 23.201942490491863], { icon: redIcon })
  .addTo(allMarkers)
  .bindTooltip('Извор Живата вода')
  .on('click', function () {
    window.location.href = 'landmarks/jivata-voda.html';
  });

  // храм "Св. Иван Летни"
L.marker([42.52189236245759, 22.863418459249317], { icon: redIcon })
  .addTo(allMarkers)
  .bindTooltip('Храм "Св. Иван Летни"')
  .on('click', function () {
    window.location.href = 'landmarks/ivan-letni.html';
  });

L.marker([42.46776087052662, 22.738086123044305], { icon: redIcon })
  .addTo(allMarkers)
  .bindTooltip('Земенски манастир')
  .on('click', function () {
    window.location.href = 'landmarks/zemen.html';
  });

L.marker([42.56995569669559, 23.035961696068934], { icon: redIcon })
  .addTo(allMarkers)
  .bindTooltip('Хижа Славей')
  .on('click', function () {
    window.location.href = 'landmarks/slavei.html';
  });

L.marker([42.56477884699477, 22.993804257451348], { icon: redIcon })
  .addTo(allMarkers)
  .bindTooltip('Хижа Орлите')
  .on('click', function () {
    window.location.href = 'landmarks/duhlata.html';
  });
  
L.marker([42.57311109138162, 23.20354269606907], { icon: redIcon })
  .addTo(allMarkers)
  .bindTooltip('Хижа Селимица')
  .on('click', function () {
    window.location.href = 'landmarks/duhlata.html';
  });

  // мабащ на картата
  map.fitBounds(allMarkers.getBounds(), {
  padding: [40, 40]
});

