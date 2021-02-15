window.onload = function start() {
    document.getElementById('index').style.background = chooseRandom(hexes);
    document.getElementById('image').src = chooseRandom(images);
    var quote = chooseRandom(quotes);
    document.getElementById('quote').innerText = "\"" + quote + "\"";
}

var hexes = ["#E0BBE4", 
            "#957DAD", 
            "#D291BC", 
            "#FEC8D8", 
            "#FFDFD3"];

var images = ["chewinggum.png", 
            "allmembers.png", 
            "haechan.png", 
            "dream.png", 
            "jaemin.png", 
            "mark.png", 
            "chair.png", 
            "127.png",
            "jisung.png",
            "xiaojun2.png",
            "hendery.png",
            "taeyong.png",
            "taeyong2.png",
            "lucas.png",
            "jungwoo.png",
            "xiaojun3.png"];

var quotes = ["arigato, man", 
            "where's my hair?", 
            "sweeth tooth, i ate all of the skittles",
            "i like my donuts with jam in the middle",
            "be there or be a square", 
            "new culture technology", 
            "Are these pokeballs?",
            "hello my name is marklee", 
            "This is Taipei", 
            "A six-pack is too heavy for me, so now I only walk around with a one-pack",
            "I used to have chocolate abs, but i ate two of them",
            "My friends call me a heater, 'cause i bring the heat",
            "where is the bathroom",
            "My face looks big today",
            "If anyone asks about me, tell them that I'm dead", 
            "The possibility of all of these possibilities being possible is just another possibility that can possibly happen"];

function chooseRandom(array) {
    var index = Math.floor((Math.random() * array.length))
    return array[index];
}