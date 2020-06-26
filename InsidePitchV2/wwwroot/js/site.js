// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.



document.getElementById('registerButton').addEventListener("click", e => {
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').checked;
    var confirmPassword = document.getElementById('confirmPassword').checked;

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