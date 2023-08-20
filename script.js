console.log("Welcome to My Spotify Clone");

//Initialize the variables
let songIndex = 0;
let audioElement = new Audio('Other Data/songs/1.mp3');
let masterPlay = document.getElementsByClassName('masterPlay')[0];
let myProgressBar = document.getElementById('myProgressBar');
let Dancing_bars = document.getElementById('dancing_bar');
let songItem = Array.from(document.getElementsByClassName('songItem'));
let Master_Song_Name = document.getElementById('masterPlaySongname');


//Array of Object

let songs = [
    { songName: 'King Of The Street - Emiway Bantai', filePath: '/Other Data/songs/1.mp3', coverPath: '/Other Data/covers/1.jpg' },
    { songName: 'Company - Emiway Bantai', filePath: '/Other Data/songs/2.mp3', coverPath: '/Other Data/covers/2.jpg' },
    { songName: 'Kudi - Emiway Bantai', filePath: '/Other Data/songs/3.mp3', coverPath: '/Other Data/covers/3.jpg' },
    { songName: 'Royal Rumble - Emiway Bantai', filePath: '/Other Data/songs/4.mp3', coverPath: '/Other Data/covers/4.jpg' },
    { songName: 'Choco - Emiway Bantai', filePath: '/Other Data/songs/5.mp3', coverPath: '/Other Data/covers/5.jpg' },
    { songName: 'Brown Munde - Emiway Bantai', filePath: '/Other Data/songs/6.mp3', coverPath: '/Other Data/covers/6.jpg' },
    { songName: 'My Time - Emiway Bantai', filePath: '/Other Data/songs/7.mp3', coverPath: '/Other Data/covers/7.jpg' },
    { songName: 'Round One - Emiway Bantai', filePath: '/Other Data/songs/8.mp3', coverPath: '/Other Data/covers/8.jpg' },
    { songName: 'Machayenge - Emiway Bantai', filePath: '/Other Data/songs/9.mp3', coverPath: '/Other Data/covers/9.jpg' },
    { songName: 'Freeverse Feast - Emiway Bantai', filePath: '/Other Data/songs/10.mp3', coverPath: '/Other Data/covers/10.jpg' }
];

//Display Cover Image and Song Name using Array Object
songItem.forEach((element, i) => {
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerHTML = songs[i].songName;
})

// Handle play/pause event
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        Dancing_bars.style.opacity = 1;
        Master_Song_Name.innerHTML = songs[songIndex].songName;
        document.getElementById(`${songIndex}`).classList.remove('fa-play-circle');
        document.getElementById(`${songIndex}`).classList.add('fa-pause-circle');
    }
    else {
        audioElement.pause();
        masterPlay.classList.add('fa-play-circle');
        masterPlay.classList.remove('fa-pause-circle');
        Dancing_bars.style.opacity = 0;
        document.getElementById(`${songIndex}`).classList.add('fa-play-circle');
        document.getElementById(`${songIndex}`).classList.remove('fa-pause-circle');
    }
})


//Listen to Events Play / Pause
audioElement.addEventListener('timeupdate', () => {
    // Update Seekbar
    let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
})

//Seekbar Action Event
myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})


//Stop Another Song Play
const makeAllPlay = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
    })
}

// Play List Songs
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        if (audioElement.paused) {
            makeAllPlay();
            songIndex = parseInt(e.target.id);
            e.target.classList.remove('fa-play-circle');
            e.target.classList.add('fa-pause-circle');
            audioElement.src = `/Other Data/songs/${songIndex + 1}.mp3`;
            audioElement.currentTime = 0;
            audioElement.play();
            masterPlay.classList.add('fa-pause-circle');
            masterPlay.classList.remove('fa-play-circle');
            Master_Song_Name.innerHTML = songs[songIndex].songName;
            Dancing_bars.style.opacity = 1;
        } else {
            audioElement.pause();
            masterPlay.classList.add('fa-play-circle');
            masterPlay.classList.remove('fa-pause-circle');
            Dancing_bars.style.opacity = 0;
            document.getElementById(`${songIndex}`).classList.add('fa-play-circle');
            document.getElementById(`${songIndex}`).classList.remove('fa-pause-circle');
        }
    })
})


//Play Previous 
document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 9;
        document.getElementById(`${0}`).classList.remove('fa-pause-circle');
        document.getElementById(`${0}`).classList.add('fa-play-circle');
        document.getElementById(`${9}`).classList.remove('fa-play-circle');
        document.getElementById(`${9}`).classList.add('fa-pause-circle');

    } else {
        songIndex -= 1;
    }
    audioElement.src = `/Other Data/songs/${songIndex + 1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.add('fa-pause-circle');
    masterPlay.classList.remove('fa-play-circle');
    Master_Song_Name.innerHTML = songs[songIndex].songName;
    Dancing_bars.style.opacity = 1;
    document.getElementById(`${songIndex+1}`).classList.remove('fa-pause-circle');
    document.getElementById(`${songIndex+1}`).classList.add('fa-play-circle');
    document.getElementById(`${songIndex}`).classList.remove('fa-play-circle');
    document.getElementById(`${songIndex}`).classList.add('fa-pause-circle');
})


//Play Next
document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 9) {
        songIndex = 0;
        document.getElementById(`${9}`).classList.add('fa-play-circle');
        document.getElementById(`${9}`).classList.remove('fa-pause-circle');
        document.getElementById(`${0}`).classList.remove('fa-play-circle');
        document.getElementById(`${0}`).classList.add('fa-pause-circle');
    }
    else {
        songIndex += 1;
    }
    audioElement.src = `/Other Data/songs/${songIndex + 1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.add('fa-pause-circle');
    masterPlay.classList.remove('fa-play-circle');
    Master_Song_Name.innerHTML = songs[songIndex].songName;
    Dancing_bars.style.opacity = 1;
    document.getElementById(`${songIndex - 1}`).classList.add('fa-play-circle');
    document.getElementById(`${songIndex - 1}`).classList.remove('fa-pause-circle');
    document.getElementById(`${songIndex}`).classList.remove('fa-play-circle');
    document.getElementById(`${songIndex}`).classList.add('fa-pause-circle');

})