let start = document.getElementById("start")
let end = document.getElementById("end")
let startLabel = document.getElementById("startTime")
let endLabel = document.getElementById("endTime")
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
  duration = Math.floor(wavesurfer.getDuration())
  start.max = duration
  end.max = duration

  console.log(duration)
  
  //init()
})

ppbutton.onclick = pp;

// function init() {
//   wavesurfer.play()
// }

function startInputHandler() {
  startLabel.innerHTML = start.value
  end.min = start.value
}

function endInputHandler() {
  startLabel.innerHTML = start.value
  start.max = end.value
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