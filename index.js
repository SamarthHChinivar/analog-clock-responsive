setInterval(() => {
  d = new Date();

  hrs = d.getHours();
  min = d.getMinutes();
  sec = d.getSeconds();

  // Please refer the Logic image attached in the README.md file
  hrsRotation = 30 * hrs + min / 2;
  minRotation = 6 * min + sec / 10;
  secRotation = 6 * sec;

  // According to the Logic, applying the styles to the hour, minute, second handles
  hour.style.transform = `rotate(${hrsRotation}deg)`;
  minute.style.transform = `rotate(${minRotation}deg)`;
  second.style.transform = `rotate(${secRotation}deg)`;

}, 1000);