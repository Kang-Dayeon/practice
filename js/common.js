$(document).ready(function(){
    $('.menu__anchor').click(function(){
        $(this).parent().toggleClass('active');
        $(this).parent().children('.menu__2depth').slideToggle();
    });
    $('.navigation').click(function(){
        $('.gnb-wrap').addClass('active');
        $('body').addClass('active');
    });
    $('.menu__close').click(function(){
        $('.gnb-wrap').removeClass('active');
        $('body').removeClass('active');
    });
    // 전체동의 체크
    $('.terms-wrap').on('click', '.all-agreed', function(){
        // const checked = $(this).is(':checked');
         $(this).parents('.terms-wrap').find('input').prop('checked', $(this).is(':checked'));
    });
    $('.terms-wrap').on('click', '.agreed', function(){
        let is_checked = true;

        $('.terms-wrap .agreed').each(function(){
            is_checked = is_checked && $(this).is(':checked');
        });

        $('.all-agreed').prop('checked', is_checked);
    });
});

//순수 js
// const navigation = document.querySelector('.navigation');
// const body = document.querySelector('body');
// const gnbWrap = document.querySelector('.gnb-wrap');
// const close = document.querySelector('.menu__close');

// function active(neme){
//     neme.classList.add('active');
// };

// navigation.addEventListener('click', function(){active(body)});
// navigation.addEventListener('click', function(){active(gnbWrap)});

// close.addEventListener('click', function(){
//     body.classList.remove('active');
//     gnbWrap.classList.remove('active');
// });