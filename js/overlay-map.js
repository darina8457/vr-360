document.addEventListener('DOMContentLoaded', function () {

  const landmarks = [
    { id: 'duhlata', name: 'Пещера Духлата', coords: [42.4960150374879, 23.195839011598828], url:'duhlata.html', type:'nature' },
    { id: 'ivan-letni', name: 'Храм "Св. Иван Летни"', coords: [42.52189236245759, 22.863418459249317], url:'ivan-letni.html', type:'religion' },
    { id: 'ivan-rilski', name: 'Църква "Св. Иван Рилски"', coords: [42.60959429996185, 23.030656423052687], url:'ivan-rilski.html', type:'religion' },
    { id: 'jivata-voda', name: 'Извор "Живата вода"', coords: [42.52436077641349, 23.201942490491863], url:'jivata-voda.html', type:'nature' },
    { id: 'krakra', name: 'Крепост Кракра', coords: [42.59461123055173, 23.017650438397528], url:'krakra.html', type:'history' },
    { id: 'minen-muzei', name: "Подземен минен музей", coords: [42.60961081112981, 23.029401197926184], url:'minen-muzei.html', type:'culture' },
    { id: 'minna-direkcia', name: "Минна дирекция", coords: [42.60929431177179, 23.03019893839841], url:'minna-direkcia.html', type:'history' },
    { id: 'orlite', name: "Хижа Орлите", coords: [42.56477884699477, 22.993804257451348], url:'orlite.html', type:'tourism' },
    { id: 'palace', name: "Дворец на културата", coords: [42.6066932204157, 23.029074951888948], url:'palace.html', type:'culture' },
    { id: 'selimica', name: "хижа Селимица", coords: [42.57311109138162, 23.20354269606907], url:'selimica.html', type:'tourism' },
    { id: 'slavei', name: "Хижа Славей", coords: [42.56995569669559, 23.035961696068934], url:'slavei.html', type:'tourism' },
    { id: 'zemen', name: "Земенски манастир", coords: [42.46776087052662, 22.738086123044305], url:'zemen.html', type:'religion' },
  ];

  const openBtn = document.getElementById('openMap');
  const closeBtn = document.getElementById('closeMap');
  const overlay = document.getElementById('map-overlay');
  const miniMapEl = document.getElementById('miniMap');

  if (!openBtn || !closeBtn || !overlay) return;

  const activeId = miniMapEl?.dataset.active;
  let overlayMap = null;

  const iconHistory = L.icon({ iconUrl: '../assets/icons/history.png', iconSize: [25,41], iconAnchor:[12,41] });
  const iconCulture = L.icon({ iconUrl: '../assets/icons/culture.png', iconSize: [25,41], iconAnchor:[12,41] });
  const iconReligion = L.icon({ iconUrl: '../assets/icons/religion.png', iconSize: [25,41], iconAnchor:[12,41] });
  const iconNature = L.icon({ iconUrl: '../assets/icons/nature.png', iconSize: [25,41], iconAnchor:[12,41] });
  const iconTourism = L.icon({ iconUrl: '../assets/icons/tourism.png', iconSize: [25,41], iconAnchor:[12,41] });
  const iconActive = L.icon({ iconUrl: '../assets/icons/active.png', iconSize:[35,55], iconAnchor:[17,55] });

  function getIcon(lm) {
    if (lm.id === activeId) return iconActive;
    switch (lm.type) {
      case 'history': return iconHistory;
      case 'culture': return iconCulture;
      case 'religion': return iconReligion;
      case 'nature': return iconNature;
      case 'tourism': return iconTourism;
    }
  }

  openBtn.addEventListener('click', function () {
    overlay.style.display = 'flex';

    if (!overlayMap) {
      overlayMap = L.map('overlay-map').setView([42.55, 23.05], 10);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
      }).addTo(overlayMap);

      landmarks.forEach(lm => {
        const marker = L.marker(lm.coords, { icon: getIcon(lm) }).addTo(overlayMap);
        marker.bindTooltip(lm.name);
        marker.on('click', () => window.location.href = lm.url);
      });
    }

    setTimeout(() => overlayMap.invalidateSize(), 200);
  });

  closeBtn.addEventListener('click', function () {
    overlay.style.display = 'none';
  });

});
