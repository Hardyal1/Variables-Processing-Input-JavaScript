var inputBill = Number(prompt("What is your bill?"));
var taxAmount=inputBill*.07;
var taxtotalBill=inputBill+taxAmount;
var tipamount=taxtotalBill*.05;
var total=tipamount+taxtotalBill;
var element = document.body.querySelector(".box");

element.innerHTML=total;