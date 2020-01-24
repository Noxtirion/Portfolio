// function openText() {
//    const techSection = document.querySelectorAll(".main__open");
//    const techImage = document.querySelectorAll(".main__techImg");
//    const techText = document.querySelectorAll(".main__techText");

//    techImage.forEach(item => {
//       item.addEventListener("click", e => {
//          // techText.forEach(txt => {
//          //    txt.classList.remove("main__techText--visible");
//          // });

//          item.nextElementSibling.classList.toggle("main__techText--visible");

//          // console.log(e.target);
//       });
//    });
// }

// openText();

//////// Smooth scroll

$(".header__menu a").smoothScroll({
   offset: -50,
   afterScroll: function() {
      $(this)
         .closest(".header__menu")
         .find("a")
         .removeClass("active");
      $(this).addClass("active");
   }
});

// $(".button-top a").smoothScroll({
//    offset: 0,
//    afterScroll: function() {
//       $(this)
//          .closest(".button-top")
//          .find("a")
//          .removeClass("active");
//       $(this).addClass("active");
//    }
// });
