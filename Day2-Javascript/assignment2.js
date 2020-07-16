//Sting Methods:

//1)search(): searche's given substring in the main string and returns the first index at which the given substring starts

let str="Hey! mate how's everything going?";
console.log(str.search("are")); 

//2)slice() : extracts a part of a string and returns the extracted part in a new string.
let str1="Hi, Ya all things getting better, like to know about you  ";
let slice1=str1.slice(2,7);
console.log(slice1);


//3)substring() : similar to slice but cannot accept negative indexes
let str2="Getting rowdy in JS with LetsUpgrade";
let substr=str2.substring(4,8);
console.log(substr);


//4)substr() : works same as slice. The only difference is that teh second parameter specifies the length of the extracted part
let str3="Hey! You can do better than this."
let substr1=str3.substr(3,9);
console.log(substr1);


//5)replace() : Replaces the string contents
let str4="I know JS";
let rep=str4.replace("Js","Python");
console.log(rep);


//6)trim() : Removes white spaces from both sides of the string
let str5="      Being LetsUpgrader         ";
console.log(str5.trim());





//Array Methods:

//1)toString() : Converts array contents into String
let arr=['chocolate','icecreame','cake','sweet'];
let arrstr=arr.toString();
console.log(arrstr);


//2)join() : Similar to the toString(). The only difference is that we can add separator by using join
let arr1=['one','two','three','four','five'];
arrjoin=arr1.join(" & ");
console.log(arrjoin);


//3)Replacing elements by using positions in array
let arr2=['Sun','Mon','Tue','Wed'];
arr2[3]="Thurs";
console.log(arr2);


//4)length : It is property for appending element into array
let arr3=['Mercedes','lamborghini','Ferrari'];
arr3[arr3.length]="Honda Pilot"
console.log(arr3)


//5)Deleting elements from array
let arr4=[101,102,103,104,105];
delete arr4[103];
console.log(arr4); //it will leave that deleted space as empty hole


//6)splice(): adding new elements to an array
//returns an array with deleted elements
let arr5=[9,8,7,6];
arr5.splice(2,3,0,"happpy","letsgo"); // first parameter defines position where elements to be added in array
//second parameter defines how many elements to be removed from array
//rest elements will be added in the array
console.log(arr5);


//7)slice() : Slices out elements from index of array into new array
let arr6=[1,2,3,"AB","BC","CA"];
let arrslice=arr6.slice(3);
console.log(arrslice);