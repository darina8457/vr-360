document.addEventListener("DOMContentLoaded", () => {

const overlay = document.getElementById("vrOverlay");
const closeBtn = document.getElementById("closeVR");
const sky = document.getElementById("sky");
const vrScene = document.getElementById("vrScene");

const panoramas = {
  "ivan-rilski.jpg": "#pano-ivan-rilski",
  "minen-muzei.jpg": "#pano-minen-muzei",
  "krakra1.jpg": "#pano-krakra1",
  "krakra.jpg": "#pano-krakra",
  "minna-direkcia.jpg": "#pano-minna-direkcia",
  "palace.jpg": "#pano-palace",
  "park.jpg": "#pano-park"
};

// страницата с всички турове
document.querySelectorAll(".vr-enter").forEach(btn => {

  btn.addEventListener("click", () => {

    const panoFile = btn.dataset.pano;

    if (overlay && sky) {

      sky.setAttribute("src", panoramas[panoFile]);
      overlay.style.display = "block";

    }
  });
});

if (closeBtn) {

  closeBtn.addEventListener("click", () => {

    overlay.style.display = "none";

    if (vrScene && vrScene.is("vr-mode")) {
      vrScene.exitVR();
    }

  });
}
});

// страниците с панорами
const vrScene = document.getElementById("vrScene");
const enterVRBtn = document.getElementById("enterVR");

if (vrScene && enterVRBtn) {
  enterVRBtn.addEventListener("click", () => {

    const startVR = () => vrScene.enterVR();

    if (vrScene.hasLoaded) {
      startVR();
    } else {
      vrScene.addEventListener("loaded", startVR, { once: true });
    }

  });
}
