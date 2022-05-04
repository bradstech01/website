$('.link').click(function() {
  var anchor = $(this).attr("dest");

  $('html, body').animate({
    scrollTop: $('#' + anchor).offset().top
  }, 400);
});

function onScrollInit( items, elemTrigger ) {
  var offset = $(window).height() / 1.2;
  items.each( function() {
    var elem = $(this),
        animationClass = elem.attr('data-animation'),
        animationDelay = elem.attr('data-delay');

        elem.css({
          '-webkit-animation-delay':  animationDelay,
          '-moz-animation-delay':     animationDelay,
          'animation-delay':          animationDelay
        });

        var trigger = (elemTrigger) ? trigger : elem;

        trigger.waypoint(function() {
          elem.addClass('animated').addClass(animationClass);
          if (elem.get(0).id === 'gallery') mixClear();
          },{
              triggerOnce: true,
              offset: offset
        });
  });
}

setTimeout(function() { onScrollInit($('.waypoint')) }, 10);
