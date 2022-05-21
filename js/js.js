$(document).ready(function () {

  //НАСТРОЙКА СЛАЙДЕРОВ
  $('.slider1').slick({
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<img class="slick-prev" src="img/icons/angle-arrow-down.svg"/>',
    nextArrow: '<img class="slick-next" src="img/icons/angle-arrow-down.svg"/>',
    responsive: [
      {
        breakpoint: 1076,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 565,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $('.slider1_2').slick({
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<img class="slick-prev" src="../img/icons/angle-arrow-down.svg"/>',
    nextArrow: '<img class="slick-next" src="../img/icons/angle-arrow-down.svg"/>',
    responsive: [
      {
        breakpoint: 1076,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 565,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $('.slider2').slick({
    prevArrow: false,
    nextArrow: false,
    asNavFor: '.slider2_2',
    responsive: [
      {
        breakpoint: 819,
        settings: {
          infinite: false,
          prevArrow: '<img class="slick-prev" src="../img/icons/angle-arrow-down.svg"/>',
          nextArrow: '<img class="slick-next" src="../img/icons/angle-arrow-down.svg" />'
        }
      }
    ]
  });

  $('.slider2_2').slick({
    focusOnSelect: true,
    prevArrow: '<img class="slick-prev" src="../img/icons/angle-arrow-down.svg"/>',
    nextArrow: '<img class="slick-next" src="../img/icons/angle-arrow-down.svg"/>',
    asNavFor: '.slider2',
    vertical: true,
    verticalSwiping: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 819,
        settings: {
          vertical: false,
          verticalSwiping: false
        }
      }
    ]
  });


  //НАСТРОЙКА БЛОКА С ФИЛЬТРАМИ (БЛОК ФИЛЬТРОВ В ВИДЕ АККОРДИОНА)
  $('.panel_heading').click(function () {
    $(this).toggleClass('in').next().slideToggle();
  });


  //Скрипт открытия, закрытия телефонов шапки для маленьких экранов
  $('.open_close_info').click(function () {
    $('.inner--nav_bl').toggleClass('_add_class_inner--nav_bl');
    $(this).toggleClass('_add_class_open_close_info');
  });


  //Скрипт дляпоявления, исчезновеия мобильного меню
  $('.burger_menu').click(function () {
    $('.inner--nav_list').addClass('_add_inner--nav_list');
    $('.close_mobile_menu').addClass('_add_class_close');
  });

  $('.cancel_menu').click(function () {
    $('.inner--nav_list').removeClass('_add_inner--nav_list');
    $('.close_mobile_menu').removeClass('_add_class_close');
  });


  //Скрипт появления меню фильтров
  $('.mobile_filter-button').click(function () {
    $('.bl_filters').fadeIn();
    $('.close_filters').addClass('_add_class--close_filters');
  });


  //Скрипт исчезновения меню фильтров
  $('.close_filters').click(function () {
    $('.close_filters').removeClass('_add_class--close_filters');
    $('.bl_filters').fadeOut();
  });


  //СКРИПТ ДЛЯ ТАБОВ
  var $wrapper = $('.tab-wrapper'),
    $allTabs = $wrapper.find('.tab-content > div'),
    $tabMenu = $wrapper.find('.tab-menu li'),
    $line = $('<div class="line"></div>').appendTo($tabMenu);

  $allTabs.not(':first-of-type').hide();
  $tabMenu.filter(':first-of-type').find(':first').width('100%')

  $tabMenu.each(function (i) {
    $(this).attr('data-tab', 'tab' + i);
  });

  $allTabs.each(function (i) {
    $(this).attr('data-tab', 'tab' + i);
  });

  $tabMenu.on('click', function () {

    var dataTab = $(this).data('tab'),
      $getWrapper = $(this).closest($wrapper);

    $getWrapper.find($tabMenu).removeClass('tab_active');
    $(this).addClass('tab_active');

    $getWrapper.find('.line').width(0);
    $(this).find($line).animate({ 'width': '100%' }, 'fast');
    $getWrapper.find($allTabs).hide();
    $getWrapper.find($allTabs).filter('[data-tab=' + dataTab + ']').show();
  });


  //ОТКРЫТИЕ КОРЗИНЫ
  $('.nav_basket, .nav_basket2').click(function () {
    $('.bl_basket_min').toggleClass("active_basket");
    $('.nav_dovn_img').toggleClass("active");
  });

  $('.calck_cansel').click(function () {
    $('.bl_basket_min').removeClass("active_basket");
    $('.nav_dovn_img').removeClass("active");
  });
});