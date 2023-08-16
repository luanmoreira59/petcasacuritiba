
const playButton = document.getElementById("play-button");
const videoOverlay = document.getElementById("video-overlay");
const videoModal = document.getElementById("video-modal");
const videoPlayer = document.getElementById("video-player");
const closeButton = document.getElementById("close-button");

playButton.addEventListener("click", () => {
  const videoId = "LdzIcG21ub0"; 
  const videoSrc = `https://www.youtube.com/embed/${videoId}`;
  videoOverlay.style.display = "flex";
  videoPlayer.src = videoSrc;
});
closeButton.addEventListener("click", () => {
  videoOverlay.style.display = "none";
  videoPlayer.src = ""; 
});
