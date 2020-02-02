// QUESTION 1

getTime = () => {
  var getInputInseconds = document.getElementById("time").value;
  if (getInputInseconds < 0) {
    alert("enter number in +ve value");
  } else {
    var h = Math.floor(getInputInseconds / 3600);
    var m = Math.floor((getInputInseconds % 3600) / 60);
    var s = Math.floor((getInputInseconds % 3600) % 60);
    document.getElementById("ans").innerHTML =
      ("0" + h).slice(-2) +
      " hours " +
      " : " +
      ("0" + m).slice(-2) +
      " minutes " +
      " : " +
      ("0" + s).slice(-2) +
      " seconds ";
  }
};

//QUESTION 2

function findXOR(n) {
  var mod = n % 4;


  // If n is a multiple of 4
  if (mod == 0) return n;
  // If n % 4 gives remainder 1
  else if (mod == 1) return 1;
  // If n % 4 gives remainder 2
  else if (mod == 2) return n + 1;
  // If n % 4 gives remainder 3
  else if (mod == 3) return 0;
}

function findXOR1() {
  var l = document.getElementById("num1").value;
  var r = document.getElementById("num2").value;

  var ans = findXOR(l - 1) ^ findXOR(r);
  if (ans % 2 == 0) {
    document.getElementById("ans2").innerHTML = "even";
  } else {
    document.getElementById("ans2").innerHTML = "odd";
  }
}

// QUESTION 3
var strings = [];

sortString = () => {
  var getInput = document.getElementById("sort").value;
  strings.push(getInput);
  document.getElementById("sort").value = "";
  document.getElementById("ans3").innerHTML = strings;
};
sortArray = () => {
  bubbleSort(strings);
};

bubbleSort = array => {
  var done = false;
  while (!done) {
    done = true;
    for (var i = 1; i < array.length; i++) {
      if (array[i - 1] > array[i]) {
        done = false;
        var tmp = array[i - 1];
        array[i - 1] = array[i];
        array[i] = tmp;
      }
    }
  }
  document.getElementById("sorteing").innerHTML = array;
};
