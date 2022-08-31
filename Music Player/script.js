const musicContainer = document.getElementById('music-container');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const audio = document.getElementById('audio');
const progress = document.getElementById('progress');
const progrssContainer = document.getElementById('progress-container');
const title = document.getElementById('title');
const cover = document.getElementById('cover');

// Song Titles
const songs = ['walk' , 'combined' , 'past'];


// Keep track of song 
let songIndex = 2;

// Initially long song details into DOM
loadSong(songs[songIndex]);

//Update song details
function loadSong(song) {
    title.innerText = song;
    audio.src = `music/${song}.mp3`;
    cover.src = `images/${song}.jpg`;
}

//play song
function playSong() {
    musicContainer.classList.add('play');
    playBtn.querySelector('i.fas').classList.remove('fa-play');
    playBtn.querySelector('i.fas').classList.add('fa-pause');
    
    audio.play();
}

//Pause song
function pauseSong() {
    musicContainer.classList.add('play');
    playBtn.querySelector('i.fas').classList.add('fa-play');
    playBtn.querySelector('i.fas').classList.remove('fa-pause');
    
    audio.pause();
}

// Previous Song
function prevSong() {
     songIndex--;

     if (songIndex < 0){
        songIndex = songs.length - 1;
     }

     loadSong(songs[songIndex]);
     playSong();
}


// Update progress bar
function updateProgress(e){
    const { duration , currentTime} = e.srcElement;
    console.log(duration);
}

// Next Song
function nextSong() {
    songIndex++;
    
    if (songIndex > (songs.length - 1)){
        songIndex = 0;
    }

    loadSong(songs[songIndex]);
    playSong();
}

// Event Listeners
playBtn.addEventListener('click',() => {
    const isPlaying = musicContainer.classList.contains('play');

    if(isPlaying)   {
        pauseSong();
    } else {
        playSong();    
    }
});

// Change Song
prevBtn.addEventListener('click' , prevSong);
nextBtn.addEventListener('click' , nextSong);

//Time/song Update
audio.addEventListener('timeupdate' , updateProgress);



