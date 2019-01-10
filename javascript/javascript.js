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
