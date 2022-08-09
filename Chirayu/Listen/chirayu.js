function func(x) {
    x.classList.toggle("change");
}


// dark mode
// function func2() {
//     let y=document.body;
//     y.classList.toggle("mode");
// }

let section= document.getElementById("quote");
let content= document.querySelector("#author");
window.addEventListener("scroll",()=>{
    const sectionPos= section.getBoundingClientRect().bottom;
    const screenPos= window.innerHeight;
    if (sectionPos< screenPos){
        content.style.animationName="text";
        content.style.animationDuration="5s";
        content.style.animationDuration="5s";
        // console.log("hello");
    }
})



window.addEventListener("DOMContentLoaded", function () {
    // get the form elements defined in your form HTML above
  
    var form = document.getElementById("invite");
    // var button = document.getElementById("my-form-button");
    var status = document.getElementById("status");
  
    // Success and Error functions for after the form is submitted
  
    function success() {
      form.reset();
      status.classList.add("success");
      status.innerHTML = "Thanks!";
    }
  
    function error() {
      status.classList.add("error");
      status.innerHTML = "Oops! There was a problem.";
    }
  
    // handle the form submission event
  
    form.addEventListener("submit", function (ev) {
      ev.preventDefault();
      var data = new FormData(form);
      ajax(form.method, form.action, data, success, error);
    });
  });
  
  // helper function for sending an AJAX request
  
  function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function () {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        success(xhr.response, xhr.responseType);
      } else {
        error(xhr.status, xhr.response, xhr.responseType);
      }
    };
    xhr.send(data);
  }
  



let songs= [
  {sno:'1', songName: 'Pasoori', filePath: "songs/1.mp3", coverPath: "images/pasoori.jpg"},
  {sno:'2', songName: 'Chaand Baaliyan', filePath: "songs/2.mp3", coverPath: "images/chaand-baaliyan.jpg"},
  {sno:'3', songName: 'Hans Zimmer- Intestellar', filePath: "songs/3.mp3", coverPath: "images/Intestellar.jpg"},
  {sno:'4', songName: 'Lag ja gale', filePath: "songs/4.mp3", coverPath: "images/lag-ja-gale.jpg"},
  {sno:'5', songName: 'Talking to the moon x Play Date', filePath: "songs/5.mp3", coverPath: "images/talking-to-the-moonxplay-date.jpg"},
  {sno:'6', songName: 'The night we met', filePath: "songs/6.mp3", coverPath: "images/the-night-we-met.jpg"},
  {sno:'7', songName: 'Love Nwantiti', filePath: "songs/7.mp3", coverPath: "images/love-nvantiti.jpg"},
  {sno:'8', songName: 'Good Part', filePath: "songs/8.mp3", coverPath: "images/good-part.jpg"},
  {sno:'9', songName: 'Woh Din', filePath: "songs/9.mp3", coverPath: "images/woh-din.jpg"},
  {sno:'10', songName: 'Talking to the moon', filePath: "songs/10.mp3", coverPath: "images/talking-to-the-moon.jpg"},
  {sno:'11', songName: 'Oh no Oh no', filePath: "songs/11.mp3", coverPath: "images/oh-no.jpg"},
  {sno:'12', songName: 'Call me by your name', filePath: "songs/12.mp3", coverPath: "images/call-me-by-your-name.jpg"},
  {sno:'13', songName: 'Mirrors', filePath: "songs/13.mp3", coverPath: "images/mirrors.jpg"},
  {sno:'14', songName: 'Lovely', filePath: "songs/14.mp3", coverPath: "images/lovely.jpg"},
  {sno:'15', songName: 'Safari', filePath: "songs/15.mp3", coverPath: "images/safari.jpg"},
  {sno:'16', songName: 'Jaan Nisaar', filePath: "songs/16.mp3", coverPath: "images/jaan-nisaar.jpg"},
  {sno:'17', songName: 'Chahu mai ya na', filePath: "songs/17.mp3", coverPath: "images/Screenshot 2022-02-10 220141.png"}
]




let MyProgressBar=document.querySelector('#myProgressBar');
      let MyProgressBar2=document.querySelector('#myProgressBar-2');
let play=document.querySelector('#play');
      let play2=document.querySelector('#play-2');
audio=document.querySelector('#audio');
let gif= document.querySelector('#gif');
      let gif2= document.querySelector('#gif-2');

gif.style.opacity=0;
      gif2.style.opacity=0;

  function func3_(){
    if(play.classList.contains('fa-circle-play')){
      play.classList.replace('fa-circle-play', 'fa-circle-pause');
      audio.play();
      gif.style.opacity=1;
    }
    else{
      play.classList.replace('fa-circle-pause', 'fa-circle-play');
      audio.pause();
      gif.style.opacity=0;
    }

          if(play2.classList.contains('fa-circle-play')){
            play2.classList.replace('fa-circle-play', 'fa-circle-pause');
            audio.play();
            gif2.style.opacity=1;
          }
          else{
            play2.classList.replace('fa-circle-pause', 'fa-circle-play');
            audio.pause();
            gif2.style.opacity=0;
          }
  }





let duration=document.getElementById('duration');
      let duration2=document.getElementById('duration-2');

audio.addEventListener('timeupdate', ()=>{
    let progress=parseInt((audio.currentTime/audio.duration)*10000000);
    console.log(progress);
    MyProgressBar.value=progress;
    let min=parseInt(audio.currentTime/60);
    let sec=parseInt(audio.currentTime%60);
    if(parseInt(sec/10)==0){ sec='0'+sec;}
    duration.innerHTML=min+':'+sec;
})


      audio.addEventListener('timeupdate', ()=>{
          let progress=parseInt((audio.currentTime/audio.duration)*10000000);
          console.log(progress);
          MyProgressBar2.value=progress;
          let min=parseInt(audio.currentTime/60);
          let sec=parseInt(audio.currentTime%60);
          if(parseInt(sec/10)==0){ sec='0'+sec;}
          duration2.innerHTML=min+':'+sec;
      })

MyProgressBar.addEventListener('change', ()=>{
  audio.currentTime= MyProgressBar.value*audio.duration/10000000;
})

      MyProgressBar2.addEventListener('change', ()=>{
        audio.currentTime= MyProgressBar2.value*audio.duration/10000000;
      })




let cover=document.getElementById('cover');

let j=0;
let song_name= document.getElementById('name_');
            let song_name2= document.getElementById('name-2');
song_name.innerHTML=songs[0].songName;
            song_name2.innerHTML=songs[0].songName;
            cover.src=songs[0].coverPath;
            
function func6(a){
  j=a-1;
  audio.src=songs[a-1].filePath;
  // if(!audio.paused){    //.paused tells if its paused so !.paused will give if its playing
    // }
  // else{
    func3_();
    audio.play();
    play.classList.replace('fa-circle-play', 'fa-circle-pause');
                play2.classList.replace('fa-circle-play', 'fa-circle-pause');
    gif.style.opacity=1;
                gif2.style.opacity=1;
  // }
  song_name.innerHTML=songs[a-1].songName;
                song_name2.innerHTML=songs[a-1].songName;
                cover.src=songs[a-1].coverPath;
}




let backward=document.querySelector('#backward');
let forward=document.querySelector('#forward');
            let backward2=document.querySelector('#backward-2');
            let forward2=document.querySelector('#forward-2');


function func5(){
  if(j==songs.length-1){
    j=-1;   //as j+1=0 i.e, the first song index
  }

  audio.src=songs[j+1].filePath;
  song_name.innerHTML=songs[j+1].songName;
              song_name2.innerHTML=songs[j+1].songName;
              cover.src=songs[j+1].coverPath;
  func3_();
  audio.play();
  play.classList.replace('fa-circle-play', 'fa-circle-pause');
              play2.classList.replace('fa-circle-play', 'fa-circle-pause');
  gif.style.opacity=1;
              gif2.style.opacity=1;
  j++;
}

function func4(){
  if(j==0){     
    j=songs.length;  
  }
 
  audio.src=songs[j-1].filePath;
  song_name.innerHTML=songs[j-1].songName;
              song_name2.innerHTML=songs[j-1].songName;
              cover.src=songs[j-1].coverPath;
  func3_();
  audio.play();
  play.classList.replace('fa-circle-play', 'fa-circle-pause');
              play2.classList.replace('fa-circle-play', 'fa-circle-pause');
  gif.style.opacity=1;
              gif2.style.opacity=1;
  j--;
}





 


let music_page=document.getElementById('music-page');
function func7(){
  music_page.classList.add('music-page');
  // music_page.classList.remove('music-animate');
}
let cut=document.getElementById('cut');
function func8(){
  // music_page.classList.add('music-animate');
  music_page.classList.remove('music-page');
}


audio.addEventListener('timeupdate', ()=>{

  if(audio.currentTime==audio.duration){
    func5();
  }
})