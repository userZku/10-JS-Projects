const txt = "Clément c'est vraiment le plus beau <3";

let index = 0;

function writeText() {
    document.body.innerText = txt.slice(0, index);
    index++;
    if (index > txt.length) {
        index = 0;
    }
}

setInterval(writeText, 100);
