console.log("Welcome to My Spotify Clone");

//Initialize the variables
let songIndex = 0;
let audioElement = new Audio('Other Data/songs/1.mp3');
let masterPlay = document.getElementsByClassName('masterPlay')[0];
let myProgressBar = document.getElementById('myProgressBar');
let Dancing_bars = document.getElementById('dancing_bar');

//Array of Object

let songs = [
    { songName: 'Tere waste falak se me', filtPath: '/Other Data/songs/1.mp3', coverPath: '/Other Data/covers/10.jpg' },
    { songName: 'Tere waste falak se me', filtPath: '/Other Data/songs/1.mp3', coverPath: '/Other Data/covers/10.jpg' },
    { songName: 'Tere waste falak se me', filtPath: '/Other Data/songs/1.mp3', coverPath: '/Other Data/covers/10.jpg' },
    { songName: 'Tere waste falak se me', filtPath: '/Other Data/songs/1.mp3', coverPath: '/Other Data/covers/10.jpg' },
    { songName: 'Tere waste falak se me', filtPath: '/Other Data/songs/1.mp3', coverPath: '/Other Data/covers/10.jpg' },
    { songName: 'Tere waste falak se me', filtPath: '/Other Data/songs/1.mp3', coverPath: '/Other Data/covers/10.jpg' }
];


// Handle play/pause event
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        Dancing_bars.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.add('fa-play-circle');
        masterPlay.classList.remove('fa-pause-circle');
        Dancing_bars.style.opacity = 0;
    }
})


//Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})
