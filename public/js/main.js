const {Howl, Howler} = require('howler');

let start = document.getElementById("start")
let end = document.getElementById("end")

let startTime = 

let player = new Howl({
    src: ['public/hehehe.mp3']
})

player.play()