const video = document.getElementById('video');
const playBtn = document.getElementById('videoBtn');

playBtn.addEventListener('click', () => {
    if(playBtn.classList.contains('active')) {
        video.play();
    } else {
        video.pause();
    }
    playBtn.firstChild.classList.toggle('fa-play');
    playBtn.firstChild.classList.toggle('fa-pause');
    playBtn.classList.toggle('active');
})