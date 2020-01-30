const elements = {
   // sections
   front: document.querySelector(".front"),
   mainSection: document.querySelector(".main"),
   aboutMe: document.querySelector(".main__about-me"),
   technologies: document.querySelector(".main__technologies"),
   projects: document.querySelector(".main__projects"),
   // menu list
   menuListUl: document.querySelector(".header__list"),
   menuList: document.querySelectorAll(".header__menu-list"),
   menuLink: document.querySelectorAll(".header__color"),
   menuNav: document.querySelector(".header__menu"),
   headContacts: document.querySelector(".header__contact"),
   // menu buttons
   start: document.querySelector(".header__start"),
   aboutMeButton: document.querySelector(".header__about-me"),
   technologiesButton: document.querySelector(".header__technologies"),
   projectsButton: document.querySelector(".header__projects"),
   hamburger: document.querySelector(".header__hamburger")
};

const {
   front,
   mainSection,
   aboutMe,
   technologies,
   projects,
   menuListUl,
   menuList,
   menuLink,
   menuNav,
   headContacts,
   start,
   aboutMeButton,
   technologiesButton,
   projectsButton,
   hamburger
} = elements;

function changeContent() {
   // // sections
   // const front = document.querySelector(".front");
   // const mainSection = document.querySelector(".main");
   // const aboutMe = document.querySelector(".main__about-me");
   // const technologies = document.querySelector(".main__technologies");
   // const projects = document.querySelector(".main__projects");

   // // menu list

   // const menuListUl = document.querySelector(".header__list");
   // const menuList = document.querySelectorAll(".header__menu-list");
   // const menuLink = document.querySelectorAll(".header__color");

   // // menu buttons

   // const start = document.querySelector(".header__start");
   // const aboutMeButton = document.querySelector(".header__about-me");
   // const technologiesButton = document.querySelector(".header__technologies");
   // const projectsButton = document.querySelector(".header__projects");

   const content = [front, aboutMe, technologies, projects];
   const contentButtons = [start, aboutMeButton, technologiesButton, projectsButton];
   let prevContent;
   let prevContentButtons;

   menuList.forEach(element => {
      element.addEventListener("click", function(e) {
         const index = contentButtons.findIndex(item => {
            return e.target === item;
         });

         const prevCheck = x => {
            return x.filter(item => {
               return item !== x[index];
            });
         };

         contentButtons[index].classList.add("active");

         prevContentButtons = prevCheck(contentButtons);

         prevContentButtons.forEach(item => {
            item.classList.remove("active");
         });

         e.target !== start
            ? content[index].classList.add("visible")
            : content[index].setAttribute("style", "display: flex");

         prevContent = prevCheck(content);

         if (e.target !== start) {
            menuListUl.setAttribute("style", "background-color: #264d5b");
            headContacts.setAttribute("style", "background-color: #264d5b");
         } else {
            menuListUl.setAttribute("style", "background-color: #fff");
            headContacts.setAttribute("style", "background-color: #fff");
         }

         prevContent.forEach(item => {
            item === front
               ? item.setAttribute("style", "display: none")
               : item.classList.remove("visible");
         });
      });
   });
}

changeContent();

// navigation

function navigation() {
   hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("header__hamburger--active");
      menuNav.classList.toggle("header__menu--active");
   });
}

navigation();

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
