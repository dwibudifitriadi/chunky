console.log("%c\n           /\\_____/\\ \r\n          /  o   o  \\ \r\n         ( ==  ^  == ) \r\n          )         ( \r\n         (           ) \r\n        ( (  )   (  ) ) \r\n       (__(__)___(__)__)\n    ", "font-weight:bold; font-size:15px;color:#ff4747")
document.addEventListener('DOMContentLoaded', () => {
    // Get the body element
    const body = document.querySelector('section');

    // Add classes for animation
    body.classList.add('animate__animated', 'animate__fadeIn', 'animate__fadeInUp');

    // Optionally, you can remove the classes after animation ends to avoid repeat animations
    setTimeout(() => {
        body.classList.remove('animate__animated', 'animate__fadeIn', 'animate__fadeInUp');
    }, 1800);

});
document.addEventListener('DOMContentLoaded', () => {
    const text = '@dwibudifitriadi';
    const textContainer = document.getElementById('animated-text');
    const delay = 120; // Delay in milliseconds

    setTimeout(() => {
        text.split('').forEach((char, index) => {
            const span = document.createElement('span');
            span.textContent = char;
            span.style.opacity = 0;
            span.style.animation = `fadeIn 0.5s ${index * delay}ms forwards`;
            textContainer.appendChild(span);
        });
    }, 1000); // Start animation 1 second after page load
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