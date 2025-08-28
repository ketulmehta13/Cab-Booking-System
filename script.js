const header=document.querySelector("header");
window.addEventListener("scroll",function(){
    header.classList.toggle("sticky",this.window.scrollY >160)
})

let menu=document.querySelector('#menu-icon');
let navlinks=document.querySelector('.navlinks');

menu.onclick=()=>{
    menu.classList.toggle('bx-x');
    navlinks.classList.toggle('open');
};

window.onscroll=()=>{
    menu.classList.remove('bx-x');
    navlinks.classList.remove('open');
};

const animate= ScrollReveal({
    origin:'top',
    distance:'65px',
    duration:'2600',
    delay:'400'
});

animate.reveal(".home-text,.about-img,.feature-left,.social-icons",{origin:"left"});

animate.reveal(".arrow,.about-text,.feature-right",{origin:"right"});

animate.reveal(".home-img,.text-center,.feature-middle,.services-content,.end-text1,.end-text2,.contact-box",{interval:150 });



// scroll button
window.addEventListener("scroll", function () {
    const scrollspyBtn = document.getElementById("scrollspy-btn");
    const scrollPosition = document.documentElement.scrollTop + window.innerHeight;
    const totalHeight = document.documentElement.scrollHeight;

    if (scrollPosition >= totalHeight - 10) { // Allow slight margin for better detection
        scrollspyBtn.classList.add("active"); // Show button
    } else {
        scrollspyBtn.classList.remove("active"); // Hide button
    }
});





