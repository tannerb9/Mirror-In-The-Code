let articles = document.getElementsByTagName("article");
let input = document.getElementById("message");

input.addEventListener("keyup", function () {
  for (item of articles) {
    item.textContent = event.target.value;
  }
});
