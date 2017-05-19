$('.pathway_analytics').on('click', function() {
  var url = "analytics.html";
  window.open(url, '_self');
});

$('.pathway_architecture').on('click', function() {
  var url = "architecture.html";
  window.open(url, '_self');
});

$('.pathway_cyber').on('click', function() {
  var url = "cyber.html";
  window.open(url, '_self');
});

$('.pathway_engineering').on('click', function() {
  var url = "engineering.html";
  window.open(url, '_self');
});

$('.tree_home > .col > .role').on('click', function() {
  $('.modal-home').fadeIn(200);

  var role = $(this).find('.label').text();
  $('.modal-home > .modal > .content > .title').text(role);
});

$('.icon_close').on('click', function() {
  $('.modal').parent().hide();
});

$('.value').on('click', function() {
  var url = "http://commnet2.cba/Main/about-cba/vision-and-values/Pages/default.aspx";
  window.open(url, '_blank');
});

//analytics
$('.tree_analytics > .col > .role').on('click', function() {
  var url = "ExecutiveDataScientist.pdf";
  window.open(url, '_blank');
});

//engineering
$('.pillar').on('click', function() {
  $('.pillar').removeClass('pillar_active');
  $(this).addClass('pillar_active');

  if ($(this).hasClass('pillar_data')) {
    $('.pillar_title').text('Data Engineering');
  } else if ($(this).hasClass('pillar_infra')) {
    $('.pillar_title').text('Infrastructure Engineering');
  } else if ($(this).hasClass('pillar_software')) {
    $('.pillar_title').text('Software Engineering');
  }
});

$('.faq-button').on('click', function() {
  $('.modal-faq').fadeIn(200);
});

$('.faq-q').on('click', function() {
  $('.faq-a').hide();
  var thisA = $(this).parent().find('.faq-a');
  if (thisA.is(':hidden')) {
    thisA.show();
  } else {
    thisA.hide();
  }
});
