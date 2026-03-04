// Създаване на картата
var map = L.map('map').setView([42.55, 23.05], 12);

// Слой с OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Иконки
const iconHistory = L.icon({
  iconUrl: 'assets/icons/history.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41]
});

const iconCulture = L.icon({
  iconUrl: 'assets/icons/culture.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41]
});

const iconReligion = L.icon({
  iconUrl: 'assets/icons/religion.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41]
});

const iconNature = L.icon({
  iconUrl: 'assets/icons/nature.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41]
});

const iconTourism = L.icon({
  iconUrl: 'assets/icons/tourism.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41]
});

// всички забележителности с координати и тип
const landmarks = [
  { name: 'Пещера Духлата', coords: [42.4960150374879, 23.195839011598828], url:'landmarks/duhlata.html', type:'nature' },
  { name: 'Храм "Св. Иван Летни"', coords: [42.52189236245759, 22.863418459249317], url:'landmarks/ivan-letni.html', type:'religion' },
  { name: 'Църква "Св. Иван Рилски"', coords: [42.60959429996185, 23.030656423052687], url:'landmarks/ivan-rilski.html', type:'religion' },
  { name: 'Извор "Живата вода"', coords: [42.52436077641349, 23.201942490491863], url:'landmarks/jivata-voda.html', type:'nature' },
  { name: 'Крепост Кракра', coords: [42.59461123055173, 23.017650438397528], url:'landmarks/krakra.html', type:'history' },
  { name: "Подземен минен музей", coords: [42.60961081112981, 23.029401197926184], url:'landmarks/minen-muzei.html', type:'culture' },
  { name: "Минна дирекция", coords: [42.60929431177179, 23.03019893839841], url:'landmarks/minna-direkcia.html', type:'history' },
  { name: "Хижа Орлите", coords: [42.56477884699477, 22.993804257451348], url:'landmarks/orlite.html', type:'tourism' },
  { name: "Дворец на културата", coords: [42.6066932204157, 23.029074951888948], url:'landmarks/palace.html', type:'culture' },
  { name: "хижа Селимица", coords: [42.57311109138162, 23.20354269606907], url:'landmarks/selimica.html', type:'tourism' },
  { name: "Хижа Славей", coords: [42.56995569669559, 23.035961696068934], url:'landmarks/slavei.html', type:'tourism' },
  { name: "Земенски манастир", coords: [42.46776087052662, 22.738086123044305], url:'landmarks/zemen.html', type:'religion' },
];

// Група за всички маркери
const allMarkers = L.featureGroup().addTo(map);

// Добавяне на маркери
landmarks.forEach(lm => {
  let icon;
  switch (lm.type) {
    case 'history': icon = iconHistory; break;
    case 'culture': icon = iconCulture; break;
    case 'religion': icon = iconReligion; break;
    case 'nature': icon = iconNature; break;
    case 'tourism': icon = iconTourism; break;
  }

  const marker = L.marker(lm.coords, { icon }).addTo(allMarkers)
    .bindTooltip(lm.name)
    .on('click', () => window.location.href = lm.url);
});

// Настройка на видимост и мащаб
map.fitBounds(allMarkers.getBounds(), { padding: [40, 40] });
