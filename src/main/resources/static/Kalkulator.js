function sum(){
    let tall1=document.getElementById("tall1").value;
    let tall2=document.getElementById("tall2").value;
  let  number1=parseFloat(tall1);
  let number2=parseFloat(tall2);
  if(isNaN(number1)|| isNaN(number2)){
      alert("skriv inn number");
  }else{
      let sum=document.getElementById("sum").innerHTML= (number1 + number2).toString();
  }

}

function minus(){
    let tall1=document.getElementById("tall1").value;
    let tall2=document.getElementById("tall2").value;
    let  number1=Number(tall1);
    let number2=Number(tall2);
    if(isNaN(number1)|| isNaN(number2) || (number1<number2) ){
        alert("skriv inn number");
    }else{
        let minus=document.getElementById("minus").innerHTML= (number1 - number2).toString();
    }

}