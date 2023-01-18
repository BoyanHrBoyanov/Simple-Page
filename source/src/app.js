import { toggleThemes } from "./darkTheme/switchTheme.js";
import { showNav } from "./nav/handleNav.js";
import { singUpHandler } from "./signUp/signUp.js";
import { leftArrowHandler, rightArrowHandler } from "./toggleOpinions/arrowsHandler.js";




const width = window.screen.availWidth;

window.addEventListener('resize', showNav);

const homeBtn = document.querySelector('span.homeBtn');
homeBtn.addEventListener('click', () => {
    window.location = '../html/index.html';
});

const leftArrow = document.querySelector('.leftArrow');
const rightArrow = document.querySelector('.rightArrow');
leftArrow.addEventListener('click', leftArrowHandler);
rightArrow.addEventListener('click', rightArrowHandler);

const lines = Array.from(document.querySelectorAll('span.line'));
lines.forEach(x => {
    x.classList.contains('1') ?
        x.addEventListener('click', leftArrowHandler) :
        x.addEventListener('click', rightArrowHandler);
});

const signUpForm = document.getElementById('signUpForm');
signUpForm.addEventListener('submit', singUpHandler);


showNav();

if (localStorage.getItem('isDark') === 'true') {
    toggleThemes();
    document.querySelector('input.switch').checked = true;
}

