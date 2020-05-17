$(".content").hide();
$(".skills").hide();
$(".link").hide();
$(".languages").hide();
$(".bio").hide();
$(".job-description").hide();
$("footer").hide();


$(".btn").on("click", function(){
  $(".btn").addClass("fade-out-btn").remove();
  $("header h1").addClass("fade-out-h1").remove();
  $("body").addClass("fade-in-body");
  $(".content").show();
  $(".skills").show();
  $(".link").show();
  $(".languages").show();
  $(".bio").show();
  $(".job-description").show();
  $("footer").show();
});



window.addEventListener('scroll', function() {
  let link = document.querySelector(".link");
  let content = document.querySelector(".content");
  let linkUp = document.querySelector(".up");
  let skills = document.querySelector(".skills");
  // console.log(pageYOffset);
  if (pageYOffset >= 30) {
    link.style.display = 'none';
    content.style.marginBottom = "194";
  }
  if (pageYOffset <= 30) {
    link.style.display = 'flex';
    content.style.marginBottom = "125";
  }
});

setInterval(function arrow(){
  let arrow = document.querySelector(".link i");
  $(".link i").toggleClass("white");
  
}, 1000)
