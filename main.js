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
   headWrapper: document.querySelector(".header__wrapper"),
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
   headWrapper,
   start,
   aboutMeButton,
   technologiesButton,
   projectsButton,
   hamburger
} = elements;

function changeContent() {
   const content = [front, aboutMe, technologies, projects];
   const contentButtons = [start, aboutMeButton, technologiesButton, projectsButton];
   let color;
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

         e.target === start ? (color = "#fff") : (color = "#4f5f76");

         [menuListUl, headContacts, headWrapper].forEach(element => {
            element.setAttribute("style", `background-color: ${color}`);
         });

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

//Intersection observer used to animate return button

const anchor = document.getElementById("menu-anchor");
const buttonUp = document.querySelector(".button-top");

const buttonOptions = {
   rootMargin: "0px 0px -50px 0px"
};

const appearOnScrollButton = new IntersectionObserver(function(entries, appearOnScrollButton) {
   entries.forEach(entry => {
      if (entry.isIntersecting) {
         buttonUp.classList.remove("appear");
      } else {
         buttonUp.classList.add("appear");
      }
   });
}, buttonOptions);

appearOnScrollButton.observe(anchor);

////// Smooth scroll

$(".button-top a").smoothScroll({
   offset: 0,
   afterScroll: function() {
      $(this)
         .closest(".button-top")
         .find("a")
         .removeClass("active");
      $(this).addClass("active");
   }
});
