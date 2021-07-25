$(document).ready(function(){
    $(window).scrollY(function(){
        if(this.scrollY > 20){
            $('.navber').addClass("sticky");
        }else{
            $('.navber').removeClass("sticky");
        }
    })
});