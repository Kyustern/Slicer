let start = document.getElementById("start")
let end = document.getElementById("end")

// let player = new Howl({
//     src: ['/public/sample.mp3']
// });

let wavesurfer = WaveSurfer.create({
  container: "#waveform",
  waveColor: "orange"
});

wavesurfer.load('sample.mp3')

wavesurfer.on('ready', function () {
  init()
});

// #### FUNCTIONS ####

function init() {

  wavesurfer.play();

  let startTime = start.nodeValue
  let endTime = end.nodeValue

}

console.log("main")