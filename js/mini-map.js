// ===== мини интерактивна карта за страниците на обектите =====


const miniMap = L.map('miniMap', {
  zoomControl: true,
  scrollWheelZoom: true,
  dragging: true
}).setView([42.55, 23.05], 10);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(miniMap);

// пинчета
const blueIcon = L.icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-blue.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41]
});

const redIcon = L.icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41]
});

const activeIcon = L.icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-violet.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [35, 55],
  iconAnchor: [17, 55]
});

// всички обекти
const landmarks = [
  {
    id: 'duhlata',
    name: 'Пещера Духлата',
    coords: [42.4960150374879, 23.195839011598828],
    url: 'duhlata.html',
    type: 'around'
  },
  {
    id: 'ivan-letni',
    name: 'Храм "Св. Иван Летни"',
    coords: [42.52189236245759, 22.863418459249317],
    url: 'ivan-letni.html',
    type: 'around'
  },
  {
    id: 'ivan-rilski',
    name: 'Църква "Св. Иван Рилски"',
    coords: [42.60959429996185, 23.030656423052687],
    url: 'ivan-rilski.html',
    type: 'city'
  },
  {
    id: 'jivata-voda',
    name: 'Извор "Живата вода"',
    coords: [42.52436077641349, 23.201942490491863],
    url: 'jivata-voda.html',
    type: 'around'
  },
  {
    id: 'krakra',
    name: 'Крепост Кракра',
    coords: [42.59461123055173, 23.017650438397528],
    url: 'krakra.html',
    type: 'city'
  },
  {
    id: 'minen-muzei',
    name: "Подземен минен музей",
    coords: [42.60961081112981, 23.029401197926184],
    url: 'minen-muzei.html',
    type: 'city'
  },
  {
    id: 'minna-direkcia',
    name: "Минна дирекция",
    coords: [42.60929431177179, 23.03019893839841],
    url: 'minna-direkcia.html',
    type: 'city'
  },
  {
    id: 'orlite',
    name: "Хижа Орлите",
    coords: [42.56477884699477, 22.993804257451348],
    url: 'orlite.html',
    type: 'around'
  },
  {
    id: 'palace',
    name: "Дворец на културата",
    coords: [42.6066932204157, 23.029074951888948],
    url: 'palace.html',
    type: 'city'
  },
  {
    id: 'selimica',
    name: "хижа Селимица",
    coords: [42.57311109138162, 23.20354269606907],
    url: 'selimica.html',
    type: 'around'
  },
  {
    id: 'slavei',
    name: "Хижа Славей",
    coords: [42.56995569669559, 23.035961696068934],
    url: 'slavei.html',
    type: 'around'
  },
  {
    id: 'zemen',
    name: "Земенски манастир",
    coords: [42.46776087052662, 22.738086123044305],
    url: 'zemen.html',
    type: 'around'
  },
];

// активната страница
const activeId = document
  .getElementById('miniMap')
  .dataset.active;


const group = L.featureGroup();

landmarks.forEach(lm => {
  let icon;

  if (lm.id === activeId) {
    icon = activeIcon;
  } else {
    icon = lm.type === 'city' ? blueIcon : redIcon;
  }

  const marker = L.marker(lm.coords, { icon })
    .addTo(group)
    .bindTooltip(lm.name);

  // при кликане отваря страницата
  marker.on('click', () => {
    window.location.href = lm.url;
  });

  // центриране
  if (lm.id === activeId) {
    miniMap.setView(lm.coords, 12);
  }
});

group.addTo(miniMap);

