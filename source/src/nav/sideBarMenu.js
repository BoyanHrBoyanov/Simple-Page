
let sideBarMenu = document.querySelector('div.sideBarMenu');


export function toggleSideBarMenu() {

    //change barIcon
    let barIcon = document.querySelector('i.sideBar');
    const sideBarIconClassList = ['fa-solid', 'fa-bars', 'fa-2xl', 'bars', 'sideBar'];
    const sideXmarkClassList = ['fa-solid', 'fa-xmark', 'fa-2xl', 'xmark', 'sideBar'];

    if (Array.from(barIcon.classList).includes('bars')) {
        barIcon.classList = '';
        sideXmarkClassList.forEach(x => {
            barIcon.classList.add(x);
        });
    } else {
        barIcon.classList = '';
        sideBarIconClassList.forEach(x => {
            barIcon.classList.add(x);
        });
    }
    //end with barIcon

    if (sideBarMenu.style.display == '') {
        sideBarMenu.style.display = 'none';
    } else if (sideBarMenu.style.display == 'block') {
        sideBarMenu.style.display = 'none';
    } else if (sideBarMenu.style.display == 'none') {
        sideBarMenu.style.display = 'block';
    }

}
