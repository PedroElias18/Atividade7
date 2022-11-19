function idade(){
    var ano, calculo;
    ano = document.getElementById("anoQueNasceu").value;
    calculo = 2022 - ano;
    document.getElementById("resultado").innerHTML = calculo;
 }