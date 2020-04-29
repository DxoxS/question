$(function(){
    $('#hamburger').click(function(){
        $(this).toggleClass("active");
        $(".menu-content").toggleClass("open")
    })
});