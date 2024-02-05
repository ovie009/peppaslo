// select a video element with id #video, antoplay or play the video after 1500milliseconds
// Select the video element with id #video
const video = document.getElementById('video');

// Delay the video playback by 1500 milliseconds (1.5 seconds)
setTimeout(function() {
  video.play();
}, 500);