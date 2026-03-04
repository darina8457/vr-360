const overlay = document.getElementById("vrOverlay");
const scene = document.getElementById("scene");
const closeBtn = document.getElementById("closeVR");

const panoramas = {
  "ivan-rilski.jpg": "#pano-ivan-rilski",
  "minen-muzei.jpg": "#pano-minen-muzei",
  "krakra1.jpg": "#pano-krakra1",
  "krakra.jpg": "#pano-krakra",
  "minna-direkcia.jpg": "#pano-minna-direkcia",
  "palace.jpg": "#pano-palace",
  "park.jpg": "#pano-park"
};

if (overlay && scene && closeBtn) {

  document.querySelectorAll(".vr-item img").forEach(img => {
    img.addEventListener("click", () => {
      const panoFile = img.closest(".vr-item").dataset.pano;
      const sky = document.getElementById("sky");

      sky.setAttribute("src", panoramas[panoFile]);
      overlay.style.display = "block";
    });
  });

  closeBtn.addEventListener("click", () => {
    overlay.style.display = "none";
  });

}

const fullscreenBtn = document.getElementById("fullscreenBtn");
const vrScene = document.getElementById("vrScene");

fullscreenBtn.addEventListener("click", () => {
  if (vrScene.requestFullscreen) vrScene.requestFullscreen();
  else if (vrScene.webkitRequestFullscreen) vrScene.webkitRequestFullscreen();
  else if (vrScene.msRequestFullscreen) vrScene.msRequestFullscreen();
});
