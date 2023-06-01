const video = document.getElementById('video');
const playBtn = document.getElementById('videoBtn');
const aboutBtns = document.querySelectorAll('.about__btn');
const aboutTexts = document.querySelectorAll('.about__texts .text');

playBtn.addEventListener('click', () => {
    if(playBtn.classList.contains('play')) {
        video.play();
    } else {
        video.pause();
    }
    playBtn.firstChild.classList.toggle('fa-play');
    playBtn.classList.toggle('play');
    playBtn.classList.toggle('pause');
});

aboutBtns.forEach(btn => btn.addEventListener('click', () => {
    aboutBtns.forEach(allBtn => allBtn.classList.remove('active'));
    aboutTexts.forEach(text => text.classList.remove('active'));

    const text = document.getElementById(`${btn.innerHTML}`);
    btn.classList.add('active');
    text.classList.add('active');
}));