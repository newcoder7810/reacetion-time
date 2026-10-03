const signal = documnet .getElementById("message");
const startButton = documnet .getElementById("startButton");

let startTime;
let canClick = false;

startButton.addEventListener("click", function () {
  signal.textContent = "Wait......."}

  setTimeout(function () {

             let count = 3;

             signal.textContent = count;

             const countdown = setInterval(function () {

                                           count = count - 1;

                                           if (count > 0) {
                                             singal.textContent = count;
                                           }

                                           else {
                                             clearInterval(contdown);
                                             signal.textContent = "NOW";
                                             startTime = performane.now();
                                             canClick = true;

                                           }
             }, 1000);
}, 3000);
}));

documnet. addEventListener("click",function() {

  if (canClick == true) {
  
  const endTime = performance.now();
  const reactionTime= endTime - startTime;
  signal.textContent = 
    "Reaction time: " + Math.round(reactionTime) + "ms";

  canClick = false;

  }
});
