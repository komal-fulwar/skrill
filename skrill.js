const amount = document.querySelectorAll('.amounts');
const from_val = document.getElementById('1');
const to_val = document.getElementById('to');
const mail_val =document.getElementById('mail')
const Fee_val = document.getElementById('fee');
const transction_val = document.getElementById('tran');
const date_val = document.getElementById('date');

function myFunction(val) {
  //alert("The input value has changed. The new value is: " + val);
  // paras.innerText = val;
  amount.forEach(value =>{
    
    value.innerText= val;
  })
};
function myFunction2(from){

  from_val.innerText=from;
};

function toFunction(to){
  to_val.innerText=`To ${to}`;
};

function mailFunction(mail){
  mail_val.innerText=mail;
};

function fee(fee){
Fee_val.innerText=fee;

};


function transction(tran){
transction_val.innerText=tran;
};

function date(date){
date_val.innerText=date;
};