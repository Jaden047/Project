/* window.onscroll = function(){
    menuScroll() ; 
}

const menu = document.querySelector('.menu')
const content = document.querySelector('.content')

function menuScroll(){
    if(scrollY + 500 > menu.offsetTop){
        menu.classList.remove('menuPlusTwo')
        menu.classList.add('menuPlus')
        content.classList.add('contents')
        content.classList.remove('contentsTwo')
    } else if(scrollY + 500 < menu.offsetTop){
        menu.classList.add('menuPlusTwo')
        menu.classList.remove('menuPlus')
        content.classList.add('contentsTwo')
        content.classList.remove('contents')
    }
} */