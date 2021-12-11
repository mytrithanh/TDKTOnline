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


const msgerForm = get(".msger-inputarea");
const msgerInput = get(".msger-input");
const msgerChat = get(".msger-chat");

const BOT_MSGS = [
  "Xin chào, bạn ở đâu",
  "Tôi cũng rất thích trang web này",
  "Tôi đã đạt được điểm tuyệt đối khi học xong khoá học Toán 10 hehe!",
  "Tui có những người bạn, Mai Trí Thành, Nguyễn Quốc Duy, Dương Chí Kiệt Phan Ngô Minh Triết",
  "Ôi buồn ngủ quá! :("
];

// Icons made by Freepik from www.flaticon.com
const BOT_IMG = "https://lh3.googleusercontent.com/--1q9Hq7zp2A/YaopVCcNGII/AAAAAAAAH-A/uepjsGEFWrUWd3WjpoxtAKw4NzZPB2rggCNcBGAsYHQ/bot.jpeg";
const PERSON_IMG = "https://lh3.googleusercontent.com/-ZNt-xjB8QWI/YaopVBqnojI/AAAAAAAAH98/sibfwQuUHwEb8uPPkGCWQcgCrzT4BlsUQCNcBGAsYHQ/user.png";
const BOT_NAME = "Luôn Vui Tươi";
const PERSON_NAME = "User";

msgerForm.addEventListener("submit", event => {
  event.preventDefault();

  const msgText = msgerInput.value;
  if (!msgText) return;

  appendMessage(PERSON_NAME, PERSON_IMG, "right", msgText);
  msgerInput.value = "";

  botResponse();
});

function appendMessage(name, img, side, text) {
  //   Simple solution for small apps
  const msgHTML = `
    <div class="msg ${side}-msg">
      <div class="msg-img" style="background-image: url(${img})"></div>

      <div class="msg-bubble bg-light">
        <div class="msg-info">
          <div class="msg-info-name">${name}</div>
          <div class="msg-info-time">${formatDate(new Date())}</div>
        </div>

        <div class="msg-text">${text}</div>
      </div>
    </div>
  `;

  msgerChat.insertAdjacentHTML("beforeend", msgHTML);
  msgerChat.scrollTop += 500;
}

function appendMessageBot(name, img, side, text) {
  //   Simple solution for small apps
  const msgHTML = `
    <div class="msg ${side}-msg">
      <div class="msg-img" style="background-image: url(${img})"></div>

      <div class="msg-bubble bg-yellow">
        <div class="msg-info">
          <div class="msg-info-name">${name}</div>
          <div class="msg-info-time">${formatDate(new Date())}</div>
        </div>

        <div class="msg-text">${text}</div>
      </div>
    </div>
  `;

  msgerChat.insertAdjacentHTML("beforeend", msgHTML);
  msgerChat.scrollTop += 500;
}

function botResponse() {
  const r = random(0, BOT_MSGS.length - 1);
  const msgText = BOT_MSGS[r];
  const delay = msgText.split(" ").length * 100;

  setTimeout(() => {
    appendMessageBot(BOT_NAME, BOT_IMG, "left", msgText);
  }, delay);
}

// Utils
function get(selector, root = document) {
  return root.querySelector(selector);
}

function formatDate(date) {
  const h = "0" + date.getHours();
  const m = "0" + date.getMinutes();

  return `${h.slice(-2)}:${m.slice(-2)}`;
}

function random(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}


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
    $("input[type='number']").inputSpinner();
    $(".buttons-only").inputSpinner({buttonsOnly: true, autoInterval: undefined });
});




