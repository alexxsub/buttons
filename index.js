function log(i) {
  console.log(i);
}

log(this);

document.getElementById("btn1").addEventListener("click", function (event) {
  log(event.target);
  log(this);
});

document.getElementById("btn2").addEventListener("click", (event) => {
  log(event.target);
  log(this);
});

document.getElementById("btn3").onclick = function (event) {
  log(event.target);
  log(this);
};
document.getElementById("btn4").onclick = (event) => {
  log(event.target);
  log(this);
};
