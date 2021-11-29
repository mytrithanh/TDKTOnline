$(function() {

	var owl = $('.owl-1');
    owl.owlCarousel({
        loop:false,
        margin:0,
        nav:false,
        dots: false,
        items: 1,
        smartSpeed: 1000,
        autoplay: false,
        navText: ['<span class="icon-keyboard_arrow_left">', '<span class="icon-keyboard_arrow_right">']
    });

    var carousel_nav_a = $('.carousel-nav a');

    carousel_nav_a.each(function(slide_index){
        var $this = $(this);
        $this.attr('data-num', slide_index);
        $this.click(function(e) {
            owl.trigger('to.owl.carousel',[slide_index,1500]);
            e.preventDefault();
        })
    })

    owl.on('changed.owl.carousel', function(event) {
        carousel_nav_a.removeClass('active');
        $(".carousel-nav a[data-num="+event.item.index+"]").addClass('active');
    })

	
});

$(document).ready(function(){
    var score = Number($("#how-number1").val());
    $(".addition-cart").click(function(){
        var scoreAdd1 = parseFloat($("#how-number1").val());
        score = score + scoreAdd1;
        $("#products-quantity-pc").text(score);
        $("#products-quantity-mobile").text(score);
    });

    var heart = Number(0);
    $(".add-heart").click(function(){
        heart = heart + 1;
        $("#heart-quantity").text(heart);
    });
    $("input[type='number']").inputSpinner()
    $(".buttons-only").inputSpinner({buttonsOnly: true, autoInterval: undefined })
});

$("#contactForm").validate ({
    rules: {
        FamilyName: "required",
        FirstName: "required",
        Phone: {
            required: true,
            minlength: 10
        },
        message: {
            required: true,
            minlength: 100
        }
   },
   messages: {
       FamilyName: "Vui lòng nhập họ",
       FirstName: "Vui lòng nhập tên",
       Address: {
           required: "Vui lòng nhập số điện thoại",
           minlength: "Số điện thoại không đúng, nhập lại!"
       },
       message: {
           required: "Vui lòng nhập nội dung!",
           minlength: "Nội dung ít nhất phải 100 ký tự!"
       }
   }
})