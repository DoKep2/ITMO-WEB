function foo() {
    let button = document.querySelector("button");
    button.addEventListener('click', () => {
        localStorage.setItem("1", "qweqwe");
    })
}

function get() {
    alert(localStorage.getItem("1"))
}

foo();