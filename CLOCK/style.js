function setDate() {
  const secondHand = document.querySelector(".second-hand");
  const minuteHand = document.querySelector(".minute-hand");
  const hourHand = document.querySelector(".hour-hand");

  const now = new Date();
  const seconds = now.getSeconds();
  const secondsDegrees = (seconds / 60) * 360 + 180; // seconds converting into degree 60/60*360 =360  and 180 is wrapp degree transition
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  console.log(seconds);

  //  ...minutes...

  const minutes = now.getMinutes();
  const minutesDegrees = (minutes / 60) * 360 + 180;
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
  console.log(minutes);

  //.....hour.....
  const hours = now.getHours();
  const hourDegrees = (hours / 12) * 360 + 180;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
  console.log(hours);
}
setInterval(setDate, 1000);
