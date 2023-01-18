
let spanEl = document.querySelector('div.newsletter span');

export function singUpHandler(e) {
    e.preventDefault();
    let formData = new FormData(e.target);
    let { email } = Object.fromEntries(formData);

    if (!email) {
        spanEl.className = '';
        spanEl.classList.add('unSuccess');
        spanEl.innerText = 'Please enter email';
    } else {
        spanEl.className = '';
        spanEl.innerHTML = `${email} was successfully submitted!`;
    }
}