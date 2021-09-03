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
const more = document.querySelector('.button-more');
const main = document.querySelector('.main-content__today');
const body = document.getElementsByTagName('body')[0];
const navBg = document.querySelector('.navigation-bg');

//메뉴 접혀있을때 탭인덱스 -1로 설정
const menuMemberLinks = document.querySelectorAll('.menu-member__link');
const menuOtherLinks = document.querySelectorAll('.menu-other__link');
const characterLinks = document.querySelectorAll('[class*=-character__link]');
const categoryLinks = document.querySelectorAll('[class*=-category__link]');
const searchInput = document.querySelector('.search__input');
const searchButtons = document.querySelectorAll('[class*=search__button-]');


// 네비게이션 열기 버튼 클릭 시 전체 메뉴 열림
menuOpenBtn.addEventListener('click', () => {
    nav.classList.add('navigation--active');
    navBg.classList.add('navigation-bg--active');
    body.classList.add('not-scroll');
})

// 네비게이션 닫기 버튼 클릭 시 전체 메뉴 닫힘
menuCloseBtn.addEventListener('click', () => {
    nav.classList.remove('navigation--active');
    navBg.classList.remove('navigation-bg--active');
    body.classList.remove('not-scroll');
});


/*
    //캐릭터 메뉴 닫기
    menuCharacter.classList.remove('is-active');
    buttonCharacter.classList.remove('is-active');

    //카테고리 메뉴 닫기
    menuCategory.classList.remove('is-active');
    buttonCategory.classList.remove('is-active');

    //기타 메뉴 닫기
    menuOther.classList.remove('is-active');
    buttonOther.classList.remove('is-active');

    //멤버 메뉴 닫기
    menuMember.classList.remove('is-active');

    //검색창 닫기
    searchWrap.classList.remove('is-active');
*/

// 캐릭터 버튼 클릭시 리스트 토글
buttonCharacter.addEventListener('click', () => {

    menuCharacter.classList.toggle('is-active');
    buttonCharacter.classList.toggle('is-active');

    //카테고리 메뉴 닫기
    menuCategory.classList.remove('is-active');
    buttonCategory.classList.remove('is-active');

    //기타 메뉴 닫기
    menuOther.classList.remove('is-active');
    buttonOther.classList.remove('is-active');

    //멤버 메뉴 닫기
    menuMember.classList.remove('is-active');

    //검색창 닫기
    searchWrap.classList.remove('is-active');
})

// 카테고리 버튼 클릭시 리스트 토글
buttonCategory.addEventListener('click', () => {
    menuCategory.classList.toggle('is-active');
    buttonCategory.classList.toggle('is-active');

    //캐릭터 메뉴 닫기
    menuCharacter.classList.remove('is-active');
    buttonCharacter.classList.remove('is-active');

    //기타 메뉴 닫기
    menuOther.classList.remove('is-active');
    buttonOther.classList.remove('is-active');

    //멤버 메뉴 닫기
    menuMember.classList.remove('is-active');

    //검색창 닫기
    searchWrap.classList.remove('is-active');
})

buttonSearch.addEventListener('click', () => {
    searchWrap.classList.toggle('is-active');

    //캐릭터 메뉴 닫기
    menuCharacter.classList.remove('is-active');
    buttonCharacter.classList.remove('is-active');

    //카테고리 메뉴 닫기
    menuCategory.classList.remove('is-active');
    buttonCategory.classList.remove('is-active');

    //기타 메뉴 닫기
    menuOther.classList.remove('is-active');
    buttonOther.classList.remove('is-active');

    //멤버 메뉴 닫기
    menuMember.classList.remove('is-active');
})

buttonSearchCancel.addEventListener('click', () => {
    searchWrap.classList.remove('is-active');
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
    menuMember.classList.toggle('is-active');

    //캐릭터 메뉴 닫기
    menuCharacter.classList.remove('is-active');
    buttonCharacter.classList.remove('is-active');

    //카테고리 메뉴 닫기
    menuCategory.classList.remove('is-active');
    buttonCategory.classList.remove('is-active');

    //기타 메뉴 닫기
    menuOther.classList.remove('is-active');
    buttonOther.classList.remove('is-active');

    //검색창 닫기
    searchWrap.classList.remove('is-active');
});

//기타 메뉴 버트
buttonOther.addEventListener('click', () => {
    menuOther.classList.toggle('is-active');
    buttonOther.classList.toggle('is-active');

    //캐릭터 메뉴 닫기
    menuCharacter.classList.remove('is-active');
    buttonCharacter.classList.remove('is-active');

    //카테고리 메뉴 닫기
    menuCategory.classList.remove('is-active');
    buttonCategory.classList.remove('is-active');

    //멤버 메뉴 닫기
    menuMember.classList.remove('is-active');

    //검색창 닫기
    searchWrap.classList.remove('is-active');
});


// media.addListener((e) => {
//     //모바일
//     if (!e.matches) {
//         headerWrap.setAttribute('style', 'transform:none');
//         adBanner.setAttribute('style', 'transform:none');
//     }
//     //데스크탑
//     else {
//         if (!adBanner.classList.contains('ad-banner--active')) {
//             // headerWrap.setAttribute('style', 'transform:translateY(-65px)');
//         } else {
//             // adBanner.setAttribute('style','transform:translateY(-155px)');
//         }
//     }
// });


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




// searchInput.tabIndex = -1;
// searchButtons[0].tabIndex = -1;
// searchButtons[1].tabIndex = -1;

// for (let i = 0; i < menuMemberLinks.length; i++) {
//     menuMemberLinks[i].tabIndex = -1;
// }

// for (let i = 0; i < menuOtherLinks.length; i++) {
//     menuOtherLinks[i].tabIndex = -1;
// }

// for (let i = 0; i < characterLinks.length; i++) {
//     characterLinks[i].tabIndex = -1;
// }

// for (let i = 0; i < categoryLinks.length; i++) {
//     categoryLinks[i].tabIndex = -1;
// }
