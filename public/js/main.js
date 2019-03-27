let start = document.getElementById("start")
let end = document.getElementById("end")
let ppbutton = document.getElementById("playpause")
let label = document.getElementById("label")
let duration
let playing = new Boolean(false);
let startSliderValue = start.value
let endSliderValue = end.value

let wavesurfer = WaveSurfer.create({
  container: "#waveform",
  waveColor: "orange",
  progressColor: "dimgrey"
});

wavesurfer.load('sample.mp3')

wavesurfer.on('ready', function () {
  duration = wavesurfer.getDuration();
  console.log(wavesurfer.getDuration());
  //init()
})

ppbutton.onclick = pp;

function init() {
  wavesurfer.play()
}

function sliderToSeconds() {
  
}

function pp() {
  if (playing == true) {
    wavesurfer.pause()
    label.innerHTML = "play_circle_outline"
    playing = false
    //console.log(playing)
  }
  else{
    wavesurfer.play()//([start[, end]])
    label.innerHTML = "pause"
    playing = true
    //console.log(playing)
  }
}