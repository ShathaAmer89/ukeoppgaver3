function  skriv(){
    let navn=document.getElementById("inn").value;
   let alder=document.getElementById("inn1").value;
    let tel=document.getElementById("inn2").value;
    let ut=document.getElementById("out").innerHTML;
    let Array=[];
    ut += <table>
        <tr> <th>Navn</th><th>Adresse</th><th>Telefon</th></tr>;
        for(let p of Array ){
        ut += <tr><td>p.navn</td><td>p.alder</td><td>p.tel</td></tr>
    }

    </table>
}