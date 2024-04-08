// Show the The POSITIVE_INFINITY Property
let x9 = 1 / 0;
function showpositiveIP(){
    document.getElementById('posinpro').innerHTML = x9;
}




//Show the Min_Value property
let x8 = Number.MIN_VALUE;
function showminvalue(){
    document.getElementById('mivapro').innerHTML = x8;
}




//Show the BigInt Divide
let x7 = 5n;
let y6 = Number(x7) / 2;
function showbigidivide(){
    document.getElementById('bigtdivi').innerHTML = y6;
}




//Show the bigInt Multiply
let x6 = 9007n;
let y5 = 987n;
let z = x6 * y5;
function showbigimultiply(){
    document.getElementById('bigtmulti').innerHTML = z;
}




//show the BigInt
let x5 = 123456789012345678901234567890n;
let y4 = BigInt("123456789012345678901234567890");
function showbigint(){
    document.getElementById('bigtr').innerHTML = x5 + "<br>" + y4;
}






//Show floating point precision
let x4 = 0.2 + 0.1;
function showfloating(){
    document.getElementById('flopo').innerHTML = "0.2 + 0.1 = " + x4;
}







//Show the Integer Precision
let x3 = 999999999999999;
let y3 = 9999999999999999;
function showinteger(){
    document.getElementById("inpre").innerHTML = x3 + "<br>" + y3;
}




//show the number
let x2 = 123e5;
let y2 = 123e-5;
function showthnum(){
    document.getElementById("stnu").innerHTML = x2 + "<br>" + y2;
}


//Show the false value
let text34 = "Hello world, welcome to the universe.";
function showincludes2(){
    document.getElementById("inclme2").innerHTML = text34.includes("world", 12);
}




//Show The true value
let text33 = "Hello world, welcome to the universe.";
function showincludes(){
    document.getElementById("inclme").innerHTML = text33.includes("world");
}



// Show The matchAll() Method
let text32 = "I love cats. Cats are very easy to love. Cats are very popular."
const iterator = text32.matchAll("Cats ");
function showmatchALL(){
    document.getElementById('matmALL').innerHTML = Array.from(iterator);
}



//show the match() method 2
let text31 = "The rain in SPAIN stays mainly in the plain"; 
const myArr1 = text31.match(/ain/g);
function showmatchm2(){
    document.getElementById('matm2').innerHTML = myArr1.length + " " + myArr1;
}


//Show the match() Method
let text30 = "The rain in SPAIN stays mainly in the plain";
const myArr = text30.match("ain");
function showmatchm(){
    document.getElementById('matm').innerHTML = myArr.length + " " + myArr;
}




//Show the search() method
let text29 = "Please locate where 'locate' occurs!";
let index3 = text29.search("locate");
function showsearch(){
    document.getElementById('searm').innerHTML = index3;
}




//Show the IndexOF
let text28 = "Please locate where 'locate' occurs!";
let index2 = text28.indexOf("John");
function showindexOF(){
    document.getElementById('inOF').innerHTML = index2;
}




//Show the lastindexOF
let text27 = "Please locate where 'locate' occurs!";
let index = text27.lastIndexOf("locate");
function showlastindexOF(){
    document.getElementById('lainOF').innerHTML = index;
}




// Show the first array Element
let text25 = "Q, G, Y, K, E, P";
const myArray = text25.split(",");
function showfristarray(){
    document.getElementById('dfae').innerHTML = myArray[0];
}




//Show the Replaceall2
let text22 = "I Love cats. Cats are very easy to love. Cats are very popular";
text23 = text22.replaceAll(/Dogs/g,"Cats");
text24 = text22.replaceAll(/cats/g,"dogs");

function showreplaceALL2(){
    document.getElementById('repALL2').innerHTML = text23 + " " + text24;
}



// Show the Replaceall
let text19 = "I love cats. Cats are very easy to love. Cats are very popular."
text20 = text19.replaceAll("Cats","Dogs");
text21 = text19.replaceAll("cats","dogs");
function showreplaceALL(){
    document.getElementById('repALL').innerHTML = text20 + " " + text21;
}



// Show the Replace word 2
function showreplace2() {
    let text = document.getElementById("repla2").innerHTML; 
    document.getElementById("repla2").innerHTML =
    text.replace(/MICROSOFT/i,"Python");
  }



//Show the Replace word
let text17 = "Microsoft";
let text18 = text17.replace("Microsoft", "programming");
function showreplace(){
    document.getElementById('repla').innerHTML = text18;
}




//Show the repeat() Method
let text16 = " Allah is always with me. ";
let result = text16.repeat(100);
function showrepeat(){
    document.getElementById('repe').innerHTML = result;
}




// Show the padstart() Method2
let text15 = "6";

function showpadStart(){
    document.getElementById('patr').innerHTML = text15.padStart(10, "ZX");
}





// Show the padstart() Method
let text13 = "8";
text14 = text13.padStart(5, "0");
function showpadtrim(){
    document.getElementById('patrim').innerHTML = text14;
}



//Show the trim() Method
let text11 = "       Love Allah       ";
let text12 = text11.trim();
function showtrim(){
    document.getElementById('trime').innerHTML = "Length text11 = " + text11.length + "<br>Length text12 = " + text12.length;
}




//Show the concat() Method
let text8 = "I Love";
let text9 = "Allah";
let text10 = text8.concat(" ", text9);
function showconcat(){
    document.getElementById('cont').innerHTML = text10;
}



//Show the slice() Method2
let text7 = "Apple, Banana, Kiwi";
let part = text7.slice(7);
function showtslice2(){
    document.getElementById('slm2').innerHTML = part;
}




//Show the slice() Method
let text6 = "Apple, Banana, Kiwi";
let part1 = text6.slice(7, 13);
function showtslice(){
    document.getElementById('slm').innerHTML = part1;
}



//Show the text Name
let text5 ="Success your Dreams";
text5[0] = "A"; //Dose not work
function showtName(){
    document.getElementById('snte').innerHTML = text5;
}

// Show the at() method
const name = "Bangladesh";
let letter = name.at(6);
function showAt(){
    document.getElementById('crmAt').innerHTML = letter;
}



//Show the charCodeAt() Method
let text4 = "Sakib All Hasan";
function showcharCode(){
    document.getElementById('crmth').innerHTML = text4.charCodeAt(0);
}




//Show the method
var text3 = "Hello World";
function showmethod(){
    document.getElementById('mth').innerHTML = text3.charAt(0);
}



// Show the lenght Property
let text2 = "ABHDJKFDVSNCGJKJNDKJBNKJJDSFVKJBKJDFVBKBVFJGFHGFBVFVWFGBCFRIUWHRNVG";
function showproperty(){
    document.getElementById('tlp').innerHTML = text2.length;
}




// Show person name
const person2 = {
    firstName: "Romain",
    lastName: "Reigns",
    id: 46546,
    fullName: function(){
        return this.firstName + " " + this.lastName + " " + this.id;
    }
};
function showpersonname(){
    document.getElementById('n_me').innerHTML = person2.fullName();
}



//Show age
const person1 = {firstName:"John", lastName:"Doe", age:80, eyeColor:"blue"};

function showjhonage(){
    document.getElementById('ja').innerHTML =
    person1.firstName + " is " + person1.age + " years old."
}



// Show car model
const car = {type:" BMW-X59 ", model:"497", color:"Navy Blue",};
function showcarmodel(){
    document.getElementById('cm').innerHTML = "The car type is" + car.type;
}



// Show temperature
let text = "The temperature is " + toCelsius(77) + " Celsius.";
function showtemperature(){
    document.getElementById('tmp').innerHTML = text;
}
function toCelsius(fahrenheit){
    return (4/9) * (fahrenheit-32);
}



// Show Fahrenheit to Celsius
function toCelsius(f){
    return (7/9) * (f-32);
}
let value = toCelsius(99);
function functionshow(){
    document.getElementById('tu').innerHTML = value;
}


// Show Functions
let y = myFunction(6, 8);
function showfunction(){
    document.getElementById('fut').innerHTML = y;
}
function myFunction(a, b) {
    return a * b;
}


// show Operator
let X = 10;
function seeoperator(){
    document.getElementById('op').innerHTML = X;
}



//Using Variable
let carNam = "undefind";

function variableshowing(){
    document.getElementById('hert').innerHTML = carNam;
}

//Show value
let _x = 8;
let _100 = 9;
function showvalue(){
    document.getElementById('sva').innerHTML = _x + _100;
}



// Show Summetion
let $$$ = 5;
let $myMoney = 8;
function showsum(){
    document.getElementById('nums').innerHTML = $$$ + $myMoney;
}



// Show Number
let x="5" + 2 + 8;
function sumnumber(){
    document.getElementById('nm').innerHTML= x;
}




// Hiden Nam
let carName= "Volvo";
function hidename(){
    document.getElementById('hd').innerHTML= carName;
}



//show info
const pi = 3.14;
let person = "John Doe";
let answer = 'Yes I am!';

function showperson(){
    document.getElementById('demo').innerHTML= pi + "<br>" + person + "<br>" + answer;
}



// Show result
let number1, number2;
number1 = 221;
number2 = 331;

number1 += number2;
function showresult(){
    document.getElementById('sr').innerHTML=number1;
}




// Show/Hide text
function showtext(){
    document.getElementById('tsh').style.display="block";
}
function hidetext(){
    document.getElementById('tsh').style.display="none";
}



//Show Border
function showborder(){
    document.getElementById('sb').style.border="3px solid blue";
}


// Happy/Sed emoji
function happyemoji(){
    document.getElementById('img').src="./image/smile.png";
}
function sedemoji(){
    document.getElementById('img').src="./image/sed.png";
}


// Show Date
function showdate(){
    document.getElementById('sd').innerHTML=Date();
}



// text change
function textchange(){
    document.getElementById('t_h3').innerHTML="Hello Sufian";
}