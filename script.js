document.getElementById('calc-age-btn').addEventListener('click', calculateAge);

function calculateAge() {
    var dob = document.getElementById('date-input').value;
    var currentDate = new Date();
    var inputDate = new Date(dob);
    var alertMessage = document.getElementById('alert');
    var outputYears = document.getElementById('years');
    var outputMonths = document.getElementById('months');
    var outputDays = document.getElementById('days');

    // Calculate age
    var ageInMilliseconds = currentDate - inputDate;
    if (ageInMilliseconds < 0) {
        // Future date - show message, clear output
        alertMessage.textContent = "This date is in the future!";
        outputYears.textContent = "-";
        outputMonths.textContent = "-";
        outputDays.textContent = "-";
    } else {
        // Past date - calculate age
        alertMessage.textContent = ""; // Hide message
        var ageDate = new Date(ageInMilliseconds);
        var years = Math.floor(ageDate / 31536000000); // milliseconds in a year
        var months = Math.floor((ageDate % 31536000000) / 2628000000); // milliseconds in a month
        var days = Math.floor(((ageDate % 31536000000) % 2628000000) / 86400000); // milliseconds in a day

        // Display age
        outputYears.textContent = years;
        outputMonths.textContent = months;
        outputDays.textContent = days;
    }
}
