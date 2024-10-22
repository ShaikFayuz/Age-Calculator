document.getElementById('agecalculator').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get the input value
    const birthdate = document.getElementById('birthdate').value;

    // Validate the date format
    const datePattern = /^\d{2}-\d{2}-\d{4}$/;
    if (!datePattern.test(birthdate)) {
        alert('Please enter a valid date in DD-MM-YYYY format.');
        return;
    }

    // Convert the birthdate to a Date object
    const [day, month, year] = birthdate.split('-');
    const birthDateObj = new Date(`${year}-${month}-${day}`);

    // Get today's date
    const today = new Date();

    // Calculate the age in years
    let ageInYears = today.getFullYear() - birthDateObj.getFullYear();
    const monthDifference = today.getMonth() - birthDateObj.getMonth();
    const dayDifference = today.getDate() - birthDateObj.getDate();
    if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
        ageInYears--;
    }

    // Calculate the difference in milliseconds
    const timeDiff = today - birthDateObj;

    // Calculate the number of seconds, minutes, hours, days, weeks, and months passed
    const secondsPassed = Math.floor(timeDiff / 1000);
    const minutesPassed = Math.floor(timeDiff / (1000 * 60));
    const hoursPassed = Math.floor(timeDiff / (1000 * 60 * 60));
    const daysPassed = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const weeksPassed = Math.floor(daysPassed / 7);
    const monthsPassed = (ageInYears * 12) + monthDifference;

    // Display the results
    document.getElementById('ageInYears').textContent = ageInYears;
    document.getElementById('ageInMonths').textContent = monthsPassed;
    document.getElementById('ageInWeeks').textContent = weeksPassed;
    document.getElementById('ageInDays').textContent = daysPassed;
    document.getElementById('ageInHours').textContent = hoursPassed;
    document.getElementById('ageInMinutes').textContent = minutesPassed;
    document.getElementById('ageInSeconds').textContent = secondsPassed;

    document.getElementById('result-container').style.display = 'block';
});
