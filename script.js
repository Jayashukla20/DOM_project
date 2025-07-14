let is24Hour = false;

function updateClock() {
    const now = new Date();

    let Hours = now.getUTCHours();
    let Minutes = now.getUTCMinutes();
    let Seconds = now.getUTCSeconds();
    let ampm = '';  // Needed in case 12-hour format is active


    Hours += 5
    Minutes += 30

    if (Minutes >= 60) {
        Minutes -= 60;
        Hours += 1;
    }
    if (Hours >= 24) {
        Hours -= 24
    }


    if (is24Hour === false) {
        if (Hours == 0) {
            Hours = 12
            ampm = 'AM'
        } else if (Hours == 12) {
            ampm = 'PM'
        } else if (Hours > 12) {
            Hours = Hours - 12
            ampm = 'PM'
        }
    }

    if (Hours < 10) {
        Hours = "0" + Hours;
    }

    if (Minutes < 10) {
        Minutes = "0" + Minutes
    }
    if (Seconds < 10) {
        Seconds = "0" + Seconds
    }
    const formattedTime = `${Hours}:${Minutes}:${Seconds}`;

    let day = now.getUTCDate();
    let month = now.getUTCMonth() + 1; // Months are 0-indexed
    let year = now.getUTCFullYear();

    if (day < 10) day = "0" + day;
    if (month < 10) month = "0" + month;

    const formattedDate = `${day}/${month}/${year}`;


    const time = document.querySelector('.time');
    const Ampm = document.querySelector('.ampm');
    const date = document.querySelector('.date');

    time.innerText = formattedTime;
    Ampm.innerText = ampm;
    date.innerText = formattedDate

}

const toggleButton = document.querySelector('.toggle-format');
toggleButton.addEventListener('click', () => {
    is24Hour = !is24Hour;
    toggleButton.innerText = is24Hour ? 'Switch to 12-hour format' : 'Switch to 24-hour format';
    updateClock(); // Update immediately on toggle
});
updateClock();                      // Run once when page loads
setInterval(updateClock, 1000);     // Update every second
