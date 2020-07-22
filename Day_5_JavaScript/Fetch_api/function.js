
console.log("Fetch API");

async function todos(){
    const response=await fetch("https://jsonplaceholder.typicode.com/todos");
    const data=await response.json();
    for(i=0;i<data.length;i++){
    console.log(Math.random(data))}
}
todos();