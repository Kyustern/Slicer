let start = document.getElementById("start")
let end = document.getElementById("end")

let startTime = start.nodeValue
let endTime = end.nodeValue

// let player = new Howl({
//     src: ['/public/sample.mp3']
// });

let wavesurfer = WaveSurfer.create({
  container: "#waveform",
  waveColor: "orange"
});

wavesurfer.load('public/sample.mp3')

console.log("main")

//player.play()