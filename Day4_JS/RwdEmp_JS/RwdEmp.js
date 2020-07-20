let sale = Number(prompt("Enter a sale:-"));
let commission = null;
let commissionPercent = null;

if(sale > 0 && sale <=5000){
    commissionPercent = 2;
    commission = sale * (commissionPercent/100);
}
else if (sale >= 5001 && sale <=10000){
    commissionPercent = 5;
    commission = sale * (commissionPercent/100);
}
else if (sale >10000 && sale <= 20000){
    commissionPercent = 7;
    commission = sale * (commissionPercent/100);
}
else if (sale > 20000){
    commissionPercent = 10;
    commission = sale *(commissionPercent/100);
}
else {
    console.log("Invalid!!");
    alert("Invalid!!!!!!");
}


commission = commission.toFixed(3);
console.log('As per total sale: ${sales}, your ${commissionPercent}% Commission is ${commission}')
alert ('As per your total sale : ${sale}, your ${commitionPercent}% Commision is ${commision}')