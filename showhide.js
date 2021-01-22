let obj = document.getElementsByClassName("cards__hidden")[0];
let showBtn = document.getElementsByClassName("show_btn")[0];
let hideBtn = document.getElementsByClassName("hide_btn")[0];

function showMore() {
    obj.style.display = "flex";
    obj.style.transition = "all 0.8s";
    showBtn.style.display = "none";
    // showBtn.style.transitionDuration = "0.8s";
    hideBtn.style.display = "inline-block";
    // hideBtn.style.transitionDuration = "0.8s";
    // $('div').removeClass('trip_hidden');
    
}

function showLess() {
    obj.style.display = "none";
    // obj.style.transitionDuration = "0.8s";
    showBtn.style.display = "inline-block";
    // showBtn.style.transitionDuration = "0.8s";
    hideBtn.style.display = "none"
    // hideBtn.style.transitionDuration = "0.8s";
    // $('div').addClass('trip_hidden');

}

(function() {
    ('.hamburger').click(function() {
        (this).toggleClass('active');
 
        if ((this).hasClass('active')) {
            ('.navbox').addClass('active');
        } else {
            ('.navbox').removeClass('active');
        }
    });
});

// ********** nav toggle ************
// select button and links

const navBtn = document.getElementById("nav-toggle");
const links = document.getElementById("nav-links");
const navCont = document.getElementById("navbar");
// add event listener
navBtn.addEventListener("click", () => {
  links.classList.toggle("show-links");
  navCont.classList.toggle("active");
});