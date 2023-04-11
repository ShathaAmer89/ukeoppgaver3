function skriveUt(){
    let navn=document.getElementById("inn").value;
    let alder=document.getElementById("number").value;
    let ut=document.getElementById("out");
    let alderNummer=Number(alder);
    if (isNaN(alderNummer) || alderNummer<1 ){
        alert("Det er ikke Number");
    }
    else {
        ut.innerHTML="navn er " + navn + "alder er " + alderNummer;
    }

}