'use strict';

const openModal = document.querySelector('.btn');
const closeModal = document.querySelector('.icon');
const modalWindow = document.querySelector('article');

openModal.addEventListener('click', () => {
    modalWindow.classList.add('showModal');
});

closeModal.addEventListener('click', () => {
    modalWindow.classList.remove('showModal');
});
