// example code DOM Change Event
const password = document.querySelector("#password");
const togglePassword = document.querySelector("#togglePassword");

// is call back ()=> symbol
togglePassword.addEventListener("click", (e)=> {
    e.preventDefault()
    const type = password.getAttribute("type");

    if (type === "password") {
        password.setAttribute("type", "text");
        togglePassword.textContent = "Hide"
    }
    else{
        password.setAttribute("type", "password");
        togglePassword.textContent = "Show"
    }

})

// end example code

