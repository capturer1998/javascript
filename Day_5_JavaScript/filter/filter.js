let n=Number(prompt("Enter Positive numbers:"));
let arr=[];

for (i=0;i<n;i++){
    arr.push(i);
}

let odd=arr.filter(items=>items%2!=0);
let oddCubes = odd.map(items=> items*items*items);

console.log("Odd number's array is = ",odd);
console.log("Cubes of odd number's are = ", oddCubes);