//alert("Click me to proceed")
console.log("Hey! I am a javascript code");

var p= {name: "Vinaya", age:56, city:"Pune"};
var q= {name: "Anjali", age:45, city:"Nanded"};
var r= {name: "Kamika", age:21, city:"Nashik"}; 

console.log("Hello! everyone");
console.error("An error has occurred"); //to give explicit error
console.warn("friend something wrong there.....  warning will be there"); //to give warning

console.time('Time taken'); //to start the timer

//
console.log(p);
console.log(q);
console.log(r);
//above method will print these a,b,c in very fishnet type way.. which is hard to understand

//so to avoid that we'll do below method
console.log({p,q,r});

console.table({p,q,r}); //to print all the contents in table format

//customize msg by using css.. 
//%c is nothing but we are adding css formatting to the console.log
console.log("%c Custom Msg","color:blue");

console.timeEnd('Time taken')
//Time and time-end are both the functions used to display that how much time is taken for execution till this point timeEnd