

$(document).ready(function(){

    floatWindow(); // 플롯창
    closeNotice(); // 공지사항 닫기
    onMenu(); // 메뉴
    onLang(); // 언어

       
    $('.btn-wrapper').slick({
        slidesToShow : 5,
        slidesToScroll : 1,
        centerMode : true,
        // centerPadding : '20px',
        asNavFor : '.studio-wrapper, .video-wrapper',
        focusOnSelect : true,
        nextArrow : "<i class='bx bx-chevron-right' ></i>",
        prevArrow : "<i class='bx bx-chevron-left' ></i>"
    })

    $('.studio-wrapper').slick({
        arrows: false,
        slidesToShow : 1,
        fade : true,
        asNavFor : '.btn-wrapper, .video-wrapper',
    })

    $('.video-wrapper').slick({
        arrows: false,
        slidesToShow : 1,
        fade : true,
        asNavFor : '.btn-wrapper, .studio-wrapper',

    })




})

function floatWindow(){

    var $floatWindow = $('.float-window');
    // var $popUpBar = $('.float-window dt');

    // var $clickX;
    // var $clickY;

    // $popUpBar.on('mousedown', onDrag);
    // $popUpBar.on('mouseup', outDrag);


    // function onDrag(e){

    //     $clickX = e.pageX - $floatWindow.position().left;
    //     $clickY = e.pageY - $floatWindow.position().top;
    //     // console.log($clickX, $clickY)
    //     console.log($floatWindow.position().left)

    //     $(document).on('mousemove', function(e){
    //         $floatWindow.css({'left':e.pageX - $clickX, 'top':e.pageY - $clickY});
             
    //     })

    // }

    // function outDrag(){
    //     $(document).off('mousemove')
    // }




    $('.float-close').on('click', function(){

        $floatWindow.stop().animate({'opacity':0}, 300, function(){
            $floatWindow.hide()
        })

        $('.float-bg').stop().animate({'opacity':0}, 300, function(){
            $('.float-bg').hide()
        })

    })

    

}

function closeNotice(){

    var $floatNotice = $('.head-notice-wrapper');

    $('.head-notice-close').on('click', function(){
        $floatNotice.stop().animate({'opacity':0}, 100, function(){
            $floatNotice.hide()
        })
    })

}


function onMenu(){

    var $mainMenu = $('.gnb-menu').children();
    var $subMenu = $mainMenu.children('ul');
    var $subBg = $('.sub-bg');

    $subMenu.hide();
    $subBg.hide();

    $mainMenu.on('mouseover', onOver);
    $('.gnb li').on('mouseleave', onOut);

    function onOver(){
        $subMenu.stop().slideDown();
        $subBg.stop().slideDown();
    }

    function onOut(){
        $subMenu.stop().slideUp();
        $subBg.stop().slideUp();
    }

}

function onLang(){

    var $language = $('.language').children('div');
    var $subBg = $('.sub-bg');

    $language.hide();
    

    $('.language').on('mouseover', onOver);
    $('.language').on('mouseleave', onOut);

    function onOver(){
        $language.stop().slideDown();
        $subBg.stop().slideDown();
    }

    function onOut(){
        $language.stop().slideUp();
        $subBg.stop().slideUp();
    }



}
