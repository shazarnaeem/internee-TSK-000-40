let currentIndex=0;const items=document.querySelectorAll(".carousel-item"),totalItems=items.length;function showSlide(e){const t=100*-e;document.querySelector(".carousel-inner").style.transform=`translateX(${t}%)`,currentIndex=e}function nextSlide(){showSlide((currentIndex+1)%totalItems)}function prevSlide(){showSlide((currentIndex-1+totalItems)%totalItems)}function autoPlay(){nextSlide(),setTimeout(autoPlay,3e3)}document.addEventListener("DOMContentLoaded",()=>{showSlide(currentIndex),autoPlay()});