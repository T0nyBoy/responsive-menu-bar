let burger = document.querySelector(".forSmallScreenMenuIcon");
let menuItem = document.querySelectorAll(".menuItem");
let forSubmenu = document.querySelector(".forSubmenu");
let submenuContainer = document.querySelector(".submenuContainer");
let mainBody=document.querySelector(".mainBody");
let menuBar = document.querySelector(".menu");


//when in small screen tap burger to make menu appear
burger.addEventListener("click", ()=>{
    menuItem.forEach(item =>{
        item.classList.toggle("menuItemAppear");
    });
    burger.classList.toggle("forSmallScreenMenuIconOpen");
    // restarting the animation with addin/removing animation class and
    // reflowing the DOM
    burger.classList.remove("addAnimationIcons");
    //reflowing the DOM
    void burger.offsetWidth;
    burger.classList.add("addAnimationIcons");
});


//make submenu appear
forSubmenu.addEventListener("click", ()=>{
    submenuContainer.classList.toggle("subMenuContainerAppear");
});
        

//Make scroll bar change class on scroll below 4.2em
window.onscroll = function (e) {
    if(window.scrollY>20){
        menuBar.classList.add("menuScrolled");
    } else if(window.scrollY<=67){
        menuBar.classList.remove("menuScrolled");
    }
};