const nav = document.querySelector("#btnes_scroll");

const open = document.querySelector("#btn_open");

const close = document.querySelector("#btn_close");

const buttons = [document.querySelector("#primero"), document.querySelector("#segundo"), document.querySelector("#tercero"),  document.querySelector("#cuarto"),  document.querySelector("#quinto")];

open.addEventListener("click", () => {
    nav.classList.add("visible");
})

close.addEventListener("click", () => {
    nav.classList.remove("visible");
})

// manejar los botones del Nav

function handleNavButtonClick(){
    nav.classList.remove("visible");
}

buttons.forEach(button => {
    button.addEventListener("click", handleNavButtonClick);
})