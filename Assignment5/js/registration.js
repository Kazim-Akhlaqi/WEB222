/*
copyright 2018 Kazim Akhlaqi, Seneca college
web222 Asignment5
*/


function formValidation() {

    clearErrors();
    var password = document.querySelector("#password").value.trim();
    var username = document.querySelector("#username").value.trim();
    var streetName = document.querySelector("#streetname").value.trim();
    var phoneNumber = document.querySelector("#phonenumber").value.trim();
    var postalCode = document.querySelector("#postalcode").value.trim();
    var city = document.querySelector("#city").value.trim();

    if (validatePassword(password) && validateUsername(username) && validateStreetName(streetName) && validatePhoneNumber(phoneNumber) && validatePostalCode(postalCode) && validateCity(city)) {
        return true;
    }

    return false;
}
var errors = document.querySelector("#errors");

function validatePassword(password) {
    var errors = document.querySelector("#errors");
    var password = document.signup.password.value.trim();
    var characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var alphString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var digit = "1234567890";

    //check password length*/
    if (password.length != 8) {
        errors.innerHTML += "<p>* Please enter 8 characters for password.</p>";
        document.signup.password.focus();
        return false;
    }

    //check password first character*/
    if (!(characters.indexOf(password.substr(0, 1)) >= 0)) {
        errors.innerHTML += "<p>* Please start Password with a charecter A-Z</p>";
        document.signup.password.focus();
        return false;
    }

    //check for uppercase letter
    var uppercaseFound = false;
    for (var i = 0; i < password.length; i++) {
        var letter = password.substr(i, 1);
        if (!uppercaseFound && alphString.indexOf(letter) < 0) {
            if (i + 1 == password.length) {
                errors.innerHTML += "<p>* Please enter at least 1 uppercase letter for password</p>";
                document.signup.password.focus();
                return false;
            }
        } else {
            uppercaseFound = true;
        }
    }

    //check for digit 
    var digitFound = false;
    for (var i = 0; i < password.length; i++) {
        var letter = password.substr(i, 1);
        if (!digitFound && digit.indexOf(letter) < 0) {
            if (i + 1 == password.length) {
                errors.innerHTML += "<p>* Please enter at least 1 digit for password</p>";
                document.signup.password.focus();
                return false;
            }
        } else {
            digitFound = true;
        }
    }

    //check if password mach with confirm passorwd
    if (password != document.signup.confirmpassword.value.trim()) {
        errors.innerHTML += "<p>* Passwords are not mach! Please retype your password</p>";
        document.signup.password.focus();
        return false;
    }

    return true; // passed for validation
} //  End of function


function validateUsername(username) {
    var errors = document.querySelector("#errors");
    //var username = document.signup.username.value.trim();
    var characters = "abcdefghijklmnopqrstuvwxyz";

    //check if Username length is at least 6 charectes   
    if (username.length < 6) {
        errors.innerHTML += "<p>* Please enter at least 6 charecters for Username.</p>";
        document.signup.username.focus();
        return false;
    }

    //check if Username starts with a letter
    var checkFirstLetter = 0;
    var letter = username.substr(0, 1);
    if (!(characters.indexOf(letter.toLowerCase()) >= 0)) {
        errors.innerHTML += "<p>* Please start the Username with a letter.</p>";
        document.signup.username.focus();
        return false;
    }
    return true; // passed for validation
} //  End of function

// check of street name pattern
function validateStreetName(streetName) {
    var errors = document.querySelector("#errors");
    var streetName = document.signup.streetname.value.trim();
    var charecters = "abcdefghijklmnopqrstuvwxyz ";

    for (var i = 0; i < streetName.length; i++) {
        var letter = streetName.substr(i, 1);
        if (charecters.indexOf(letter.toLowerCase()) < 0) {
            errors.innerHTML += "<p>* Please enter only letters for Street Name.</p>";
            document.signup.streetname.focus();
            return false;
        }
    }
    return true; // passed for validation
} //  End of function


function validatePhoneNumber(phoneNumber) {
    var errors = document.querySelector("#errors");
    var phoneNumber = document.signup.phonenumber.value.trim();

    var pattern = new RegExp(/\d{3}-\d{3}-\d{4}|\d{10}/);
    if (!pattern.test(phoneNumber)) {
        errors.innerHTML += "<p>* Please enter the Phone Number in the following format: XXX-XXX-XXXX </p>";
        //document.signup.phoneNumber.focus();
        return false;
    }
    return true; // passed for validation

} //  End of function

// check of Postal code pattern
function validatePostalCode(postalCode) {
    var errors = document.querySelector("#errors");
    var postalCode = document.signup.postalcode.value.trim();
    var pattern = new RegExp(/^[ABCEGHJKLMNPRSTVXY]\d[ABCEGHJKLMNPRSTVWXYZ]( )?\d[ABCEGHJKLMNPRSTVWXYZ]\d$/i);

    if (!(pattern.test(postalCode))) {
        errors.innerHTML += "<p>* Please enter Postal code im following fromat C1A1A7 or C1A 1A7.</p>";
        document.signup.postalcode.focus();
        return false;
    }
    return true; // passed for validation
} //  End of function

function validateCity(city) {
    var errors = document.querySelector("#errors");
    var city = document.signup.city.value.trim();
    var charecters = "abcdefghijklmnopqrstuvwxyz";

    // check of City pattern
    for (var i = 0; i < city.length; i++) {
        var letter = city.substr(i, 1);
        if (charecters.indexOf(letter.toLowerCase()) < 0) {
            errors.innerHTML += "<p>* Please enter only letters for City.</p>";
            document.signup.city.focus();
            return false;
        }
    }
    return true; // passed for validation
} //  End of function

function clearErrors() {
    //clear errors
    document.querySelector("#errors").innerHTML = "";
} //  End of function

function test(value) {
    clearErrors();
    formValidation();
}

