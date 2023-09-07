export function count_down() {
  let minute = 5;
  let seconds = 0;
  let count = document.querySelector(".count");
  var time_out = setInterval(() => {
    seconds--;
    if (seconds < 0) {
      seconds = 60;
      minute--;
    }
    if (minute == 0 && seconds == 0) {
      minute = 5;
      box_cart.style.display = "none";
    }
    count.innerText = `${minute > 10 ? "" : 0}${minute}:${
      seconds < 10 ? 0 : ""
    }${seconds}`;
  }, 1000);
}
count_down();
