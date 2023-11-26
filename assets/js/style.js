// Object.defineProperty(HTMLMediaElement.prototype, 'playing', {
//     get: function () {
//         return !!(this.currentTime > 0 && !this.paused && !this.ended && this.readyState > 2);
//     }});

// $('body').on('click touchstart', function () {
//     const videoElement = document.getElementById('home_video');
//     if (videoElement.playing) {
//         // video is already playing so do nothing
//     }
//     else {
//         // video is not playing
//         // so play video now
//         videoElement.play();
//     }
// });

$('.menu a').on('click', function(e) {
    $('.toggler').prop( "checked", false);
});