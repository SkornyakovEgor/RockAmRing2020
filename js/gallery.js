(function($) {
  var $li = $('.img-list').find('> li'),
      $links = $li.find('> a'),
      $lightbox = $('.lightbox'),
      $next = $('.next'),
      $prev = $('.prev'),
      $overlay1 = $('.overlay1'),
      liIndex,
      targetImg;
  
  var imgSources = [
  '..//img/Image17.jpg',
  '..//img/Image18.jpg',
  '..//img/Image4.png',
  '..//img/Image3.png',
  '..//img/Image5.jpg',
  '..//img/Image6.jpg',
  '..//img/Image7.jpg',
  '..//img/Image8.jpg',
  '..//img/Image9.jpg',
  '..//img/Image10.jpg',
  '..//img/Image11.jpg',
  '..//img/Image12.jpg',
  '..//img/Image13.jpg',
  '..//img/Image14.jpg',
  '..//img/Image15.jpg', 
  '..//img/Image16.jpg'
  ];

  var imgs = [];
  for (var i = 0; i < imgSources.length; i++) {
    imgs[i] = new Image();
    imgs[i].src = imgSources[i];
  }

  function replaceImg(src) {
    $lightbox.find('img').attr('src', src);
  }

  function getHref(index) {
    return $li.eq(index).find('>a').attr('href');
  }

  function closeLigtbox() {
    $lightbox.fadeOut();
  }

  $overlay1.click(closeLigtbox);

  $links.click(function(e) {
    e.preventDefault();
    targetImg = $(this).attr('href');
    liIndex = $(this).parent().index();
    replaceImg(targetImg);
    $lightbox.fadeIn();
  });

   $next.click( function() {  
    if ( (liIndex + 1) < $li.length ) { 
      targetImg = getHref(liIndex + 1);
      liIndex ++;
    } else {
      targetImg = getHref(0);
      liIndex = 0;
    }
    replaceImg(targetImg);
  });

   $prev.click( function() {  
    if ( (liIndex) > 0 ) { 
      targetImg = getHref(liIndex - 1);
      liIndex --;
    } else {
      targetImg = getHref($li.length - 1);
      liIndex = $li.length - 1;
    }
    replaceImg(targetImg);
  });
  
})(jQuery);