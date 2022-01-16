const likes = document.querySelectorAll('.secondPage .like')
const littleLikes = document.querySelectorAll('.thirdPage .like')

const cards = document.querySelectorAll('.secondPage .card')
const littleCards = document.querySelectorAll('.thirdPage .littleCard')

likes.forEach(function (value,key) {
    value.addEventListener('click',function (){
        if (cards[key].classList.contains('active')) {
            cards[key].classList.replace('active', 'unactive')
        } else if (cards[key].classList.contains('unactive')) {
            cards[key].classList.replace('unactive', 'active')
        } else
            console.log('Unknown error')
    })
})

littleLikes.forEach(function (value,key) {
    value.addEventListener('click',function (){
        if (littleCards[key].classList.contains('active')) {
            littleCards[key].classList.replace('active', 'unactive')
        } else if (littleCards[key].classList.contains('unactive')) {
            littleCards[key].classList.replace('unactive', 'active')
        } else
            console.log('Unknown error')
    })
})

const sideBar = document.querySelector('.sideBarBlock')
const openSideBar = document.querySelector('.nav-bar')
const closeSideBar = document.querySelector('.close')
const openingSideBar = ()=>{
    if (sideBar.classList.contains('sideBarClose')) {
        sideBar.classList.replace('sideBarClose', 'sideBarOpen')
    } else if (sideBar.classList.contains('sideBarOpen')) {
        sideBar.classList.replace('sideBarOpen', 'sideBarClose')
    } else
        console.log('Unknown error')
}
openSideBar.addEventListener('click',openingSideBar)
closeSideBar.addEventListener('click',openingSideBar)