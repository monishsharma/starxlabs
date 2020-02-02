// QUESTION 1

getTime = () => {
  var getInputInseconds = document.getElementById("time").value;
 if(getInputInseconds < 0){
     alert('enter number in +ve value')
 }
 else{
  var h = Math.floor(getInputInseconds / 3600);
  var m = Math.floor(getInputInseconds % 3600 / 60);
  var s = Math.floor(getInputInseconds % 3600 % 60);
  document.getElementById('ans').innerHTML = ('0' + h ).slice(-2) + ' hours ' + " : " + ('0' + m ).slice(-2) + ' minutes ' + " : " + ('0' + s ).slice(-2) + ' seconds ';

 }
}

//QUESTION 2

xorGate = () => {
    var value1 = document.getElementById('num1').value;
    var value2 = document.getElementById('num2').value;
    var oddCount = (value1 - value2) / 2;
    if(value2 % 2 == 0 || value1 % 1 == 0 ){
        oddCount = oddCount +1;
    }

    if (oddCount % 2 == 0) 
    document.getElementById('ans2').innerHTML = 'even';

    else
    document.getElementById('ans2').innerHTML = 'odd';

        
}




// QUESTION 3
var strings = [];

sortString = () => {
  var getInput = document.getElementById("sort").value;
  strings.push(getInput);
  document.getElementById("sort").value = ''
  document.getElementById('ans3').innerHTML = strings;
}
sortArray = () => {
    bubbleSort(strings)
}

bubbleSort = (array) => {
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
  document.getElementById('sorteing').innerHTML = array;
    
  }