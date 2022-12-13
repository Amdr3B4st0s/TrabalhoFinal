let assentos = 0;
let salaval = 1;
let nomefilme = "Selecione";
let nomesala = "Selecione";
let code = "CC2112"
let total;

code = code + Math.floor(Math.random() * 1000);

function funcao(str){
    a = '#' + str;
    const botao = document.querySelector(a);
    //alert(`Botão: ${str}, Id do botão: ${botao.id}, Estilo do botão: ${botao.style.backgroundColor}`);
    const colecao = document.getElementsByClassName("free");
    if(botao.style.backgroundColor == 'rgb(255, 68, 0)'){
        botao.style.backgroundColor = "rgb(0, 204, 61)";
        const aviso = document.querySelector('.single');
        aviso.id = 'warning';
        assentos--;
    }
    else{
        for(let x = 0; x < colecao.length; x++){
            //alert(`Botao atual: ${colecao[x].id}`);
            if(colecao[x].id == botao.id){
                const aviso = document.querySelector('.single');
                aviso.id = 'warning';
                botao.style.backgroundColor = "rgb(255, 68, 0)";
                assentos++;
                break;
            }
            else if(colecao[x].id < botao.id){
                const aviso = document.querySelector('.single');
                aviso.id = 'ativo';
                break;
            }
        }
    }
}

function filme(val){
    let name;
    switch(Number(val)){
        case 0:
            name = "Avatar: O Caminho da Água";
            code = code + "AV";
        break;
        case 1:
            name = "Pantera Negra: Wakanda Para Sempre";
            code = code + "PN";
        break;
        case 2:
            name = "Adão Negro";
            code = code + "AN";
        break;
        case 3:
            name = "Noite Infeliz";
            code = code + "NI";
        break;
        case 4:
            name = "Irmãos de Honra";
            code = code + "IH";
        break;
        case 5:
            name = "O Menu";
            code = code + "ME";
        break;
    }
    x(name);
}

function salas(val2){
    salaval = val2;
    switch(Number(val2)){
        case 0:
            sala = "Standard";
            code = code + "S";
        break;
        case 1:
            sala = "3D";
            code = code + "3D";
        break;
        case 2:
            sala = "IMAX";
            code = code + "I";
        break;
    }
    y(sala);
}

function y(A){
    nomesala = A;
}

function x(B){
    nomefilme = B;
}

setTimeout(totals, 0);
setInterval(totals, 500);
function totals(){
    total = ((Number(salaval)*4.49) + 8.99)*Number(assentos);
    const texto = document.querySelector('#confirma');
    texto.innerHTML = `${assentos} assentos<br><span>Filme:</span> ${nomefilme}<br><span>Sala:</span> ${nomesala}<br><span>Total:</span> R$${Number(total)}`;
}

function Reserva(){
    const aviso = document.querySelector('.single');
    aviso.id = "ativo2";
    aviso.innerHTML = `Assentos Reservados com Sucesso<br>Apresente o código ${code} na bilheteria para efetuar o pagamento`;
}