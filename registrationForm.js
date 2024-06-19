const inputs = document.querySelectorAll(".input");

function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}


inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});

function validateForm() {
    const name = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const success = document.getElementById("success");

    const nameError = document.getElementById("username-error");
    const emailError = document.getElementById("email-error");
    const passwordError = document.getElementById("password-error");

    nameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";

    let isValid = true;

    if (name === "" || /\d/.test(username)) {
        nameError.textContent = "Please enter your username.";
        isValid = false;
    }

    if (email === "" || !email.match(/\S+@\S+\.\S+/)) {
        emailError.textContent = "Please enter a valid email address.";
        isValid = false;
    }

    if (password === "" || password.length < 6 || !/\d/.test(password)) {
        passwordError.textContent =
            "Please enter a password.";
        isValid = false;
    }
    
    if (isValid) {
        success.style.display = 'block';        
    }

    return isValid;
}
