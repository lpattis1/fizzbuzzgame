const btn = document.querySelector(".btn");
const reset = document.querySelector(".reset");

function fizzBuzzGame() {
  btn.addEventListener("click", function () {
    const fizz = document.querySelector(".fizz");
    const buzz = document.querySelector(".buzz");
    const fizzBuzz = document.querySelector(".fizz-buzz");
    const userInput = document.querySelector(".user-input");
    const nums = document.querySelector(".numbers");
    const val = userInput.value;
    console.log(val);
    console.log("clicked");
    if (val % 3 === 0 && val % 5 !== 0) {
      fizz.style.color = "blue";
      buzz.style.color = "black";
      fizzBuzz.style.color = "black";
    } else if (val % 5 === 0 && val % 3 !== 0) {
      buzz.style.color = "green";
      fizz.style.color = "black";
      fizzBuzz.style.color = "black";
    } else if (val % 5 === 0 && val % 3 === 0) {
      fizzBuzz.style.color = "red";
      fizz.style.color = "black";
      buzz.style.color = "black";
    }
    for (let i = 0; i < val; i++) {
      const numberRange = document.createElement("li");
      numberRange.appendChild(document.createTextNode(i + 1));
      nums.appendChild(numberRange);
    }
  });
}

fizzBuzzGame();
reset.addEventListener("click", function () {
  location.reload();
});
