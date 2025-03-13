function getRandomColor() {
    let letter = "0123456789ABCDEF";
    let color = "#"
    for (let i = 0; i < 6; i++) {
        color += letter[Math.floor(Math.random() * 16)];
    }
    return color
}

function randomizerColor() {
    let randomColor = getRandomColor();
    document.body.style.backgroundColor = randomColor;
}