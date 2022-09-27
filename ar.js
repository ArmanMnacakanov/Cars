window.onload = function () {


    let search = document.querySelector('.search-box');

    document.querySelector('#search-icon').onclick = function () {
        search.classList.toggle('active');
        menu.classList.remove('active');

    }

    let menu = document.querySelector('.navbar');
    document.getElementById('menu-icon').style.cursor = 'pointer'

    document.querySelector('#menu-icon').onclick = function () {
        menu.classList.toggle('active');
        search.classList.remove('active');
    }

    // menu and search scroll remove
    window.onscroll = () => {
        menu.classList.remove('active');
        search.classList.remove('active');
    }


    // header
    let header = document.querySelector('header');

    window.addEventListener('scroll', () => {
        header.classList.toggle('shadow', window.scrollY > 0);
    });
    document.getElementById('car1').onclick = function(){
        document.getElementById('car_name').innerHTML = 'Porche Car';
        document.getElementById('img').style.backgroundImage = 'url(img/car1.jpg)';
        document.getElementById('img').style.backgroundSize = 'cover'
    }

}

$(function () {
    $('.box').click(function () {
        $('#cars-fon').fadeIn();
    })
    $('#close').click(function () {
        $('#cars-fon').fadeOut();
    })

})