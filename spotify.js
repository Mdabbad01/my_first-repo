console.log("welcome to spotify");

// Initialize the variables

let songIndex=0;
let audioElement = new Audio ('Heatwave.mp3');
let masterplay= document.getElementById('masterplay');
let myprogressbar= document.getElementById('myprogressbar');
let gif=document.getElementById('gif');
let songItems = Array.from( document.getElementsByClassName('songitem'));

//  declare songs

// let songs =[
    
//     {songName: "Cheap Thrills",filepath:"spotify clone/cheapthrills.mp3",filepath:"spotify clone/cheap thrills.jpeg"},
//     {songName:"faded.mp3",filepath:"spotify clone/faded.mp3",filpath:"spotify clone/faded.jpeg"},
//     {songName:"fearless.mp3",filepath:"spotify clone/fearless.mp3",Filepath:"spotify clone/fearless.jpg"},
//     {songName:"Let me love you ",filepath:"spotify/let me love you.mp3",filepath:"spotify clone/let me.jpeg"},
//     {songName:"Heat wave",filepath:"spotify clone/Heatwave.mp3",filepath:"spotify clone /shape of you.jpeg"},
// ]

// songItems.forEach((element,i)=>{
//     console.log(element,i);
//     element.getElementsByTagName("img")[0].src = songs[i].filepath;
    
    



// audioElement.play();

// Handle play/pause click
masterplay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        gif.style.opacity=1;


    }
    else{
        audioElement.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
        


})

// listen to events
audioElement.addEventListener('timeupdate',()=>{


    
    // update seekbar
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    
    myprogressbar.value=progress
})
myprogressbar.addEventListener('change',()=>{
     audioElement.currentTime = myprogressbar.value*audioElement.duration/100;
})
