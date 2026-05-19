import { toggleHiddenElement } from "../Modules/dom-functions";

const buttonElement = document.getElementById("secret-button");
const imageElement = document.getElementById("secret-image");



buttonElement.addEventListener("click", () => {
    toggleHiddenElement(imageElement)}
);