/*$(document).ready(function(){
    //call the function when ready
    slideShow();
  
  
  //Actually define the slideShow()
  function slideShow(){
    
    //*** Conditional & Variables ***//
    
      //Define the current img
   //   var current = $('.head-slider .slider-1');
      //If index != 0/false then show next img
    var next = current.next().length ? 
        current.next() :
        // if index == false then show first img
        current.siblings().first();
    
     //*** Swap out the imgs and class ***//
     current.hide().removeClass('slider-1');
     next.fadeIn(".slider-2").addClass('.slider-2');
     current.hide().removeClass('slider-2');
     next.fadeIn(".slider-3").addClass('.slider-');
    
    
    //*** Repeat function every 3 seconds ***//
    setTimeout(slideShow, 1000);
    
  };
    
  }); //end ready