let form = document.querySelector("form");

let nicknameInput = document.querySelector('[name="nickname"]');
let firstnameInput = document.querySelector('[name="firstname"]');
let lastnameInput = document.querySelector('[name="lastname"]');
let dobInput = document.querySelector('[name="dob"]');
let emailInput = document.querySelector('[name="email"]');
let phoneInput = document.querySelector('[name="phone"]');
let sexInputs = document.querySelectorAll('[name="sex"]');
let languageInputs = document.querySelector('[name="languages"]');

let errors = new Map();

form.addEventListener("submit", function (evt) {
    evt.preventDefault();
    console.log("validating...");
    errors.clear();
    validateLength();
    validateDob();
    validateEmail();
    validatePhone();    

    for (let [key, value] of errors) {
        console.log(key + ' = ' + value)
    }

});

nicknameInput.addEventListener("blur", function() {
     let xhttp = new XMLHttpRequest();
     xhttp.onreadystatechange = function() {
         if(this.readyState == 4 ) {
             if(this.status = 400) {
                 console.log(xhttp.response);
                 validateNickname(xhttp.response);
                
                // console.log(xhttp.responseText)
             } else {
                 console.log(xhttp.statusText);
             }
         }
     };
xhttp.open("GET", "nicknames.json", true);
xhttp.send();

});

function validateNickname(nicknames) {
    if(nicknames.includes(nicknameInput.value)) {
        errors.set("nickname", "your nickname is already in use");
        nicknameInput.classList.add('is-invalid');
        document.querySelector("[name = nickname] ~ .invalid-feedback")
        .innerHTML = errors.get("nickname");
    } else {
        errors.delete("nickname");
        document.querySelector("[name = nickname] ~ .invalid-feedback")
        .innerHTML="";
        nicknameInput.classList.remove('is-invalid');
        nicknameInput.classList.add('is-valid');
    }
}

function validateLength() {
    if (!nicknameInput.value || nicknameInput.value.length < 3) {
        errors.set("nickname", "your nickname is required and must be longer than 3 chars");

    }
    if(!firstnameInput.value || firstnameInput.value.length < 3) {
        errors.set("firstname", "your first name is required and must be longer than 3 chars");

    }
    if (!lastnameInput.value || lastnameInput.value.length < 3) {
        errors.set("lastname", "your last name is required and must be longer than 3 chars");
    }
}

function validateDob() {
    let dob = Date.parse(dobInput.value);
    if(!dob || isMinor(dob)) {
        errors.set("dob", "your date of birth is required and you must not be a minor");
    }

}
function isMinor(date) {
    let diff = Date.now() - date;
    var ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970) < 18;
}

function validatePhone() {
   let reg = /^\(?[0-9]{1,3}\)?-?[0-9]{5,8}$/;
   // let reg = /^\(?$/;
   if(!phoneInput.value || !reg.test(phoneInput.value)) {
       errors.set("phone", "your phone is required and must be in the correct format");
   }
}

function validateEmail() {
    let reg = /.+@.+\..+/;
    if (!emailInput.value || !reg.test(emailInput.value)) {
        errors.set("email", "your email is required and must be in the correct format");
    }
}