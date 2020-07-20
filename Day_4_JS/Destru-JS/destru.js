const student={
    name: "Helsinki",
    age:24,
    project:
    {
        diceGame:"Two player dice game using JS."
    }
}


//Destructure
let {name,age,project:{diceGame}}= student;
console.log(name);
console.log(age);
console.log(diceGame);