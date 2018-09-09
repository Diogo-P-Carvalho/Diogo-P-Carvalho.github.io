$(document).ready(function(){

    var navbarCollapse = function(){
        if($('#nav').offset().top > 100){
            $('#nav').addClass('navbar-shrink');
        }
        else{
            $('#nav').removeClass('navbar-shrink');
        }
    };

    navbarCollapse();

    $(window).scroll(navbarCollapse);
});