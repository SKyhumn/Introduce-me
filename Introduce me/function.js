var typed=new Typed("#typed",{
    strings:["Front-End Developer", "Back-End Developer", "UI/UX Designer", "Database Engineer", "Web Publisher"],
    typeSpeed: 30,
    backSpeed: 30, 
    startDelay: 500, 
    backDelay: 1000, 
    loop: true,
})

const headerEl=document.querySelector("header");
window.addEventListener("scroll", function(){
    const ScrollY=this.window.scrollY;
    if(ScrollY>0){
        headerEl.classList.add("active");
    }
    else{
        headerEl.classList.remove("active");
    }
})

const aboutBtn=document.querySelector("header nav .about");
const featuresBtn=document.querySelector("header nav .features");
const portfolioBtn=document.querySelector("header nav .portfolio");
const contactBtn=document.querySelector("header nav .contact");

const aboutSection=document.querySelector("#about");
const featuresSection=document.querySelector("#features");
const portfolioSection=document.querySelector("#portfolio");
const contactSection=document.querySelector("#contact");

aboutBtn.addEventListener("click",function(){
    aboutSection.scrollIntoView({behavior:"smooth"});
})
featuresBtn.addEventListener("click",function(){
    featuresSection.scrollIntoView({behavior:"smooth"});
})
portfolioBtn.addEventListener("click",function(){
    portfolioSection.scrollIntoView({behavior:"smooth"});
})
contactBtn.addEventListener("click",function(){
    contactSection.scrollIntoView({behavior:"smooth"});
})