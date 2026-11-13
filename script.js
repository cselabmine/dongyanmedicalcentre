
// MOBILE MENU

function toggleMenu() {

    document.getElementById("navbar")
    .classList.toggle("active");

}


// CLOSE MENU AFTER CLICKING LINK

document.querySelectorAll("#navbar a").forEach(link => {

    link.addEventListener("click", () => {

        document.getElementById("navbar")
        .classList.remove("active");

    });

});


// SET MINIMUM APPOINTMENT DATE

const dateInput = document.getElementById("date");

function setMinimumDate() {

    const today = new Date();

    const localDate = new Date(
        today.getTime() - today.getTimezoneOffset() * 60000
    ).toISOString().split("T")[0];

    dateInput.min = localDate;

}

setMinimumDate();


// APPOINTMENT FORM

document.getElementById("appointmentForm")
.addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;

    let phone = document.getElementById("phone").value;

    let department =
    document.getElementById("department").value;

    let date = document.getElementById("date").value;

    let result = document.getElementById("result");


    // DISPLAY CONFIRMATION

    result.style.color = "green";

    result.innerHTML =

        "Thank you, " + name +
        "! Your appointment request has been prepared." +

        "<br>Department: " + department +

        "<br>Appointment Date: " + date +

        "<br>Phone Number: " + phone +

        "<br><br>Please contact the medical centre to confirm your appointment.";


    // RESET FORM

    this.reset();

    setMinimumDate();

});
