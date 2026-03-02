function openFullscreen(button) {
  const scene = button.parentElement.querySelector("a-scene");

  if (scene.requestFullscreen) {
    scene.requestFullscreen();
  } else if (scene.webkitRequestFullscreen) {
    scene.webkitRequestFullscreen();
  } else if (scene.msRequestFullscreen) {
    scene.msRequestFullscreen();
  }
}
