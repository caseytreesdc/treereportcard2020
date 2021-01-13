console.dir(document.getElementsByClassName("count-up"));

let progress_95_a = document.getElementsByClassName("progress")[0];
let progress_80_a = document.getElementsByClassName("progress")[1];
let progress_100_a = document.getElementsByClassName("progress")[2];
let progress_90_a = document.getElementsByClassName("progress")[3];

let percentage_95 = document.getElementsByClassName("count-up")[0];
let percentage_83 = document.getElementsByClassName("count-up")[1];
let percentage_131 = document.getElementsByClassName("count-up")[2];
let percentage_92 = document.getElementsByClassName("count-up")[3];

document.addEventListener("scroll", function () {
  if (
    progress_95_a.getBoundingClientRect().top > -10 &&
    progress_95_a.getBoundingClientRect().top < 550
  ) {
    progress_95_a.classList.add("animate-95");
  }
  if (
    percentage_95.getBoundingClientRect().top > -10 &&
    percentage_95.getBoundingClientRect().top < 550
  ) {
    let current = parseInt(percentage_95.innerHTML);
    setInterval(function () {
      max = 95;
      if (parseInt(percentage_95.innerHTML) < max) {
        current++;
        percentage_95.innerHTML = current;
      }
    }, 20);
  }
  if (
    progress_80_a.getBoundingClientRect().top > -10 &&
    progress_80_a.getBoundingClientRect().top < 550
  ) {
    progress_80_a.classList.add("animate-80");
  }
  if (
    percentage_83.getBoundingClientRect().top > -10 &&
    percentage_83.getBoundingClientRect().top < 550
  ) {
    let current = parseInt(percentage_83.innerHTML);
    setInterval(function () {
      max = 83;
      if (parseInt(percentage_83.innerHTML) < max) {
        current++;
        percentage_83.innerHTML = current;
      }
    }, 20);
  }
  if (
    progress_100_a.getBoundingClientRect().top > -10 &&
    progress_100_a.getBoundingClientRect().top < 550
  ) {
    progress_100_a.classList.add("animate-100");
  }
  if (
    percentage_131.getBoundingClientRect().top > -10 &&
    percentage_131.getBoundingClientRect().top < 550
  ) {
    let current = parseInt(percentage_131.innerHTML);
    setInterval(function () {
      max = 131;
      if (parseInt(percentage_131.innerHTML) < max) {
        current++;
        percentage_131.innerHTML = current;
      }
    }, 20);
  }
  if (
    progress_90_a.getBoundingClientRect().top > -10 &&
    progress_90_a.getBoundingClientRect().top < 550
  ) {
    progress_90_a.classList.add("animate-90");
  }
  if (
    percentage_92.getBoundingClientRect().top > -10 &&
    percentage_92.getBoundingClientRect().top < 550
  ) {
    let current = parseInt(percentage_92.innerHTML);
    setInterval(function () {
      max = 92;
      if (parseInt(percentage_92.innerHTML) < max) {
        current++;
        percentage_92.innerHTML = current;
      }
    }, 20);
  }
});
