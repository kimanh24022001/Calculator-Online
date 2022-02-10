input=document.querySelector(".input");
var result=0;
string='';
document.getElementById("num0").onclick = function() {num0()};
document.getElementById("num1").onclick = function() {num1()};
document.getElementById("num2").onclick = function() {num2()};
document.getElementById("num3").onclick = function() {num3()};
document.getElementById("num4").onclick = function() {num4()};
document.getElementById("num5").onclick = function() {num5()};
document.getElementById("num6").onclick = function() {num6()};
document.getElementById("num7").onclick = function() {num7()};
document.getElementById("num8").onclick = function() {num8()};
document.getElementById("num9").onclick = function() {num9()};
document.getElementById("EC").onclick = function() {EC()};
document.getElementById("sqr").onclick = function() {sqr()};
document.getElementById("factorial").onclick = function() {factorial()};
document.getElementById("abs").onclick = function() {abs()};
document.getElementById("floor").onclick = function() {floor()};
document.getElementById("percent").onclick = function() {percent()};
document.getElementById("AC").onclick = function() {AC()};
document.getElementById("sin").onclick = function() {sin()};
document.getElementById("cos").onclick = function() {cos()};
document.getElementById("tan").onclick = function() {tan()};
document.getElementById("cot").onclick = function() {cot()};
document.getElementById("add").onclick = function() {add()};
document.getElementById("subtract").onclick = function() {subtract()};
document.getElementById("divide").onclick = function() {divide()};
document.getElementById("multiply").onclick = function() {multiply()};
document.getElementById("point").onclick = function() {point()};
document.getElementById("hat").onclick = function() {hat()};
document.getElementById("Ans").onclick = function() {Ans()};
document.getElementById("exp").onclick = function() {exp()};
document.getElementById("ln").onclick = function() {ln()};
document.getElementById("e").onclick = function() {e()};
document.getElementById("log").onclick = function() {log()};
document.getElementById("căn").onclick = function() {căn()};
document.getElementById("pi").onclick = function() {pi()};
document.getElementById("equal").onclick = function() {equal()};
input.innerHTML ="";
function AC() {
  input.innerHTML ="";
}
function point() {
  input.innerHTML += ".";
}
function num0() {
  input.innerHTML += "0";
}
function num1() {
  input.innerHTML += "1";
}
function num2() {
  input.innerHTML += "2";
}
function num3() {
  input.innerHTML += "3";
}
function num4() {
  input.innerHTML += "4";
}
function num5() {
  input.innerHTML += "5";
}
function num6() {
  input.innerHTML += "6";
}
function num7() {
  input.innerHTML += "7";
}
function num8() {
  input.innerHTML += "8";
}
function num9() {
  input.innerHTML += "9";
}
function EC() {
  input.innerHTML=(input.innerHTML).slice(0, (input.innerHTML).length-1);
}
function sqr() {
  result=input.innerHTML/1 ;
  string='sqr';
  input.innerHTML ="";
  document.querySelector(".overlay").innerHTML=string;
}
function factorial() {
  result=input.innerHTML/1 ;
  string='!';
  input.innerHTML ="";
  document.querySelector(".overlay").innerHTML=string;
}
function abs() {
  result=input.innerHTML/1 ;
  string="abs";
  input.innerHTML ="";
  document.querySelector(".overlay").innerHTML=string;
}
function floor() {
  result=input.innerHTML/1 ;
  string='fl';
  input.innerHTML ="";
  document.querySelector(".overlay").innerHTML=string;
}
function percent() {
  result=input.innerHTML/1 ;
  string='%';
  result=result/100; 
  input.innerHTML ="";
  document.querySelector(".overlay").innerHTML=string;
}
function cos() {
  result=input.innerHTML/1;
  string='cos';
  input.innerHTML ="";
  document.querySelector(".overlay").innerHTML=string;
}
function tan() {
  result=input.innerHTML/1;
  string='tan';
  input.innerHTML ="";
  document.querySelector(".overlay").innerHTML=string;
}
function add() {
  result=input.innerHTML/1 ;
  string='+';
  input.innerHTML ="";
  document.querySelector(".overlay").innerHTML=string;
}
function sin() {
  result=input.innerHTML/1;
  string='sin';
  input.innerHTML ="";
  document.querySelector(".overlay").innerHTML=string;
}
function cot() {
  result=input.innerHTML/1;
  string='cot';
  input.innerHTML ="";
  document.querySelector(".overlay").innerHTML=string;
}
function log() {
  result=input.innerHTML/1 ;
  string='log';
  input.innerHTML ="";
  document.querySelector(".overlay").innerHTML=string;
}
function pi() {
  result=input.innerHTML/1 ;
  string='pi';
  input.innerHTML ="";
  document.querySelector(".overlay").innerHTML=string;
}
function subtract() {
  if ( input.innerHTML!=''){
  result=(input.innerHTML/1);
  string='-';
  input.innerHTML ="";
  document.querySelector(".overlay").innerHTML=string;
  }
  else{ 
    input.innerHTML='-'+input.innerHTML
  }
}
function ln() {
  result=input.innerHTML/1 ;
  string='ln';
  input.innerHTML ="";
  document.querySelector(".overlay").innerHTML=string;
}
function e() {
  result=input.innerHTML/1 ;
  string='e';
  input.innerHTML ="";
  document.querySelector(".overlay").innerHTML=string;
}
function căn() {
  result=input.innerHTML/1;
  string='căn';
  input.innerHTML ="";
  document.querySelector(".overlay").innerHTML=string;
}
function divide() {
  result=input.innerHTML/1 ;
  string='/';
  input.innerHTML ="";
  document.querySelector(".overlay").innerHTML=string;
}
function exp() {
  result=input.innerHTML/1 ;
  string='E';
  input.innerHTML ="";
  document.querySelector(".overlay").innerHTML=string;
}
function Ans() {
  input.innerHTML= result;
}
function hat() {
  result=input.innerHTML/1 ;
  string='^';
  input.innerHTML ="";
  document.querySelector(".overlay").innerHTML=string;
}
function equal() {
  if (string=='+'){
    result=input.innerHTML/1+result; 
    }
  if (string=='-')  {
    result=-input.innerHTML/1+result; 
    }
  if (string=='*'){
      result=input.innerHTML/1*result; 
      }
  if (string=='/'){
    result=result/(input.innerHTML/1); 
    }
  if (string=='căn'){
    result=Math.sqrt(input.innerHTML/1); 
    }
  if (string=='sqr'){
    result=input.innerHTML/1;
    result=result*result; 
    }
  if (string=='!'){
    var product = 1;
    for(i = 1; i <= (input.innerHTML/1); i++){
            product = product * i
     }
    result=product; 
    }
  if (string=='sin'){
    result=Math.sin(input.innerHTML/1); 
    }
  if (string=='cos'){
    result=Math.cos(input.innerHTML/1); 
    }
   if (string=='tan'){
    result=Math.tan(input.innerHTML/1); 
    }
   if (string=='^'){
    result=Math.pow(result, input.innerHTML/1);
    }
  if (string=='cot'){
    result=Math.cot(input.innerHTML/1); 
    }
  if (string=='log'){
    result=Math.log(input.innerHTML/1); 
    }
  if (string=='ln'){
    result=Math.log2(input.innerHTML/1); 
    }
  if (string=='rad'){
    result=RADIAN(input.innerHTML/1); 
    }
  if (string=='pi'){
    result=Math.PI; 
    }
  if (string=='e'){
    result=Math.E; 
    }
  if (string=='E'){
    result=result*Math.pow(10,input.innerHTML/1); 
    }
  if (string=='%'){
    }
  if (string=='fl'){
    result=Math.floor(input.innerHTML/1); 
    }
  if (string=='abs'){
    result=Math.abs(input.innerHTML/1); 
    }
  input.innerHTML=result;
  result=input.innerHTML;
  string='';
  document.querySelector(".overlay").innerHTML=string;
}
function multiply() {
  result=input.innerHTML/1 ;
  string='*';
  input.innerHTML ="";
  document.querySelector(".overlay").innerHTML=string;
}
