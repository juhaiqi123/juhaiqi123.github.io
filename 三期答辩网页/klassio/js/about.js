  var swiper = new Swiper('.swiper-container', {
      loop:"ture",
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });


var img=document.querySelector(".about .about-mian .qq img");
var view=document.querySelector(".about .about-mian .qq .view");
img.onmouseover=function(){
    this.style.opacity=0.5;
    view.style.display="block";
}
img.onmouseout=function(){
    this.style.opacity=1;
    view.style.display="none";
}