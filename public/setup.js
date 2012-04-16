$(function() {
  var router = new Router;
  var navigate = true;

  $('a.navigate').on('click', function(event) {
    navigate = !navigate;
    $('.off,.on').toggle();
  });

  $('a.backbone').on('click', function(event) {
    if (navigate) {
      event.preventDefault();
      router.navigate($(event.target).attr('href'), {trigger: true});
    }
  });

  $('a.js_nav').on('click', function(event) {
    if (navigate) {
      event.preventDefault();
      router.navigate('content/23', {trigger: true});
    }
  });
});
