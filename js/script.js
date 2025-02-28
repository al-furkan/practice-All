const hour_hand= document.querySelector('.hour-hand');
const minute_hand= document.querySelector('.minute-hand');
const second_hand= document.querySelector('.second-hand');



function getDhakaTime() {
    const now = new Date();
    const options = { timeZone: "Asia/Dhaka", hour12: false, hour: "2-digit", minute: "2-digit", second: "2-digit" };
    const dhakaTime = new Intl.DateTimeFormat("en-US", options).format(now);
    const [hour, minute, second] = dhakaTime.split(":").map(Number);
    return { hour, minute, second };
}

function updateClock() {
    const { hour, minute, second } = getDhakaTime();

    const hourDeg = (hour % 12) * 30 + (minute * 0.5);
    const minuteDeg = minute * 6;
    const secondDeg = second * 6;

    hour_hand.style.transform = `rotate(${hourDeg}deg)`;
    minute_hand.style.transform = `rotate(${minuteDeg}deg)`;
    second_hand.style.transform = `rotate(${secondDeg}deg)`;
}

setInterval(updateClock, 1000);
updateClock(); // Call immediately to set the correct time
