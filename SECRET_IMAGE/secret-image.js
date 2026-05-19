const buttonElement = document.getElementById("secret-button");
const imageElement = document.getElementById("secret-image");

function toggleHiddenElement(domElement){
    if(domElement.style.display === "none"){
        domElement.style.display = "block";
    }
    else{
        domElement.style.display = "none";
    }
}
buttonElement.addEventListener("click", () => {
    toggleHiddenElement(imageElement)}
);