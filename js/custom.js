var firstName = "Stephen"
var secondName = "Woods"
document.getElementById("test").innerHTML = firstName + " " + secondName;

console.log(firstName+" "+secondName);

alert(firstName+ " " + secondName);



var a = 20;
var b = 2;
var c = 5;
var z = a + b - c;
document.getElementById("test2").innerHTML = z;

function myFunction() {
    var text = "";
    var i;
    for (i = 1; i <= 10; i++) {
        text += i + "<br>";
    }
    document.getElementById("test4").innerHTML = text;
}



