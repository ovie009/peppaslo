// select a video element with id #video, antoplay or play the video after 1500milliseconds
// Select the video element with id #video
const video = document.getElementById('video');

// Function to play the video
function playVideo() {
    video.play();
}

// Add touch event listener to the document, then play the video
document.addEventListener('touchstart', playVideo);

// Delay the video playback by 1500 milliseconds (1.5 seconds)
setTimeout(function() {
    playVideo
}, 500);

// check if video is playing every 2 seconds
// if its not play video
setInterval(() => {
    if (video.paused) {
        playVideo
    }
}, 3000);

// onclick play video
document.addEventListener('click', function() {
    playVideo
});