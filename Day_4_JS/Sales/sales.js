let sale = Number(prompt("Enter a sale:-"));
let commission = null;

if(sale > 0 && sale <=5000){
    commission = sale * 0.02;
}
else if (sale >= 5001 && sale <=10000){

    commission = sale * 0.05;
}
else if (sale >10000 && sale <= 20000){
    commission = sale * 0.07;
}
else if (sale > 20000){
    commission = sale *0.1;
}
else {
    console.log("Invalid!!");
    alert("Invalid!!!!!!");
}


commission = commission.toFixed(3);
console.log('As per total sale: ${sale},Commission is ${commission}')
alert ('As per your total sale : ${sale},Commision is ${commision}')