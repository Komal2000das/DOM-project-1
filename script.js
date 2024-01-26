var istatus = document.querySelector("h5");
var btn = document.querySelector("button");
var check = 0;

btn.addEventListener("click", function () {
  if (check == 0) {
    istatus.innerHTML = "Friend";
    istatus.style.color = "green";
    btn.innerHTML = "Remove";
    btn.style.backgroundColor = "#dadada";
    btn.style.color = "black";
    check = 1;
  } else {
    istatus.innerHTML = "Stranger";
    istatus.style.color = "red";
    btn.innerHTML = "Add Friend";
    btn.style.backgroundColor = "cadetblue";
    btn.style.color = "#fff";
    check = 0;
  }
});
