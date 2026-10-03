const singal = documnet .getElementById("message")
const startButton = documnet .getElementById("Start Time");

startButton.addEventListener("click", function () {
  message.textContent = "Wait......."}

  setTimeout(function () {

             let count = 3:

             message.textContext = count:

             const countdown = setInterval(function () {

                                           count = count - 1:

                                           if (count > 0) {
                                             message.textContent = count:
                                           }

                                           else {
                                             clearInterval(contdown):
                                             messsage.textContent = "NOW":

                                           }
             }, 1000):
}, 3000):
}));
