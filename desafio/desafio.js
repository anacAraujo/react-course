const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const clearButton = document.getElementById('clear-button');

let drawing = false;
let lastX, lastY;
let currentColor = 'red';

// Event listeners for color selection
// Event listeners for color selection
document.getElementById('color-black').addEventListener('click', () => setColor('black'));
document.getElementById('color-blue').addEventListener('click', () => setColor('blue'));
document.getElementById('color-green').addEventListener('click', () => setColor('green'));
document.getElementById('color-red').addEventListener('click', () => setColor('red'));
document.getElementById('color-pink').addEventListener('click', () => setColor('pink'));
document.getElementById('color-yellow').addEventListener('click', () => setColor('yellow'));

// Event listener for clearing the canvas
clearButton.addEventListener('click', clearCanvas);

// Event listeners for drawing
canvas.addEventListener('mousedown', (e) => {
    drawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
});

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => drawing = false);
canvas.addEventListener('mouseout', () => drawing = false);

function setColor(color) {
    currentColor = color;
}

function draw(e) {
    if (!drawing) return;

    ctx.strokeStyle = currentColor;
    ctx.lineWidth = 2;
    ctx.lineJoin = 'round';
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();

    [lastX, lastY] = [e.offsetX, e.offsetY];
}

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
