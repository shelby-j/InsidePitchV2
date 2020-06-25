// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.



document.getElementById('registerButton').addEventListener("click", e => {
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').checked;
    var confirmPassword = document.getElementById('confirmPassword').checked;
    if (password != confirmPassword) {
        document.getElementById('RegisterMessage').innerText = "Password and Confirm Password do not match.";
    }

    var data = { 'firstName': firstName, 'lastName': lastName, 'username': username, 'email': email, 'password': password, 'confirmPassword': confirmPassword };

    
    

});