

$(document).ready(function () {

//////LOGIN-POPUP
    // Show the popup when the button is clicked
    $("#login").click(function () {
      $("#login-popup").fadeIn();
  });

  // Hide the popup when the close button is clicked
  $("#close-popup").click(function () {
      $("#login-popup").fadeOut();
  });

//////REGISTATION-POPUP
  // Show the popup when the button is clicked
  $("#regis").click(function () {
      $("#regis-popup").fadeIn();
  });

  // Hide the popup when the close button is clicked
  $("#close-regis-popup").click(function () {
      $("#regis-popup").fadeOut();
  });

//////MENTAL-HEALTH-POPUP
  // Show the popup when the button is clicked
  $("#mental-health").click(function () {
    $("#mental-health-popup").fadeIn();
});

// Hide the popup when the close button is clicked
$("#health-close-popup").click(function () {
    $("#mental-health-popup").fadeOut();
});

//////PHYCIAL-HEALTH-POPUP
  // Show the popup when the button is clicked
  $("#phycial-health").click(function () {
    $("#phycial-health-popup").fadeIn();
});

// Hide the popup when the close button is clicked
$("#phycial-close-popup").click(function () {
    $("#phycial-health-popup").fadeOut();
});


//////FINANCIAL-HEALTH-POPUP
  // Show the popup when the button is clicked
  $("#financial-health").click(function () {
    $("#financial-health-popup").fadeIn();
});

// Hide the popup when the close button is clicked
$("#financial-close-popup").click(function () {
    $("#financial-health-popup").fadeOut();
});
  
//////HOME-PAGE-TESTIMONIAL-SLIDER
    $('.financial-slider').slick({
        dots: false,
        infinite: false,
        arrows: false,
        autoplay: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
      });


////// HERO-SECTION-SLIDER
      $('.hero-bg-slider').slick({
        fade: true,
        dots: false,
        infinite: false,
        infinite: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
      });
      $('#banner_item').slick({
        fade: true,
        dots: false,
        infinite: false,
        infinite: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
      });

  //  js progress style sroll//////
  //----------------------------------------------------------------------------
  //progress sroll
//discussion start

  $('.main_discussion_box .video').scroll(() => {
    var srl = $('.main_discussion_box .video').scrollTop();
    var doch = $(document).height();
    var winh = $('.main_discussion_box .video').height();
    var vvl = (srl / (doch - winh)) * 120;
    $('ul .line').css('height', vvl + '%');
  })
  //discussion end
//discussion2 start

  $('.main_discussion_box2 .video2').scroll(() => {
    var srl = $('.main_discussion_box2 .video2').scrollTop();
    var doch = $(document).height();
    var winh = $('.main_discussion_box2 .video2').height();
    var vvl = (srl / (doch - winh)) * 120;
    $('ul .line2').css('height', vvl + '%');
  })
  //discussion2 end
  //------------------------------------------------------------------------->
  //  js progress style sroll//////
//  js circle progrss start-------------->
$( ()=>{
  $('.circlechart').circlechart();
});
});
//  js circle progrss end---------------->
//js click activ start ------------------>
//js scrl activ start ------------------>

//js srcl activ start ------------------>
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
one.onclick = ()=>{
  one.classList.add('actv');
  two.classList.remove('actv');
  three.classList.remove('actv');
  four.classList.remove('actv');
}
two.onclick = ()=>{
  one.classList.add('actv');
  two.classList.add('actv');
  three.classList.remove('actv');
  four.classList.remove('actv');
}
three.onclick = ()=>{
  one.classList.add('actv');
  two.classList.add('actv');
  three.classList.add('actv');
  four.classList.remove('actv');
}
four.onclick = ()=>{
  one.classList.add('actv');
  two.classList.add('actv');
  three.classList.add('actv');
  four.classList.add('actv');
}
//<-------------------------------------->
const one2 = document.querySelector(".one2");
const two2 = document.querySelector(".two2");
const three2 = document.querySelector(".three2");
const four2 = document.querySelector(".four2");
one2.onclick = ()=>{
  one2.classList.add('actv');
  tw2o.classList.remove('actv');
  three2.classList.remove('actv');
  four2.classList.remove('actv');
}
two2.onclick = ()=>{
  one2.classList.add('actv2');
  two2.classList.add('actv2');
  three2.classList.remove('actv2');
  four2.classList.remove('actv2');
}
three2.onclick = ()=>{
  one2.classList.add('actv2');
  two2.classList.add('actv2');
  three2.classList.add('actv2');
  four2.classList.remove('actv2');
}
four2.onclick = ()=>{
  one2.classList.add('actv2');
  two2.classList.add('actv2');
  three2.classList.add('actv2');
  four2.classList.add('actv2');
}
//js click activ end2 ------------------>

