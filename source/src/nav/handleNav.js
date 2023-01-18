import { toggleThemes } from "../darkTheme/switchTheme.js";
import { handleContent } from "../handleContent.js/handleContent.js";
import { navObj } from "./nav.js";
import { toggleSideBarMenu } from "./sideBarMenu.js";

const width = window.screen.availWidth;


let nav = document.querySelector('nav');
if (nav) {
    nav.addEventListener('click', onNav);
}

let navDiv = document.getElementById('nav');





export function showNav() {
    if (!navDiv) {
        handleContent(width);
        return;
    }
    if (width <= 600) {
        navDiv.innerHTML = navObj.mobile;
    } else {
        navDiv.innerHTML = navObj.pc;
    }

    handleContent(width);

}

function onNav(e) {
    let clickedText = e.target.innerText;
    let tagName = e.target.tagName;

    

    if (clickedText === 'HOME') {
        console.log('home');
    } else if (clickedText === 'BLOG') {
        console.log('blog');
    } else if (clickedText === '' && !Array.from(e.target.classList).includes('switch') && !Array.from(e.target.classList).includes('slider')) {
        toggleSideBarMenu();
    } else if (tagName === 'I' && Array.from(e.target.classList).includes('sideBar')) {
        toggleSideBarMenu();
    } else if (Array.from(e.target.classList).includes('switch')) {
        toggleThemes();
    }
}

