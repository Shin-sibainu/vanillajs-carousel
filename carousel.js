const buttons = document.querySelectorAll(".carousel-button");
// console.log(buttons);

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    console.log(button.dataset);
    //offset: nextとかprevどっちを押したのかを数字で返す。
    const offset = button.dataset.carouselButton === "next" ? 1 : -1;
    console.log(offset);
    const slides = button.closest(".carousel").querySelector(".slides");
    console.log(slides); //ulタグの取得

    const activesSlide = slides.querySelector("[data-active]");
    console.log(activesSlide);
    let newIndex = [...slides.children].indexOf(activesSlide) + offset;
    console.log([...slides.children]);
    console.log([...slides.children].indexOf(activesSlide)); //0,1,2,0,1,2,,,
    console.log(newIndex); //1,2,3,1,2,3,,,,
    console.log(slides.children.length); //3
    if (newIndex < 0) {
      newIndex = slides.children.length - 1;
    }
    if (newIndex >= slides.children.length) {
      newIndex = 0;
    }

    //data-activeが属性につくとopactyが1になって見える。
    slides.children[newIndex].dataset.active = true;
    delete activesSlide.dataset.active;
  });
});
