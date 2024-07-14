console.log("%c\n           /\\_____/\\ \r\n          /  o   o  \\ \r\n         ( ==  ^  == ) \r\n          )         ( \r\n         (           ) \r\n        ( (  )   (  ) ) \r\n       (__(__)___(__)__)\n    ", "font-weight:bold; font-size:15px;color:#ff4747")
document.addEventListener('DOMContentLoaded', () => {
    const body = document.querySelector('section');
    body.classList.add('animate__animated', 'animate__fadeIn', 'animate__fadeInUp');
    setTimeout(() => {
        body.classList.remove('animate__animated', 'animate__fadeIn', 'animate__fadeInUp');
    }, 1800);

});
document.addEventListener('DOMContentLoaded', () => {
    const text = '@dwibudifitriadi';
    const textContainer = document.getElementById('animated-text');
    const delay = 120;

    setTimeout(() => {
        text.split('').forEach((char, index) => {
            const span = document.createElement('span');
            span.textContent = char;
            span.style.opacity = 0;
            span.style.animation = `fadeIn 0.5s ${index * delay}ms forwards`;
            textContainer.appendChild(span);
        });
    }, 1000);
});
const darkmode = document.getElementById('darkmode');
const toggleBg = document.getElementById('toggle-bg');
const toggleCircle = document.getElementById('toggle-circle');
const targetdarkmode = document.getElementById('targetdarkmode');
const icontheme = document.getElementById('icontheme');
if (localStorage.getItem('darkmode') === 'enabled') {
    darkmode.checked = true;
    enableDarkMode();
} else {
    darkmode.checked = false;
    disableDarkMode();
}
darkmode.addEventListener('change', () => {
    if (darkmode.checked) {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
});

function enableDarkMode() {
    toggleBg.classList.remove('bg-slate-500');
    toggleBg.classList.add('bg-white');
    icontheme.classList.remove('bg-white', 'bx-sun');
    icontheme.classList.add('bg-black', 'bx-moon', 'text-slate-200');
    targetdarkmode.classList.add('dark', 'duration-150', 'transition-all');
    toggleCircle.classList.add('translate-x-full', 'bg-gray-700');
    localStorage.setItem('darkmode', 'enabled');
}
function disableDarkMode() {
    toggleBg.classList.remove('bg-white');
    toggleBg.classList.add('bg-slate-500');
    icontheme.classList.remove('bg-black', 'bx-moon', 'text-slate-200');
    icontheme.classList.add('bg-white', 'bx-sun');
    targetdarkmode.classList.remove('dark', 'duration-150', 'transition-all');
    toggleCircle.classList.remove('translate-x-full', 'bg-gray-700');
    localStorage.setItem('darkmode', 'disabled');
}
const canvas = document.getElementById('drawingCanvas');
const ctx = canvas.getContext('2d');
function resizeCanvas() {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

let drawing = false;
let currentColor = 'rgba(245, 101, 101, 0.5)';

function getCursorPosition(event) {
    const rect = canvas.getBoundingClientRect();
    const clientX = event.touches ? event.touches[0].clientX : event.clientX;
    const clientY = event.touches ? event.touches[0].clientY : event.clientY;
    return {
        x: clientX - rect.left,
        y: clientY - rect.top
    };
}

function startDrawing(event) {
    drawing = true;
    draw(event);
}

function endDrawing() {
    drawing = false;
    ctx.beginPath();
}

function draw(event) {
    if (!drawing) return;

    const { x, y } = getCursorPosition(event);

    ctx.lineWidth = 5;
    ctx.strokeStyle = currentColor;

    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x, y);
}

function setColor(color) {
    currentColor = color;
}

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

document.getElementById('red').addEventListener('click', () => setColor('rgba(245, 101, 101, 0.5)'));
document.getElementById('green').addEventListener('click', () => setColor('rgba(72, 187, 120, 0.5)'));
document.getElementById('blue').addEventListener('click', () => setColor('rgba(66, 153, 225, 0.5)'));
document.getElementById('clear').addEventListener('click', clearCanvas);

canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mouseup', endDrawing);
canvas.addEventListener('mousemove', draw);

canvas.addEventListener('touchstart', startDrawing);
canvas.addEventListener('touchend', endDrawing);
canvas.addEventListener('touchmove', draw);