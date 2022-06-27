//comentt
/*hello
dhii*/ 
//these very similar to python and pascal

import { capitalizeString } from "./string_function";

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

/*

OBJECTS

*/ 
var ourdog = {
    "name":"camper",
    "legs": 4,
    "tails": 1,
    "friends": ["hi","hello"]
};

var namevalue= ourdog.name;
var tailvalue= ourdog.tails; // this is dot notation
ourdog.name="happy camper"; //now it is set to happy camper
ourdog.bark="bow-vow" //now ourdog has a new property
delete ourdog.bark // we deleted the property


var testobj = {
    "an entree":"hamburger",
    "my side": "veggies",
    "the drink": "water"
};

var entreevalue= testobj["an entree"];
var sidevalue =testobj["my side"]; // this is brackets only use when properties like 'an entree' since there's a space
testobj["dessert"]="ice-cream" // add property using bracket

var numobj = {
    12: "Namath",
    14: "Montana",
    16: "Unitas"
};

var playernum= 16;
var player= numobj[playernum] // shows player name in player variable

function phoneticlookup(val) {
    var result=""

    var lookup = {
        "alpha":"Adams",
        "bravo":"Boston",
        "charlie":"Chicago",
        "delta":"Denver",
        "echo":"Easy"

    }
    result= lookup[val];
    return result
}

phoneticlookup("charlie") // this will return "Chicago"


var myobj = {
    gift:"pony",
    pet:"kitten",
    bed:"sleigh"
}


function checkobj(checkprop) {  //to see if an object has a certain property
    
    if (myobj.hasOwnProperty(checkprop)) { // remember hasOwnProperty
        return myobj[checkprop]
    } else {
        return "not found"
    }

}

checkobj("hello")// this returns not found

var mymusic = [ //different objects in an object known as nested objects 
    {
        "artist":"billy",
        "title":"piano",
        "gold":"true",
        "formats":[
            "cd",
            "8t",
            "lp"
        ]
    },

    {
        "artist":"hery",
        "title":"true t you",
        "gold":"true",
        "formats":[
            "cd",
            "8t",
            "lp"
        ]
    }
];




var secondtree=mymusic[1].formats[0] //returns cd

var mystorage ={
    "car" : {
        "inside":{
            "glove-box":"maps",
            "passenger-seat":"jack"
        },
        "outside":{
            "trunk":"jack",
            "formats":[
                "cd",
                "8t",
                "lp"
            ]
        
        }
    },

    "truck" : {
        "inside":{
            "glove-box":"maps",
            "passenger-seat":"jack"
        },
        "outside":{
            "trunk":"jack",
            "formats":[
                "cd",
                "8t",
                "lp"
            ]
        
        }
    }
};

var gloveboxcontents= mystorage.car.inside["glove-box"]; //gives contents of glove box
var mystoragecopy= JSON.parse(JSON.stringify(mystorage)) //creates a copy of mystorage

function mystorageupdate(name,inorout,value) {
    if (value==="") {
        delete mystorage[name][inorout];

    } else if (inorout=="outside") {
        mystorage[name][inorout]=mystorage[name][inorout] || ""; // if mystorage[name][inorout] exists then set it to itself else leave it empty

    }
}

/* 

LOOPS

*/


var myArray =[];
var i=0;

 while (i<5) {
    myArray.push(i)
    i=i+1
 }

var ourarray =[];
for (var i=0; i<5; i=i+1) { // here it initialises i to 0 and for each loop checks if i < 5 if so i is incremented until i>=5
    ourarray.push(i);
}

var owearray =[];
for (var i=10; i>0; i=i-1) { // here it initialises i to 10 and for each loop checks if i > 5 if so i is decrmented until i =<0
    owearray.push(i);
}

var ourarr=[1,2,3,4,5];
var outotal=0;
for (var i=0; i< ourarr.length; i++) {
    outotal=outotal+ ourarr[i]    
} 

// USING MULTI DIMENSIONAL ARRAYS

function multiplyall(arr) {
    var product =1;
    for (var i=0; i< arr.length; i++) {
        for (var j=0; j<arr[i].length; j++) {
            product *=arr[i][j]
        }

    }



    return product
}

var product = multiplyall([[1,2],[2,3],[5,6,7]]) // multiplies all numbers inside array


var myarr=[];
var i=10;


do {
    myarr.push(i)
    i++;

} while (i<5)   // the loop is run at least once


Math.random() // generates random decimal

var randnumbetween0and19 =Math.floor(Math.random()*20) //generates random number between 0 and 19

function ourRandomRange(ourMin, ourMax) {
    return Math.floor(Math.random() * (ourMax-ourMin+1)) + ourMin; // returns random number between ourmin and ourmax
}

parseInt('56')// returns 56 as a int

/* Tenary operators */

function checksign(num) {
    return num > 0 ? "positive" : num < 0 ? "negative" : "zero" // checks if num>0 or num <0 or else num=0 and returns accordingly
}

var name='b'
var name='a' // so in var a variable can be declared twice


let name='b'
let name='a' // in let you can only declare it once

const s=[1,2,3]
s[0]=4;
s[1]=5;
s[2]=10; // you can changed constant list only this way

const MATH_CONSTANTS = {
    pi: 3.14
}
Object.freeze(MATH_CONSTANTS); // now all properties in object are never changing


/* Arrow functions */

var myconcat = (arr1, arr2) => arr1.concat(arr2);

var myconcat = function(arr1,arr2) { // both of these functions do same thing the top one is the arrow function as the => means function
    return arr1.concat(arr2)
}


realNUmberArray=[4,6,7,9,10,12,15]

const squareList= (arr) => {
    const squaredIntegers= arr.filter(num =>  Number.isInteger(num) && num>0).map(x =>x*x); //we have an arrow function in an arrow function, map takes a function as an arg so it checks if num is an integer and greater than 0 if so x*x
    return squaredIntegers;
};

const squaredIntegers=squareList(realNUmberArray)

const increment= (function () {
    return function increment(number, value=1) {  //default parameter value is 1 if no value is passed
        return number+value
    }
})();

increment(5,2);
increment(5);

const sum= (function(){
    return function sum(x,y,z) {
        const args=[x,y,z];
        return args.reduce((a,b)=>a+b,0);
    };    

})();

sum(1,2,3)

const sum= (function(){
    return function sum(...args) {
        return args.reduce((a,b)=>a+b,0);
    };    

})();

sum(1,2,3,4) //this ...args is the rest operator and can take in any number of arguments

const arr1 =['JAN','FEB','MAR','APR','MAY']
let arr2;
(function(){
    arr2=[...arr1];
    arr1[0]='potato'; //array 2 will have potatoe in it as arr2 is equal to arr1 but when we use [...arr1]=arr2, arr2 has just a copy of its contents
})();

var voxel={
    x:3.6,
    y:7.4,
    z:6.54
}

var x=voxel.x;// x=3.6
var y=voxel.y;//y=7.4
var z=voxel.z;//z=6.54

const { x:a, y : b, z : c }=voxel; //a=3.6, b=7.4, z=6.54

const local_forecast={
    today: {min:72, max:83},
    tomorrow : {min:73.3, max: 84.6}
}

function getmaxoftomorrow(forecast){
    const {tomorrow:{max:maxoftomorrow}}=forecast; // assigns value max of tomorrow 84.6 to maxoftomorrow
    return maxoftomorrow;
}
getmaxoftomorrow(local_forecast)

const [z,x,,y]=[1,2,3,4,5,8,6,7] // it goes in order so z is 1, x is 2 but as there is two commas, y is 4 since 3 is skipped


let a =4;
let b=5;

[a,b]=[b,a] // so now a is 5, b is 4



const source=[1,2,3,4,5,6,7];

function removeFirstTwo(list) {
    const  [ , , ...arr]=list; // as first two elements are blank, arr will contain [3,4,5,6,7]
    return arr
}

removeFirstTwo(source);



const stats={
    max:5,
    median:4,
    min: 1,
    mode:2,

}
const half= (function() {
    return function half(stats){
        return (stats.max + stats.min) / 2.0;
    };
})();

half(stats)

const half= (function() {
    return function half({max, min}){  // both functions are same so instead of passing whole of stats you can destructure to pass just max and min
        return (max + min) / 2.0;
    };
})();

half(stats)


const person = {
    name: "ran ru",
    age: 56,
};

const greeting = `hello, my name is ${person.name}!
I am ${person.age} years old`  // we use ` to shows messages like print in python but for varible names thats the $


const result = {
    success: ['max-length','no-amd','prefer-arrow-functions'],
    failure: ['no-var','var-on-top','linebreak'],
    skipped: ['id-blacklist','no-dup-keys']
};

function makelist(arr) {
    const resultDisplayArray =[];
    for (var i=0; i<arr.length, i++) {
        resultDisplayArray.push(`<li class="text-warning">${arr[i]}</liv>`)
    }

    return resultDisplayArray;
}

const resultDisplayArray = makelist(result.failure)// displays <li class="text-warning">no-var</liv> , <li class="text-warning">var-on-top</liv> , <li class="text-warning">linebreak</liv>


const createPerson = (name, age, gender) => {
    return {
        name:name,
        age:age,
        gender:gender
    }
};

createPerson('ran rn',56,'male');

const createPerson = (name, age, gender) => ({ name, age, gender}); // these functions do same thing creates an object of person from name, age and gender

createPerson('ran rn',56,'male');


/* FUNCTIONS IN OBJECTS */

const bicycle = {
    gear:2,
    setGear: function(newGear) {
        'use strict';
        this.gear=newGear;
    }

};

bicycle.setGear(3);

const bicycle = {
    gear:2,
    setGear(newGear) {
        'use strict';
        this.gear=newGear; //these functions are same see function and : are gone
    }

};

bicycle.setGear(3);



/* CREATING CLASS OBJECTS */


var SpaceShuttle = function(targetPlanet) {
    this.targetPlanet=targetPlanet;
}
var zeus = new SpaceShuttle('Jupiter') // so zeus.targetPlanet is Jupiter, this is the older way

class SpaceShuttle {
    constructor(targetPlanet) {

    this.targetPlanet=targetPlanet; // this is the new way
    }
}
var zeus = new SpaceShuttle('Jupiter')  

function makeClass() {
    class Vegetable {
        constructor(name) {
            this.name = name;
        }
    }

    return Vegetable;
}

const Vegetable=makeClass();
const carrot= new Vegetable('carrot') // these will make a vegetable class with name as carrot so carrot.name outputs carrot


/* GET AND SET IN CLASSES */

class Book {
    constructor(author) {
        this._author=author;
    }

    get writer(){
        return this._author; //._ means private variable

    }

    set writer(updatedAuthor) {
        this.author=updatedAuthor;
    }
}

function makeClass() {

    class Thermostat {
        constructor(temp){
            this._temp = 5/9 * (temp-32); //convert farenheit to celsius
        }
        get temperature(){
            return this._temp;
        }
        set temperature(updatedTemperature){
            this._temp=updatedTemperature;

        }
    }
    return Thermostat
}

// example:

const Thermostat =makeClass();// going to return the Thermostat object
const thermos =new Thermostat(76); // here create the new class thermos with the the temperature
let temp =thermos.temperature; // here you get the temperature
thermos.temperature =26; // here you set the temperature
temp = thermos.temperature;



/* 

IMPORT AND EXPORT CODE FROM OTHER FILES

*/

import { capitalizeString } from "./string_function";

const cap =capitalizeString('hello!')

import * as capitalizeStrings from "./string_function"; // how you can import everything and capitalizeStrings can be anything, any object name you create 

/*

USE BELOW AS FALLBACK IMPORT OR IF YOU ONLY WANT TO IMPORT ONE THING FROM A FILE

*/

import subtract from "./string_function" // we don't use {} for default imports

subtract(7,6)
