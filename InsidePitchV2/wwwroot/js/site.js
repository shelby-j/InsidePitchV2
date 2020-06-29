// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.



document.getElementById('registerButton').addEventListener("click", e => {
    var username = document.getElementById('createUsername').value;
    var email = document.getElementById('createEmail').value;
    var password = document.getElementById('createPassword').value;
    var confirmPassword = document.getElementById('createConfirmPassword').value;

    if (password != confirmPassword) {
        document.getElementById('RegisterMessage').innerText = "Password and Confirm Password do not match.";
    }

    var data = {'username': username, 'email': email, 'password': password, 'confirmPassword': confirmPassword };

    var requestInfo = { 'method': 'PUT', body: JSON.stringify(data), headers: {'Content-Type': 'application/json' }, credentials: 'same-origin' };
    fetch('/api/Register', requestInfo)
        .then(response => {
            if (response.ok) {
                document.location = '/Home/SetupSecurityQuestions';

            }
            else {
                document.getElementById('RegisterMessage').innerText = "Registration Error";
            }
        });
    

});


document.getElementById('registerQuestionsButton').addEventListener("click", e => {
    var securityQuestion1 = document.getElementById('securityQuestion1').value;
    var securityQuestion2 = document.getElementById('securityQuestion2').value;

    var data = { 'securityQuestion1': securityQuestion1, 'securityQuestion2': securityQuestion2 };

    var requestInfo = { 'method': 'PUT', body: JSON.stringify(data), headers: { 'Content-Type': 'application/json' }, credentials: 'same-origin' };
    fetch('/api/SetupSecurityQuestions', requestInfo)
        .then(response => {
            if (response.ok) {
                document.location = '/Home/Login';
            }
            else {
                document.getElementById('RegisterQuestionsMessage').innerText = "Security Question Registration Error";
            }
        });


});

document.getElementById('loginButton').addEventListener("click", e => {
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    var data = { 'username': username, 'email': email, 'password': password };

    var requestInfo = { 'method': 'PUT', body: JSON.stringify(data), headers: { 'Content-Type': 'application/json' }, credentials: 'same-origin' };
    fetch('/api/Login', requestInfo)
        .then(response => {
            if (response.ok) {
                document.location = '/Home/LoginSecurityQuestions';
                //Page not created yet
            }
            else {
                document.getElementById('RegisterQuestionsMessage').innerText = "Login Error";
            }
        });


});