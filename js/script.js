$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    })

    $('.menu-btn').click(function(){
        $('.navbar .menu').toggle("active")
    })
})

var typed = new Typed(".typing", {
    strings: ["Developer", "Gamer", "Student","learner"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});