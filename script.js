document.addEventListener('DOMContentLoaded', function () {
  const videoPlayer = document.getElementById('videoPlayer');
  const video = document.getElementById('video');
  const playBtn = document.getElementById('playBtn');
  const playIcon = document.getElementById('playIcon');
  const closeBtn = document.getElementById('closeBtn');
  const joinBtn = document.getElementById('joinBtn');

  videoPlayer.volume = 0;

  function togglePlayStop() {
    const isPaused = videoPlayer.paused;
    videoPlayer[isPaused ? 'play' : 'pause']();
    video.style.width = isPaused ? '250px' : '130px';
    video.style.height = isPaused ? 'auto' : '';
    video.classList[isPaused ? 'remove' : 'add']('video--hover');
    joinBtn.style.display = isPaused ? 'flex' : 'none';
    videoPlayer.volume = isPaused ? 1 : 0;
    playIcon.src = isPaused ? './img/play.svg' : './img/pause.svg';
  }

  [playBtn, videoPlayer].forEach(element => element.addEventListener('click', togglePlayStop));

  joinBtn.addEventListener('click', function () {
    videoPlayer.pause();
  });

  closeBtn.addEventListener('click', function (event) {
    event.stopPropagation();
    videoPlayer.pause();
    video.style.display = 'none';
  });

  videoPlayer.addEventListener('ended', function () {
    playIcon.src = './img/play.svg';
    videoPlayer.currentTime = 0;
    videoPlayer.play();
  });
});

