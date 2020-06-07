const $uploadButton = document.querySelector("#upload");
const $progressValue = document.querySelector(".progress-value");
let contador = 5;

$uploadButton.addEventListener("click", function () {
  var intervalo = setInterval(() => {
    if (contador > 99) {
      $progressValue.classList.remove("active");
      clearInterval(intervalo);
    } else if (contador > 5) {
      !$progressValue.classList.contains("active") &&
        $progressValue.classList.add("active");
      $progressValue.style.width = `${contador}%`;
    }
    contador++;
  }, 20);
  contador = 0;
});
