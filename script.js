const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você ganhou uma bola de futebol e decidiu começar a praticar. O que você faria primeiro?",
        alternativas: [
            {
                texto: "Começaria a treinar dribles e dominar a bola.",
                afirmacao: "Você começou a praticar bastante os dribles e melhorou seu controle de bola."
            },
            {
                texto: "Chamaria seus amigos para jogar uma partida.",
                afirmacao: "Você percebeu que jogar futebol com seus amigos é uma ótima maneira de se divertir."
            }
        ]
    },

    {
        enunciado: "Depois de alguns dias treinando futebol, você percebe que precisa melhorar uma habilidade. Qual escolheria?",
        alternativas: [
            {
                texto: "Treinaria chutes e finalizações.",
                afirmacao: "Você treinou bastante suas finalizações e começou a marcar muitos gols."
            },
            {
                texto: "Treinaria passes e jogadas em equipe.",
                afirmacao: "Você aprendeu que bons passes e trabalho em equipe são muito importantes no futebol."
            }
        ]
    },

    {
        enunciado: "Você foi convidado para participar de um campeonato com seus amigos. Qual posição escolheria?",
        alternativas: [
            {
                texto: "Atacante, para tentar marcar gols.",
                afirmacao: "Você escolheu ser atacante e começou a procurar oportunidades para marcar gols."
            },
            {
                texto: "Goleiro, para defender o time.",
                afirmacao: "Você descobriu que gosta de defender o gol e fazer grandes defesas."
            }
        ]
    },

    {
        enunciado: "Durante uma partida importante, seu time está perdendo por 1 a 0. O que você faria?",
        alternativas: [
            {
                texto: "Manteria a calma e ajudaria o time a buscar o empate.",
                afirmacao: "Você mostrou que sabe manter a calma e ajudar seus companheiros nos momentos difíceis."
            },
            {
                texto: "Tentaria uma jogada individual para mudar o resultado.",
                afirmacao: "Você teve coragem para assumir a responsabilidade e tentar uma jogada decisiva."
            }
        ]
    },

    {
        enunciado: "Seu time conseguiu empatar a partida. Faltam poucos minutos para o jogo terminar. O que você faria?",
        alternativas: [
            {
                texto: "Continuaria trabalhando em equipe para tentar marcar.",
                afirmacao: "Você percebeu que trabalhar em equipe pode criar boas oportunidades durante uma partida."
            },
            {
                texto: "Tentaria uma jogada rápida para surpreender o adversário.",
                afirmacao: "Você gosta de aproveitar oportunidades e surpreender os adversários durante o jogo."
            }
        ]
    },

    {
        enunciado: "Depois de vários treinos, você percebe que está evoluindo bastante no futebol. Qual seria seu próximo objetivo?",
        alternativas: [
            {
                texto: "Participar de campeonatos e tentar ganhar títulos.",
                afirmacao: "Você começou a participar de campeonatos e descobriu a emoção de competir e buscar títulos."
            },
            {
                texto: "Continuar jogando por diversão com meus amigos.",
                afirmacao: "Você percebeu que o mais importante é continuar se divertindo e compartilhando bons momentos com seus amigos."
            }
        ]
    }
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

function mostraAlternativas() {

    for (const alternativa of perguntaAtual.alternativas) {

        const botaoAlternativas = document.createElement("button");

        botaoAlternativas.textContent = alternativa.texto;

        botaoAlternativas.addEventListener("click", () => {
            respostaSelecionada(alternativa);
        });

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

    caixaPerguntas.textContent = "🏆 Seu caminho no futebol...";

    textoResultado.textContent = historiaFinal;

    caixaAlternativas.textContent = "";
}

mostraPergunta();
