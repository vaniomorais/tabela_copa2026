// ========== MAPA DE TERCEIROS COLOCADOS - COPA 2026 ==========
// Carrega as 495 COMBINACOES OFICIAIS DA FIFA do arquivo fifa_combinations.js
// As combinacoes FIFA sao convertidas para o formato esperado pelo sistema

// Mapeamento: Qual jogo cada 1a colocacao disputa
// Baseado nos dados de mata-mata
const MAPEAMENTO_1A_PARA_JOGO = {
    "1A": 79,   // 1o A joga no jogo 79
    "1B": 85,   // 1o B joga no jogo 85
    "1D": 81,   // 1o D joga no jogo 81
    "1E": 74,   // 1o E joga no jogo 74
    "1G": 82,   // 1o G joga no jogo 82
    "1I": 77,   // 1o I joga no jogo 77
    "1J": 86,   // 1o J joga no jogo 86
    "1K": 87,   // 1o K joga no jogo 87
    "1L": 80    // 1o L joga no jogo 80
};

// Slots de jogo que recebem 3o colocados
window.SLOTS_JOGOS = [74, 77, 79, 80, 81, 82, 86, 87];

// Inicia o mapa vazio
window.MAPA_TERCEIROS_FIFA = {};

// Funcao para converter combinacao FIFA para formato do sistema
function converterCombinacaoFIFA(combinacaoFIFA) {
    // Entrada: {"1A": "3E", "1B": "3J", ...}
    // Saida: {79: "E", 77: "J", ...}
    
    const mapeado = {};
    
    Object.entries(combinacaoFIFA).forEach(([grupo1A, grupo3]) => {
        // Extrai o numero do grupo (E de 3E, J de 3J)
        const letraGrupo3 = grupo3.substring(1);
        
        // Procura qual jogo essa 1a colocacao disputa
        const idJogo = MAPEAMENTO_1A_PARA_JOGO[grupo1A];
        
        // Se encontrou o jogo, mapeia
        if (idJogo) {
            mapeado[idJogo] = letraGrupo3;
        }
    });
    
    return mapeado;
}

// Funcao para inicializar o mapa com as 495 combinacoes oficiais
function inicializarMapaTerceiros() {
    // Tenta acessar a variavel FIFA_THIRD_PLACED_COMBINATIONS
    // Pode estar em escopo global ou em window
    let fifa = window.FIFA_THIRD_PLACED_COMBINATIONS;
    if (!fifa && typeof FIFA_THIRD_PLACED_COMBINATIONS !== 'undefined') {
        fifa = FIFA_THIRD_PLACED_COMBINATIONS;
    }
    
    if (!fifa) {
        console.warn("FIFA_THIRD_PLACED_COMBINATIONS nao encontrado");
        return false;
    }
    
    const combinacoes = fifa.combinations || [];
    
    combinacoes.forEach((combo) => {
        // Cria uma copia sem o campo 'option'
        const combinacaoSemOption = {};
        Object.entries(combo).forEach(([chave, valor]) => {
            if (chave !== "option") {
                combinacaoSemOption[chave] = valor;
            }
        });
        
        // Converte para o formato do sistema
        const mapeado = converterCombinacaoFIFA(combinacaoSemOption);
        
        // Extrai os grupos que se qualificam como 3o
        const gruposQualificados = [];
        Object.keys(MAPEAMENTO_1A_PARA_JOGO).forEach(grupo1A => {
            const grupo3 = combinacaoSemOption[grupo1A];
            if (grupo3) {
                const letraGrupo3 = grupo3.substring(1);
                gruposQualificados.push(letraGrupo3);
            }
        });
        
        // Cria chave com grupos ordenados alfabeticamente
        const chave = gruposQualificados.sort().join("");
        
        // Armazena no mapa
        window.MAPA_TERCEIROS_FIFA[chave] = mapeado;
    });
    
    console.log("Mapa de terceiros carregado com " + Object.keys(window.MAPA_TERCEIROS_FIFA).length + " combinacoes OFICIAIS da FIFA");
    return true;
}

// Executa inicializacao
if (typeof document === 'undefined') {
    // Node.js (para testes)
    if (typeof FIFA_THIRD_PLACED_COMBINATIONS !== 'undefined') {
        window = global;
        inicializarMapaTerceiros();
    }
} else {
    // Browser - tenta executar agora ou aguardar o carregamento do fifa_combinations.js
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', inicializarMapaTerceiros);
    } else {
        inicializarMapaTerceiros();
    }
    
    // Se nao conseguiu na primeira vez, tenta novamente apos um delay
    setTimeout(() => {
        if (Object.keys(window.MAPA_TERCEIROS_FIFA || {}).length === 0) {
            inicializarMapaTerceiros();
        }
    }, 500);
}
