const slider = document.querySelector('.main__slider');
const sliderContainer = document.querySelector('.main__slider-container');
const dots = document.querySelectorAll('.slider__dot-container input');

dots.forEach(item => {
  item.addEventListener('click', (e) => {
    // console.log(e.target.getAttribute('id'));

    if (e.target.getAttribute('id') === '2') {
      // console.log(e.target.getAttribute('id') === 2);
      sliderContainer.style.left = '-100%';
    } else if (e.target.getAttribute('id') === '1') {
      // console.log(e.target.getAttribute('id') === 1);
      sliderContainer.style.left = '0';
    }else {
      // console.log(e.target.getAttribute('id') === 1);
      console.log(e.target.getAttribute('id'));
    }
  })
})

