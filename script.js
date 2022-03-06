let c = 0;
let b1 = 12,
  b2 = 13,
  b3 = 14,
  b4 = 15,
  b5 = 16,
  b6 = 17,
  b7 = 18,
  b8 = 19,
  b9 = 10;
let x = 0,
  o = 0;
function fun1() {
  if (document.getElementById("b1").innerHTML === "") {
    if (c % 2 == 0) {
      document.getElementById("b1").innerHTML = "X";
      b1 = 1;
    } else {
      document.getElementById("b1").innerHTML = "O";
      b1 = 0;
    }
    c++;
  } else {
    alert("Space is preoccupied");
  }
}

function fun2() {
  if (document.getElementById("b2").innerHTML === "") {
    if (c % 2 == 0) {
      document.getElementById("b2").innerHTML = "X";
      b2 = 1;
    } else {
      document.getElementById("b2").innerHTML = "O";
      b2 = 0;
    }
    c++;
  } else {
    alert("Space is preoccupied");
  }
}

function fun3() {
  if (document.getElementById("b3").innerHTML === "") {
    if (c % 2 == 0) {
      document.getElementById("b3").innerHTML = "X";
      b3 = 1;
    } else {
      document.getElementById("b3").innerHTML = "O";
      b3 = 0;
    }
    c++;
  } else {
    alert("Space is preoccupied");
  }
}

function fun4() {
  if (document.getElementById("b4").innerHTML === "") {
    if (c % 2 == 0) {
      document.getElementById("b4").innerHTML = "X";
      b4 = 1;
    } else {
      document.getElementById("b4").innerHTML = "O";
      b4 = 0;
    }
    c++;
  } else {
    alert("Space is preoccupied");
  }
}

function fun5() {
  if (document.getElementById("b5").innerHTML === "") {
    if (c % 2 == 0) {
      document.getElementById("b5").innerHTML = "X";
      b5 = 1;
    } else {
      document.getElementById("b5").innerHTML = "O";
      b5 = 0;
    }
    c++;
  } else {
    alert("Space is preoccupied");
  }
}

function fun6() {
  if (document.getElementById("b6").innerHTML === "") {
    if (c % 2 == 0) {
      document.getElementById("b6").innerHTML = "X";
      b6 = 1;
    } else {
      document.getElementById("b6").innerHTML = "O";
      b6 = 0;
    }
    c++;
  } else {
    alert("Space is preoccupied");
  }
}

function fun7() {
  if (document.getElementById("b7").innerHTML === "") {
    if (c % 2 == 0) {
      document.getElementById("b7").innerHTML = "X";
      b7 = 1;
    } else {
      document.getElementById("b7").innerHTML = "O";
      b7 = 0;
    }
    c++;
  } else {
    alert("Space is preoccupied");
  }
}

function fun8() {
  if (document.getElementById("b8").innerHTML === "") {
    if (c % 2 == 0) {
      document.getElementById("b8").innerHTML = "X";
      b8 = 1;
    } else {
      document.getElementById("b8").innerHTML = "O";
      b8 = 0;
    }
    c++;
  } else {
    alert("Space is preoccupied");
  }
}

function fun9() {
  if (document.getElementById("b9").innerHTML === "") {
    if (c % 2 == 0) {
      document.getElementById("b9").innerHTML = "X";
      b9 = 1;
    } else {
      document.getElementById("b9").innerHTML = "O";
      b9 = 0;
    }
    c++;
  } else {
    alert("Space is preoccupied");
  }
}

function check() {
  if (b1 == b2 && b2 == b3) {
    if (b1 == 1) {
      xwin();
    } else {
      owin();
    }
    reset();
    alert("Starting a new game!!");
  }
  if (b4 == b5 && b5 == b6) {
    if (b4 == 1) {
      xwin();
    } else {
      owin();
    }
    reset();
    alert("Starting a new game!!");
  }
  if (b7 == b8 && b8 == b9) {
    if (b7 == 1) {
      xwin();
    } else {
      owin();
    }
    reset();
    alert("Starting a new game!!");
  }
  if (b1 == b4 && b4 == b7) {
    if (b1 == 1) {
      xwin();
    } else {
      owin();
    }
    reset();
    alert("Starting a new game!!");
  }
  if (b2 == b5 && b5 == b8) {
    if (b2 == 1) {
      xwin();
    } else {
      owin();
    }
    reset();
    alert("Starting a new game!!");
  }
  if (b3 == b6 && b6 == b9) {
    if (b3 == 1) {
      xwin();
    } else {
      owin();
    }
    reset();
    alert("Starting a new game!!");
  }
  if (b1 == b5 && b5 == b9) {
    if (b1 == 1) {
      xwin();
    } else {
      owin();
    }
    reset();
    alert("Starting a new game!!");
  }
  if (b3 == b5 && b5 == b7) {
    if (b3 == 1) {
      xwin();
    } else {
      owin();
    }
    reset();
    alert("Starting a new game!!");
  }
  if (
    b1 < 9 &&
    b2 < 9 &&
    b3 < 9 &&
    b4 < 9 &&
    b5 < 9 &&
    b6 < 9 &&
    b7 < 9 &&
    b8 < 9 &&
    b9 < 9
  ) {
    alert("Game is tied!!");
    reset();
    alert("Starting a new game!!");
  }
}

function owin() {
  alert("O is the Winner!!");
  o++;
  document.getElementById("o").innerHTML = "O : " + o;
}

function xwin() {
  alert("X is the Winner");
  x++;
  document.getElementById("x").innerHTML = "X : " + x;
}

function reset() {
  c = 0;
  for (let i = 1; i <= 9; i++) {
    document.getElementById(`b${i}`).innerHTML = "";
  }
  b1 = 12;
  b2 = 13;
  b3 = 14;
  b4 = 15;
  b5 = 16;
  b6 = 17;
  b7 = 18;
  b8 = 19;
  b9 = 11;
}
function rs() {
  x = 0;
  o = 0;
  document.getElementById("x").innerHTML = "X : " + x;
  document.getElementById("o").innerHTML = "O : " + o;
}
