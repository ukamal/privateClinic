$(document).ready(function(){
    $('#slides').superslides({
        animation: 'fade',
        play: '3000',
        pagination: true,
    });
    /*********end of slides********/
    $(".sidebar-social").click(function(){
        if($(this).hasClass('open')){
            $(this).removeClass('open');
            $('.sidebar-social').animate({'left':'-80px'});
        }else{
            $(this).addClass('open');
            $('.sidebar-social').animate({'left':'0'});
        }
    });
    /*******end of sidebar-social area*********/
    $(window).on('scroll', function(){
        if($(window).scrollTop() > 60){
            $('.navbar').addClass("rgbaColor");
        }else{
            $('.navbar').removeClass("rgbaColor");
        }
    });
    /*******end of navbar area*********/
   
    $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
});
    /*******end of owl-carousel*********/
    

    var skillsTopOffset = $('#skills').offset().top;
    $(window).scroll(function(){
        if(window.pageYOffset > skillsTopOffset - $(window).height()+200){
                $('.chart').easyPieChart({
                 easing: 'easeInOut',
                 barColor: 'red',
                 trackColor: false,
                scaleColor: false,
                 lineWidth: '4',
                 size: '152',
                 onStep:function(from,to,percent){
                     $(this.el).find('.percent').text(Math.round(percent));
                 }
                });
           }
    });
	
	//fancy apps

$("[data-fancybox]").fancybox();
    
   
    
});
 //wow
     new WOW().init();