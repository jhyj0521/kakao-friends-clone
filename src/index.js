import './sass/index.scss';
require('flickity');
// import './slider.js';


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
    menuCharacter.classList.toggle('menu-character');
})

// 카테고리 버튼 클릭시 리스트 토글
buttonCategory.addEventListener('click', () => {
    menuCategory.classList.toggle('menu-category');
})

buttonSearch.addEventListener('click', () => {
    searchWrap.classList.toggle('search-wrap--active');
})

buttonSearchCancel.addEventListener('click', () => {
    searchWrap.classList.remove('search-wrap--active');
});
