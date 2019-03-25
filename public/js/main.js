let playing = new Boolean(false)

let start = document.getElementById("start")
let end = document.getElementById("end")
let ppbutton = document.getElementById("playpause")
let label = document.getElementById("label")

let startTime = start.nodeValue
let endTime = end.nodeValues

let wavesurfer = WaveSurfer.create({
  container: "#waveform",
  waveColor: "orange",
  progressColor: "dimgrey"
});

console.log(wavesurfer.getProgressColor())

wavesurfer.load('sample.mp3')

wavesurfer.on('ready', function () {
  //init()
})

function init() {
  wavesurfer.play()
}

ppbutton.onclick = pp()

function pp() {
  if (playing == true) {
    wavesurfer.pause()
    label.innerHTML = "play_circle_outline"
    playing = false
    console.log(playing)
  }
  else{
    wavesurfer.play()
    label.innerHTML = "pause"
    playing = true
    console.log(playing)
  }
}