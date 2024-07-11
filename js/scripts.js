function handleSignupSubmit(e) {
    
    const fullname = document.getElementById("name").value;
    const fullnameError = document.getElementById("fullnameError");
    const email = document.getElementById("email").value;
    const emailError = document.getElementById("emailError");
    const password = document.getElementById("password").value;
    const passwordError = document.getElementById("passwordError");
    const confirmPassword = document.getElementById("confirmPassword").value;
    const confirmPasswordError = document.getElementById("confirmPasswordError");

    if (fullname.length < 3) {
        e.preventDefault();
        fullnameError.style.display = 'block';
        fullnameError.style.color = "red";
        fullnameError.innerHTML = '<b>Full name should contain minimum 3 letters';
    }

    if (email.length < 1) {
        e.preventDefault();
        emailError.style.display = 'block';
        emailError.style.color = "red";
        emailError.innerHTML = '<b>Email is required';
    } else if (!email.match(/\S+@\S+\.\S+/)) {
        e.preventDefault();
        emailError.style.display = 'block';
        emailError.style.color = "red";
        emailError.innerHTML = '<b>Please enter a valid email';
    }

    if (password.length < 1) {
        e.preventDefault();
        passwordError.style.display = 'block';
        passwordError.style.color = "red";
        passwordError.innerHTML = '<b>Password is required';
    } else if (!password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/)) {
        e.preventDefault();
        passwordError.style.display = 'block';
        passwordError.style.color = "red";
        passwordError.innerHTML = '<b>Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number';
    }

    if (confirmPassword.length < 1) {
        e.preventDefault();
        confirmPasswordError.style.display = 'block';
        confirmPasswordError.style.color = "red";
        confirmPasswordError.innerHTML = '<b>Confirm Password is required';
    } else if (confirmPassword !== password) {
        e.preventDefault();
        confirmPasswordError.style.display = 'block';
        confirmPasswordError.style.color = "red";
        confirmPasswordError.innerHTML = '<b>Passwords do not match';
    }

    console.log("Form Submitted");
}

function handleLoginSubmit(e) {

    const email = document.getElementById("email").value;
    const emailError = document.getElementById("emailError");
    const password = document.getElementById("password").value;
    const passwordError = document.getElementById("passwordError");

    if (email.length < 1) {
        e.preventDefault();
        emailError.style.display = 'block';
        emailError.style.color = "red";
        emailError.innerHTML = '<b>Email is required';
    } else if (!email.match(/\S+@\S+\.\S+/)) {
        e.preventDefault();
        emailError.style.display = 'block';
        emailError.style.color = "red";
        emailError.innerHTML = '<b>Please enter a valid email';
    }

    if (password.length < 1) {
        e.preventDefault();
        passwordError.style.display = 'block';
        passwordError.style.color = "red";
        passwordError.innerHTML = '<b>Password is required';
    } else if (!password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/)) {
        e.preventDefault();
        passwordError.style.display = 'block';
        passwordError.style.color = "red";
        passwordError.innerHTML = '<b>Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number';
    }

    console.log("Form Submitted");
}
