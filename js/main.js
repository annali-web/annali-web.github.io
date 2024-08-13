const daysDiv = document.querySelector('.countdown .days');
const hrsDiv = document.querySelector('.countdown .hrs');
const minsDiv = document.querySelector('.countdown .mins');
const secsDiv = document.querySelector('.countdown .secs');


// launch date (ms)
const launchDate = new Date('Sept 20, 2024 08:00:00').getTime();

// update every second
const intvl = setInterval(() => {
    // get today's date and time (ms)
    const now = new Date().getTime();

    // distance from now to launch date
    const distance = launchDate - now;

    // console.log(distance);

    // time calculations
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((distance % (1000 * 60)) / 1000);

    // display results
    daysDiv.innerHTML = days;
    hrsDiv.innerHTML = hours;
    minsDiv.innerHTML = mins;
    secsDiv.innerHTML = secs;


}, 1000);