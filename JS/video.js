document.addEventListener("DOMContentLoaded", function() {
    var video = document.getElementById('gameplay-video');
    var playButton = document.querySelector('.custom-play-button');

    function toggleVideo() {
        if (video.paused) {
            video.play();
            playButton.style.display = 'none'; // Hide the play button
        } else {
            video.pause();
            playButton.style.display = 'block'; // Show the play button
        }
    }

    playButton.addEventListener('click', toggleVideo);

    video.addEventListener('mouseover', function() {
        if (!video.paused) {
            video.pause();
            playButton.style.display = 'block'; // Show the play button on hover
        }
    });

    video.addEventListener('mouseout', function() {
        if (!video.paused) {
            video.play();
            playButton.style.display = 'none'; // Hide the play button when not hovering
        }
    });
});