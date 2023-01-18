
let switchAnchor = document.querySelector('i.switch');
if (switchAnchor) {
    switchAnchor.addEventListener('click', toggleThemes);
}

let toggleIcon = document.querySelector('i.switch');



const toggleOffClassList = ['fa-solid', 'fa-toggle-off', 'switch', 'off', 'fa-xl'];
const toggleOnClassList = ['fa-solid', 'fa-toggle-on', 'switch', 'on', 'fa-xl']


export function toggleThemes() {
    let element = document.body;
    let h3Arr = Array.from(document.querySelectorAll('a.posts h3'));
    let divNewsletter = document.querySelector('div.newsletter');

    element.classList.toggle('darkTheme');
    h3Arr.forEach(x => {
        x.classList.toggle('darkTheme');
    });

    if (!divNewsletter.style.borderColor || divNewsletter.style.borderColor == 'black') {
        divNewsletter.style.borderColor = 'white';
    } else {
        divNewsletter.style.borderColor = 'black';
    }



    let anchorArray = document.querySelectorAll('a');
    anchorArray.forEach(x => {
        if (x.classList.contains('noDark')) { //toggle twice for noDark
            x.classList.toggle('darkTheme');
        } 
        x.classList.toggle('darkTheme');
    });

    document.querySelector('div#nav').classList.toggle('darkTheme');

    if (Array.from(toggleIcon.classList).includes('off')) {
        switchDarkOn();
    } else {
        switchDarkOff();
    }

}

function switchDarkOn() {
    toggleIcon.classList = '';
    toggleOnClassList.forEach(x => {
        toggleIcon.classList.add(x);
    });
    localStorage.setItem('isDark', 'true');
}

function switchDarkOff() {
    toggleIcon.classList = '';
    toggleOffClassList.forEach(x => {
        toggleIcon.classList.add(x);
    });
    localStorage.setItem('isDark', 'false');

}