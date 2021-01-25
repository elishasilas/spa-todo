
// 
const signUp = document.getElementById("signUp");
const container = document.getElementById("container");

const login = document.getElementById("login");

// Creating a container for the form
const containSignUp = document.createElement("DIV");
const formSignUp = document.createElement("FORM");

containSignUp.className = "contain";
containSignUp.classList.add("signup");
containSignUp.id = "signup";
formSignUp.className = "form";
formSignUp.id = "signForm";


// Form field for users first name
const formFieldFirstName = document.createElement("DIV");
formFieldFirstName.className = "form-field";
formFieldFirstName.id = "form-field";

// Label for users first name
const firstNameLabel = document.createElement("LABEL");
firstNameLabel.setAttribute("for", "first name");
firstNameLabel.innerText = "First name";

// Input field for users first name 
const userFirstName = document.createElement("INPUT");
userFirstName.setAttribute("type", "text");
userFirstName.setAttribute("autocomplete", "off");
userFirstName.id = "firstName";
userFirstName.className = "firstName";

const firstNameSmall = document.createElement("SMALL");

// Form field for users last name
const formFieldLastName = document.createElement("DIV");
formFieldLastName.className = "form-field";
formFieldLastName.id = "form-field";

// Label for users last name
const lastNameLabel = document.createElement("LABEL");
lastNameLabel.setAttribute("for", "last name");
lastNameLabel.innerText = "Last name"

// Input field for users last name 
const userLastName = document.createElement("INPUT");
userLastName.setAttribute("type", "text");
userLastName.setAttribute("autocomplete", "off");
userLastName.id = "lastName";
userLastName.className = "lastName";

const lastNameSmall = document.createElement("SMALL");

// Form field for users email
const formFieldEmail = document.createElement("DIV");
formFieldEmail.className = "form-field";

// Users email label
const emailLabel = document.createElement("LABEL");
emailLabel.setAttribute("for", "email");
emailLabel.innerText = "Email";

// User email input
const userEmail = document.createElement("INPUT");
userEmail.setAttribute("type", "text");
userEmail.setAttribute("autocomplete", "off");
userEmail.id = "email";
userEmail.className = "email";

const userEmailSmall = document.createElement("SMALL");

// Form field for user password
const formFieldPassword = document.createElement("DIV");
formFieldPassword.className = "form-field";

// Users password label
const passwordLabel = document.createElement("LABEL");
passwordLabel.setAttribute("for", "password");
passwordLabel.innerText = "Password";

// User password input field
const userPassword = document.createElement("INPUT");
userPassword.setAttribute("type", "password");
userPassword.setAttribute("autocomplete", "off");
userPassword.id = "password";
userPassword.className = "password";

const userPasswordSmall = document.createElement("SMALL");

// Field area for user password confirmation
const formFieldConfirmPassword = document.createElement("DIV");
formFieldConfirmPassword.className = "form-field";

// Label for user password confirmation
const confirmPasswordLabel = document.createElement("LABEL");
confirmPasswordLabel.setAttribute("for", "password");
confirmPasswordLabel.innerText = "Confirm password";

// Password confirmation input area
const confirmPassword = document.createElement("INPUT");
confirmPassword.setAttribute("type", "password");
confirmPassword.setAttribute("autocomplete", "off");
confirmPassword.id = "confirm-password";
confirmPassword.className = "password";

const confirmPasswordSmall = document.createElement("SMALL");

// Button form field
const formFieldButton = document.createElement("DIV");
formFieldButton.className = "form-field";

const userBtn = document.createElement("INPUT");
userBtn.setAttribute("type", "submit");
userBtn.setAttribute("value", "SignUp");
userBtn.className = "btn";
userBtn.id = "btn";

/***************************************************************************************************************************************** */

// login
const containLogin = document.createElement("DIV");
const formLogin = document.createElement("FORM");

containLogin.className = "contain";
containLogin.id = "login";
containLogin.classList.add("login");

formLogin.className = "form";
formLogin.id = "loginForm";


const loginFormFieldUserEmail = document.createElement("DIV");
loginFormFieldUserEmail.className = "form-field";



const loginUserEmailLabel = document.createElement("LABEL");
loginUserEmailLabel.setAttribute("for", "email");
loginUserEmailLabel.innerText = "Email";

const loginUserEmail = document.createElement("INPUT");
loginUserEmail.setAttribute("type", "text");
loginUserEmail.setAttribute("autocomplete", "off");
loginUserEmail.id = "email";
loginUserEmail.className = "email";

const loginUserEmailSmall = document.createElement("SMALL");

const loginFormFieldUserPassword = document.createElement("DIV");
loginFormFieldUserPassword.className = "form-field";

const loginUserPasswordLabel = document.createElement("LABEL");
loginUserPasswordLabel.setAttribute("for", "password");
loginUserPasswordLabel.innerText = "Password";

const loginUserPassword = document.createElement("INPUT");
loginUserPassword.setAttribute("type", "password");
loginUserPassword.setAttribute("autocomplete", "off");
loginUserPassword.id = "password";
loginUserPassword.className = "password";

const loginUserPasswordSmall = document.createElement("SMALL");

const loginFormFieldButton = document.createElement("DIV");
loginFormFieldButton.className = "form-field";

const loginUserBtn = document.createElement("INPUT");
loginUserBtn.setAttribute("type", "submit");
loginUserBtn.setAttribute("value", "Login");
loginUserBtn.className = "btn";


// Functions for validation of values from the form fields
// checkUserName function to validate its length and if it exists.
const checkUserFirstName = (event) => {
    let valid = false;
    const min = 3, max = 25;

    const firstNameValue = userFirstName.value.trim();

    if(!isRequired(firstNameValue)){
        showError(userFirstName, `first name cannot be blank`);
    }else if(!isBetween(firstNameValue.length, min, max)){
        showError(userFirstName, `first name must have between ${min} and ${max} characters!`)
    }else{
        showSuccess(userFirstName, "");
        valid = true;
    }

    return valid;
}

const checkUserLastName = () => {
    let valid = false;
    const min = 3, max = 25;

    const lastNameValue = userLastName.value.trim();
    if(!isRequired(lastNameValue)){
        showError(userLastName, `last name cannot be blank`);
    }else if(!isBetween(lastNameValue.length, min, max)){
        showError(userLastName, `last name must have between ${min} and ${max} characters!`)
    }else{
        showSuccess(userLastName, "");
        valid = true;
    }

    return valid;
}

// Validate the user email and return true if the email is valid
const checkEmail = () => {
    let valid = false;
    const userEmailValue = userEmail.value.trim();

    if(!isRequired(userEmailValue)){
        showError(userEmail, `email cannot be blank`);
    }else if(!isEmailValid(userEmailValue)){
        showError(userEmail, `invalid email`);
    }else{
        showSuccess(userEmail, "");
        valid = true;
    }

    return valid;
}

// Validating passwords check whether it is provided and match a given format
const checkPassword = () => {
    let valid = false;
    const password = userPassword.value.trim();

    if(!isRequired(password)){
        showError(userPassword, "Password cannot be blank, kindly type in your password");
    }else if(!isPasswordValid(password)){
        showError(userPassword, `Password must have at least 8 characters that include at least 1 lowercase character, 1 uppercase characters, 1 number, and 1 special character in (!@#$%^&*)`);
    }else{
        showSuccess(userPassword, "");
        valid = true;
    }

    return valid;
}

const checkConfirmPassword = () => {
    let valid = false;
    const password = userPassword.value.trim();
    const confirm_password = confirmPassword.value.trim();

    if(!isRequired(confirm_password)){
        showError(confirmPassword, "Password confirmation cannot be blank");
    }else if(confirm_password !== password){
        showError(confirmPassword, "Password do not match");
    }else{
        showSuccess(confirmPassword, "");
        valid = true;
    }

    return valid;
}


// Utility function
// reusable function to check if some fields require an input, valid email and valid password with 
// the right length within the range given.

// const isRequired = value => value === " " ? false : true;
const isRequired = (value) => {
    if(value === ''){
        return false;   // returns false if the input argument has a value
    }else{
        return true;    // returns true if the input argument is empty;
    }
}

// Determine the length of the input arguments for the user passwords
const isBetween = (length, min, max) => {
    if(length < min || length > max){
        return false; // returns false if the input argument length is less than min value or greater than max value
    }else{
        return true; // returns true if the input argument is within range
    }
};

// Validates the input argument for the user emails
const isEmailValid = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
   
    return re.test(email); // returns true if the string value provided is valid

}

// Validates the user passwords
// The password should have at least one lowercase, one uppercase, a number and special characters(@$#*^&%!)
const isPasswordValid = (password) => {
    const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");

    return re.test(password); // returns true if the string value is valid.
}

// Error and Success functions
// ShowError() highlights the border of an input field and displays an error message when the value in the input field is invalid
const showError = (input, message) => {
    // obtain the parent element of the input field
   const formField = input.parentElement;

   // remove the success class and add an error class
    formField.classList.remove("success");
    formField.classList.add("error");

    // obtain the small element and add error content into it
    const error = formField.querySelector("SMALL");
    error.textContent = message;
   
};

// showSuccess() highlights the boarder of an input field and hides the error class when the value in the input field is valid
const showSuccess = (input) => {
    // obtain the parent element of the input field
    const formField = input.parentElement;

    // remove the error class and add an success class
    formField.classList.remove("error");
    formField.classList.add("success");

    const error = formField.querySelector("SMALL");
    error.textContent = '';

}


const debounce = (fn, delay = 500) => {
    let timeoutId;
    return (...args) => {
        // cancel the previous timer
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        // setup a new timer
        timeoutId = setTimeout(() => {
            fn.apply(null, args)
        }, delay);
    };
};


// Registration for user and login functions
// User registration function that push the data to local storage
function userReg(){

    let valid = false;
    // Retrieve the data stored in string form in the storage
    // An empty array object waiting to receive data
    let users = JSON.parse(localStorage.getItem("user")) || [];
    
        // User data obtained from the input fields stored in an object
        let userInfo = {first_name: userFirstName.value.trim(),
                        last_name: userLastName.value.trim(),
                        email: userEmail.value.trim(),
                        password: userPassword.value.trim(),};

            if(!users.some((event) => event.email === userInfo.email)){

                if(!users.some(event => event.first_name === userInfo.first_name && event.last_name === userInfo.last_name)){
                    users.push(userInfo);
                    localStorage.setItem("user", JSON.stringify(users));
                }
                else{
                    console.log("username taken");
                    userEmail.parentElement.classList.remove("success");
                    userFirstName.parentElement.classList.remove("success");
                    userLastName.parentElement.classList.remove("success");
                } 

                valid = true;
            }
            else{
                // showError(userEmail, "user email is already taken");
                userEmail.parentElement.classList.remove("success");
                userFirstName.parentElement.classList.remove("success");
                userLastName.parentElement.classList.remove("success");
                console.log("user email taken");
            }

            return valid;
};

function userLogin(){
    
    let userLogin = JSON.parse(localStorage.getItem("logs")) || [];
    let usersRegister = JSON.parse(localStorage.getItem("user")) || [];

    let valid = false;

    let loginData = {
        loginEmail: loginUserEmail.value.trim(),
        loginPassword: loginUserPassword.value.trim(),
    };

    let currentUser = usersRegister.filter(event => event.email === loginData.loginEmail);
    console.log(currentUser);

    if(currentUser.length > 0){
        if(currentUser[0].password !== loginData.loginPassword){
            showError(loginUserPassword, "incorrect user  password");
            return;
        }

        if(!userLogin.some((event) => event.email === loginData.loginEmail && event.password === loginData.loginPassword)){
            userLogin.push(loginData);
            localStorage.setItem("logs", JSON.stringify(userLogin));
           
        }else{
            console.log("Logged in");
           
        }

        valid = true;
    }else{
        console.log("not registered");
        showError(loginUserEmail, "incorrect user email or password");

    }
    
    return valid;
};


function loadUser(){
    let userData = localStorage.getItem("user");

    return JSON.parse(userData);
}

//Event handlers appending the form to the container to be dynamically loaded into the web browser
signUp.addEventListener("click", (event) => {
    
    formSignUp.appendChild(formFieldFirstName);
    formFieldFirstName.appendChild(firstNameLabel);
    formFieldFirstName.appendChild(userFirstName);
    formFieldFirstName.appendChild(firstNameSmall);

    formSignUp.appendChild(formFieldLastName);
    formFieldLastName.appendChild(lastNameLabel);
    formFieldLastName.appendChild(userLastName);
    formFieldLastName.appendChild(lastNameSmall);
    
    formSignUp.appendChild(formFieldEmail);
    formFieldEmail.appendChild(emailLabel);
    formFieldEmail.appendChild(userEmail);
    formFieldEmail.appendChild(userEmailSmall);
    
    formSignUp.appendChild(formFieldPassword);
    formFieldPassword.appendChild(passwordLabel);
    formFieldPassword.appendChild(userPassword);
    formFieldPassword.appendChild(userPasswordSmall);
    
    formSignUp.appendChild(formFieldConfirmPassword);
    formFieldConfirmPassword.appendChild(confirmPasswordLabel);
    formFieldConfirmPassword.appendChild(confirmPassword);
    formFieldConfirmPassword.appendChild(confirmPasswordSmall);

    formFieldButton.appendChild(userBtn);
    formSignUp.appendChild(formFieldButton);

    formLogin.classList.add("hide");
    formSignUp.classList.remove("hide"); 
    
    containSignUp.appendChild(formSignUp);
    container.appendChild(containSignUp);
});

formSignUp.addEventListener("input", debounce(function(event){
    
    switch(event.target.id){
        case "firstName":
            checkUserFirstName();
            break;
        case "lastName":
            checkUserLastName();
            break;
        case "email":
            checkEmail();
            break;
        case "password":
            checkPassword();
            break;
        case "confirm-password":
            checkConfirmPassword();
            break;
    }
}));

// Sign up event handler to the local storage
formSignUp.addEventListener("submit", (event) => {
    event.preventDefault();

    // Validate each field by calling their respective function
    let isFirstNameValid = checkUserFirstName(),
    isLastNameValid = checkUserLastName(),
    isEmailValid = checkEmail() && userReg(),
    isPasswordValid = checkPassword(),
    isConfirmPasswordValid = checkConfirmPassword();

    // Determine valid fields
    let isFormValid = isFirstNameValid &&
    isLastNameValid &&
    isEmailValid &&
    isPasswordValid &&
    isConfirmPasswordValid;

    // Submit the data
    if(isFormValid){

        formSignUp.reset();

        userEmail.parentElement.classList.remove("success");
        userPassword.parentElement.classList.remove("success");
        userFirstName.parentElement.classList.remove("success");
        userLastName.parentElement.classList.remove("success");
        confirmPassword.parentElement.classList.remove("success");

    }else{
        
    }   
});

// Login event handler
login.addEventListener("click", (event) => {

    formLogin.appendChild(loginFormFieldUserEmail);
    loginFormFieldUserEmail.appendChild(loginUserEmailLabel);
    loginFormFieldUserEmail.appendChild(loginUserEmail);
    loginFormFieldUserEmail.appendChild(loginUserEmailSmall);

    containLogin.appendChild(formLogin);

    container.appendChild(containLogin);

    formLogin.appendChild(loginFormFieldUserPassword);
    loginFormFieldUserPassword.appendChild(loginUserPasswordLabel);
    loginFormFieldUserPassword.appendChild(loginUserPassword);
    loginFormFieldUserPassword.appendChild(loginUserPasswordSmall);

    loginFormFieldButton.appendChild(loginUserBtn);
    formLogin.appendChild(loginFormFieldButton);
    
    formLogin.classList.remove("hide");
    formSignUp.classList.add("hide");

});

// Login event handler to the local storage
formLogin.addEventListener("submit", (event) => {
    event.preventDefault();

    let isEmailValid = userLogin();
        
        let isFormValid = isEmailValid;

        if(isFormValid){
            loginUserEmail.parentElement.classList.remove("error");
            loginUserPassword.parentElement.classList.remove("error");
            loginUserPasswordSmall.innerText = "";
            loginUserEmailSmall.innerText = "";  
            formLogin.reset();
            
        }else{
            
        }
    
});







