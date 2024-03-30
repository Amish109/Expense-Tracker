const Balance=document.querySelector("#Balance");
const Income=document.querySelector("#Income");
const Expense=document.querySelector("#Expense");
const History=document.querySelector("#History");
const input_text=document.querySelector("#input_text");
const input_number=document.querySelector("#input_number");

function Add_Transaction(){
    if(input_text.value!=""&&input_number.value!=""){
        if(input_number.value[0]=="-"){
            Balance.innerText=+Balance.innerText - +input_number.value.slice(1,)
            Expense.innerText=+Expense.innerText+ +input_number.value.slice(1,)
        }else{
            Balance.innerText=+Balance.innerText+ +input_number.value
            Income.innerText=+Income.innerText+ +input_number.value
            History.innerHTML+= `<button>${input_text.value}<br>${input_number.value}</button>`
        }
    }else{
        alert("Enter Appropriate values")
    }
    input_text.value=""
    input_number.value=""
}