


$(document).ready(function(){

    floatWindow(); // 플롯창
    closeNotice(); // 공지사항 닫기
    onMenu(); // 메뉴
    onLang(); // 언어
    onCheckList(); // 레슨 체크
    onBookHelp(); // 도움말
    onCheckBtn(); // 레슨 리스트 체크
    // onSelectList(); // 수업 선택지 체크
    formData(); // 수업 선택지 체크
    calendar(); // 달력 체크
    closeSelect(); // 수업 선택지 닫기
    nextSelect(); // 시간, 댄서 선택창 넘어가기
    closeNext(); // 시간, 댄서 선택창 닫기
    onBook(); // 예약 확인
    timeSelect(); // 시간, 댄서 선택

})


function floatWindow(){

    var $floatWindow = $('.float-window');

    $('.float-close').on('click', function(){

        $floatWindow.stop().animate({'opacity':0}, 300, function(){
            $floatWindow.hide()
        })

        $('.float-bg').stop().animate({'opacity':0}, 300, function(){
            $('.float-bg').hide()
        })

    })

    

}


function onCheckList(){

    var $checkList = $('.check-list-wrapper').children();

    $checkList.on('click', function(){

        var $checkNum = $checkList.index($(this));

        console.log($checkNum);

        $checkList.removeClass('selected');
        $checkList.eq($checkNum).addClass('selected');

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

function onBookHelp(){

    var $bookHelp = $('.book-help'); // p
    var $helpText = $('.help-text'); // div
    var $timer;

    $helpText.css({'opacity': 0, 'display':'none'});

    $bookHelp.on('mouseenter', onOver);
    $bookHelp.on('mouseleave', onOut);

    function onOver(e){
        $helpText.show();
        $helpText.stop().animate({'opacity':1}, 300);
        $timer = setTimeout(onOut, 3000);
    }

    function onOut(e){
        clearTimeout($timer)
        $helpText.hide();
        $helpText.stop().animate({'opacity':0}, 300, function(){
            $helpText.hide();
        })
    }

    

}

function onCheckBtn(){

    

    var $checkBtn = $('.btn-wrapper').children();
    var $timeSelect = $('.time-select-wrapper');
    var $instSelect = $('.inst-select-list').children();

    $checkBtn.on('click', function(){

        $timeSelect.hide();

        var $btnNum = $checkBtn.index($(this));
        // console.log($btnNum)
        var $floatSelect = $('.lesson-select-wrapper');
        var $floatTime = $('.time-select-wrapper');

        $instSelect.removeClass('selected');
        $checkBtn.removeClass('selected');
        $checkBtn.eq($btnNum).addClass('selected')

        $floatTime.stop().animate({'display':'none'}, 100, function(){
            $floatTime.fadeOut();
            $floatSelect.stop().animate({'opacity':1}, 100, function(){
                $floatSelect.fadeIn();
            })
        })

        
        

    });

}

function closeNotice(){

    var $floatNotice = $('.head-notice-wrapper');

    $('.head-notice-close').on('click', function(){
        $floatNotice.stop().animate({'opacity':0}, 100, function(){
            $floatNotice.hide()
        })
    })

}



function formData(){

    

    $('select').each(function(){

        var $this = $(this), numberOfOptions = $(this).children('option').length;
        
        $this.addClass('select-hidden');
        $this.wrap('<div class="select"></div>');
        $this.after('<div class="select-styled"></div>');
        // after로 내가 선택한 것의 형제(다음)로 넣어줬다.

        var $styledSelect = $this.next('div.select-styled');
        // 그렇기 때문에 after넣는 요소를 next로 찾아 준다.
        $styledSelect.text($this.children('option').eq(0).text());
        // $styledSelect의 text를 option의 0번째(보이는 선택창) text로 바꾼다.

        var $list = $('<ul/>', { 'class': 'select-options'}).insertAfter($styledSelect);
        // $styledSelect 뒤에 class = select-options인 ul을 넣는다.

        for (var i = 0; i < numberOfOptions; i++){
            $('<li/>', {
                text: $this.children('option').eq(i).text(),
                rel: $this.children('option').eq(i).val()
            }).appendTo($list);
        }

        var $listItems = $list.children('li');

        $styledSelect.click(function(e){
            e.stopPropagation();

            $('div.select-styled.active').not(this).each(function(){
                $(this).removeClass('active').next('ul.select-options').hide();
                // $('div.select-styled.active') 중 this가 아닌 것을 찾아서 각각 function 반복
            });
            $(this).toggleClass('active').next('ul.select-options').toggle();
            // $(this).toggleClass('active') 내가 선택한 것에 active를 주고 (css)
            // active를 받은 것의 형제 중 ul.select-options를 찾아 toggle해 준다.
        });

        $listItems.click(function(e){

            e.stopPropagation();

            $styledSelect.text($(this).text()).removeClass('active');
            // $styledSelect의 text를 내가 선택한 것의 text로 바꾸고,
            // active 효과 초기화(취소) 선택창에 효과 사라짐
            $this.val($(this).attr('rel'));
            console.log($this.val($(this).attr('rel')))
            // attr('속성 가져오기')
            // attr('속성 추가', '추가할 속성값')

            $list.hide();

        })

        $(document).click(function(){
            // 바깥쪽에서 누르면 리스트 숨겨지게
            $styledSelect.removeClass('active');
            $list.hide();
        })




    })

}

function calendar(){

    $(".datepicker").datepicker({
        prevText: '<i class="bx bx-chevron-left"></i>',
        nextText: '<i class="bx bx-chevron-right"></i>',
        dayNamesMin :['월','화','수','목','금','토','일'],
       monthNames : ['1','2','3','4','5','6','7','8','9','10','11','12'],
      });

}


function closeSelect(){
    
    var $floatSelect = $('.lesson-select-wrapper');

    $('.close-btn').on('click', function(){
        $floatSelect.stop().animate({'opacity':0}, 300, function(){
            $floatSelect.hide()
        })
    })

}

function nextSelect(){

    var $floatLesson = $('.lesson-select-wrapper');
    var $floatTime = $('.time-select-wrapper')

    $('.lesson').on('click', function(){
        $floatLesson.stop().animate({'opacity':0}, 100, function(){
            
            $floatTime.stop().animate({'opacity':1}, 100, function(){
            $floatLesson.css({'display':'none'})
            $floatTime.fadeIn();
        })
        })
        
    })
}

function closeNext(){

    var $floatTime = $('.time-select-wrapper');

    $('.close-btn').on('click', function(){
        $floatTime.stop().animate({'opacity':0}, 300, function(){
            $floatTime.hide()
        })
    })

}

function onBook(){

    var $floatTime = $('.time-select-wrapper');

    $('.time').on('click', function(){
        $floatTime.stop().animate({'opacity':0}, 100, function(){
            // $floatTime.css({'display':'none'});
            $floatTime.hide();
        })

    })

}

function timeSelect(){

    var $instSelect = $('.inst-select-list').children();
    

    $instSelect.on('click', function(){

        var $instNum = $instSelect.index($(this));
        console.log($instNum);

        $instSelect.removeClass('selected');
        $instSelect.eq($instNum).addClass('selected');

    })

    

}





















