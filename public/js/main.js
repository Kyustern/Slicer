let startLabel = document.getElementById("startTime")
let endLabel = document.getElementById("endTime")
let ppbutton = document.getElementById("playpause")
let label = document.getElementById("label")
let duration
let startEnd
let playing = new Boolean(false);
// let startSliderValue = start.value
// let endSliderValue = end.value

let wavesurfer = WaveSurfer.create({
  container: "#waveform",
  waveColor: "orange",
  progressColor: "dimgrey",
  backend: 'MediaElement'
});

wavesurfer.load('sample.mp3')

const slider = document.getElementById('slider');
const params = duration => ({
  start: [0, musicDuration],
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
})
 noUiSlider.create(slider, params() );

wavesurfer.on('ready', function () {
  duration = Math.floor(wavesurfer.getDuration())
  slider.range['max'] = duration
})

ppbutton.onclick = pp;

function updateStartEnd(params) {
  startEnd = slider.noUiSlider.get()
  console.log(startEnd);
  
}

function pp() {
  if (playing == true) {
    wavesurfer.pause()
    label.innerHTML = "play_circle_outline"
    playing = false
    //console.log(playing)
  }
  else {
    wavesurfer.play()//([start[, end]])
    label.innerHTML = "pause"
    playing = true
    //console.log(playing)
  }
}