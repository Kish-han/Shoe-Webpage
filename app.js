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
const viewMainImg = document.getElementById('viwer-main-img')
const viewThumbnail1 = document.getElementById('viewthumbnail-1') 
const viewThumbnail2 = document.getElementById('viewthumbnail-2') 
const viewThumbnail4 = document.getElementById('viewthumbnail-4')
const viewThumbnail3 = document.getElementById('viewthumbnail-3') 
const prvIcon = document.querySelector('prv-icon')
const nxtIcon = document.querySelector('nxt-icon')

const image = {
    img1: "images/image-product-1.jpg",
    img2:"images/image-product-2.jpg",
    img3:"images/image-product-3.jpg",
    img4:"images/image-product-4.jpg"
}

// Cart add and delete
const plus = document.getElementById('plus')
const items = document.getElementById('itms')
const minus = document.getElementById('minus')

let count = 0;

plus.addEventListener('click', function () {
    count += 1;
    items.textContent = count
})
minus.addEventListener('click', function () {
    if (count <= 0) {
        alert("Zero items in cart")
    }
    else {
        count -= 1;
        items.textContent = count   
    }
})




// Navigation Menu
menu.addEventListener('click', function () {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
})

thumbnail1.addEventListener('click', function () {
    mainImg.src = image.img1;
    viewMainImg.src=image.img1;
})
thumbnail2.addEventListener('click', function () {
    mainImg.src= image.img2;
    viewMainImg.src= image.img2;
})
thumbnail3.addEventListener('click', function () {
    mainImg.src= image.img3;
    viewMainImg.src= image.img3;
})
thumbnail4.addEventListener('click', function () {
    mainImg.src= image.img4;
    viewMainImg.src= image.img4;
})

// Image Viwer
// To get the same image in the Image viwer allot the mainimg source into view image source in above function(Line 23,27,31,35)
mainImg.addEventListener('click', function () {
    imgViwer.classList.add('img-active')
})
closeBtn.addEventListener('click', function () {
    imgViwer.classList.remove('img-active')   
})
viewThumbnail1.addEventListener('click', function () {
    viewMainImg.src = image.img1
})
viewThumbnail2.addEventListener('click', function () {
    viewMainImg.src= image.img2;
})
viewThumbnail3.addEventListener('click', function () {
    viewMainImg.src= image.img3;
})
viewThumbnail4.addEventListener('click', function () {
    viewMainImg.src= image.img4;
})


function generator() {
    
}

let cars = [1,2,3,4]
