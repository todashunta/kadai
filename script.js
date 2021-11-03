const scrollPropaty = ['scroll-in-to-right', 'scroll-in-to-left','scroll-in-to-top', 'scroll-in-to-bottom'];
let fadeInTarget = document.querySelectorAll('.fade-in');
for( target of fadeInTarget){
  target.classList.add(scrollPropaty[Math.floor(Math.random() * 4)]);
}
window.addEventListener('scroll', () => {
  for (let i = 0; i < fadeInTarget.length; i++){
    const rectTop = fadeInTarget[i].getBoundingClientRect().top;
    const rectBottom = fadeInTarget[i].getBoundingClientRect().bottom;
    const viewHeight = window.innerHeight;
    if (rectTop < viewHeight * 0.9 && rectBottom > viewHeight * 0.1) {
      fadeInTarget[i].classList.add('scroll-in');
    }else{
      fadeInTarget[i].classList.remove('scroll-in');
    }
  }
});

const sliderItems = document.getElementsByClassName('slider-item');
let sliderCount = 0;
slide()
function slide() {
  for(let i = 0; i < sliderItems.length; i++){
    if(i == sliderCount){
      sliderItems[i].classList.add('slider-in')
    }else{
      sliderItems[i].classList.remove('slider-in')
    }
  }
  sliderCount++;
  if(sliderCount >= sliderItems.length){
    sliderCount = 0;
  }
}


setInterval(slide, 6000);