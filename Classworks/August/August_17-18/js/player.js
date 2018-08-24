// video events : load, canplay, play
// video.play();
// video.pause();
// video.currentTime
// video.paused
// video.ended
// video.playbackRate
// video.duration
// video.volume









let video = document.getElementById('vid'),
    remainingTime = document.getElementById('remainingTime'),
    totalTime = document.getElementById('totalTime'),
    playPause = document.getElementById('playPause'),
    begin = document.getElementById('begin'),
    stop = document.getElementById('stop'),
    rewind = document.getElementById('rewind'),
    end = document.getElementById('end'),
    fastForward = document.getElementById('fastForward'),
    volume = document.getElementById('volume'),
    mute = document.getElementById('mute'),
    scrubber = document.getElementById('scrubber'),
    playbackRate = document.getElementById('playbackRate');


let TIME_STEP = 5;
let vol = 0;


/* video.addEventListener('canplay', function() {
    video.play(); // || video.autoplay = true;
}); */


let formatTime = function(seconds) {
    seconds = Math.round(seconds);
    let minutes = 0;
    if (seconds >= 60) {
        minutes = Math.floor(seconds / 60);
        seconds = (seconds - (minutes * 60));
    }
    seconds = `${seconds}`;
    if (seconds.length == 1) {
        seconds = `0${seconds}`;
    }
    return `${minutes}:${seconds}`;
}



let playOrPauseVideo = function() {
    if (video.paused || video.ended) {
        video.play();
        playPause.innerText = 'Pause';

    } else {
        video.pause();
        playPause.innerText = 'Play';
    }
}


video.addEventListener('click', playOrPauseVideo, false);
playPause.addEventListener('click', playOrPauseVideo, false);


stop.addEventListener('click', function() {
    video.pause();
    video.currentTime = 0;
    playPause.innerText = 'Play';
    video.playbackRate = 1;
    playbackRate.value = 1;
}, false);


begin.addEventListener('click', function() {
    video.currentTime = 0;
}, false);


rewind.addEventListener('click', function() {
    video.currentTime -= TIME_STEP;
}, false);


fastForward.addEventListener('click', function() {
    video.currentTime += TIME_STEP;
}, false);


end.addEventListener('click', function() {
    video.currentTime = video.duration;
    playPause.innerText = 'Play';
}, false);


volume.addEventListener('change', function() {
    video.volume = this.value;
}, false);


video.addEventListener('play', function() {
    totalTime.innerText = formatTime(video.duration);
}, false);


video.addEventListener('timeupdate', function() {
    remainingTime.innerText = formatTime(video.currentTime);
    scrubber.value = video.currentTime;
}, false);


mute.addEventListener('click', function() {
    if (!video.muted) {
        vol = volume.value;
    }
    video.muted = !video.muted;
    if (video.muted) {
        mute.innerText = 'Unmute';
    } else {
        volume.value = vol;
        mute.innerText = 'Mute';
    }
}, false);


scrubber.addEventListener('change', function() {
    video.currentTime = this.value;
}, false);


playbackRate.addEventListener('click', function() {
    video.playbackRate = this.value;
}, false);