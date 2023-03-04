
 $(document).ready(function(){
    $(window).scroll(function(){
        $('.navbar').css("opacity", 1.0- $(window).scrollTop() / 800)
    });
});