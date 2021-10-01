$('document').ready(function () {
    const slide = ["ximages/slider1.jpg", "ximages/slider2.jpg", "ximages/slider3.jpg"];

    const items = document.querySelectorAll('.sliderImage');
    const nbSlide = items.length;
    const firstSlide = document.querySelector('#first');
    const secondSlide = document.querySelector('#second');
    let count = 0;
    let run;
    slideShow();

    function slideNext(){
        stopSlideShow();
        items[count].classList.remove('active');
        if(count < nbSlide -1){
            count++;
        } else{
            count = 0;
        }
        items[count].classList.add('active');
        slideShow();
    }

    secondSlide.addEventListener('click', slideNext);

    function slidePrevious(){
        stopSlideShow();
        items[count].classList.remove('active');
        if (count > 0){
            count--;
        } else {
            count = nbSlide -1;
        }
        items[count].classList.add('active');
        slideShow();
    }

    firstSlide.addEventListener('click', slidePrevious);


    function slideShow(){
        run = setInterval(function (){
            items[count].classList.remove('active');
            if (count > 0){
                count--;
            } else {
                count = nbSlide -1;
            }
            items[count].classList.add('active');
        }, 5000);
    }

    function stopSlideShow(){
        clearInterval(run);
    }

});

