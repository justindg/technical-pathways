$('.proto_container').on('click', function() {
  $('.proto_container').removeClass('proto_container_active');
  $(this).addClass('proto_container_active');

  $('.products').hide();
  $('.products > .product').hide();

  var delay = 0;

  if ($(this).hasClass('proto_storyboard')) {
    $('.products_storyboard').show();
    // $('.products_storyboard').find('.product')
    //   .each(function(index){
    //     $(this).delay(delay).fadeIn(300);
    //     delay = delay + 300;
    //   });

    $('.products_storyboard').find('.product').fadeIn(300);
  }

  if ($(this).hasClass('proto_immersive')) {
    $('.products_immersive').show();
    $('.products_immersive').find('.product').fadeIn(300);
  }

  if ($(this).hasClass('proto_app')) {
    $('.products_app').show();
    $('.products_app').find('.product').fadeIn(300);
  }
});

// $('.service').on('mouseleave', function() {
//   $(this).find('.service_container').show();
//   $(this).find('.service_container_back').hide();
//   $(this).find('.service_container_back').find('.service_back_item').slideUp(100);
// });

// $('.service_ui').on('click', function() {
//   window.location.href = 'innovation.html';
// });
//
// $('.service_ic').on('click', function() {
//   window.location.href = 'coaching.html';
// });
//
// $('.service_rp').on('click', function() {
//   window.location.href = 'prototyping.html';
// });
