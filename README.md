# Age Calculator Application

## Introduction
This Age Calculator web application allows users to input their date of birth and calculates their age. It displays the age in years, months, and days.

# Usage
1. Open index.html in a web browser.
2. Input your date of birth.
3. Click the “Calculate” button to see your age.

# New Features
1. Refresh Button: Click the “Refresh” button to reset the input date to the current date.
2. Clear Input Button: Click the “Clear” button to clear the input date field.


## Implementation Details

### HTML (index.html)
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Age Calculator</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="age-calculate">
        <h1>Age Calculator</h1>
        <input type="date" id="birth_date">
        <button id="calculate">Calculate</button>
        <div id="calculateAge"></div>
    </div>
    <script src="script.js"></script>
</body>
</html>

// script.js
function getDOB() {
    let data = document.getElementById("birth_date").value;
    let dob = new Date(data);
    let day = dob.getDate();
    let month = dob.getMonth();
    let year = dob.getFullYear();

    let now = new Date();
    let yearDiff = now.getFullYear() - year;
    let monthDiff = now.getMonth() - month;
    let dateDiff = now.getDate() - day;

    // Handle invalid date
    if (yearDiff < 0) {
        console.log("Invalid date");
    } else if (monthDiff > 0) {
        console.log(yearDiff);
    } else if (monthDiff === 0 && dateDiff >= 0) {
        console.log(yearDiff);
    } else {
        yearDiff = yearDiff - 1;
        if (monthDiff <= 0) {
            if (dateDiff > 0) monthDiff = 12 + monthDiff;
            else monthDiff = 11 - monthDiff;
        }
    }

    if (dateDiff < 0) {
        dateDiff = 30 + dateDiff;
        monthDiff -= 1;
    }

    if (yearDiff < 0) {
        document.getElementById("calculateAge").innerHTML = "Invalid Date";
    } else {
        document.getElementById("calculateAge").innerHTML =
            `Your current Age is ${yearDiff} years ${monthDiff} months ${dateDiff} days`;
    }
}

// Set default date value
function currentDate() {
    let d = document.getElementById("birth_date");
    d.value = formatted();
}

// Format date as YYYY-MM-DD
function formatted(date = new Date()) {
    return [
        date.getFullYear(),
        short(date.getMonth() + 1),
        short(date.getDate())
    ].join("-");
}

function short(num) {
    return num.toString().padStart(2, "0");
}

currentDate();

