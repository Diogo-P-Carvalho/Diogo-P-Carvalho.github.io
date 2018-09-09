$(document).ready(function(){

    /*navbar effect*/
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

    /*icons tooltip*/
    $(function(){
        $('[data-toggle="tooltip"]').tooltip();
    });
});