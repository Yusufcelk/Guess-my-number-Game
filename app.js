//* =====================================
//*  GUESS MY NUMBER
//*  Game Logic
//*======================================

//? 1-100 arasinda rasgele bir sayi tut.
const randomNumber = Math.round(Math.random() * 100);
console.log(randomNumber);

//? Variables
let score = 10;
let topScore = 0;

//* CheckBtn basildiginda kontrolleri yap
document.querySelector(".check-btn").addEventListener("click", () => {
  const guessInput = Number(document.querySelector(".guess-input").value);
  const msg = document.querySelector(".msg");
  const body = document.querySelector("body");

  //? eger input girilmediyse Kullaniciya uyari ver.
  if (!guessInput) {
    msg.innerText = "Please enter a number";
    //! eger rasgele == input.value
  } else if (randomNumber === guessInput) {
    msg.innerHTML = `Congrats You Win <i class="fa-solid fa-face-grin-hearts fa-2x"></i> `;
    body.className = "bg-success";
    document.querySelector(".secret-number").textContent = randomNumber;
    document.querySelector("secret-number").textContent = score;
    if (score > topScore) {
      topScore = score;
      document.querySelector(".top-score").textContent = topScore;
    }

  } else {
    score--;


    if(score > 0) {
    guessInput > randomNumber
      ? (msg.innerText = "DECREASE")
      : (msg.innerText = "INCREASE");
  
    }else {
      msg.innerText = "You Lost";
      document.querySelector(".check-btn").disabled = true;
      body.className = "bg-danger";
    }
    
      document.querySelector(".score").textContent = score;
  }
});

document.querySelector(".again-btn").addEventListener("click", () => {
  score = 10;
  document.querySelector(".score").textContent = score;
  const randomNumber = Math.round(Math.random() * 100);
  document.querySelector(".secret-number").textContent = "?";
  console.log(randomNumber);
  document.querySelector(".check-btn").disabled = false;
  document.querySelector("body").classList.remove("bg-success", "bg-danger");
  document.querySelector(".guess-input").value = "";
  document.querySelector(".msg").innerText = `Starting..`;
});

myObj = {a: 1, b: 2, c: 3};

localStorage.setItem("OBJ",JSON.stringify(myObj));