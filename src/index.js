import './sass/index.scss';
import './btn-top.js';
import anime from 'animejs/lib/anime.es.js';




// 헤더 버튼
const menuOpenBtn = document.querySelector('.button-menu-open');
const menuCloseBtn = document.querySelector('.button-menu-close');
const nav = document.querySelector('.navigation');
const buttonCharacter = document.querySelector('.button-character');
const menuCharacter = document.querySelector('.menu-character');
const buttonCategory = document.querySelector('.button-category');
const menuCategory = document.querySelector('.menu-category');
const buttonSearch = document.querySelector('.utility__button-search');
const buttonSearchCancel = document.querySelector('.search__button-cancel');
const searchWrap = document.querySelector('.search-wrap');
const buttonBannerClose = document.querySelector('.ad-banner__button-close');
const adBanner = document.querySelector('.ad-banner');
const headerWrap = document.querySelector('.header-wrap');
const media = matchMedia("screen and (min-width: 768px)");
const buttonMember = document.querySelector('.button-member');
const menuMember = document.querySelector('.menu-member');
const buttonOther = document.querySelector('.button-other');
const menuOther = document.querySelector('.menu-other');
const container = document.querySelector('.container');
const skeleton = document.querySelector('.skeleton');

// 네비게이션 열기 버튼 클릭 시 전체 메뉴 열림
menuOpenBtn.addEventListener('click', () => {
    nav.classList.add('navigation--active');
})

// 네비게이션 닫기 버튼 클릭 시 전체 메뉴 닫힘
menuCloseBtn.addEventListener('click', () => {
    nav.classList.remove('navigation--active');
});

// 캐릭터 버튼 클릭시 리스트 토글
buttonCharacter.addEventListener('click', () => {

    buttonCategory.classList.forEach(element => {
        if (element === 'button-category--active') {
            buttonCategory.setAttribute('class', 'button-category');
            menuCategory.setAttribute('class', 'menu-category');
        }
    });


    buttonOther.classList.forEach(element => {
        if (element === 'button-other--active') {
            buttonOther.setAttribute('class', 'button-other');
            menuOther.setAttribute('class', 'menu-other');
        }
    });

    menuCharacter.classList.toggle('menu-character--active');
    buttonCharacter.classList.toggle('button-character--active');
})

// 카테고리 버튼 클릭시 리스트 토글
buttonCategory.addEventListener('click', () => {


    buttonCharacter.classList.forEach(element => {
        if (element === 'button-character--active') {
            buttonCharacter.setAttribute('class', 'button-character');
            menuCharacter.setAttribute('class', 'menu-character');
        }
    });


    buttonOther.classList.forEach(element => {
        if (element === 'button-other--active') {
            buttonOther.setAttribute('class', 'button-other');
            menuOther.setAttribute('class', 'menu-other');
        }
    });

    menuCategory.classList.toggle('menu-category--active');
    buttonCategory.classList.toggle('button-category--active')
})

buttonSearch.addEventListener('click', () => {
    searchWrap.classList.toggle('search-wrap--active');
})

buttonSearchCancel.addEventListener('click', () => {
    searchWrap.classList.remove('search-wrap--active');
});

//배너 닫기 버튼
buttonBannerClose.addEventListener('click', () => {
    // ad-banner--active 클래스 제거
    // headerWrap 배너 크기만큼 위로 이동
    adBanner.classList.remove('ad-banner--active');
    // headerWrap.setAttribute('style', 'transform:translateY(-65px)');
});

//멤버 메뉴 버튼
buttonMember.addEventListener('click', () => {
    menuMember.classList.toggle('menu-member--active');
});

//기타 메뉴 버트
buttonOther.addEventListener('click', () => {


    buttonCharacter.classList.forEach(element => {
        if (element === 'button-character--active') {
            buttonCharacter.setAttribute('class', 'button-character');
            menuCharacter.setAttribute('class', 'menu-character');
        }
    });


    buttonCategory.classList.forEach(element => {
        if (element === 'button-category--active') {
            buttonCategory.setAttribute('class', 'button-category');
            menuCategory.setAttribute('class', 'menu-category');
        }
    });

    menuOther.classList.toggle('menu-other--active');
    buttonOther.classList.toggle('button-other--active')
});


media.addListener((e) => {
    //모바일
    if (!e.matches) {
        headerWrap.setAttribute('style', 'transform:none');
        adBanner.setAttribute('style', 'transform:none');
    }
    //데스크탑
    else {
        if (!adBanner.classList.contains('ad-banner--active')) {
            // headerWrap.setAttribute('style', 'transform:translateY(-65px)');
        } else {
            // adBanner.setAttribute('style','transform:translateY(-155px)');
        }
    }
});


// 피드 정렬
let masonryOptions = {
    // options...
    itemSelector: '.feed',
    columnWidth: '.feed',
    gutter: '.gutter-sizer',
    transitionDuration: '0s',
    stagger: '0s',
    percentPosition: true,
}

function create() {
    const masonry = new Masonry('.main-content__today', masonryOptions);
    return masonry;
}

const desktopL = matchMedia("(min-width: 1200px)");
let msnryL;
desktopL.addEventListener(('change'), () => {
    if (desktopL.matches) {
        if (!!msnry) {
            msnry.destroy();
            console.log(msnry);
        }
        msnryL = create();
    } else {
        msnryL.destroy();
        msnry = create();
        console.log(msnryL);
    }
})

const desktop = matchMedia("(min-width: 768px)");
let msnry;
desktop.addEventListener(('change'), () => {
    if (desktop.matches) {
        msnry = create();
    } else {
        msnry.destroy();
        console.log(msnryL);
    }
})

function init() {
    if (desktop.matches) {
        msnry = create();
    }
    if (desktop.matches) {
        msnryL = create();
    }
}

// 애니메이션
function animate() {
    anime({
        targets: '.feed',
        duration: function (t, i) {
            return 600 + i * 75;
        },
        easing: 'easeOutExpo',
        delay: function (t, i) {
            return i * 50;
        },
        opacity: {
            value: [0, 1],
            easing: 'linear'
        },
        scale: [0, 1]
    });
}



//slider
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

// skeleton UI
setTimeout(function () {
    container.style.display = 'block';
    skeleton.style.display = 'none';
    animate();
    init();
}, 1000);

const likebuttons = document.querySelectorAll(".actions__button-like");



for (let i = 0; i < likebuttons.length; i++) {

    let likebtn = likebuttons.item(i);

    likebtn.addEventListener('click', () => {
        if (likebtn.classList.contains("liked")) {
            likebtn.classList.remove("liked");
        } else {
            likebtn.classList.add("liked");
        }
    });
}

