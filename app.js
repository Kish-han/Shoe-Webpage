const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.nav-links')
// Image changer
const mainImg = document.getElementById('main-img')
const thumbnail1 = document.getElementById('thumbnail-1') 
const thumbnail2 = document.getElementById('thumbnail-2') 
const thumbnail3 = document.getElementById('thumbnail-3') 
const thumbnail4 = document.getElementById('thumbnail-4') 

// Image Viwer (Line 32 - Line 35)
const imgViwer = document.querySelector('.img-viwer')
const closeBtn = document.querySelector('.close-icon')


// Navigation Menu
menu.addEventListener('click', function () {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
})

thumbnail1.addEventListener('click', function () {
    mainImg.src="images/image-product-1.jpg"
})
thumbnail2.addEventListener('click', function () {
    mainImg.src="images/image-product-2.jpg"
})
thumbnail3.addEventListener('click', function () {
    mainImg.src="images/image-product-3.jpg"
})
thumbnail4.addEventListener('click', function () {
    mainImg.src="images/image-product-4.jpg"
})

// Image Viwer
mainImg.addEventListener('click', function () {
    imgViwer.classList.add('img-active')
})

closeBtn.addEventListener('click', function () {
    imgViwer.classList.remove('img-active')   
})