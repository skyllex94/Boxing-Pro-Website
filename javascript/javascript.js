function slideshow(){
    let x = document.getElementById('check-class');
    if(x.style.display == "none"){
        x.style.display="block";
        }
        else{
            x.style.display="none";
        }
    }
    
/*
    $('#fullpage').fullpage();

    $(window).on("scroll", function(){
        if($(window).scrollTop()){
            $('.nav-bar').addClass('black');
        }
        else{
            $('.nav-bar').removeClass('black');
        }
    })

$(document).ready(function(){
    $(window).scroll(function(){
        if($(this).scrollTop() > 0){
            $(".nav-bar").css({"background" : "#262626"})
        }
        else{
            $(".nav-bar").css({"background" : "transparent"})
        }
    })
})
*/

window.addEventListener("scroll", function(){
    const logoImage = document.querySelector(".logo");
    const navBar = document.getElementById(".nav-bar");
    let x = document.getElementById('check-class');
    
        if ($(window).width() > 768){
            if(window.pageYOffset > 0) {
                logoImage.style.height = "45px";
                $(".nav-bar").css({"height" : "70px"})
                $(".main-nav li a").css({"font-size" : "75%"})
                $(".nav-bar").css({"background" : "#262626"})
            }
            else{
                logoImage.style.height = "60px";
                $(".nav-bar").css({"height" : "85px"})
                $(".main-nav li a").css({"font-size" : "90%"})
                $(".nav-bar").css({"background" : "transparent"})
            }
        }
        else
        {
            logoImage.style.height = "65px";
            x.style.display="none";
            $(".nav-bar").css({"background" : "#333"})
        }
});

function displayNav(){
    let x = document.getElementById('check-class');
    if($(window).width() > 768){
        x.style.display = "inline-block";
        $(".nav-bar").css({"background" : "#262626"})
    }
    else{
        //logoImage.style.height = "65px";
        $(".nav-bar").css({"background" : "#333"})
        x.style.display = "none";
    }
}

function OnLoad(){
    if($(window).width() > 768){
        document.getElementById('check-class').style.display = "inline-block";
    }
}

window.addEventListener("scroll", scrollAppear);
window.addEventListener("scroll", scrollAppear2);
window.addEventListener("resize", displayNav);
window.addEventListener("load", OnLoad);


function scrollAppear(){
    var introText = document.querySelector('.text-appear');
    var introPosition = introText.getBoundingClientRect().top;
    var screenPosition = window.innerHeight / 2;

    if(introPosition < screenPosition){
        introText.classList.add('text-appearance');
    }
}

function scrollAppear2(){
    var introText = document.querySelector('.text-appear2');
    var introPosition = introText.getBoundingClientRect().top;
    var screenPosition = window.innerHeight / 2;

    if(introPosition < screenPosition){
        introText.classList.add('text-appearance');
    }
}

// $("#check-class").on('click', function(){
//     let links = document.getElementById('check-class');
//     links.style.display = "none";
// });

// $('check-menu').click(function(){
//     let links = document.getElementById('check-class');
//     links.style.display = "none";
// });



// ----------------------- Smooth Scrolling ----------------------- //

$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {

    let links = document.getElementById('check-class');
    links.style.display = "none";
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
