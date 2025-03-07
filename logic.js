const heading=document.getElementById("heading");
const button=document.getElementById("button");
button.onclick=function(){
    heading.innerText="changed me";
}
const minus=document.getElementById("minus");
const plus=document.getElementById("plus");
const counter=document.getElementById("counter");

minus.onclick=function(){
    counter.innerText = parseInt(counter.innerText)-1;
}
plus.onclick=function(){
    counter.innerText = parseInt(counter.innerText)+ 1;
}

function calculate(){
    const loan=parseFloat(document.getElementById("loan").value);
    const interest=parseFloat(document.getElementById("interest").value);
    const tenure=parseFloat(document.getElementById("tenure").value);
    if(isNaN(loan) || isNaN(interest) || isNaN(tenure) || loan<=0 || interest<= 0 || tenure<=0){
        alert("enter a valid number");
        return;
    }

    const monthlyRate = (interest / 100) / 12;
    const totalMonths = tenure * 12;

    // EMI Calculation Formula
    const emi = (loan * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) / 
                (Math.pow(1 + monthlyRate, totalMonths) - 1);
    const res=document.getElementById("emi");
    res.innerText=`${emi.toFixed(2)}`;

}
