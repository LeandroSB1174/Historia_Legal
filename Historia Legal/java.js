const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Imagine que você está cercado por monstros genéricos medievais que todo anime isekai tem. Você tem duas opções de se defender. Qual delas você escolhe?",
        alternativas: [
            {
                texto: "Uma espada",
                afirmacao: "Você escolheu uma espada para se defender. E, então, começa a se questionar de como você pôde fazer uma escolha tão terrível."
            },
            {
                texto: "Escopeta remington 870 calibre 12 ação pump capacidade 4+1 cano 28 polegadas 7.5 libras aço parkerized",
                afirmacao: "Você escolheu uma arma de fogo para se defender, mas... Oh não! Estava sem balas."
            }
        ]
    },
    {
        enunciado: "Agora, com a arma escolhida, você tem duas opções do que fazer com ela. Qual você faria?",
        alternativas: [
            {
                texto: "Arremessar",
                afirmacao: "Você arremessa a sua arma para a multidão de monstros, mas tudo que acerta é uma casinha de cachorro, do qual pega fogo logo em seguida. Todos ficam espantados com tamanha crueldade."
            },
            {
                texto: "Desmontar",
                afirmacao: "Você começa a desmontar a sua arma e, surpreendentemente, todos os monstros ao redor ficam admirados da sua capacidade de destruir tudo que toca."
            }
        ]
    },
    {
        enunciado: "Você se vê sem opções. Tudo que lhe resta é realizar um ato covarde para sobreviver. Você escolhe:",
        alternativas: [
            {
                texto: "Fugir",
                afirmacao: "Você corre rápidamente até a saída. Uma barreira é formada, tapando o caminho entre a caverna e a saída, no entanto você lembra o que aprendeu na escola '𝖆 é igual á 𝖇 mais 𝖈 ao quadrado' e arremessa um carrinho de bebê na barreira, limpando o caminho. Próximo a saída, a caverna se estremesse e você é puxado em direção ao carrinho. Ele resguardava uma entidade demôniaca adormecida. Você morreu."
            },
            {
                texto: "Fazer um monstro de refém",
                afirmacao: "Você pega um goblin ao lado e o faz de refém, enquanto caminha lentamente até a saída. Você anda alguns passos até que, de repente, um forte odor começa a subir até as suas narinas, era o Suar Groblin, um efeito letal para seres humanos. Você cai no chão desacordado e perde a consciência. Você morreu."
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Seu desfecho é... Morte.";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();