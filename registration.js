document.getElementById("registrationForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let mobile = document.getElementById("mobile").value;
    let age = document.getElementById("age").value;
    let course = document.getElementById("course").value;
    let gender = document.querySelector('input[name="gender"]:checked');

    if (name == "" || email == "" || mobile == "" || age == "" || course == "" || gender == null) {

        alert("Please fill all details.");
        return;
    }

    window.location.href = "thankyou.html";

});