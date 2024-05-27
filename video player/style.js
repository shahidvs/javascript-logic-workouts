//get our elements
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');


// build out functions
function togglePlay() {
    const method = video.paused ? 'play' : 'pause';
    video[method]();
  }
  
  function updateButton() {
    const icon = video.paused ? '▶️' : '⏸️';
    console.log(icon);
    // Assuming 'toggle' is a button element
    toggle.textContent = icon;
  }

    

  function skip(){
    video.currentTime += parseFloat(this.dataset.skip);
  }

  function handleRangeUpdate(){
   video[this.name] = this.value;
   
  }
  
  function handleProgress(){
    const percent =(video.currentTime / video.duration) * 100;
    progressBar.style.width = `${percent}%`;
  }

  function scrub(e){
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
  }

  function handlePress(e) {
    e.code === 'ArrowRight' ? video.currentTime += 10 : e.code === 'ArrowLeft' ? video.currentTime -= 25 : null;
}
   
  
  // Assuming 'video' and 'toggle' are defined  in your code
  video.addEventListener('click', togglePlay);
  video.addEventListener('play', updateButton);
  video.addEventListener('pause', updateButton);
  toggle.addEventListener('click', togglePlay);

  video.addEventListener('timeupdate',handleProgress)

  skipButtons.forEach(button => button.addEventListener('click',skip));
  ranges.forEach(range => range.addEventListener('change',handleRangeUpdate));
  ranges.forEach(range => range.addEventListener('mousemove',handleRangeUpdate));
   
  let mousedown =false;
  progress.addEventListener('click',scrub);
  progress.addEventListener('mousemove',(e) => mousedown  && scrub(e)); //when mousedown statement is true and move to scrub ,if mousedown false
                                                                        // and statement is false
  progress.addEventListener('mousedown',() => mousedown =true);
  progress.addEventListener('mouseup',() => mousedown = false);

  video.addEventListener('keydown', handlePress);


  



 






