const dark = document.getElementById('dark');

const ham = document.getElementById('ham');
const hamTop = document.getElementById('ham-top');
const hamAbout = document.getElementById('ham-about');
const hamProducts = document.getElementById('ham-products');
const hamLocation = document.getElementById('ham-location');
const hamContact = document.getElementById('ham-contact');

const menu_wrapper = document.getElementById('menu_wrapper');

function hamOpenClose(){
    ham.classList.toggle('clicked');
    menu_wrapper.classList.toggle('clicked');
    
    dark.classList.toggle('clicked');
}

ham.addEventListener('click', hamOpenClose);
hamTop.addEventListener('click', hamOpenClose);
hamAbout.addEventListener('click', hamOpenClose);
hamProducts.addEventListener('click', hamOpenClose);
hamLocation.addEventListener('click', hamOpenClose);
hamContact.addEventListener('click', hamOpenClose);



// hamTop.addEventListener('click', function() {
//     ham.classList.toggle('clicked');
//     menu_wrapper.classList.toggle('clicked');
// })

