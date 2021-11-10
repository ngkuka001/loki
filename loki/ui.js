import Slider from "./slider.js";
const uiWrapper = document.querySelector(".ui-wrapper");
let constructorCb = null;
let followElements = [];
let followElementsPositions = [];
let videoElementSource = "";
let slider = null;
let popup = null;
export default class UI {
  constructor(callback) {
    constructorCb = callback;
    followElements = uiWrapper.querySelectorAll("[data-follow]");
    this.getFollowElementsPosition();
    const events = [
      { selector: ".burger", cb: this.toggleMenu },
      { selector: ".fixed-content-paging", cb: this.onPagingClick.bind(this) },
      { selector: ".menu-list", cb: this.onMenuPagingClick.bind(this) },
      { selector: "#button_offers", cb: this.showPopup.bind(this, "offers") },
    ];
    events.forEach((event) => {
      const element = uiWrapper.querySelector(event.selector);
      element.addEventListener("click", event.cb);
    });
    const footerYear = uiWrapper.querySelector(".footer-copy__date");
    footerYear.innerHTML = `© ${new Date().getFullYear()}`;
  }
  ui_moveEvent(e, Use2DTextOver3D) {
    this.buttonMoveAnimation(e);
    if (Use2DTextOver3D) {
      this.mainLetters2DAnimation(e);
    }
  }
  buttonMoveAnimation(e) {
    const mouseLeft = e.clientX;
    const mouseTop = e.clientY;
    let elementAlreadyCentered = { y: false };
    followElements.forEach((element, index) => {
      const elementPositions = followElementsPositions[index];
      if (
        mouseLeft > elementPositions.left - 100 &&
        mouseLeft < elementPositions.right + 100 &&
        mouseTop > elementPositions.top - 100 &&
        mouseTop < elementPositions.bottom + 100
      ) {
        const moveX = (elementPositions.left - mouseLeft) / 10;
        const moveY = (elementPositions.top - mouseTop) / 10;
        elementAlreadyCentered.y = false;
        if (element.dataset.follow === "centered_y") {
          elementAlreadyCentered.y = true;
        }
        element.style.transform = `translate3d(${-moveX}px, calc(${
          elementAlreadyCentered.y ? -50 : 0
        }% + ${-moveY}px), 0)`;
        element.style.transition = "";
      } else {
        element.style.transform = ``;
        element.style.transition = "transform 500ms ease";
      }
    });
  }
  mainLetters2DAnimation(e) {
    const letters = document.querySelector(".configuration__letters");
    const xCenter = window.innerWidth / 2;
    const yCenter = window.innerHeight / 2;
    const LettersXPosition = xCenter - e.clientX;
    const LettersYPosition = yCenter - e.clientY;
    letters.style.transform = `rotateX(${-LettersXPosition / 50}deg) rotateY(${
      LettersYPosition / 50
    }deg) translateX(-50%)`;
  }
  showPopup(popupType, createCallback, destroyCallback) {
    if (typeof createCallback === "function") createCallback();
    popup = uiWrapper.querySelector(`[data-popup=${popupType}]`);
    popup.classList.add("popup--active");
    setTimeout(() => {
      popup.classList.add("popup--animated");
      popup.addEventListener("click", this.hidePopup);
      popup._eventParameter = destroyCallback;
      constructorCb().blockSceneScrolling(true);
      this.getFollowElementsPosition();
    }, 0);
  }
  hidePopup(event) {
    if (event.target !== event.currentTarget) return;
    popup.classList.remove("popup--active");
    popup.classList.remove("popup--animated");
    popup.removeEventListener("click", this.hidePopup);
    constructorCb().blockSceneScrolling(false);
    if (typeof popup._eventParameter === "function") popup._eventParameter();
  }
  initSlider() {
    const sliderElement = uiWrapper.querySelector("#slider");
    const leftArrow = uiWrapper.querySelector(".slider__arrow-left");
    const rightArrow = uiWrapper.querySelector(".slider__arrow-right");
    slider = new Slider(sliderElement, leftArrow, rightArrow);
  }
  destroySlider() {
    slider.destroy();
    slider = null;
  }
  initVideo() {
    if (!videoElementSource) return;
    const videoElement = document.querySelector("#video");
    videoElement.setAttribute("src", videoElementSource);
  }
  destoryVideo() {
    const videoElement = document.querySelector("#video");
    videoElementSource = videoElement.src;
    videoElement.removeAttribute("src");
  }
  toggleMenu() {
    uiWrapper.classList.toggle("menu-opened");
    uiWrapper.querySelector(".burger").classList.toggle("burger--active");
  }
  ui_moveScene(direction) {
    this.checkContentVisibility(direction);
  }
  onMenuPagingClick(e) {
    this.toggleMenu();
    this.onPagingClick(e);
  }
  onPagingClick(e) {
    const datasetPage = +e.target.dataset.page;
    if (datasetPage >= 0) {
      constructorCb().onPagingClick(datasetPage);
    }
  }
  getFollowElementsPosition() {
    followElementsPositions = [];
    followElements.forEach((element) =>
      followElementsPositions.push(element.getBoundingClientRect())
    );
  }
  checkContentVisibility(direction) {
    const contentSections = uiWrapper.querySelectorAll("[data-page]");
    const animateSection = (section) => {
      if (direction === "down") {
        section.classList.add("section--hidden");
        section.classList.remove("section--hidden-reverse");
      } else {
        section.classList.add("section--hidden-reverse");
        section.classList.remove("section--hidden");
      }
      if (+section.dataset.page === constructorCb().getCurrentPage()) {
        section.style.display = "flex";
        const removeClass = () =>
          section.classList.remove(
            "section--hidden",
            "section--hidden-reverse"
          );
        window.requestAnimationFrame(() => {
          window.requestAnimationFrame(removeClass);
        });
      }
    };
    contentSections.forEach((section) => {
      section.style.opacity = "0";
      setTimeout(() => {
        section.removeAttribute("style");
        animateSection(section);
      }, 300);
    });
  }
}
