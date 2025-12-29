
function myFunctionA(a) {
    console.log("hello " + a + "  ,How are you ?")
}

myFunctionA('Ashok');

let myfunc = (a) => {
    console.log("hello " + a);
    return a;
}
var x=myfunc("Sunil");
console.log(x);
console.log("Ashoka");

let a=['a','b','c','d'];
console.log(a);
let b=[...a,'e','f','g'];
console.log(b);
let z=Array(5);
z[0]='Ashoka';
z[1]='Vishal';
console.log(z[2]);

let x1=['An','Arrow'];
let y1=[...x1,'function'];
let z1=[...y1,'expression'];
let z2=[...z1,'is'];
console.log(z2);
var paragraph='';
for(var i=0;i<z2.length;i++)
{
    console.log(z2[i]);
    paragraph=paragraph+" "+z2[i];
}
console.log(paragraph)


