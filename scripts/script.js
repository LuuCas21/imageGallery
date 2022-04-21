'use script';

const dropBtn = document.querySelector('#more_gallery');
const closeBtn = document.querySelector('#close_gallery');
const contentGallery = document.querySelector('.galeriaS--2');
const arrowDown = document.querySelector('.arrow_DOWN');
const arrowUp = document.querySelector('.arrow_UP');

dropBtn.addEventListener('click', dropdown_content);
closeBtn.addEventListener('click', close_dropdown_content)

function dropdown_content() {
    if(contentGallery.classList.contains('hidden')) {
        contentGallery.classList.remove('hidden');
        arrowUp.classList.remove('hidden');
        arrowDown.classList.add('hidden');
    }
}

function close_dropdown_content() {
    if(!contentGallery.classList.contains('hidden')) {
        contentGallery.classList.add('hidden');
        arrowUp.classList.add('hidden');
        arrowDown.classList.remove('hidden');
    }
}