const pics = document.querySelectorAll(".pic");
const menuBars = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav-links")
const navbtns = document.querySelector(".nav-btns")
const sectionOne = document.querySelector("#Home")
let menuOpen = false;

pics.forEach(pic => {
   pic.addEventListener("mouseover", ()=> {
      removeClass();
      pic.classList.add("active");
   });
});
function removeClass(){
  pics.forEach(pic => {
      pic.classList.remove("active");
});
}

menuBars.addEventListener("click", ()=>{ 
  if(!menuOpen) {
     nav.classList.toggle('active'); 
     navbtns.classList.toggle('active')
     menuBars.classList.toggle("open");
     menuOpen = true;
   } else {
     nav.classList.remove("active"); 
     menuBars.classList.remove("open");
     navbtns.classList.remove('active')
     menuOpen = false;
   }
})

   const options = { };
   const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) { 
          nav.classList.remove("active"); 
          menuBars.classList.remove("open");
          navbtns.classList.remove('active')
        } else {
            return;
        }
    })
   }, options)
   observer.observe(sectionOne);

