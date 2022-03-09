//if c is even then print x if odd then o
let c = 0;
//for buttons
let b = [];
//to store value so that it doesn't store garbage value which could be same and can cause problem
//and some other reason too
for (let i = 0; i < 9; i++) {
  b[i] = 11 + i;
}
//to count how many times "X" and "O" won
let x = 0,
  o = 0;

function fun(number) {
  if (document.getElementById(`b${number}`).innerHTML === "") {
    if (c % 2 == 0) {
      document.getElementById(`b${number}`).innerHTML = "X";
      b[number - 1] = 1;
    } else {
      document.getElementById(`b${number}`).innerHTML = "O";
      b[number - 1] = 0;
    }
    c++;
  }
}

function check() {
  console.log(b);

  // 0 1 2
  // 3 4 5
  // 6 7 8

  // case1: for horizontal case
  let temp = 0;
  for (let i = 0; i < 3; i++) {
    if (b[temp] == b[temp + 1] && b[temp + 1] == b[temp + 2]) {
      if (b[temp] == 1) xwin();
      else owin();

      resetBoxes();
    }
    temp += 3;
  }

  // case2: for vertical case
  temp = 0;
  for (let i = 0; i < 3; i++) {
    if (b[temp] == b[temp + 3] && b[temp + 3] == b[temp + 6]) {
      if (b[temp] == 1) xwin();
      else owin();

      resetBoxes();
    }
    temp++;
  }

  // case : right diagnoal
  if (b[0] == b[4] && b[4] == b[8]) {
    if (b[0] == 1) xwin();
    else owin();

    resetBoxes();
    return;
  }
  temp++;

  // case : left diagonal
  if (b[2] == b[4] && b[4] == b[6]) {
    if (b[2] == 1) xwin();
    else owin();

    resetBoxes();
    return;
  }

  // case: tied
  let count = 0;
  for (let i = 0; i < 9; i++) {
    if (b[i] < 10) {
      count++;
    }
  }
  if (count == 9) {
    showMsg("<br><br> &#9; Game is tied!!!");
    resetBoxes();
  }
}

function resetBoxes() {
  disableBtns();
  setTimeout(() => {
    reset();
    enableBtns();
  }, 1000);
}

function owin() {
  // show animation
  showAnimation(2);

  showMsg("<br><br>O is the Winner!!!");
  o++;
  document.getElementById("o").innerHTML = "O : " + o;
}

function xwin() {
  // show animation
  showAnimation(2);

  showMsg("<br><br>X is the Winner!!!");
  x++;
  document.getElementById("x").innerHTML = "X : " + x;
}

function showMsg(msg, type) {
  document.getElementById("msj").style.display = "block";
  document.getElementById("msj").innerHTML = msg;

  // remove the msg after 1 sec
  setTimeout(() => {
    document.getElementById("msj").innerHTML = "";
    document.getElementById("msj").style.display = "none";
  }, 1500);
}

function disableBtns() {
  for (let i = 1; i <= 9; i++) {
    document.getElementById("b" + i).disabled = true;
  }
}

function enableBtns() {
  for (let i = 1; i <= 9; i++) {
    document.getElementById("b" + i).disabled = false;
  }
}

function reset() {
  c = 0;

  // reset each button
  for (let i = 1; i <= 9; i++) {
    document.getElementById(`b${i}`).innerHTML = "";
  }

  // reset array
  for (let i = 0; i < 9; i++) {
    b[i] = 11 + i;
  }
}

function rs() {
  x = 0;
  o = 0;
  document.getElementById("x").innerHTML = "X : " + x;
  document.getElementById("o").innerHTML = "O : " + o;
  reset();
}

function showAnimation(secs) {
  var duration = secs * 1000;
  var animationEnd = Date.now() + duration;
  var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  var interval = setInterval(function () {
    var timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    var particleCount = 50 * (timeLeft / duration);
    // since particles fall down, start a bit higher than random
    confetti(
      Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      })
    );
    confetti(
      Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      })
    );
  }, 250);
}
