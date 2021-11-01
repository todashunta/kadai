const scrollPropaty = ['scroll-in-to-right', 'scroll-in-to-left','scroll-in-to-top', 'scroll-in-to-bottom'];
let fadeInTarget = document.querySelectorAll('.fade-in');
for( target of fadeInTarget){
  target.classList.add(scrollPropaty[Math.floor(Math.random() * 4)]);
}
window.addEventListener('scroll', () => {
  for (let i = 0; i < fadeInTarget.length; i++){
    const rectTop = fadeInTarget[i].getBoundingClientRect().top;
    const rectBottom = fadeInTarget[i].getBoundingClientRect().bottom;
    const viewHeight = document.documentElement.clientHeight;
    if (rectTop < viewHeight * 0.8 || rectBottom > 100) {
      fadeInTarget[i].classList.add('scroll-in');
    }
    if(rectTop < viewHeight * 0.2 || rectBottom < 100){
      fadeInTarget[i].classList.remove('scroll-in');
    }
    // const rect = fadeInTarget[i].getBoundingClientRect().top;
    // const scroll = window.pageYOffset || document.documentElement.scrollTop;
    // const offset = rect + scroll;
    // const windowHight = window.innerHeight;
    if(i == 0){
      console.log({
        'rect': Math.floor(rectBottom),
        'view': Math.floor(viewHeight),
        'if': rectBottom > 100
      });
    }
  }
});

// let fadeInTarget = document.querySelectorAll('.fade-in');
// window.addEventListener('scroll', () => {
//   for (let i = 0; i < fadeInTarget.length; i++){
//     const rect = fadeInTarget[i].getBoundingClientRect().top;
//     const scroll = window.pageYOffset || document.documentElement.scrollTop;
//     const offset = rect + scroll;
//     const windowHeight = window.innerHeight; // 現在のブラウザの高さ
//     if (scroll > offset - windowHeight + 150) {
//       fadeInTarget[i].classList.add('scroll-in');
//     }
//   }
// });

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