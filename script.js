//copy menu for mobile
function copyMenu() {
    //copy inside .dpt-cat to .departments
    var dptCategory = document.querySelector('.dpt-cat');
    var dptPlace = document.querySelector('.departments');
    dptPlace.innerHTML = dptCategory.innerHTML;

    //copy inside nav to nav
    var mainNav = document.querySelector('.header-nav nav');
    var navPlace = document.querySelector('.off-canvas nav');
    navPlace.innerHTML = mainNav.innerHTML;

    //copy .header-top .wrapper to .thetop-nav
    var topNav = document.querySelector('.header-top .wrapper');
    var topPlace = document.querySelector('.off-canvas .thetop-nav');
    topPlace.innerHTML = topNav.innerHTML;
}
copyMenu();

//show mobile menu
const menuButton = document.querySelector('.trigger');
const closeButton = document.querySelector('.t-close');
const addClass = document.querySelector('.site');
menuButton.addEventListener('click', function() {
    addClass.classList.toggle('showmenu');
})
closeButton.addEventListener('click', function() {
    addClass.classList.remove('showmenu');
})

//show sub menu on mobile
const submenu = document.querySelectorAll('.has-child .icon-small');
submenu.forEach((menu) => menu.addEventListener('click', toggle));

function toggle(e) {
    e.preventDefault();
    submenu.forEach((item) => item != this ? item.closest('.has-child').classList.remove('expand') : null);
    if(this.closest('.has-child').classList != 'expand') {
        this.closest('.has-child').classList.toggle('expand');
    }
}

//slider
const swiper = new Swiper('.swiper', {
    loop: true,
  
    pagination: {
      el: '.swiper-pagination',
    },
  

});

//change gap for too long mini-text
const miniText = document.querySelectorAll('.products.mini .stock');
miniText.forEach(item => {
    if(item.children.length > 2 && window.screen.width < 1150) {
        console.log(item.parentNode);
        item.parentNode.style.gap = '0.50em';
        console.log('ok');
    }
})


//show search
const searchButton = document.querySelector('.t-search');
const tClose = document.querySelector('.search-close');
const showClass = document.querySelector('.site');
searchButton.addEventListener('click', function() {
    showClass.classList.toggle('showsearch');
})
tClose.addEventListener('click', function() {
    showClass.classList.remove('showsearch');
})


//show dpt menu
const dptButton = document.querySelector('.dpt-cat .dpt-trigger');
const dptClass = document.querySelector('.site');

dptButton.addEventListener('click', function() {
    dptClass.classList.toggle('showdpt')
})


//products image slider
var productThumb = new Swiper ('.small-image', {
    loop : true,
    spaceBetween : 10,
    slidesPerView : 3,
    freeMode : true,
    watchSlidesProgress : true,
    breakpoints: {
        481: {
            spaceBetween: 32,
        }

    }
});
var productBig = new Swiper ('.big-image', {
    loop : true,
    autoHeight : true,
    navigation : {
        nextEl : '.swiper-button-next',
        prevEl : '.swiper-button-prev',
    },
    thumbs : {
        swiper : productThumb,
    }
})

// stock products bar width percentage 
var stocks = document.querySelectorAll('.products .stock');
for(let x = 0; x < stocks.length; x++) {
    let stock = stocks[x].dataset.stock;
    let available = stocks[x].querySelector('.qty-available').innerHTML;
    let sold = stocks[x].querySelector('.qty-sold').innerHTML;
    let percent = sold*100/stock;

    stocks[x].querySelector('.available').style.width = percent + '%';
}

//show cart on click
const divtoShow = '.mini-cart';
const divPopup = document.querySelector(divtoShow);
const divTrigger = document.querySelector('.cart-trigger');
console.log(divPopup);

divTrigger.addEventListener('click', () => {
    setTimeout(() => {
        if(!divPopup.classList.contains('show')) {
            divPopup.classList.add('show');
        }
    }, 250)
})

// close by click oustide
document.addEventListener('click', (e) => {
    const isClosest = e.target.closest(divtoShow);
    if(!isClosest && divPopup.classList.contains('show')) {
        divPopup.classList.remove('show');
    }
})

//show modal on load
window.onload = function () {
    document.querySelector('.site').classList.toggle('showmodal');
}
document.querySelector('.modalclose').addEventListener('click', function () {
    document.querySelector('.site').classList.remove('showmodal');
})

//disable cors policy error
fsLightbox.props.type = "image";


