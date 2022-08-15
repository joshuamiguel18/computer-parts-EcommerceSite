const navbar = document.querySelector('.navbar');
const exit = document.querySelector('.exit');

navbar.addEventListener('click', openNav);
exit.addEventListener('click', closeNav);


function openNav () {
    document.querySelector('#navbar').style.right = 0;
}
function closeNav () {
    document.querySelector('#navbar').style.right = '-100%';
}