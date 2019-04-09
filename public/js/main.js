let startLabel = document.getElementById("startTime")
let endLabel = document.getElementById("endTime")
let ppbutton = document.getElementById("playpause")
let label = document.getElementById("label")
let duration
let playing = new Boolean(false);
// let startSliderValue = start.value
// let endSliderValue = end.value

let wavesurfer = WaveSurfer.create({
  container: "#waveform",
  waveColor: "orange",
  progressColor: "dimgrey"
});

wavesurfer.load('sample.mp3')

wavesurfer.on('ready', function () {
  duration = Math.floor(wavesurfer.getDuration())
})

let slider = document.getElementById('slider');
noUiSlider.create(slider, {
 start: [20, 80],
 connect: true,
 step: 1,
 orientation: 'horizontal', // 'horizontal' or 'vertical'
 range: {
   'min': 0,
   'max': duration
 },
 format: wNumb({
   decimals: 0
 })
});

ppbutton.onclick = pp;

// function startInputHandler() {
//   startLabel.innerHTML = start.value
//   end.min = start.value
// }

// function endInputHandler() {
//   endLabel.innerHTML = end.value
//   start.max = end.value
// }

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