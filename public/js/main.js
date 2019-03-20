const {Howl, Howler} = require('/public/node_modules/howler/dist/howler.js');

let start = document.getElementById("start")
let end = document.getElementById("end")

let startTime = start.nodeValue
let endTime = end.nodeValue

let player = new Howl({
    src: ['/public/hehehe.mp3']
});

console.log("main")

player.play()