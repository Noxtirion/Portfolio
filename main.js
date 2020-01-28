function changeContent() {
   // sections
   const front = document.querySelector(".front");
   const aboutMe = document.querySelector(".main__about-me");
   const technologies = document.querySelector(".main__technologies");
   const projects = document.querySelector(".main__projects");

   // menu list

   const menuListUl = document.querySelector(".header__list");
   const menuList = document.querySelectorAll(".header__menu-list");

   // menu buttons

   const start = document.querySelector(".header__start");
   const aboutMeButton = document.querySelector(".header__about-me");
   const technologiesButton = document.querySelector(".header__technologies");
   const projectsButton = document.querySelector(".header__projects");

   const content = [front, aboutMe, technologies, projects];
   const contentButtons = [start, aboutMeButton, technologiesButton, projectsButton];
   let prevContent;

   menuList.forEach(element => {
      element.addEventListener("click", function(e) {
         const index = contentButtons.findIndex(item => {
            return e.target === item;
         });

         e.target !== start
            ? content[index].classList.add("visible")
            : content[index].setAttribute("style", "display: flex");
         prevContent = content.filter(item => {
            return item !== content[index];
         });
         e.target !== start
            ? menuListUl.setAttribute("style", "background-color: #264d5b")
            : menuListUl.setAttribute("style", "background-color: #fff");

         prevContent.forEach(item => {
            item === front
               ? item.setAttribute("style", "display: none")
               : item.classList.remove("visible");
         });
      });
   });
}

changeContent();

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

// $(".header__menu a").smoothScroll({
//    offset: -50,
//    afterScroll: function() {
//       $(this)
//          .closest(".header__menu")
//          .find("a")
//          .removeClass("active");
//       $(this).addClass("active");
//    }
// });

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
