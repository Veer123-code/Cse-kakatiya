// const navContainer = document.querySelector(".nav-container");
// console.log(navContainer);


// const sidebarContainer = document.querySelector(".sidebar-container");
// console.log(sidebarContainer);
function init(){
    const hamburger = document.querySelector(".hamburger");
const sidebarCloseButton = document.querySelector(".close-button");
const sidebarContainer = document.querySelector(".sidebar-container");
// console.log("sidebarCloseButton")

const openSidebar =()=>{
    sidebarContainer.classList.add("show-sidebar");
    console.log(sidebarContainer.classList);
};
const closeSidebar =()=>{
    console.log(sidebarContainer.classList);
    sidebarContainer.classList.remove("show-sidebar")
    console.log(sidebarContainer.classList);

};
hamburger.addEventListener("click",openSidebar)

sidebarCloseButton.addEventListener("click",closeSidebar);


}
init();

// nav-bar sticky 
function nav(){
    const navbarContainer = document.querySelector(".nav-container");
console.log(navbarContainer);
window.addEventListener("scroll",function(){
    // console.log(window.scrollY);
    const scrollNumber = window.scrollY;
    const targetNumber = window.innerwidth >= 992 ? 70 :50;
    if(scrollNumber >=targetNumber){
        navbarContainer.classList.add("sticky-nav");
    }
    else{
        navbarContainer.classList.remove("sticky-nav")
    }
});
}
nav();

