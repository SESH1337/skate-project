let dom = document;
let SliderAllSelect = dom.querySelectorAll('.slideSize');
let buttonRight = dom.querySelector('.button-right');
let buttonLeft = dom.querySelector('.button-left');
let currentSlide = 0;



// dom.querySelectorAll('.buttons').forEach(item =>{
//   item.addEventListener('click', event =>{
//   if(event.target.classList.contains(".button-left")){
//     SliderAllSelect = SliderAllSelect - 1;
//   }else{
//     SliderAllSelect = SliderAllSelect++;
//   }

//   let left = (SliderAllSelect - 1).style.display = "block";
//   })
// })


   function reset(){
      for(let i = 0; i < SliderAllSelect.length; i++){
        SliderAllSelect[i].style.display = "none";
      }
    }


    function slideRight(){
      reset();

      SliderAllSelect[currentSlide + 1].style.display = "block";
      currentSlide++;

      }



    function slideLeft(){
      reset();
      SliderAllSelect[currentSlide - 1].style.display = "block";
  
      currentSlide--;
      }
    



buttonRight.addEventListener("click", function(){
  slideRight();
});

buttonLeft.addEventListener("click", function(){
  slideLeft();


});


// function reset(){
  //   for(let i = 0; i < SliderAllSelect.length; i++){
  //     SliderAllSelect[i].style.display = "none"
  //   }
  // }

  // function startSlide(){
  //   reset();
  //   SliderAllSelect[0].style.display = "block";
  // }


  // startSlide()
 
  // function slideRight(){
  //   reset();
  //   SliderAllSelect[currentSlide + 1].style.display = "block";
  //   currentSlide++
  // }




//Used codes === Garbage// 


 // if (currentSlide < SliderAllSelect.length){
  //   SliderAllSelect[0].style.display = "none";
  //   SliderAllSelect[1].style.display = "block";
  // }












