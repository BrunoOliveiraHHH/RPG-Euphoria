document.querySelector('.open-menu').addEventListener('click', e => {

    document.querySelector('.menu').classList.add('open');

});

document.querySelector('.menu .backdrop').addEventListener('click', e => {

    document.querySelector('.menu').classList.remove('open');

});