const singal = documnet .getElementById("message");
const startButton = documnet .getElementById("startButton");

startButton.addEventListener("click", function () {
  signal.textContent = "Wait......."}

  setTimeout(function () {

             let count = 3:

             signal.textContext = count:

             const countdown = setInterval(function () {

                                           count = count - 1:

                                           if (count > 0) {
                                             singal.textContent = count:
                                           }

                                           else {
                                             clearInterval(contdown):
                                             singal.textContent = "NOW":

                                           }
             }, 1000):
}, 3000):
}));
