const caixaTexto = document.querySelector(".caixa__texto");
const caixaMensagem = document.querySelector(".caixa__mensagem");
const botaoCopiar = document.getElementById('botaoCopiar');

let matrizCodigo = [
    ["e" , "enter" ],
    ["i" , "imes"],
    ["a" , "ai"],
    ["o" , "ober"],
    ["u" , "ufat"]
];

caixaTexto.addEventListener('input', () => {
    if (caixaMensagem.value.trim() === '') {
        botaoCopiar.style.display = 'none';
    } else {
        botaoCopiar.style.display = 'block';
    }
});

botaoCopiar.addEventListener('click', () => {
    caixaMensagem.select();
    document.execCommand("copy");
    alert('Texto copiado!');
    caixaMensagem.value = ''; // Limpa o conteúdo da caixa de mensagem
    botaoCopiar.style.display = 'none'; // Oculta o botão de copiar
});

function validarCriptografia(string) {
    const regex = /[^a-z]/;
    if (regex.test(string)) {
        alert("Apenas letras minúsculas são permitidas!");
        return false;
    }
    return true;
}

function validarDescriptografia(string) {
    const regex = /[^a-z ]/;
    if (regex.test(string)) {
        alert("Apenas letras minúsculas são permitidas!");
        return false;
    }
    return true;
}

function botaoCriptografar() {
    const textoParaCriptografar = caixaTexto.value.trim(); 
    if (textoParaCriptografar === '') {
        alert("Por favor, insira um texto para criptografar.");
        return; 
    }
    if (!validarCriptografia(textoParaCriptografar)) {
        return; 
    }
    caixaTexto.value = ''; // Limpa o conteúdo da caixa de texto
    const textoCriptografado = criptografar(textoParaCriptografar);
    caixaMensagem.value = textoCriptografado;
    if (textoCriptografado !== "") {
        botaoCopiar.style.display = 'block';
    } else {
        botaoCopiar.style.display = 'none';
    }

    // Alterando as cores das bordas
    document.querySelectorAll(".caixa__texto, .caixa__mensagem, .botao__criptografar, .botao__descriptografar").forEach(element => {
        element.style.borderColor = "rgb(157, 39, 39)";
    });

    // Alterando a imagem do botão copiar
    botaoCopiar.querySelector('img').src = 'assets/copiariconeRed.png';

    // Alterando a imagem de fundo
    document.body.style.backgroundImage = 'url("assets/matrixRed.gif")';

    // Altera a cor da frase "Decodificador Matrix"
    document.querySelector(".cabecalho1").style.color = "rgb(157, 39, 39)";
}

function criptografar(stringEncriptada) {
    let textoCriptografado = stringEncriptada.toLowerCase();
    for (let i = 0; i < matrizCodigo.length; i++) {
        textoCriptografado = textoCriptografado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
    }
    return textoCriptografado;
}

function botaoDescriptografar() {
    const textoParaDescriptografar = caixaTexto.value.trim(); 
    if (textoParaDescriptografar === '') {
        alert("Por favor, insira um texto para descriptografar.");
        return; 
    }
    if (!validarDescriptografia(textoParaDescriptografar)) {
        return; 
    }
    caixaTexto.value = ''; // Limpa o conteúdo da caixa de texto
    const textoDescriptografado = descriptografar(textoParaDescriptografar);
    caixaMensagem.value = textoDescriptografado;
    if (textoDescriptografado !== "") {
        botaoCopiar.style.display = 'block';
    } else {
        botaoCopiar.style.display = 'none';
    }

    // Revertendo as cores das bordas
    document.querySelectorAll(".caixa__texto, .caixa__mensagem, .botao__criptografar, .botao__descriptografar").forEach(element => {
        element.style.borderColor = "#046e04";
    });

    // Revertendo a imagem do botão copiar
    botaoCopiar.querySelector('img').src = 'assets/copiariconeGreen.png';

    // Revertendo a imagem de fundo
    document.body.style.backgroundImage = 'url("/assets/matrixGreen.gif")';

    // Reverte a cor da frase "Decodificador Matrix"
    document.querySelector(".cabecalho1").style.color = "rgba(51, 255, 0, 0.602)";
}

function descriptografar(stringDescriptografar) {
    let textoDescriptografado = stringDescriptografar.toLowerCase();
    for (let i = 0; i < matrizCodigo.length; i++) {
        textoDescriptografado = textoDescriptografado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
    }
    return textoDescriptografado;
}
