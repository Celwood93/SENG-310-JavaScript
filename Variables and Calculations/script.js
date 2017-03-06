function testFunction() {
    var x = document.getElementById("num1").value;
    var y = document.getElementById("num2").value;
    var z = parseInt(x) + parseInt(y);
    document.getElementById("sum").value = z;
}
