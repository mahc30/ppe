// Bingo de 90 bolas)?

let balls = []

for(var i = 1; i <= 90; i++){
    balls.push(i)
}

let selectBall = () => {
    ball = Math.random() * 99 + 1
    ball = Math.floor(ball)
    return ball
}

document.write("Bola seleccionada: " + selectBall());