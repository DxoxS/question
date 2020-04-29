$(function(){
    $('#hamburger').click(function(){
        $(this).toggleClass("active");
        $('.menu-content').toggleClass("open");
    })

    $('#top-btn').click(function(){
        $('html,body').animate({
            scrollTop:0
        },700);
    })

    const child =".child";
    $(child).hide();
    $("#menu > li").hover(function(){
        $(child,this).stop().slideDown(300);
    }, function(){
        $(child,this).stop() .slideUp(300);
    })
});