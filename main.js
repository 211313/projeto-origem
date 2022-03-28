//INTERAÇÃO COM OS ICONES DO MENU.
const nav= document.querySelector('#header nav')   //OK
const toggle= document.querySelectorAll('nav .toggle') //OK
for (const element of toggle) {
  element.addEventListener('click', function(){
    //alert('CHEGAMOS AQUI')  //TESTE DE FUNÇÃO OK
    nav.classList.toggle('show')
  })
}
//console.log()  //TESTE DE DOM..//ok
//INTERAÇÃO COM OS INTENS DO MENU.
const links= document.querySelectorAll('nav ul li a')
for(const link of links){                      //ok
  link.addEventListener('click', function(){
    nav.classList.remove('show')
  })
}
//INTERAÇÃO COM SCROLL.
const header= document.querySelector('header')
const navheight= header.offsetHeight
window.addEventListener('scroll', function(){
 if(window.scrollY >= navheight){
//ADICIONAR SCROLL
 header.classList.add('scroll')
 }else{
 //REMOVER SCROLL
 header.classList.remove('scroll')
 }
})
//TESTIMONIALS SLIDER CAROUSEL SWIPER...
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
     //allowSlideNext:true   
     setWrapperSize: true
    }
  }
})
//========SCROLLREVEAL========
const scrollreveal = ScrollReveal({
  origin:'top',
  distance:'30px',
  duration:700,
  reset: true
})
scrollreveal.reveal(`
  #home .image, #home .text,
  #about .image, #about .text,
  #services header, #services .card,
  #testimonials .text, #testimonials .testimonials,
  #contact .text, #contact .links,
  footer .brand, footer .social
  `,
 { interval:100}
)
