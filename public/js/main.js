//document.getElementById("player").onload()

eventlistener = Event()

let wavesurfer = WaveShaper.create({
    container: "#player"
})

function loadPlayer() {
    wavesurfer.load("/public/hehehe.mp3");
}

loadPlayer()