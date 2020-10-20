


//--------- Bắt event scroll to transition header fixed --------]]
//  +++++++++++++++++++++++++++
// Handel sử lý Btn Go to top
const headerA = document.getElementById('header');
const BtnGoTop = document.querySelector('.myBtn--go-top');

window.addEventListener('scroll', () => {
    
    (window.scrollY == '0') ? headerA.classList.remove('header--scrolled') : headerA.classList.add('header--scrolled');
    (window.scrollY > '200') ? BtnGoTop.classList.add('myBtn--go-top-show') : BtnGoTop.classList.remove('myBtn--go-top-show');

    
});







// --------------------------------------------------------\\
// --------------------------------------------------------\\





//==== Handel mobile-nav-toggle Bnt  +++ mobile menu ====\\\
// --------------------------------------------------------\\


const BntMobileNav  = document.querySelector('.mobile-nav-toggle');
const mobileNavOverlay = document.querySelector('.mobile-nav--overlay');
const mobileNav = document.querySelector('.mobile-nav');


BntMobileNav.addEventListener('click', () => {

    BntMobileNav.classList.toggle('mobile-nav-toggle--close');

    mobileNavOverlay.classList.toggle('mobile-nav--overlay-show');

    mobileNav.classList.toggle('mobile-nav--show');

});
mobileNavOverlay.addEventListener('click', () => {
    BntMobileNav.classList.toggle('mobile-nav-toggle--close');

    mobileNavOverlay.classList.toggle('mobile-nav--overlay-show');

    mobileNav.classList.toggle('mobile-nav--show');
});

//========== Handel open nav menu mobile ==============\\
// =----------------------------------------------------\\

$(document).ready(function(){
    $("#btnMenuMobile2").click(function(){
      $("#menuMobile2").slideToggle("slow");
      $('#iDown2').toggle();
      $('#iUp2').toggle();

    });
  });

  $(document).ready(function(){
    $("#btnMenuMobile1").click(function(){
      $("#menuMobile1").slideToggle("slow");
      $('#iDown1').toggle();
      $('#iUp1').toggle();
    });
  });











// --------------------------------------------------------\\
// --------------------------------------------------------\\






// ============ Handel FEATURES Tabs ============ \\
// ----------------------------------------------- \\

const featuresTabsBtn = document.querySelectorAll('.features__tabs ul li a') ;
const liTabs = document.querySelectorAll('.features__tabs ul li');

const featuresTabsItem = document.querySelectorAll('.features__item');


// Remove  features active

function removeFeaturesActive() {
    liTabs.forEach(liTab => {
        liTab.classList.remove('active');
    });
    featuresTabsItem.forEach(featuresTabItem => {
        featuresTabItem.classList.remove('features__item--active');
    });
}


for(let i = 0; i < featuresTabsBtn.length; i++) {
    featuresTabsBtn[i].addEventListener('click', (e) => {
        e.preventDefault();
        removeFeaturesActive();
        liTabs[i].classList.add('active');
        featuresTabsItem[i].classList.add('features__item--active');

    });
}
// -----------------------++++++++++=--====--------------------- \\
// ----------------------================------------------------- \\






// ------------------- Filter Portfolio ---------------------------
// ----------------------================------------------------- \\











// --------------------------------------------------------\\
// --------------------------------------------------------\\

