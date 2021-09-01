import './sass/index.scss';
import './btn-top.js';
// import Swiper, { Navigation, Pagination, Scrollbar } from 'swiper';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// var swiper = new Swiper(".mySwiper", {
//     slidesPerView: 1,
//     spaceBetween: 30,
//     keyboard: {
//       enabled: true
//     },
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true
//     },
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev"
//     }
//   });
// require('flickity');
// require('flickity-imagesloaded');
// require('flickity-fullscreen');

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
    menuCharacter.classList.toggle('menu-character--active');
})

// 카테고리 버튼 클릭시 리스트 토글
buttonCategory.addEventListener('click', () => {
    menuCategory.classList.toggle('menu-category--active');
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
    headerWrap.setAttribute('style', 'transform:translateY(-65px)');
});

//멤버 메뉴 버튼
buttonMember.addEventListener('click', () => {
    menuMember.classList.toggle('menu-member--active');
});

//기타 메뉴 버트
buttonOther.addEventListener('click', () => {
    menuOther.classList.toggle('menu-other--active');
});


media.addListener((e) => {
    //모바일
    if(!e.matches){
        headerWrap.setAttribute('style', 'transform:none');
        adBanner.setAttribute('style','transform:none');
    }
    //데스크탑
    else{
        if(!adBanner.classList.contains('ad-banner--active')){
            headerWrap.setAttribute('style', 'transform:translateY(-65px)');
        }else{
            adBanner.setAttribute('style','transform:translateY(-155px)');
        }
    }
});

