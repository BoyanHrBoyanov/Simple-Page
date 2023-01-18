
let mobileItemsArr = Array.from(document.querySelectorAll('.mobile'));
let desktopItemsArray = Array.from(document.querySelectorAll('.desktop'));

export function handleContent(width) {
    if (width <= 600) {
        mobileItemsArr.forEach(x => {
            x.style.display = 'flex';
        });
        desktopItemsArray.forEach(x => {
            x.style.display = 'none';
        });
    } else {
        mobileItemsArr.forEach(x => {
            x.style.display = 'none';
        });
        desktopItemsArray.forEach(x => {
            x.style.display = 'flex';
        });
    }
}