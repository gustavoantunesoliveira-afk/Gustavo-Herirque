// ==========================================
// INTERAÇÃO 1: VARREDURA E CONTROLE DO TERMINAL VERDE
// ==========================================
const botao = document.getElementById('btnClick');
const mensagem = document.getElementById('mensagem');

botao.addEventListener('click', function() {
    if (mensagem.className === 'escondido') {
        mensagem.className = 'mostrado';
        botao.textContent = 'Interromper Analise';
        
        // Mantém a estética verde, apenas intensificando o brilho ao ativar
        botao.style.borderColor = '#39ff14';
        botao.style.color = '#ffffff';
        botao.style.backgroundColor = '#0f3d19';
        botao.style.boxShadow = '0 0 20px rgba(57, 255, 20, 0.6)';
    } else {
        mensagem.className = 'escondido';
        botao.textContent = 'Iniciar Varredura de Dados';
        
        // Retorna ao estado original transparente
        botao.style.borderColor = '#39ff14';
        botao.style.color = '#39ff14';
        botao.style.backgroundColor = 'transparent';
        botao.style.boxShadow = '0 0 10px rgba(57, 255, 20, 0.35)';
    }
});


// ==========================================
// INTERAÇÃO 2: EFEITO MÁQUINA DE ESCREVER (TYPEWRITER)
// ==========================================
const titulo = document.getElementById('efeito-digitar');
const textoCompleto = "O Futuro Sustentável é a Tecnologia da Terra";
let index = 0;

function digitarTexto() {
    if (index < textoCompleto.length) {
        titulo.textContent += textoCompleto.charAt(index);
        index++;
        setTimeout(digitarTexto, 65);
    }
}

window.addEventListener('DOMContentLoaded', digitarTexto);


// ==========================================
// INTERAÇÃO 3: REVELAÇÃO PROGRESSIVA NO SCROLL
// ==========================================
const secoes = document.querySelectorAll('.animar-scroll');

function checarScroll() {
    const gatilhoAtivacao = (window.innerHeight / 5) * 4.1;

    secoes.forEach(secao => {
        const topoSecao = secao.getBoundingClientRect().top;

        if (topoSecao < gatilhoAtivacao) {
            secao.classList.add('visivel');
        }
    });
}

window.addEventListener('scroll', checarScroll);
checarScroll();