let startLabel = document.getElementById("startTime")
let endLabel = document.getElementById("endTime")
let ppbutton = document.getElementById("playpause")
let label = document.getElementById("label")
let slider = document.getElementById('slider');
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

// NOTES POUR APRES ET TOUT CA :
//#1 : Désactiver l'affichage du curseur de lecture et créer deux barres partant chacune des contrôles du slider et allant vers la waveform (symboliquement le début et la fin de la lecture)
//#2 : Désactiver la coloration après le passage du curseur
//#3 : Quand l'utilisateur modifie les valeurs start et end, griser la waveform et stopper la lecture ET faire apparaitre les barres verticales

wavesurfer.load('sample.mp3')

wavesurfer.on('ready', function () {
  duration = Math.floor(wavesurfer.getDuration())
  sliderInit(duration)
})

ppbutton.onclick = pp;

function updateStartEnd() {
  //startEnd = slider.noUiSlider.get()
  console.log("startEnd");
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

function sliderInit(duration) {
  noUiSlider.create(slider, {
    start: [0, duration],
    connect: true,
    step: 1,
    orientation: 'horizontal',
    range: {
      'min': 0,
      'max': duration
    },
    format: wNumb({
      decimals: 0
    })
  });
}