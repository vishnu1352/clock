var x, y, z;
function myClock() {
  let time = new Date();
  let hr = time.getHours();
  let min = time.getMinutes();
  let sec = time.getSeconds();
  let shifts = "AM";

  if (hr == 0) {
    hr = 12;
  }
  if (hr < 10) {
    hr = "0" + hr;
  }
  if (hr > 12) {
    hr = hr - 12;
    shifts = "PM";
  }
  if (min < 10) {
    min = "0" + min;
  }
  if (sec < 10) {
    sec = "0" + sec;
  }

  let hours = document.getElementById("hours");
  hours.innerText = hr;

  let mins = document.getElementById("mins");
  mins.innerText = min;

  let secs = document.getElementById("secs");
  secs.innerText = sec;

  let shifting = document.getElementById("am");
  shifting.innerText = shifts;

  newsettime();
}

setInterval(myClock, 1000);

function newsettime() {
  let hrs = new Date().getHours();
  if (x == hrs) {
    document.querySelector("#right-inner1").innerText =
      "Let's Have Some Breakfast";
    document.querySelector("#right-inner2").style.backgroundImage =
      "url(./images/wakeup.jpg)";
  }
  if (y == hrs) {
    document.querySelector("#right-inner1").innerText = "Let's Have Some Food";
    document.querySelector("#right-inner2").style.backgroundImage =
      "url(./images/lunch_image.png)";
  }
  if (z == hrs) {
    document.querySelector("#right-inner1").innerText = "Let's Go For Sleep";
    document.querySelector("#right-inner2").style.backgroundImage =
      "url(./images/nap_image.png)";
  }
}

function setYourGoal() {
  let val1 = document.querySelector("#wake-up-time").value;
  let val2 = document.querySelector("#lunch-time").value;
  let val3 = document.querySelector("#nap-time").value;
  x = val1;
  y = val2;
  z = val3;

  let msg1 = document.querySelector(".div1");
  let msg2 = document.querySelector(".div2");
  let msg3 = document.querySelector(".div3");
  console.log(typeof val1);
  if (val1 !== "") {
    if (val1 < 11) {
      msg1.innerHTML =
        "wakeup-time :" + "0" + val1 + "am - 0" + (parseInt(val1) + 1) + "am";
    } else if (val1 == 11) {
      msg1.innerText =
        "wakeup-time :" + val1 + "am -" + (parseInt(val1) + 1) + "pm";
    } else if (val1 >= 12 && val1 < 23) {
      val1 = val1 - 12;
      msg1.innerText =
        "wakeup-time :0" + val1 + "pm -0" + (parseInt(val1) + 1) + "pm";
    } else if (val1 == 23) {
      val1 = val1 - 12;
      msg1.innerText =
        "wakeup-time :" + val1 + "pm -" + parseInt(val1 + 1) + "am";
    }
  }

  if (val2 !== "") {
    if (val2 < 11) {
      msg2.innerHTML =
        "lunch-time :" + "0" + val2 + "am - 0" + (parseInt(val2) + 1) + "am";
    } else if (val2 == 11) {
      msg2.innerText =
        "lunch-time :" + val2 + "am -" + (parseInt(val2) + 1) + "pm";
    } else if (val2 >= 12 && val2 < 23) {
      val2 = val2 - 12;
      msg2.innerText =
        "lunch-time :0" + val2 + "pm -0" + (parseInt(val2) + 1) + "pm";
    } else if (val2 == 23) {
      val2 = val2 - 12;
      msg2.innerText =
        "lunch-time :" + val2 + "pm -" + parseInt(val2 + 1) + "am";
    }
  }

  if (val3 !== "") {
    if (val3 < 11) {
      msg3.innerHTML =
        "nap-time :" + "0" + val3 + "am - 0" + (parseInt(val3) + 1) + "am";
    } else if (val3 == 11) {
      msg3.innerText =
        "nap-time :" + val3 + "am -" + (parseInt(val3) + 1) + "pm";
    } else if (val3 >= 12 && val3 < 23) {
      val3 = val3 - 12;
      msg3.innerText =
        "nap-time :0" + val3 + "pm -0" + (parseInt(val3) + 1) + "pm";
    } else if (val3 == 23) {
      val3 = val3 - 12;
      msg3.innerText = "nap-time :" + val3 + "pm -" + parseInt(val3 + 1) + "am";
    }
  }
}