$('.pathway_analytics').on('click', function() {
  var url = "analytics.html";
  window.open(url, '_self');
});

$('.pathway_engineering').on('click', function() {
  var url = "engineering.html";
  window.open(url, '_self');
});

$('.tree_home > .col > .role').on('click', function() {
  $('.modal').show();
});

$('.icon_close').on('click', function() {
  $('.modal').hide();
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
