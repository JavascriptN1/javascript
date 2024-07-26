let input = document.querySelector("input");
let button = document.querySelector(".button-33");
let h3 = document.querySelector("h2");

function change() {
    let num = Number(input.value);

    if (num < 0) {
        document.body.style.background = "red";
    } else if (num <= 50) {
        h3.innerText = (num * 5000); 
    } else if (num <= 100) {
        h3.innerText = (num * 4500); 
    } else if (num > 100){
        h3.innerText = (num * 4000); 
    }
}

button.addEventListener("click", change);
