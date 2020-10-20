$(window).on('load', function() {
    $('.portfolio-container').isotope({
      itemSelector: '.portfolio-item',
      layoutMode: 'masonry',
    });
    
    
    $('ul.portfolio__menu li').click(function () {
      $('ul.portfolio__menu li').removeClass('filter-active');
      $(this).addClass('filter-active');
      var selector = $(this).attr('data-filter');
      $('.portfolio-container').isotope({
          filter: selector
      });
    })
  });