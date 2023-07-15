var A=prompt("number1");
var a=Number(A);
document.getElementById("number1").innerHTML=a;

var x=prompt("operetor");


var B=prompt("enter number2");
var b=Number(B);
document.getElementById("number2").innerHTML=b;

switch(x){
    case ("+"):
    document.getElementById("test").innerHTML=a+b;
    break;
    case (x=="-"):
        document.getElementById("test").innerHTML=a-b;
        break;
    case ("*"):
        document.getElementById("test").innerHTML=a*b;
        break;
     case ("/"):
        document.getElementById("test").innerHTML=a/b;
    break;
}