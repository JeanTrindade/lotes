

function calcular(){

    var terreno = Number(document.getElementById("terreno").value);
    var largura = Number(document.getElementById("largura").value);
    var comprimento  = Number(document.getElementById("comprimento").value);
    var valor= 0;
    var saida = document.getElementById("saida");
        
    valor = terreno / (largura*comprimento);
    let area = largura*comprimento;
    if(area > terreno){
        saida.innerHTML = "Medidas invalidas seu lote não pode ser maior que o terreno."
    }else{
    saida.innerHTML = `Dadas as medidas o numero de lotes nesse terreno sera de : ${valor.toFixed(0)} lotes. <br>
    Cada lote contendo uma área de ${largura*comprimento} metros quadrados. `;
    }
    
       
    
}
function escuro(){
    let body = document.getElementById("fundo");
    let sd = document.getElementById("saida");
    let pg = document.getElementById("txt");
    let p = document.getElementsByTagName("p");
    for(let i=0; i < p.length; i++){
        p[i].style.color = "white";
    }
    largura.style.backgroundColor = "MediumTurquoise";
    terreno.style.backgroundColor = "MediumTurquoise";
    comprimento.style.backgroundColor = "MediumTurquoise";
    pg.style.color = "white";
    sd.style.color = "white";
    body.style.backgroundColor = "black";

   
}
function claro(){
    let body = document.getElementById("fundo");
    let sd = document.getElementById("saida");
    let pg = document.getElementById("txt");
    let p = document.getElementsByTagName("p");

    for(let i=0; i < p.length; i++){
        p[i].style.color = "black";
    }
    largura.style.backgroundColor = "white";
    comprimento.style.backgroundColor = "white";   
    terreno.style.backgroundColor = "white";
    pg.style.color = "black";
    body.style.backgroundColor = "white";
    sd.style.color = "black";
   
}

