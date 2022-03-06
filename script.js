let c = 0;
let b = [];

for (let i = 0; i < 9; i++) {
  b[i] = 11 + i;
}
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
  } else {
    console.log("cell is occupied!");
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

  //446-224
  // case3: for diagonal case
  /* let diff=4;
  temp = 0;
  for (let i = 0; i < 2; i++) {
    console.log(temp, diff)
    if (b[temp] == b[temp + diff] && b[temp + diff] == b[temp + (diff+2)]) {
      if (b[temp] == 1) xwin();
      else owin();
      disableBtns();
      setTimeout(()=>{
        reset();
        enableBtns();
      }, 1000);
    }
    temp+=2;
    diff-=2;
  }*/

  // 0 1 2
  // 3 4 5
  // 6 7 8
  // case : right diagnoal
  if (b[0] == b[4] && b[4] == b[8]) {
    if (b[0] == 1) xwin();
    else owin();

    resetBoxes();
  }
  temp++;

  // case : left diagonal
  if (b[2] == b[4] && b[4] == b[6]) {
    if (b[2] == 1) xwin();
    else owin();

    resetBoxes();
  }

  // case: tied
  let count = 0;
  for (let i = 0; i < 9; i++) {
    if (b[i] < 10) {
      count++;
    }
  }
  if (count == 9) {
    console.log("Game is tied!");
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
  console.log("O is the Winner!!");
  o++;
  document.getElementById("o").innerHTML = "O : " + o;
}

function xwin() {
  console.log("X is the Winner");
  x++;
  document.getElementById("x").innerHTML = "X : " + x;
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
}
