$(function(){
    $(window).load(function(){
        var $container = $('.popup-portfolio'); 
        
        var isotopePortfolio = function(filter){
            $container.isotope({ 
                filter: filter, 
                animationOptions: { 
                    duration: 750, 
                    easing: 'linear', 
                    queue: false
                },
                masonry: {
                    isFitWidth: true,
                    isResizable: true,
                    gutter: 15
                }
            }); 
        };

        $container.isotope({filter: '.hourofcode'});

        $container.isotope({filter: '.webdesign'});

        $container.isotope({filter: '.gamedesign'});
        
        isotopePortfolio('*');
        
        $('.filter-portfolio a').click(function(e){ 
            e.preventDefault();
            
            $('.filter-portfolio li').removeClass('active');
            
            $('.filter-portfolio a').removeClass('disabled');
            
            $(this).parent('li').addClass('active');
            
            $(this).addClass('disabled');
            
            var selector = $(this).attr('data-filter'); 
            
            isotopePortfolio(selector);
        }); 
    });
    
    $('.image-popup-no-margins').magnificPopup({
            type: 'image',
            closeOnContentClick: true,
            closeBtnInside: false,
            fixedContentPos: true,
            mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
            image: {
                verticalFit: true
            },
            zoom: {
                enabled: true,
                duration: 300 // don't foget to change the duration also in CSS
            }
        });
});