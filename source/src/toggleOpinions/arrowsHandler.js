const container = document.querySelector('div.opinionContainer');

let opinion1 = document.createElement('div');
opinion1.classList.add('opinion', '1');
opinion1.innerHTML = `<img src="../images/users/cat170.jpg" alt="cat1" class="profilePic"> <p class="opinionP">The superb and fantastic meal plan at such a reasonable price! Honestly, I can not complain at all. Highly recommend it to anyone who is looking to gain muscles!</p>`;

let opinion2 = document.createElement('div');
opinion2.classList.add('opinion', '2');
opinion2.innerHTML = `<img src="../images/users/cat370.jpg" alt="cat1" class="profilePic"> <p class="opinionP">I've tried so many diets and meal plans, but they were useless. This Keto meal plan is so easy to follow. So far I've been on this program for one month, and I've lost 15 pounds. I can't wait to see my progress at the end. For anyone considering to start this meal plan, it's definitely worth a go!!</p>`;




export function leftArrowHandler(e) {
    let currentOpinion = document.querySelector('div.opinion');
    const classesArray = Array.from(currentOpinion.classList);
    const lines = Array.from(document.querySelectorAll('span.line'));


    if (classesArray.includes('1')) {
        return;
    } else {
        container.removeChild(currentOpinion);
        container.appendChild(opinion1);
        
        lines[0].classList.replace('notSelected', 'selected');
        lines[1].classList.replace('selected', 'notSelected');
    }
}

export function rightArrowHandler(e) {
    let currentOpinion = document.querySelector('div.opinion');
    const classesArray = Array.from(currentOpinion.classList);
    const lines = Array.from(document.querySelectorAll('span.line'));

    if (classesArray.includes('2')) {
        return;
    } else {
        container.removeChild(currentOpinion);
        container.appendChild(opinion2);

        lines[1].classList.replace('notSelected', 'selected');
        lines[0].classList.replace('selected', 'notSelected');
    }
}

export function linesHandler(e) {

}


