const loaded = () => {
    let games = 0;
    let highScore = 100;
    let score = 0;
    while(score < highScore) {
        score = playPigDice();
        games++;
        if(score > highScore)
            highScore = score;
    }
    setScore(highScore, games);
}
const setScore = (x, y) => {
    let span = `<span>It took ${y} games to score ${x}</span>`;
    document.getElementById("score").innerHTML = span;
}
const roll = () => {
    return Math.floor(Math.random() * 6) + 1;
}
const playPigDice = () => {
    let score = 0;
    let die = roll();
    while(die != 1) {
        score += die;
        die = roll();
    }
    return score;
}