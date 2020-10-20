
//======= Handel Event Click Dot In section Hero ==========\\
// --------------------------HERO------------------------------\\

const heroDotsList = document.querySelectorAll('.hero__dot-item');
const heroItemsList = document.querySelectorAll('.hero-item');
const heroBtnPre = document.querySelector('.hero__slide-btn--left');
const heroBtnNext = document.querySelector('.hero__slide-btn--right');
let heroCurrent = 0;
function removeHeroActive() {
    heroDotsList.forEach(heroDot => {
        heroDot.classList.remove('hero__dot-item--active');
    });
    heroItemsList.forEach( heroItem => {
        heroItem.classList.remove('hero-item--active');
    });
}


for (let i = 0; i < heroDotsList.length ; i++) {
    heroDotsList[i].addEventListener('click', () => {
        removeHeroActive();
        heroDotsList[i].classList.add('hero__dot-item--active');
        heroItemsList[i].classList.add('hero-item--active');
    });
}
heroBtnNext.addEventListener('click', (e) => {
    e.preventDefault();
    removeHeroActive();
    heroCurrent++;
    
    if(heroCurrent == heroDotsList.length ) {
        heroCurrent = 0;
    }
    heroDotsList[heroCurrent].classList.add('hero__dot-item--active');
    heroItemsList[heroCurrent].classList.add('hero-item--active');
});

heroBtnPre.addEventListener('click', (e) => {
    e.preventDefault();
    removeHeroActive();
    
    if(heroCurrent == 0 ) {
        heroCurrent =  heroDotsList.length  ;
    }
    heroCurrent--;
    heroDotsList[heroCurrent].classList.add('hero__dot-item--active');
    heroItemsList[heroCurrent].classList.add('hero-item--active');
});







// --------------------------------------------------------\\
// --------------------------------------------------------\\
