console.log("Welcome to My Spotify Clone");

//Initialize the variables
let songIndex = 0;
let audioElement = new Audio('Other Data/songs/1.mp3');
let masterPlay = document.getElementsByClassName('masterPlay')[0];
let myProgressBar = document.getElementById('myProgressBar');
let Dancing_bars = document.getElementById('dancing_bar');
let songItem = Array.from(document.getElementsByClassName('songItem'));
//Array of Object

let songs = [
    { songName: 'Tere waste falak se me', filePath: '/Other Data/songs/1.mp3', coverPath: '/Other Data/covers/1.jpg' },
    { songName: 'Tere waste falak se me', filePath: '/Other Data/songs/2.mp3', coverPath: '/Other Data/covers/2.jpg' },
    { songName: 'Tere waste falak se me', filePath: '/Other Data/songs/3.mp3', coverPath: '/Other Data/covers/3.jpg' },
    { songName: 'Tere waste falak se me', filePath: '/Other Data/songs/4.mp3', coverPath: '/Other Data/covers/4.jpg' },
    { songName: 'Tere waste falak se me', filePath: '/Other Data/songs/5.mp3', coverPath: '/Other Data/covers/5.jpg' },
    { songName: 'Tere waste falak se me', filePath: '/Other Data/songs/6.mp3', coverPath: '/Other Data/covers/6.jpg' },
    { songName: 'Tere waste falak se me', filePath: '/Other Data/songs/7.mp3', coverPath: '/Other Data/covers/7.jpg' },
    { songName: 'Tere waste falak se me', filePath: '/Other Data/songs/8.mp3', coverPath: '/Other Data/covers/8.jpg' },
    { songName: 'Tere waste falak se me', filePath: '/Other Data/songs/9.mp3', coverPath: '/Other Data/covers/9.jpg' },
    { songName: 'Tere waste falak se me', filePath: '/Other Data/songs/10.mp3', coverPath: '/Other Data/covers/10.jpg'}
];

//Display Cover Image and Song Name using Array Object
songItem.forEach((element,i)=>{
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerHTML= songs[i].songName;
})

// Handle play/pause event
masterPlay.addEventListener('click', ()=> {
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


//Listen to Events Play / Pause
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
   let progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

//Seekbar Action Event
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})


//Stop Another Song Play
const makeAllPlay = () =>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

// Play List Songs
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlay();
        songIndex = parseInt(e.target.id);
        console.log(songIndex);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `/Other Data/songs/${songIndex + 1}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();    
    })
})

