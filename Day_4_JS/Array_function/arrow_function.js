function ask(question, yes, no){
    if (confirm(question)) yes()
    else no();
}



ask(
    "Do you Agree ?",
    () => {alert("You agreed")},
    () => {alert("You cancle the execution")},
);