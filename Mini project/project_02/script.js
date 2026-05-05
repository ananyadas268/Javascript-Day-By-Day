console.log("JS loaded");
const buttons = document.querySelectorAll(".button");
//const body = document.querySelector("body"); // ✅ single element

buttons.forEach(button => {
    button.addEventListener("click", ()=> {

            document.body.style.backgroundColor=button.id;
        }
    );
});