//comentt
/*hello
dhii*/ 
//these very similar to python and pascal

var myName="beau"; //can be used all through the program
let myName="beau"; //only used in the scope of where it's declared
const pi=3.14; //variable never changes

myName=8;
var a;
var b=2; //use semi colons
a=7;
console.log(a);
a=a+1;
a++; //increments by 1
a=a-1;
a--;//decrements by 1
var decimal=5.7
var remainder;
remainder= 11 % 3; //gives remainder
var mystr="hi ashbdma\"ajhdbjeck\"jhebwbcjbv\"hbwejcjhbejwc" ;//if you use single quotes on either ends no need to use \
/*
\' single quote
\" double quote
\\ backslash
\n newline 
\r carriage return 
\t tab
\b backspace
\f form feed
*/

var outstr=" hello " + "world!" ;//concat
var outstrlength=0;
var firstletter="";
outstrlength=outstr.length;
firstletter=outstr[0];
var myArray= [[1,2,3,4],[1,2,3,4]];
var mydata=myArray[0][0];
var ourarray=['hi','go','away'];
ourarray.push('happy');
// ourarray us ['hi','go','away','happy']
var lastelement = ourarray.pop();//removes last element
var removefirstelement=ourarray.shift()//removes first element
ourarray.unshift('jeep')//adds start of array


function ourfunctionarg(a,b) {
    console.log(a-b)
}
ourfunctionarg(5,4)
var myglobal=10;

function func1() {
    oopsglobal=5; // since var isn't there it's a global variable

}
function func2() {
    var output=""; // since var it is local
    if (typeof myglobal !="undefined") {
        output += "myglobal: " + myglobal
    }
    if (typeof oopsglobal !="undefined") { 
        output +=  "oopsglobal " +oopsglobal
    }
}
var outerwear="t-shirt"

function myoutfit() {
    var outerwear="sweater"

    return outerwear
}
myoutfit(); //returns sweater as function is called
outerwear; // shows t-shirt as is global
function nextinlin(arr, item) {
    return arr.shift // returns and removes first item
}
var testArr=[1,2,3,3,4,5]
nextinlin(testArr,2)
function trueorfalse(isittrue) { //after if statement there is bracket

    if (isittrue) { // if it is equal to True then return yes
        return 'yes'
    }
    return 'no'
}


/*
3 === 3 checks if true doesnt change data type
3=='3' checks if true converts to number data type
*/

function testlogics(val) {
    if (val <=50 && val >=25) { // if val is less than or equal to 50 and greater than or equal to 25 we use && for and
        return "yes"
    }
    if (val<10 || val>20) { // the || means or
        return 'out'
    } else if (val>50) {
        return 'no'
    } else {
        return 'go'
    }
}

/* switch statements */

function caseinswitch(val) {
    var answer="";
    switch(val) { //means is val is 1
        case 1: 
            answer='alpha'
            break;        

        case 2:
            answer='beta'
            break;
        default: //this is like the else statement
            answer ='stuff';
            break;    

    }

    return answer
}

caseinswitch(1);


function sequentialsizes(val) {
    var answer='';
    switch(val) {
        case 1:
        case 2:
        case 3:
            answer='low' //if val is 1,2 or 3 then answer is low
            break;
        case 4:
        case 5:
        case 6:
            answer='high'
            breaks;    
        
    }
}

function isless(a,b) {
    return a < b // no need if statements as it checks if a less than b and if so returns true else false
}