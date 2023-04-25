const input = document.getElementById('inputdetexto');
const buttonDeCriptografar = document.getElementById('buttoncriptografar');
const buttonDeDesCriptografar = document.getElementById('buttondescriptografar');
//Variaveis de inputs

const areaDeResultado = document.getElementById('areadetextoarea');
//Onde se mostra o resultado delas

const sorteio = {
    "a" : "ai", //Requisito Projeto
    "b" : "kifq",
    "c" : "lbao",
    "d" : "lcwa",
    "e" : "enter",//Requisito Projeto
    "f" : "vlam",
    "g" : "bgdp",
    "h" : "mqoi",
    "i" : "imes", //Requisito Projeto
    "j" : "daeg",
    "k" : "vfvp",
    "l" : "qbnm",
    "m" : "laxq",
    "n" : "bxie",
    "o" : "ober",//Requisito Projeto
    "p" : "migq",
    "q" : "yabg",
    "r" : "njyo",
    "s" : "lmpo",
    "t" : "vhcq",
    "u" : "ufat",//Requisito Projeto
    "v" : "kadf",
    "w" : "wlqx",
    "x" : "feha",
    "y" : "jtav",
    "z" : "plav",
}
//Variavel de criptografia

let resultadoDeTexto;
//Variavel onde armazena o texto digitado



function mostrar(texto) { //Função mostrar o que está sendo criptografado ou descriptografado
    while (areaDeResultado.firstChild) {
        areaDeResultado.removeChild(areaDeResultado.firstChild);
    }
    const filho = document.createElement("p");
    filho.innerText = texto;
    areaDeResultado.appendChild(filho);
    console.log(areaDeResultado);
}

function verificar(func) { //Função de varificação 
    if (/^[a-z ]+$/g.test(resultadoDeTexto)){
        func();
    } else {
        alert("Apenas letras minúsculas e sem acento");
    }
}


function criptografar() {
    let textoCriptografado = "";
    for (let index = 0; index < resultadoDeTexto.length; index++) {
        if(" " != resultadoDeTexto[index]) {
            textoCriptografado += sorteio[resultadoDeTexto[index]];
        } else {
            textoCriptografado += " ";
        }
    }
    mostrar(textoCriptografado);
}

function descriptografar() {
    const arrayVar = resultadoDeTexto.split(" ");
    let varDescriptografia = "";

    for (let index = 0; index < arrayVar.length; index++) {
        let palavra = "";
        for (let i = 0; i < arrayVar[index].length; i+=4) {

            if (arrayVar[index][i]=="a") {
                palavra += "a";
                i -= 2;
            }
            else if (arrayVar[index][i]=="e") {
                palavra += "e";
                i ++;
            }
            else {
                const indexLetra = Object.values(sorteio).indexOf(arrayVar[index].substr(i, 4));
                palavra += Object.keys(sorteio)[indexLetra];
            }        
        }
        if (index > 0) {
            varDescriptografia += " ";
        }
        varDescriptografia += palavra;
    }
    mostrar(varDescriptografia);
}

input.addEventListener("change", (e) => {resultadoDeTexto = e.target.value});
buttonDeCriptografar.onclick = () => {verificar(criptografar)};
buttonDeDesCriptografar.onclick = () => {verificar(descriptografar)};