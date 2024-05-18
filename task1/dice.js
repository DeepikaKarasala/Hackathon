const canvas = document.getElementById("diceCanvas");
const ctx = canvas.getContext("2d");
var tokenSum = [];
const status = document.getElementById('rollWords');

function drawDice(number) {
    //ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "black";
    ctx.lineWidth = 5;
    ctx.strokeRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "black";

    const dotRadius = 10;
    const positions = [
        [],
        [{ x: 100, y: 100 }],
        [{ x: 50, y: 50 }, { x: 150, y: 150 }],
        [{ x: 50, y: 50 }, { x: 100, y: 100 }, { x: 150, y: 150 }],
        [{ x: 50, y: 50 }, { x: 50, y: 150 }, { x: 150, y: 50 }, { x: 150, y: 150 }],
        [{ x: 50, y: 50 }, { x: 50, y: 150 }, { x: 150, y: 50 }, { x: 150, y: 150 }, { x: 100, y: 100 }],
        [{ x: 50, y: 50 }, { x: 50, y: 150 }, { x: 150, y: 50 }, { x: 150, y: 150 }, { x: 50, y: 100 }, { x: 150, y: 100 }]
    ];

    positions[number].forEach(pos => {
        ctx.beginPath();
        ctx.arc(pos.x, pos.y, dotRadius, 0, 2 * Math.PI);
        ctx.fill();
    });
}

function rollDice() {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    drawDice(randomNumber);
    
    
}

document.addEventListener("keydown", function(event) {
    if (event.code === "Space") {
        rollDice();
    }
});
drawDice(6);

    