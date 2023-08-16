console.log("Welcome to My Spotify Clone");

//Initialize the variables
let songIndex = 0;
let song1 = new Audio('/Other Data/songs/1.mp3');
let masterPlay = document.getElementsByClassName('masterPlay')[0];
let myProgressBar = document.getElementsByClassName('myProgressBar');
// masterPlay.paused();
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
masterPlay.addEventListener('click', ()=> {
    if (song1.paused|| (song1.currentTime <=0)){
        song1.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    }
    else {
        song1.pause();
        masterPlay.classList.add('fa-play-circle');
        masterPlay.classList.remove('fa-pause-circle');
    }
})