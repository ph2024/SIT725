function showCalculation() {
    document.getElementById('showNum1').innerHTML = 
            document.getElementById("num1").value;
    document.getElementById('showNum2').innerHTML = 
            document.getElementById("num2").value;
            var firstNum = parseInt(num1.value);
            var secondNum = parseInt(num2.value);
            var sum = parseInt(num1.value) + parseInt(num2.value);
    document.getElementById('showSum').innerHTML = sum;
    if (sum) {
        socket.emit('Calculation', firstNum, secondNum, sum);
    }
    }

var form = document.getElementById('form');
var input = document.getElementById('showSum');

form.addEventListener('submit', showCalculation);
