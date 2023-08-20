//Header toggle

let MenuBtn = document.getElementById("MenuBtn");

MenuBtn.addEventListener("click",function(e){
   document.querySelector("body").classList.toggle("mobile-nav-active");
   this.classList.toggle("fa-xmark");
});



let typed = new Typed('.auto-input',{
  strings: ['Web-Developer!','Android-Developer!','Programmer!','Human!'],
  typeSpeed:100,
  backSpeed:100,
  backDelay:2000,
  loop:true,
});

//Active Link State On Scroll

//Get All Links
document.getElementById("summa-home").addEventListener("click",function(){
    document.getElementById("summa-home").classList.add("active");
    document.getElementById("summa-about").classList.remove("active");
    document.getElementById("summa-port").classList.remove("active");
    document.getElementById("summa-contact").classList.remove("active");

});
document.getElementById("summa-about").addEventListener("click",function(){
    document.getElementById("summa-about").classList.add("active");
    document.getElementById("summa-home").classList.remove("active");
    document.getElementById("summa-port").classList.remove("active");
    document.getElementById("summa-contact").classList.remove("active");

});
document.getElementById("summa-port").addEventListener("click",function(){
    document.getElementById("summa-port").classList.add("active");
    document.getElementById("summa-home").classList.remove("active");
    document.getElementById("summa-about").classList.remove("active");
    document.getElementById("summa-contact").classList.remove("active");

});
document.getElementById("summa-contact").addEventListener("click",function(){
    document.getElementById("summa-contact").classList.add("active");
    document.getElementById("summa-home").classList.remove("active");
    document.getElementById("summa-about").classList.remove("active");
    document.getElementById("summa-port").classList.remove("active");

});


let navLinks = document.querySelector('nav ul li a');

//Get All Sections

let sections = document.querySelector('section');

window.addEventListener('scroll', function(){
    const scrollPos = window.scrollY + 20
   sections.forEach(section=>{
      if(scrollPos > section.offsetTop && scrollPos < (section.offsetTop + section.offsetHeight)){
        navLinks.forEach(link=>{
            link.classList.remove('active');
            if(section.getAttribute('id')=== link.getAttribute('href').substring(1)){
                link.classList.add('active');
            }
        });

        
      }
   });
});