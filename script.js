// ================== ESTRUTURA DE GRUPOS ==================
// Dados dos 12 grupos da Copa 2026
let grupos = {
  A: {
    mx: { nome: "México", codigo: "mx", pontos: 0, vitorias: 0, empates: 0, derrotas: 0, saldo: 0, gm: 0, gs: 0 },
    za: { nome: "África do Sul", codigo: "za", pontos: 0, vitorias: 0, empates: 0, derrotas: 0, saldo: 0, gm: 0, gs: 0 },
    kr: { nome: "Coreia do Sul", codigo: "kr", pontos: 0, vitorias: 0, empates: 0, derrotas: 0, saldo: 0, gm: 0, gs: 0 },
    cz: { nome: "Tchéquia", codigo: "cz", pontos: 0, vitorias: 0, empates: 0, derrotas: 0, saldo: 0, gm: 0, gs: 0 }
  },
  B: {
    ca: { nome: "Canadá", codigo: "ca", pontos: 0, vitorias: 0, empates: 0, derrotas: 0, saldo: 0, gm: 0, gs: 0 },
    ba: { nome: "Bósnia e Herzegovina", codigo: "ba", pontos: 0, vitorias: 0, empates: 0, derrotas: 0, saldo: 0, gm: 0, gs: 0 },
    qa: { nome: "Catar", codigo: "qa", pontos: 0, vitorias: 0, empates: 0, derrotas: 0, saldo: 0, gm: 0, gs: 0 },
    ch: { nome: "Suíça", codigo: "ch", pontos: 0, vitorias: 0, empates: 0, derrotas: 0, saldo: 0, gm: 0, gs: 0 }
  },
  C: {
    br: { nome: "Brasil", codigo: "br", pontos: 0, vitorias: 0, empates: 0, derrotas: 0, saldo: 0, gm: 0, gs: 0 },
    ma: { nome: "Marrocos", codigo: "ma", pontos: 0, vitorias: 0, empates: 0, derrotas: 0, saldo: 0, gm: 0, gs: 0 },
    ht: { nome: "Haiti", codigo: "ht", pontos: 0, vitorias: 0, empates: 0, derrotas: 0, saldo: 0, gm: 0, gs: 0 },
    "gb-sct": { nome: "Escócia", codigo: "gb-sct", pontos: 0, vitorias: 0, empates: 0, derrotas: 0, saldo: 0, gm: 0, gs: 0 }
  },
  D: {
    us: { nome: "Estados Unidos", codigo: "us", pontos: 0, vitorias: 0, empates: 0, derrotas: 0, saldo: 0, gm: 0, gs: 0 },
    py: { nome: "Paraguai", codigo: "py", pontos: 0, vitorias: 0, empates: 0, derrotas: 0, saldo: 0, gm: 0, gs: 0 },
    au: { nome: "Austrália", codigo: "au", pontos: 0, vitorias: 0, empates: 0, derrotas: 0, saldo: 0, gm: 0, gs: 0 },
    tr: { nome: "Turquia", codigo: "tr", pontos: 0, vitorias: 0, empates: 0, derrotas: 0, saldo: 0, gm: 0, gs: 0 }
  },
  E: {
    de: { nome: "Alemanha", codigo: "de", pontos: 0, vitorias: 0, empates: 0, derrotas: 0, saldo: 0, gm: 0, gs: 0 },
    cw: { nome: "Curaçao", codigo: "cw", pontos: 0, vitorias: 0, empates: 0, derrotas: 0, saldo: 0, gm: 0, gs: 0 },
    ci: { nome: "Costa do Marfim", codigo: "ci", pontos: 0, vitorias: 0, empates: 0, derrotas: 0, saldo: 0, gm: 0, gs: 0 },
    ec: { nome: "Equador", codigo: "ec", pontos: 0, vitorias: 0, empates: 0, derrotas: 0, saldo: 0, gm: 0, gs: 0 }
  },
  F: {
    nl: { nome: "Holanda", codigo: "nl", pontos: 0, vitorias: 0, empates: 0, derrotas: 0, saldo: 0, gm: 0, gs: 0 },
    jp: { nome: "Japão", codigo: "jp", pontos: 0, vitorias: 0, empates: 0, derrotas: 0, saldo: 0, gm: 0, gs: 0 },
    se: { nome: "Suécia", codigo: "se", pontos: 0, vitorias: 0, empates: 0, derrotas: 0, saldo: 0, gm: 0, gs: 0 },
    tn: { nome: "Tunísia", codigo: "tn", pontos: 0, vitorias: 0, empates: 0, derrotas: 0, saldo: 0, gm: 0, gs: 0 }
  },
  G: {
    be: { nome: "Bélgica", codigo: "be", pontos: 0, vitorias: 0, empates: 0, derrotas: 0, saldo: 0, gm: 0, gs: 0 },
    eg: { nome: "Egito", codigo: "eg", pontos: 0, vitorias: 0, empates: 0, derrotas: 0, saldo: 0, gm: 0, gs: 0 },
    ir: { nome: "Irã", codigo: "ir", pontos: 0, vitorias: 0, empates: 0, derrotas: 0, saldo: 0, gm: 0, gs: 0 },
    nz: { nome: "Nova Zelândia", codigo: "nz", pontos: 0, vitorias: 0, empates: 0, derrotas: 0, saldo: 0, gm: 0, gs: 0 }
  },
  H: {
    es: { nome: "Espanha", codigo: "es", pontos: 0, vitorias: 0, empates: 0, derrotas: 0, saldo: 0, gm: 0, gs: 0 },
    cv: { nome: "Cabo Verde", codigo: "cv", pontos: 0, vitorias: 0, empates: 0, derrotas: 0, saldo: 0, gm: 0, gs: 0 },
    sa: { nome: "Arábia Saudita", codigo: "sa", pontos: 0, vitorias: 0, empates: 0, derrotas: 0, saldo: 0, gm: 0, gs: 0 },
    uy: { nome: "Uruguai", codigo: "uy", pontos: 0, vitorias: 0, empates: 0, derrotas: 0, saldo: 0, gm: 0, gs: 0 }
  },
  I: {
    fr: { nome: "França", codigo: "fr", pontos: 0, vitorias: 0, empates: 0, derrotas: 0, saldo: 0, gm: 0, gs: 0 },
    sn: { nome: "Senegal", codigo: "sn", pontos: 0, vitorias: 0, empates: 0, derrotas: 0, saldo: 0, gm: 0, gs: 0 },
    iq: { nome: "Iraque", codigo: "iq", pontos: 0, vitorias: 0, empates: 0, derrotas: 0, saldo: 0, gm: 0, gs: 0 },
    no: { nome: "Noruega", codigo: "no", pontos: 0, vitorias: 0, empates: 0, derrotas: 0, saldo: 0, gm: 0, gs: 0 }
  },
  J: {
    ar: { nome: "Argentina", codigo: "ar", pontos: 0, vitorias: 0, empates: 0, derrotas: 0, saldo: 0, gm: 0, gs: 0 },
    dz: { nome: "Argélia", codigo: "dz", pontos: 0, vitorias: 0, empates: 0, derrotas: 0, saldo: 0, gm: 0, gs: 0 },
    at: { nome: "Áustria", codigo: "at", pontos: 0, vitorias: 0, empates: 0, derrotas: 0, saldo: 0, gm: 0, gs: 0 },
    jo: { nome: "Jordânia", codigo: "jo", pontos: 0, vitorias: 0, empates: 0, derrotas: 0, saldo: 0, gm: 0, gs: 0 }
  },
  K: {
    pt: { nome: "Portugal", codigo: "pt", pontos: 0, vitorias: 0, empates: 0, derrotas: 0, saldo: 0, gm: 0, gs: 0 },
    cd: { nome: "RD do Congo", codigo: "cd", pontos: 0, vitorias: 0, empates: 0, derrotas: 0, saldo: 0, gm: 0, gs: 0 },
    uz: { nome: "Uzbequistão", codigo: "uz", pontos: 0, vitorias: 0, empates: 0, derrotas: 0, saldo: 0, gm: 0, gs: 0 },
    co: { nome: "Colômbia", codigo: "co", pontos: 0, vitorias: 0, empates: 0, derrotas: 0, saldo: 0, gm: 0, gs: 0 }
  },
  L: {
    "gb-eng": { nome: "Inglaterra", codigo: "gb-eng", pontos: 0, vitorias: 0, empates: 0, derrotas: 0, saldo: 0, gm: 0, gs: 0 },
    hr: { nome: "Croácia", codigo: "hr", pontos: 0, vitorias: 0, empates: 0, derrotas: 0, saldo: 0, gm: 0, gs: 0 },
    gh: { nome: "Gana", codigo: "gh", pontos: 0, vitorias: 0, empates: 0, derrotas: 0, saldo: 0, gm: 0, gs: 0 },
    pa: { nome: "Panamá", codigo: "pa", pontos: 0, vitorias: 0, empates: 0, derrotas: 0, saldo: 0, gm: 0, gs: 0 }
  }
};

// ================== JOGOS POR RODADA (HORÁRIO DE BRASÍLIA) ==================
let jogos = [
  // RODADA 1
  { rodada: 1, data: "2026-06-11", hora: "16:00", grupo: "A", time1: "mx", time2: "za", resultado: null },
  { rodada: 1, data: "2026-06-11", hora: "23:00", grupo: "A", time1: "kr", time2: "cz", resultado: null },
  { rodada: 1, data: "2026-06-12", hora: "16:00", grupo: "B", time1: "ca", time2: "ba", resultado: null },
  { rodada: 1, data: "2026-06-12", hora: "22:00", grupo: "D", time1: "us", time2: "py", resultado: null },
  { rodada: 1, data: "2026-06-13", hora: "16:00", grupo: "B", time1: "qa", time2: "ch", resultado: null },
  { rodada: 1, data: "2026-06-13", hora: "19:00", grupo: "C", time1: "br", time2: "ma", resultado: null },
  { rodada: 1, data: "2026-06-13", hora: "22:00", grupo: "C", time1: "ht", time2: "gb-sct", resultado: null },
  { rodada: 1, data: "2026-06-14", hora: "01:00", grupo: "D", time1: "au", time2: "tr", resultado: null },
  { rodada: 1, data: "2026-06-14", hora: "14:00", grupo: "E", time1: "de", time2: "cw", resultado: null },
  { rodada: 1, data: "2026-06-14", hora: "17:00", grupo: "F", time1: "nl", time2: "jp", resultado: null },
  { rodada: 1, data: "2026-06-14", hora: "20:00", grupo: "E", time1: "ci", time2: "ec", resultado: null },
  { rodada: 1, data: "2026-06-14", hora: "23:00", grupo: "F", time1: "se", time2: "tn", resultado: null },
  { rodada: 1, data: "2026-06-15", hora: "13:00", grupo: "H", time1: "es", time2: "cv", resultado: null },
  { rodada: 1, data: "2026-06-15", hora: "16:00", grupo: "G", time1: "be", time2: "eg", resultado: null },
  { rodada: 1, data: "2026-06-15", hora: "19:00", grupo: "H", time1: "sa", time2: "uy", resultado: null },
  { rodada: 1, data: "2026-06-15", hora: "22:00", grupo: "G", time1: "ir", time2: "nz", resultado: null },
  { rodada: 1, data: "2026-06-16", hora: "16:00", grupo: "I", time1: "fr", time2: "sn", resultado: null },
  { rodada: 1, data: "2026-06-16", hora: "19:00", grupo: "I", time1: "iq", time2: "no", resultado: null },
  { rodada: 1, data: "2026-06-16", hora: "22:00", grupo: "J", time1: "ar", time2: "dz", resultado: null },
  { rodada: 1, data: "2026-06-17", hora: "01:00", grupo: "J", time1: "at", time2: "jo", resultado: null },
  { rodada: 1, data: "2026-06-17", hora: "14:00", grupo: "K", time1: "pt", time2: "cd", resultado: null },
  { rodada: 1, data: "2026-06-17", hora: "17:00", grupo: "L", time1: "gb-eng", time2: "hr", resultado: null },
  { rodada: 1, data: "2026-06-17", hora: "20:00", grupo: "L", time1: "gh", time2: "pa", resultado: null },
  { rodada: 1, data: "2026-06-17", hora: "23:00", grupo: "K", time1: "uz", time2: "co", resultado: null },
  
  // RODADA 2
  { rodada: 2, data: "2026-06-18", hora: "13:00", grupo: "A", time1: "cz", time2: "za", resultado: null },
  { rodada: 2, data: "2026-06-18", hora: "16:00", grupo: "B", time1: "ch", time2: "ba", resultado: null },
  { rodada: 2, data: "2026-06-18", hora: "19:00", grupo: "B", time1: "ca", time2: "qa", resultado: null },
  { rodada: 2, data: "2026-06-18", hora: "22:00", grupo: "A", time1: "mx", time2: "kr", resultado: null },
  { rodada: 2, data: "2026-06-19", hora: "16:00", grupo: "D", time1: "us", time2: "au", resultado: null },
  { rodada: 2, data: "2026-06-19", hora: "19:00", grupo: "C", time1: "gb-sct", time2: "ma", resultado: null },
  { rodada: 2, data: "2026-06-19", hora: "22:00", grupo: "C", time1: "br", time2: "ht", resultado: null },
  { rodada: 2, data: "2026-06-20", hora: "00:00", grupo: "D", time1: "tr", time2: "py", resultado: null },
  { rodada: 2, data: "2026-06-20", hora: "14:00", grupo: "F", time1: "nl", time2: "se", resultado: null },
  { rodada: 2, data: "2026-06-20", hora: "17:00", grupo: "E", time1: "de", time2: "ci", resultado: null },
  { rodada: 2, data: "2026-06-20", hora: "21:00", grupo: "E", time1: "ec", time2: "cw", resultado: null },
  { rodada: 2, data: "2026-06-21", hora: "01:00", grupo: "F", time1: "tn", time2: "jp", resultado: null },
  { rodada: 2, data: "2026-06-21", hora: "13:00", grupo: "H", time1: "es", time2: "sa", resultado: null },
  { rodada: 2, data: "2026-06-21", hora: "16:00", grupo: "G", time1: "be", time2: "ir", resultado: null },
  { rodada: 2, data: "2026-06-21", hora: "19:00", grupo: "H", time1: "uy", time2: "cv", resultado: null },
  { rodada: 2, data: "2026-06-21", hora: "22:00", grupo: "G", time1: "nz", time2: "eg", resultado: null },
  { rodada: 2, data: "2026-06-22", hora: "14:00", grupo: "J", time1: "ar", time2: "at", resultado: null },
  { rodada: 2, data: "2026-06-22", hora: "18:00", grupo: "I", time1: "fr", time2: "iq", resultado: null },
  { rodada: 2, data: "2026-06-22", hora: "21:00", grupo: "I", time1: "no", time2: "sn", resultado: null },
  { rodada: 2, data: "2026-06-23", hora: "00:00", grupo: "J", time1: "jo", time2: "dz", resultado: null },
  { rodada: 2, data: "2026-06-23", hora: "14:00", grupo: "K", time1: "pt", time2: "uz", resultado: null },
  { rodada: 2, data: "2026-06-23", hora: "17:00", grupo: "L", time1: "gb-eng", time2: "gh", resultado: null },
  { rodada: 2, data: "2026-06-23", hora: "20:00", grupo: "L", time1: "pa", time2: "hr", resultado: null },
  { rodada: 2, data: "2026-06-23", hora: "23:00", grupo: "K", time1: "co", time2: "cd", resultado: null },
  
  // RODADA 3 (Com jogos simultâneos nos grupos)
  { rodada: 3, data: "2026-06-24", hora: "16:00", grupo: "B", time1: "ch", time2: "ca", resultado: null },
  { rodada: 3, data: "2026-06-24", hora: "16:00", grupo: "B", time1: "ba", time2: "qa", resultado: null },
  { rodada: 3, data: "2026-06-24", hora: "19:00", grupo: "C", time1: "gb-sct", time2: "br", resultado: null },
  { rodada: 3, data: "2026-06-24", hora: "19:00", grupo: "C", time1: "ma", time2: "ht", resultado: null },
  { rodada: 3, data: "2026-06-24", hora: "22:00", grupo: "A", time1: "cz", time2: "mx", resultado: null },
  { rodada: 3, data: "2026-06-24", hora: "22:00", grupo: "A", time1: "za", time2: "kr", resultado: null },
  { rodada: 3, data: "2026-06-25", hora: "17:00", grupo: "E", time1: "ec", time2: "de", resultado: null },
  { rodada: 3, data: "2026-06-25", hora: "17:00", grupo: "E", time1: "cw", time2: "ci", resultado: null },
  { rodada: 3, data: "2026-06-25", hora: "20:00", grupo: "F", time1: "tn", time2: "nl", resultado: null },
  { rodada: 3, data: "2026-06-25", hora: "20:00", grupo: "F", time1: "jp", time2: "se", resultado: null },
  { rodada: 3, data: "2026-06-25", hora: "23:00", grupo: "D", time1: "tr", time2: "us", resultado: null },
  { rodada: 3, data: "2026-06-25", hora: "23:00", grupo: "D", time1: "py", time2: "au", resultado: null },
  { rodada: 3, data: "2026-06-26", hora: "16:00", grupo: "I", time1: "no", time2: "fr", resultado: null },
  { rodada: 3, data: "2026-06-26", hora: "16:00", grupo: "I", time1: "sn", time2: "iq", resultado: null },
  { rodada: 3, data: "2026-06-26", hora: "21:00", grupo: "H", time1: "uy", time2: "es", resultado: null },
  { rodada: 3, data: "2026-06-26", hora: "21:00", grupo: "H", time1: "cv", time2: "sa", resultado: null },
  { rodada: 3, data: "2026-06-27", hora: "00:00", grupo: "G", time1: "nz", time2: "be", resultado: null },
  { rodada: 3, data: "2026-06-27", hora: "00:00", grupo: "G", time1: "eg", time2: "ir", resultado: null },
  { rodada: 3, data: "2026-06-27", hora: "18:00", grupo: "L", time1: "pa", time2: "gb-eng", resultado: null },
  { rodada: 3, data: "2026-06-27", hora: "18:00", grupo: "L", time1: "hr", time2: "gh", resultado: null },
  { rodada: 3, data: "2026-06-27", hora: "20:30", grupo: "K", time1: "co", time2: "pt", resultado: null },
  { rodada: 3, data: "2026-06-27", hora: "20:30", grupo: "K", time1: "cd", time2: "uz", resultado: null },
  { rodada: 3, data: "2026-06-27", hora: "23:00", grupo: "J", time1: "jo", time2: "ar", resultado: null },
  { rodada: 3, data: "2026-06-27", hora: "23:00", grupo: "J", time1: "dz", time2: "at", resultado: null }
];

// Variáveis globais
let rodadaAtual = 1;
let jogoEmEdicao = null;
let confeteCampeaoExibido = false;
let resultadosMataMata = {};
try {
    const salvo = localStorage.getItem('resultadosMataMata');
    if (salvo) {
        resultadosMataMata = JSON.parse(salvo);
    }
} catch (erro) {
    console.error("Erro ao ler o LocalStorage. Criando nova memória...", erro);
    resultadosMataMata = {};
}

// ================== FUNÇÕES DE TABELAS ==================
function gerarTabelas() {
  const container = document.getElementById("gruposContainer");
  container.innerHTML = "";

  Object.keys(grupos).forEach(grupoId => {
    const div = document.createElement("div");
    div.className = "grupo-wrapper";
    div.innerHTML = `
      <h3 class="grupo-titulo">Grupo ${grupoId}</h3>
      <table id="grupo${grupoId}" class="tabela-grupo">
        <thead>
          <tr>
            <th class="col-c">Pos</th>
            <th class="col-s">Seleção</th>
            <th class="col-p">Pts</th>
            <th class="col-j">J</th>
            <th class="col-v">V</th>
            <th class="col-e">E</th>
            <th class="col-d">D</th>
            <th class="col-gm">GM</th>
            <th class="col-gs">GS</th>
            <th class="col-sg">SG</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    `;
    container.appendChild(div);
    atualizarTabela(grupoId);
  });
}

function atualizarTabela(grupoId) {
  const corpo = document.querySelector(`#grupo${grupoId} tbody`);
  corpo.innerHTML = "";

  const ordenado = calcularRanking(grupoId);

  ordenado.forEach((pais, index) => {
    const linha = document.createElement("tr");
    const posicao = index + 1;
    let classeDestaque = "";
    
    if (posicao === 1 || posicao === 2) {
      classeDestaque = "classificado";
    } else if (posicao === 3) {
            if (todosGruposConcluidos() && verificarSeMelhorTerceiro(pais.codigo)) {
              classeDestaque = "classificado";
            } else {
              classeDestaque = "eliminado";
            }

    } else if (posicao === 4) {
      classeDestaque = "eliminado";
    }   
    linha.className = classeDestaque;
    const totalJogos = pais.vitorias + pais.empates + pais.derrotas;
    
    linha.innerHTML = `
      <td><strong>${posicao}º</strong></td>
      <td class="selecao-padrao">
        <img src="https://flagcdn.com/w40/${pais.codigo}.png" alt="${pais.nome}" onerror="this.src='https://via.placeholder.com/40x30?text=?'">
        <span>${pais.nome}</span>
      </td>
      <td class="pontos"><strong>${pais.pontos}</strong></td>
      <td>${totalJogos}</td>
      <td class="col-v">${pais.vitorias}</td>
      <td class="col-e">${pais.empates}</td>
      <td class="col-d">${pais.derrotas}</td>
      <td>${pais.gm}</td>
      <td class="col-gs">${pais.gs}</td>
      <td class="saldo">${pais.saldo > 0 ? '+' : ''}${pais.saldo}</td>
    `;
    corpo.appendChild(linha);
  });
}

function focarGrupo(grupoId) {
  const tabelaGrupo = document.getElementById(`grupo${grupoId}`);
  if (tabelaGrupo) {
    // Acessa o contêiner do grupo (grupo-wrapper) para incluir o título na rolagem
    const wrapper = tabelaGrupo.closest('.grupo-wrapper') || tabelaGrupo;
    wrapper.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

// ================== FUNÇÕES DE RODADAS E JOGOS ==================
function obterJogosDaRodada(rodada) {
  return jogos
    .filter(j => j.rodada === rodada)
    .sort((a, b) => {
      const dataA = new Date(`${a.data}T${a.hora}`);
      const dataB = new Date(`${b.data}T${b.hora}`);
      return dataA - dataB;
    });
}

function formatarData(dataStr) {
  const data = new Date(dataStr + "T00:00:00");
  return data.toLocaleDateString("pt-BR", { weekday: "short", day: "2-digit", month: "2-digit" });
}

function renderizarJogosDaRodada() {
  const jogosList = document.getElementById("jogosList");
  const jogosDaRodada = obterJogosDaRodada(rodadaAtual);

  const jogosComIndice = jogosDaRodada.map(jogo => ({
    ...jogo,
    jogoIndex: jogos.indexOf(jogo)
  })).sort((a, b) => {
    const dataA = new Date(`${a.data}T${a.hora}`);
    const dataB = new Date(`${b.data}T${b.hora}`);
    return dataA - dataB;
  });

  jogosList.innerHTML = "";

  jogosComIndice.forEach((jogoData) => {
    const jogo = jogoData;
    const time1 = grupos[jogo.grupo][jogo.time1];
    const time2 = grupos[jogo.grupo][jogo.time2];
    
    // Trava de segurança para evitar erro se houver falha na configuração
    if (!time1 || !time2) {
      console.warn(`Erro: A equipa não foi encontrada no Grupo ${jogo.grupo}. Verifique os códigos: ${jogo.time1} x ${jogo.time2}`);
      return; 
    }
    
    const divJogo = document.createElement("div");
    divJogo.className = `jogo-card ${jogo.resultado ? 'realizado' : ''}`;
    divJogo.id = `jogo-${jogo.jogoIndex}`;

    if (jogo.resultado) {
      divJogo.innerHTML = `
        <div class="jogo-resultado">
          <div class="grupo-badge" onclick="focarGrupo('${jogo.grupo}')" title="Ver tabela do Grupo ${jogo.grupo}">Grupo ${jogo.grupo}</div>
          <div class="jogo-data-hora"><strong>${formatarData(jogo.data)}</strong> ${jogo.hora}</div>
          <div class="placar-compacto">
            <div class="selecao-padrao">
              <img src="https://flagcdn.com/w40/${time1.codigo}.png" alt="${time1.nome}" title="${time1.nome}">
            </div>
            <div class="gols-mini">${jogo.resultado.gols1}x${jogo.resultado.gols2}</div>
            <div class="selecao-padrao">
              <img src="https://flagcdn.com/w40/${time2.codigo}.png" alt="${time2.nome}" title="${time2.nome}">
            </div>
          </div>
          <button class="btn-editar-mini" onclick="iniciarEdicao(${jogo.jogoIndex})" title="Editar">✏️</button>
        </div>
      `;
    } else {
      divJogo.innerHTML = `
        <div class="jogo-preenchimento-compacto">
          <div class="grupo-badge" onclick="focarGrupo('${jogo.grupo}')" title="Ver tabela do Grupo ${jogo.grupo}">Grupo ${jogo.grupo}</div>
          <div class="jogo-data-hora"><strong>${formatarData(jogo.data)}</strong> ${jogo.hora}</div>
          <div class="placar-compacto">
            <div class="selecao-padrao">
              <img src="https://flagcdn.com/w40/${time1.codigo}.png" alt="${time1.nome}" title="${time1.nome}">
            </div>
            <div class="inputs-gols-mini">
              <input type="number" min="0" value="" class="input-gol-mini gol1" placeholder="-">
              <span>x</span>
              <input type="number" min="0" value="" class="input-gol-mini gol2" placeholder="-">
            </div>
            <div class="selecao-padrao">
              <img src="https://flagcdn.com/w40/${time2.codigo}.png" alt="${time2.nome}" title="${time2.nome}">
            </div>
          </div>
          <button class="btn-confirmar-mini" onclick="confirmarResultado(${jogo.jogoIndex})" title="Confirmar">✓</button>
        </div>
      `;
    }

    jogosList.appendChild(divJogo);
  });

  document.getElementById("rodadaTitulo").textContent = `📅 Rodada ${rodadaAtual}`;
  document.getElementById("btnRodadaAnterior").disabled = rodadaAtual === 1;
  document.getElementById("btnRodadaProxima").disabled = rodadaAtual === 3;
}

function confirmarResultado(jogoIndex) {
  const jogoCard = document.getElementById(`jogo-${jogoIndex}`);
  const gol1 = parseInt(jogoCard.querySelector(".gol1").value) || 0;
  const gol2 = parseInt(jogoCard.querySelector(".gol2").value) || 0;

  const jogo = jogos[jogoIndex];
  if (!jogo) return;

  const time1 = grupos[jogo.grupo][jogo.time1];
  const time2 = grupos[jogo.grupo][jogo.time2];

  time1.gm += gol1;
  time1.gs += gol2;
  time1.saldo = time1.gm - time1.gs;
  
  time2.gm += gol2;
  time2.gs += gol1;
  time2.saldo = time2.gm - time2.gs;

  if (gol1 > gol2) {
    time1.vitorias++;
    time2.derrotas++;
    time1.pontos += 3;
  } else if (gol1 < gol2) {
    time2.vitorias++;
    time1.derrotas++;
    time2.pontos += 3;
  } else {
    time1.empates++;
    time2.empates++;
    time1.pontos++;
    time2.pontos++;
  }

  jogo.resultado = { gols1: gol1, gols2: gol2 };

  atualizarTodasTabelas();
  renderizarJogosDaRodada();
  salvarDados();
  mostrarNotificacao(`Resultado de ${time1.nome} x ${time2.nome} registrado!`, "sucesso");
}

function iniciarEdicao(jogoIndex) {
  const jogo = jogos[jogoIndex];
  if (!jogo || !jogo.resultado) return;

  jogoEmEdicao = { jogoIndex, jogo };

  const time1 = grupos[jogo.grupo][jogo.time1];
  const time2 = grupos[jogo.grupo][jogo.time2];
  
  const jogoCard = document.getElementById(`jogo-${jogoIndex}`);
  jogoCard.innerHTML = `
    <div class="jogo-preenchimento-compacto">
      <div class="grupo-badge" onclick="focarGrupo('${jogo.grupo}')" title="Ver tabela do Grupo ${jogo.grupo}">Grupo ${jogo.grupo}</div>
      <div class="jogo-data-hora"><strong>${formatarData(jogo.data)}</strong> ${jogo.hora}</div>
      <div class="placar-compacto">
        <div class="selecao-padrao">
          <img src="https://flagcdn.com/w40/${time1.codigo}.png" alt="${time1.nome}" title="${time1.nome}">
        </div>
        <div class="inputs-gols-mini">
          <input type="number" min="0" value="${jogo.resultado.gols1}" class="input-gol-mini gol1" placeholder="0">
          <span>x</span>
          <input type="number" min="0" value="${jogo.resultado.gols2}" class="input-gol-mini gol2" placeholder="0">
        </div>
        <div class="selecao-padrao">
          <img src="https://flagcdn.com/w40/${time2.codigo}.png" alt="${time2.nome}" title="${time2.nome}">
        </div>
      </div>
      <div class="btn-edicao-mini">
        <button class="btn-confirmar-mini" onclick="salvarEdicao(${jogoIndex})" title="Salvar">✓</button>
        <button class="btn-cancelar-mini" onclick="cancelarEdicao(${jogoIndex})" title="Cancelar">✕</button>
      </div>
    </div>
  `;
}

function salvarEdicao(jogoIndex) {
  const jogoCard = document.getElementById(`jogo-${jogoIndex}`);
  const novoGol1 = parseInt(jogoCard.querySelector(".gol1").value) || 0;
  const novoGol2 = parseInt(jogoCard.querySelector(".gol2").value) || 0;

  const jogo = jogos[jogoIndex];
  if (!jogo || !jogo.resultado) return;

  const time1 = grupos[jogo.grupo][jogo.time1];
  const time2 = grupos[jogo.grupo][jogo.time2];

  const gol1Antigo = jogo.resultado.gols1;
  const gol2Antigo = jogo.resultado.gols2;

  time1.gm -= gol1Antigo;
  time1.gs -= gol2Antigo;
  time2.gm -= gol2Antigo;
  time2.gs -= gol1Antigo;

  if (gol1Antigo > gol2Antigo) {
    time1.vitorias--;
    time2.derrotas--;
    time1.pontos -= 3;
  } else if (gol1Antigo < gol2Antigo) {
    time2.vitorias--;
    time1.derrotas--;
    time2.pontos -= 3;
  } else {
    time1.empates--;
    time2.empates--;
    time1.pontos--;
    time2.pontos--;
  }

  time1.gm += novoGol1;
  time1.gs += novoGol2;
  time1.saldo = time1.gm - time1.gs;
  
  time2.gm += novoGol2;
  time2.gs += novoGol1;
  time2.saldo = time2.gm - time2.gs;

  if (novoGol1 > novoGol2) {
    time1.vitorias++;
    time2.derrotas++;
    time1.pontos += 3;
  } else if (novoGol1 < novoGol2) {
    time2.vitorias++;
    time1.derrotas++;
    time2.pontos += 3;
  } else {
    time1.empates++;
    time2.empates++;
    time1.pontos++;
    time2.pontos++;
  }

  jogo.resultado = { gols1: novoGol1, gols2: novoGol2 };
  jogoEmEdicao = null;

  atualizarTodasTabelas();
  renderizarJogosDaRodada();
  salvarDados();
  mostrarNotificacao("Resultado atualizado com sucesso!", "sucesso");
}

function atualizarTodasTabelas() {
  Object.keys(grupos).forEach(grupoId => {
    atualizarTabela(grupoId);
  });
}

function cancelarEdicao(jogoIndex) {
  jogoEmEdicao = null;
  renderizarJogosDaRodada();
}

function avancarRodada() {
  rodadaAtual = Math.min(3, rodadaAtual + 1);
  renderizarJogosDaRodada();
}

function retrocederRodada() {
  rodadaAtual = Math.max(1, rodadaAtual - 1);
  renderizarJogosDaRodada();
}

function mostrarNotificacao(mensagem, tipo = "info") {
  const notif = document.createElement("div");
  notif.className = `notificacao notificacao-${tipo}`;
  notif.textContent = mensagem;
  document.body.appendChild(notif);
  
  setTimeout(() => {
    notif.classList.add("mostrar");
  }, 10);
  
  setTimeout(() => {
    notif.classList.remove("mostrar");
    setTimeout(() => notif.remove(), 300);
  }, 3000);
}

// ================== GUARDA LOCAL (LOCALSTORAGE) ==================
function todosGruposConcluidos() {
    return CONFIG_COPA_2026.GRUPOS.every(letra => grupoConcluido(letra));
}

function obterTop8Terceiros() {
    // FUNCAO: Classifica os 8 melhores 3o colocados de todos os grupos
    // Criterios de desempate: Pontos > Saldo de Gols > Gols Marcados
    // Retorna: Array com ate 8 terceiros, contendo { grupo: 'A', time: {...} }
    
    let terceiros = [];
    const letras = ['A','B','C','D','E','F','G','H','I','J','K','L'];
    
    for (let letra of letras) {
        if (!grupos[letra]) continue;
        
        let times = Object.values(grupos[letra]);
        if (times.length < 3) continue; // Trava de seguranca: ignora grupos incompletos
        
        times.sort((a, b) => {
            if (b.pontos !== a.pontos) return b.pontos - a.pontos;
            if (b.saldo !== a.saldo) return b.saldo - a.saldo;
            return b.gm - a.gm;
        });
        
        let terceiro = times[2];
        if (!terceiro) continue; // Garante que o terceiro colocado existe
        
        let partidasJogadas = (terceiro.vitorias || 0) + (terceiro.empates || 0) + (terceiro.derrotas || 0);
        
        if (partidasJogadas > 0) {
            terceiros.push({ grupo: letra, time: terceiro });
        }
    }

    // Ordena por Pontos > Saldo > Gols Marcados
    terceiros.sort((a, b) => {
        if (b.time.pontos !== a.time.pontos) return b.time.pontos - a.time.pontos;
        if (b.time.saldo !== a.time.saldo) return b.time.saldo - a.time.saldo;
        return b.time.gm - a.time.gm;
    });

    return terceiros.slice(0, 8);
}

function calcularMelhoresTerceiros() {
    // FUNCAO: Mapeia os 8 melhores 3o colocados para os slots de jogo conforme combinacoes FIFA
    // Usa MAPA_TERCEIROS_FIFA (495 combinacoes oficiais) para determinar qual terceiro vai para cada jogo
    // Retorna: { idJogo: timeObject, idJogo: timeObject, ... }

    const oitoMelhores = obterTop8Terceiros();

    // Cria chave para lookup no mapa FIFA
    // Exemplo: grupos A,C,D,E,F,H,I,J -> chave = "ACDEFHIJ"
    const chave = oitoMelhores
        .map(t => t.grupo)
        .sort()
        .join("");

    const combinacao = MAPA_TERCEIROS_FIFA[chave];

    if (!combinacao) {
        console.warn("[AVISO] Combinação FIFA não encontrada para:", chave);
        console.warn("Total de combinacoes disponiveis:", Object.keys(window.MAPA_TERCEIROS_FIFA || {}).length);
        return {};
    }

    // Log informativo (pode ser removido em producao)
    console.log("[INFO] Combinacao FIFA", chave, "mapeada para", Object.keys(combinacao).length, "jogos de terceiros");

    const resultado = {};

    // Para cada slot de jogo, encontra o terceiro que vai jogar ali
    Object.entries(combinacao).forEach(([jogoId, grupo]) => {
        const terceiro = oitoMelhores.find(t => t.grupo === grupo);

        if (terceiro) {
            resultado[jogoId] = terceiro.time;
        }
    });

    return resultado;
}

function obterInformacoesCombinacaoFIFA() {
    // FUNCAO AUXILIAR: Retorna informacoes sobre qual combinacao FIFA esta sendo usada
    // Util para debug e visualizacao do sistema
    
    if (!todosGruposConcluidos()) {
        return {
            status: "pendente",
            mensagem: "Aguardando conclusao de todos os grupos"
        };
    }
    
    const oitoMelhores = obterTop8Terceiros();
    const chaveCombinacao = oitoMelhores.map(t => t.grupo).sort().join("");
    const combinacao = window.MAPA_TERCEIROS_FIFA?.[chaveCombinacao];
    
    if (!combinacao) {
        return {
            status: "erro",
            chave: chaveCombinacao,
            mensagem: "Combinacao FIFA não encontrada",
            gruposCombinacao: oitoMelhores.map(t => t.grupo)
        };
    }
    
    return {
        status: "sucesso",
        chave: chaveCombinacao,
        totalCombinacoes: Object.keys(window.MAPA_TERCEIROS_FIFA || {}).length,
        terceiros: oitoMelhores.map(t => ({
            grupo: t.grupo,
            time: t.time.nome,
            pontos: t.time.pontos,
            saldo: t.time.saldo
        })),
        mapeamento: combinacao,
        mensagem: `Combinacao ${chaveCombinacao} de ${Object.keys(window.MAPA_TERCEIROS_FIFA || {}).length} disponiveis`
    };
}



let faseAtual = 0; // 0 = Grupos, 1 = 16 Avos
let nomesFases = [
  "Fase de Grupos", 
  "16 Avos de final", 
  "Oitavas de final", 
  "Quartas de final", 
  "Semifinal", 
  "Decisão do 3º lugar", 
  "Final"
];

function mudarFase(direcao) {
    faseAtual += direcao;
    
    // Bloqueia navegação fora do limite
    if (faseAtual < 0) faseAtual = 0;
    if (faseAtual > nomesFases.length - 1) faseAtual = nomesFases.length - 1;

    atualizarInterfaceFase();
}

function traduzirMarcador(textoMarcador, idJogo = null, mapaTerceiros = null) {
    // FUNCAO: Converte descricoes de times para objetos com nome e codigo
    // Exemplos:
    //   "1° A" -> {nome: "Brasil", codigo: "br"}
    //   "2° B" -> {nome: "Belgica", codigo: "be"}  
    //   "3° A,B,C,D,F" -> Usa mapaTerceiros para descobrir qual terceiro jogara neste slot
    
    const regexGrupo = /^(\d)°\s([A-L])$/;
    const matchGrupo = textoMarcador.match(regexGrupo);
    
    if (matchGrupo) {
        const posicao = parseInt(matchGrupo[1]); 
        const grupoLetra = matchGrupo[2]; 
        
        if (!grupos[grupoLetra]) return { nome: textoMarcador, codigo: "" };

        // Se é primeiro colocado, verifica se está garantido (mesmo sem grupo concluir)
        if (posicao === 1) {
            const primeirGarantido = primeiroGarantido(grupoLetra);
            if (primeirGarantido) {
                return { nome: primeirGarantido.nome, codigo: primeirGarantido.codigo };
            }
            // Se não está garantido, aguarda conclusão do grupo
            if (!grupoConcluido(grupoLetra)) {
                return { nome: textoMarcador, codigo: "" };
            }
        } else {
            // Para 2°, 3°, 4° precisa grupo concluído
            if (!grupoConcluido(grupoLetra)) {
                return { nome: textoMarcador, codigo: "" };
            }
        }

        let timesDoGrupo = Object.values(grupos[grupoLetra]);
        timesDoGrupo.sort((a, b) => {
            if (b.pontos !== a.pontos) return b.pontos - a.pontos; 
            if (b.saldo !== a.saldo) return b.saldo - a.saldo;     
            return b.gm - a.gm;                                    
        });
        
        const timeClassificado = timesDoGrupo[posicao - 1]; 
        if (timeClassificado) return { nome: timeClassificado.nome, codigo: timeClassificado.codigo };
        
        return { nome: textoMarcador, codigo: "" };
    }

    if (textoMarcador.startsWith("3°")) {
        // Tratamento de terceiros colocados
        if (!todosGruposConcluidos() || !mapaTerceiros) {
            return { nome: textoMarcador, codigo: "" };
        }
        if (idJogo && mapaTerceiros[idJogo]) {
            const time = mapaTerceiros[idJogo];
            return { nome: time.nome, codigo: time.codigo };
        }
        return { nome: textoMarcador, codigo: "" };
    }

    const regexVencedor = /^Venc\.\sJ(\d+)$/;
    const matchVencedor = textoMarcador.match(regexVencedor);
    if (matchVencedor) {
        const idJogoVenc = matchVencedor[1];
        if (resultadosMataMata && resultadosMataMata[idJogoVenc] && resultadosMataMata[idJogoVenc].vencedor) {
            const v = resultadosMataMata[idJogoVenc].vencedor;
            if (typeof v === 'string') return { nome: v, codigo: "" }; // Tratamento protetor para dados antigos do LocalStorage
            return { nome: v.nome || "", codigo: v.codigo || "" };
        }
        return { nome: textoMarcador, codigo: "" };
    }

    const regexPerdedor = /^Perd\.\sJ(\d+)$/;
    const matchPerdedor = textoMarcador.match(regexPerdedor);
    if (matchPerdedor) {
        const idJogoPerd = matchPerdedor[1];
        if (resultadosMataMata && resultadosMataMata[idJogoPerd] && resultadosMataMata[idJogoPerd].perdedor) {
            const p = resultadosMataMata[idJogoPerd].perdedor;
            if (typeof p === 'string') return { nome: p, codigo: "" }; // Tratamento protetor para dados antigos
            return { nome: p.nome || "", codigo: p.codigo || "" };
        }
        return { nome: textoMarcador, codigo: "" };
    }
    
    return { nome: textoMarcador, codigo: "" };
}

function grupoConcluido(grupoLetra) {
    // Verifica se o grupo existe no nosso cadastro
    if (!grupos[grupoLetra]) return false;

    let times = Object.values(grupos[grupoLetra]);
    for (let time of times) {
        let partidasJogadas = time.vitorias + time.empates + time.derrotas;
        // Se algum time DESSE GRUPO tem menos de 3 jogos, o grupo ainda não acabou
        if (partidasJogadas < 3) {
            return false; 
        }
    }
    // Se todos do grupo jogaram 3 partidas, este grupo específico está concluído!
    return true;
}

function primeiroGarantido(grupoLetra) {
    // FUNCAO: Verifica se o primeiro colocado já garantiu matematicamente a primeira posição
    // Lógica corrigida:
    //   1. Se 1º tem mais pontos que o máximo possível de QUALQUER outro time, está garantido
    //   2. Se algum outro time PODE empatar o atual score do 1º:
    //      - Verifica confronto direto: se 1º venceu esse time, está garantido
    //      - Se 1º não venceu (empatou ou perdeu), não está garantido
    // Retorna o objeto do time se garantido, null se não garantido
    
    if (!grupos[grupoLetra]) return null;

    let times = Object.values(grupos[grupoLetra]);
    
    // Ordena para pegar primeiro colocado
    times.sort((a, b) => {
        if (b.pontos !== a.pontos) return b.pontos - a.pontos;
        if (b.saldo !== a.saldo) return b.saldo - a.saldo;
        return b.gm - a.gm;
    });

    const primeiro = times[0];
    
    if (!primeiro) return null;

    // CRITÉRIO 1: Se o primeiro tem mais pontos que o máximo possível de todos os outros, está garantido
    let garantidoPorPontos = true;
    
    for (let i = 1; i < times.length; i++) {
        const time = times[i];
        const partidasJogadas = time.vitorias + time.empates + time.derrotas;
        const partidasRestantes = 3 - partidasJogadas;
        const maxPontosDoTime = time.pontos + (partidasRestantes * 3);
        
        // Se algum time pode ter mais pontos que o primeiro, não está garantido por pontos
        if (maxPontosDoTime > primeiro.pontos) {
            garantidoPorPontos = false;
            break;
        }
    }
    
    if (garantidoPorPontos) {
        return primeiro;
    }

    // CRITÉRIO 2: Verifica se algum OUTRO time consegue superar/empatar o líder
    // A pergunta é: "ALGUM time consegue ter MAIS pontos que o líder?"
    // Logo precisa que: maxPontosDoOutro > pontos_atuais_do_líder
    for (let i = 1; i < times.length; i++) {
        const concorrente = times[i];
        const partidasJogadas = concorrente.vitorias + concorrente.empates + concorrente.derrotas;
        const partidasRestantes = 3 - partidasJogadas;
        const maxPontosConcorrente = concorrente.pontos + (partidasRestantes * 3);

        // Se este time PODE ter MAIS pontos que o líder, não está garantido
        if (maxPontosConcorrente > primeiro.pontos) {
            // Ainda existe chance de alguém superar o líder
            return null;
        }
        
        // Se consegue EXATAMENTE empatar o score atual do primeiro
        if (maxPontosConcorrente === primeiro.pontos) {
            // Procura o confronto direto entre eles
            const confrontoDireto = jogos.find(j => 
                j.grupo === grupoLetra && 
                j.resultado &&
                ((j.time1 === primeiro.codigo && j.time2 === concorrente.codigo) ||
                 (j.time1 === concorrente.codigo && j.time2 === primeiro.codigo))
            );

            // Se ainda não jogaram e podem empatar, o primeiro não está garantido
            if (!confrontoDireto) {
                return null;
            }

            // Se já jogaram, verifica quem venceu
            const primeiro_eh_time1 = confrontoDireto.time1 === primeiro.codigo;
            const gols_primeiro = primeiro_eh_time1 ? confrontoDireto.resultado.gols1 : confrontoDireto.resultado.gols2;
            const gols_concorrente = primeiro_eh_time1 ? confrontoDireto.resultado.gols2 : confrontoDireto.resultado.gols1;

            // Se o primeiro NÃO venceu o confronto direto, não está garantido
            if (gols_primeiro <= gols_concorrente) {
                return null; // Pode empatar nos pontos e vencer no confronto direto
            }
        }
    }

    // Se passou por todas as verificações, o primeiro está garantido
    return primeiro;
}

function timeEstaGarantido(timeNome, grupoLetra) {
    // FUNCAO: Verifica se um time específico está garantido na primeira posição
    // Retorna true se o time está garantido, false caso contrário
    
    const primeiro = primeiroGarantido(grupoLetra);
    return primeiro && primeiro.nome === timeNome;
}

// Função para renderizar os confrontos de mata-mata dependendo da fase atual
function renderizarMataMata() {
    // FUNCAO: Renderiza os confrontos de mata-mata com os terceiros colocados corretamente mapeados
    // Usa as 495 combinacoes oficiais FIFA para determinar qual terceiro vai para cada jogo
    // Processo:
    //   1. Obtém os 8 melhores terceiros colocados
    //   2. Encontra a combinacao FIFA correspondente (lookup de 495 combinacoes)
    //   3. Mapeia terceiros para slots de jogo (74, 77, 79, 80, 81, 82, 86, 87)
    //   4. Renderiza confrontos com times reais via funcao traduzirMarcador()
    
    const container = document.getElementById("chaveamentoContainer");
    
    if (container) {
        container.innerHTML = ""; 
    }

    if (faseAtual === 0) return;

    const nomeFaseAtual = nomesFases[faseAtual];
    
    const todosConfrontos = {
        "16 Avos de final": [
            { id: 73, data: "28/06/2026", hora: "16:00", t1: "2° A", t2: "2° B" },
            { id: 74, data: "29/06/2026", hora: "17:30", t1: "1° E", t2: "3° A,B,C,D,F" },
            { id: 75, data: "29/06/2026", hora: "22:00", t1: "1° F", t2: "2° C" },
            { id: 76, data: "29/06/2026", hora: "14:00", t1: "1° C", t2: "2° F" },
            { id: 77, data: "30/06/2026", hora: "18:00", t1: "1° I", t2: "3° C,D,F,G,H" },
            { id: 78, data: "30/06/2026", hora: "14:00", t1: "2° E", t2: "2° I" },
            { id: 79, data: "30/06/2026", hora: "22:00", t1: "1° A", t2: "3° C,E,F,H,I" },
            { id: 80, data: "30/06/2026", hora: "13:00", t1: "1° L", t2: "3° E,H,I,J,K" },
            { id: 81, data: "01/07/2026", hora: "21:00", t1: "1° D", t2: "3° B,E,F,I,J" },
            { id: 82, data: "01/07/2026", hora: "17:00", t1: "1° G", t2: "3° A,E,H,I,J" },
            { id: 83, data: "02/07/2026", hora: "20:00", t1: "2° K", t2: "2° L" },
            { id: 84, data: "02/07/2026", hora: "16:00", t1: "1° H", t2: "2° J" },
            { id: 85, data: "03/07/2026", hora: "00:00", t1: "1° B", t2: "3° E,F,G,I,J" },
            { id: 86, data: "07/07/2026", hora: "17:00", t1: "1° J", t2: "2° H" },
            { id: 87, data: "07/07/2026", hora: "17:00", t1: "1° K", t2: "3° D,E,I,J,L" },
            { id: 88, data: "03/07/2026", hora: "15:00", t1: "2° D", t2: "2° G" }
        ],
        "Oitavas de final": [
            { id: 89, data: "04/07/2026", hora: "18:00", t1: "Venc. J74", t2: "Venc. J77" },
            { id: 90, data: "04/07/2026", hora: "14:00", t1: "Venc. J73", t2: "Venc. J75" },
            { id: 91, data: "05/07/2026", hora: "17:00", t1: "Venc. J76", t2: "Venc. J78" },
            { id: 92, data: "05/07/2026", hora: "21:00", t1: "Venc. J79", t2: "Venc. J80" },
            { id: 93, data: "06/07/2026", hora: "16:00", t1: "Venc. J83", t2: "Venc. J84" },
            { id: 94, data: "06/07/2026", hora: "21:00", t1: "Venc. J81", t2: "Venc. J82" },
            { id: 95, data: "07/07/2026", hora: "13:00", t1: "Venc. J86", t2: "Venc. J88" },
            { id: 96, data: "07/07/2026", hora: "17:00", t1: "Venc. J85", t2: "Venc. J87" }
        ],
        "Quartas de final": [
            { id: 97, data: "09/07/2026", hora: "17:00", t1: "Venc. J89", t2: "Venc. J90" },
            { id: 98, data: "10/07/2026", hora: "16:00", t1: "Venc. J93", t2: "Venc. J94" },
            { id: 99, data: "11/07/2026", hora: "18:00", t1: "Venc. J91", t2: "Venc. J92" },
            { id: 100, data: "11/07/2026", hora: "22:00", t1: "Venc. J95", t2: "Venc. J96" }
        ],
        "Semifinal": [
            { id: 101, data: "14/07/2026", hora: "16:00", t1: "Venc. J97", t2: "Venc. J98" },
            { id: 102, data: "15/07/2026", hora: "16:00", t1: "Venc. J99", t2: "Venc. J100" }
        ],
        "Decisão do 3º lugar": [
            { id: 103, data: "18/07/2026", hora: "18:00", t1: "Perd. J101", t2: "Perd. J102" }
        ],
        "Final": [
            { id: 104, data: "19/07/2026", hora: "16:00", t1: "Venc. J101", t2: "Venc. J102" }
        ]
    };

    const confrontosDaFase = todosConfrontos[nomeFaseAtual] || [];

    let mapaTerceiros = null;
    if (todosGruposConcluidos()) {
        mapaTerceiros = calcularMelhoresTerceiros();
        
        // Se conseguiu mapear, exibe informacao sobre qual combinacao foi usada
        if (Object.keys(mapaTerceiros).length > 0) {
            const oitoMelhores = obterTop8Terceiros();
            const chaveCombinacao = oitoMelhores.map(t => t.grupo).sort().join("");
            console.log(">>> MATA-MATA: Usando combinacao FIFA", chaveCombinacao);
            console.log("    Terceiros mapeados:", oitoMelhores.map(t => `${t.grupo}(${t.time.nome})`).join(", "));
        }
    }

    // 🚨 SEGURANÇA MÁXIMA: Só executa a injeção visual se o container existir no HTML
    if (container) {
        confrontosDaFase.forEach(jogo => {
            const div = document.createElement("div");

            const resultadoSalvo = resultadosMataMata[jogo.id];

            div.className = `jogo-card ${resultadoSalvo ? "realizado" : ""}`; 
            
            const objTime1 = traduzirMarcador(jogo.t1, jogo.id, mapaTerceiros);
            const objTime2 = traduzirMarcador(jogo.t2, jogo.id, mapaTerceiros);
            
            // Extrai o grupo da marcação (ex: "1° A" -> "A")
            const regexGrupo = /^(\d)°\s([A-L])$/;
            const matchT1 = jogo.t1.match(regexGrupo);
            const matchT2 = jogo.t2.match(regexGrupo);
            
            const grupoT1 = matchT1 ? matchT1[2] : null;
            const grupoT2 = matchT2 ? matchT2[2] : null;
            
            // Verifica se times estão garantidos (e se são primeiros colocados)
            const t1Garantido = grupoT1 && jogo.t1.startsWith("1°") && timeEstaGarantido(objTime1.nome, grupoT1);
            const t2Garantido = grupoT2 && jogo.t2.startsWith("1°") && timeEstaGarantido(objTime2.nome, grupoT2);
            
            const indicadorT1 = t1Garantido ? '<span title="Classificação garantida" style="color: #2ecc71; font-weight: bold; margin-left: 4px;"></span>' : '';
            const indicadorT2 = t2Garantido ? '<span title="Classificação garantida" style="color: #2ecc71; font-weight: bold; margin-left: 4px;"></span>' : '';
            
            const img1 = objTime1.codigo ? `<img src="https://flagcdn.com/32x24/${objTime1.codigo}.png" style="vertical-align: middle; margin-right: 5px; border-radius: 2px;">` : '';
            const img2 = objTime2.codigo ? `<img src="https://flagcdn.com/32x24/${objTime2.codigo}.png" style="vertical-align: middle; margin-right: 5px; border-radius: 2px;">` : '';

            const gol1 = resultadoSalvo ? resultadoSalvo.gols1 : '';
            const gol2 = resultadoSalvo ? resultadoSalvo.gols2 : '';
            
            const pro1 = (resultadoSalvo && resultadoSalvo.pro1 !== null) ? resultadoSalvo.pro1 : '';
            const pro2 = (resultadoSalvo && resultadoSalvo.pro2 !== null) ? resultadoSalvo.pro2 : '';
            const pen1 = (resultadoSalvo && resultadoSalvo.pen1 !== null) ? resultadoSalvo.pen1 : '';
            const pen2 = (resultadoSalvo && resultadoSalvo.pen2 !== null) ? resultadoSalvo.pen2 : '';

            const inputsDesabilitados = resultadoSalvo ? 'disabled' : '';
            const btnSalvarDisplay = resultadoSalvo ? 'none' : 'inline-block';
            const btnEditarDisplay = resultadoSalvo ? 'inline-block' : 'none';

            let displayPro = (resultadoSalvo && resultadoSalvo.pro1 !== null) ? 'block' : 'none';
            let displayPen = (resultadoSalvo && resultadoSalvo.pen1 !== null) ? 'block' : 'none';

            div.innerHTML = `
              <div class="jogo-preenchimento-compacto match-card">
                  <div class="match-info">
                      <div class="grupo-badge">Jogo ${jogo.id}</div>
                      <strong>${jogo.data}</strong><br>
                      <span class="hora-jogo">${jogo.hora}</span>
                  </div>

                  <div class="placar-compacto match-teams mata-mata-mobile">
                      <div class="selecao-padrao team home" style="font-weight: 600;">
                          <span>${img1} ${objTime1.nome}${indicadorT1}</span>
                          <input 
                              type="number" 
                              min="0" 
                              class="input-gol-mini score-input" 
                              id="gol1-jogo${jogo.id}" 
                              value="${gol1}" 
                              ${inputsDesabilitados} 
                              placeholder="-"
                          >
                      </div>

                      <div class="versus">x</div>

                      <div class="selecao-padrao team away" style="font-weight: 600;">
                          <input 
                              type="number" 
                              min="0" 
                              class="input-gol-mini score-input" 
                              id="gol2-jogo${jogo.id}" 
                              value="${gol2}" 
                              ${inputsDesabilitados} 
                              placeholder="-"
                          >
                          <span>${img2} ${objTime2.nome}${indicadorT2}</span>
                      </div>
                  </div>

                  <div id="div-pro-jogo${jogo.id}" class="tempo-extra" style="display: ${displayPro}; margin-top: 8px; text-align: center;">
                      <span style="font-size: 0.7em; color: #ff9800; font-weight: bold; text-transform: uppercase;">Prorrogação</span><br>
                      <input type="number" min="0" class="input-gol-mini" id="pro1-jogo${jogo.id}" value="${pro1}" ${inputsDesabilitados} placeholder="-">
                      <span style="font-size: 0.8em;">x</span>
                      <input type="number" min="0" class="input-gol-mini" id="pro2-jogo${jogo.id}" value="${pro2}" ${inputsDesabilitados} placeholder="-">
                  </div>

                  <div id="div-pen-jogo${jogo.id}" class="tempo-extra" style="display: ${displayPen}; margin-top: 8px; text-align: center;">
                      <span style="font-size: 0.7em; color: #e91e63; font-weight: bold; text-transform: uppercase;">Pênaltis</span><br>
                      <input type="number" min="0" class="input-gol-mini" id="pen1-jogo${jogo.id}" value="${pen1}" ${inputsDesabilitados} placeholder="-">
                      <span style="font-size: 0.8em;">x</span>
                      <input type="number" min="0" class="input-gol-mini" id="pen2-jogo${jogo.id}" value="${pen2}" ${inputsDesabilitados} placeholder="-">
                  </div>

                  <div class="acoes-jogo match-actions">
                      <button 
                          class="btn-confirmar btn-match btn-confirm" 
                          id="btn-salvar-jogo${jogo.id}" 
                          onclick="salvarJogoMataMata(${jogo.id}, '${objTime1.nome}', '${objTime1.codigo}', '${objTime2.nome}', '${objTime2.codigo}')" 
                          style="display: ${btnSalvarDisplay};" 
                          title="Confirmar"
                      >
                          ✓
                      </button>

                      <button 
                          class="btn-editar btn-match btn-edit" 
                          id="btn-editar-jogo${jogo.id}" 
                          onclick="editarJogoMataMata(${jogo.id})" 
                          style="display: ${btnEditarDisplay};" 
                          title="Editar"
                      >
                          ✏️
                      </button>
                  </div>
              </div>
          `;
            container.appendChild(div);
        });
    }
}

function salvarJogoMataMata(idJogo, nome1, codigo1, nome2, codigo2) {
    const inputGols1 = document.getElementById(`gol1-jogo${idJogo}`).value;
    const inputGols2 = document.getElementById(`gol2-jogo${idJogo}`).value;

    if (inputGols1 === "" || inputGols2 === "") {
        alert("Preencha o placar do tempo normal!"); return;
    }

    const gols1 = parseInt(inputGols1);
    const gols2 = parseInt(inputGols2);

    let pro1 = null, pro2 = null;
    let pen1 = null, pen2 = null;

    const divPro = document.getElementById(`div-pro-jogo${idJogo}`);
    const divPen = document.getElementById(`div-pen-jogo${idJogo}`);

    // ESTÁGIO 1: Empate no Tempo Normal
    if (gols1 === gols2) {
        if (divPro.style.display === "none") {
            divPro.style.display = "block"; // Revela a prorrogação
            return; // Interrompe o salvamento e espera o usuário preencher
        } else {
            const inputPro1 = document.getElementById(`pro1-jogo${idJogo}`).value;
            const inputPro2 = document.getElementById(`pro2-jogo${idJogo}`).value;
            
            if (inputPro1 === "" || inputPro2 === "") {
                alert("Preencha o placar da prorrogação!"); return;
            }
            pro1 = parseInt(inputPro1);
            pro2 = parseInt(inputPro2);

            // ESTÁGIO 2: Empate na Prorrogação
            if (pro1 === pro2) {
                if (divPen.style.display === "none") {
                    divPen.style.display = "block"; // Revela os pênaltis
                    return; 
                } else {
                    const inputPen1 = document.getElementById(`pen1-jogo${idJogo}`).value;
                    const inputPen2 = document.getElementById(`pen2-jogo${idJogo}`).value;
                    
                    if (inputPen1 === "" || inputPen2 === "") {
                        alert("Preencha o placar dos pênaltis!"); return;
                    }
                    pen1 = parseInt(inputPen1);
                    pen2 = parseInt(inputPen2);

                    if (pen1 === pen2) {
                        alert("Disputa de pênaltis não pode terminar empatada!"); return;
                    }
                }
            }
        }
    }

    // Define o Vencedor analisando de trás pra frente (Penaltis -> Prorrogação -> Tempo Normal)
    let vencedor = {}; let perdedor = {};
    if (pen1 !== null && pen2 !== null && pen1 !== pen2) {
        vencedor = pen1 > pen2 ? { nome: nome1, codigo: codigo1 } : { nome: nome2, codigo: codigo2 };
        perdedor = pen1 > pen2 ? { nome: nome2, codigo: codigo2 } : { nome: nome1, codigo: codigo1 };
    } else if (pro1 !== null && pro2 !== null && pro1 !== pro2) {
        vencedor = pro1 > pro2 ? { nome: nome1, codigo: codigo1 } : { nome: nome2, codigo: codigo2 };
        perdedor = pro1 > pro2 ? { nome: nome2, codigo: codigo2 } : { nome: nome1, codigo: codigo1 };
    } else {
        vencedor = gols1 > gols2 ? { nome: nome1, codigo: codigo1 } : { nome: nome2, codigo: codigo2 };
        perdedor = gols1 > gols2 ? { nome: nome2, codigo: codigo2 } : { nome: nome1, codigo: codigo1 };
    }

    // Salva na memória global
    resultadosMataMata[idJogo] = {
        gols1: gols1, gols2: gols2,
        pro1: pro1, pro2: pro2,
        pen1: pen1, pen2: pen2,
        vencedor: vencedor, perdedor: perdedor
    };

    renderizarMataMata();

    // --- NOVA LÓGICA DE SALVAMENTO AUTOMÁTICO AQUI ---
    localStorage.setItem('resultadosMataMata', JSON.stringify(resultadosMataMata));
    renderizarResumoFinal();

    // Desabilita os campos e troca os botões
    const inputs = document.querySelectorAll(`#gol1-jogo${idJogo}, #gol2-jogo${idJogo}, #pro1-jogo${idJogo}, #pro2-jogo${idJogo}, #pen1-jogo${idJogo}, #pen2-jogo${idJogo}`);
    inputs.forEach(input => { if(input) input.disabled = true; });

    document.getElementById(`btn-salvar-jogo${idJogo}`).style.display = "none";
    document.getElementById(`btn-editar-jogo${idJogo}`).style.display = "inline-block";
}

function editarJogoMataMata(idJogo) {
    // Remove do objeto e do LocalStorage
    delete resultadosMataMata[idJogo];
    localStorage.setItem('resultadosMataMata', JSON.stringify(resultadosMataMata));
    renderizarResumoFinal();

    // Habilita e limpa os inputs principais
    document.getElementById(`gol1-jogo${idJogo}`).disabled = false;
    document.getElementById(`gol2-jogo${idJogo}`).disabled = false;
    
    // Esconde e zera os campos de prorrogação e pênaltis
    document.getElementById(`div-pro-jogo${idJogo}`).style.display = "none";
    document.getElementById(`pro1-jogo${idJogo}`).value = "";
    document.getElementById(`pro2-jogo${idJogo}`).value = "";
    document.getElementById(`pro1-jogo${idJogo}`).disabled = false;
    document.getElementById(`pro2-jogo${idJogo}`).disabled = false;

    document.getElementById(`div-pen-jogo${idJogo}`).style.display = "none";
    document.getElementById(`pen1-jogo${idJogo}`).value = "";
    document.getElementById(`pen2-jogo${idJogo}`).value = "";
    document.getElementById(`pen1-jogo${idJogo}`).disabled = false;
    document.getElementById(`pen2-jogo${idJogo}`).disabled = false;
    
    // Troca os botões
    document.getElementById(`btn-salvar-jogo${idJogo}`).style.display = "inline-block";
    document.getElementById(`btn-editar-jogo${idJogo}`).style.display = "none";
}

function obterDataHojeISO() {
  const hoje = new Date();
  const ano = hoje.getFullYear();
  const mes = String(hoje.getMonth() + 1).padStart(2, "0");
  const dia = String(hoje.getDate()).padStart(2, "0");

  return `${ano}-${mes}-${dia}`;
}

function encontrarPrimeiroJogoDeHoje() {
  const hojeISO = obterDataHojeISO();

  return jogos
    .map((jogo, index) => ({ ...jogo, jogoIndex: index }))
    .filter(jogo => jogo.data === hojeISO)
    .sort((a, b) => {
      const dataA = new Date(`${a.data}T${a.hora}`);
      const dataB = new Date(`${b.data}T${b.hora}`);
      return dataA - dataB;
    })[0];
}

function abrirRodadaDoJogoDeHoje() {
  const jogoHoje = encontrarPrimeiroJogoDeHoje();

  if (!jogoHoje) return;

  rodadaAtual = jogoHoje.rodada;
  renderizarJogosDaRodada();

  setTimeout(() => {
    const cardJogo = document.getElementById(`jogo-${jogoHoje.jogoIndex}`);
    const painelJogos = document.querySelector(".painel-lateral");

    if (!cardJogo || !painelJogos) return;

    cardJogo.classList.add("jogo-hoje");

    painelJogos.scrollTo({
      top: cardJogo.offsetTop - painelJogos.offsetTop - 12,
      behavior: "smooth"
    });
  }, 150);
}

function exportarBackup() {
  const dadosBackup = {
    versao: "1.0",
    dataExportacao: new Date().toISOString(),
    grupos,
    jogos,
    resultadosMataMata,
    rodadaAtual
  };

  const conteudo = JSON.stringify(dadosBackup, null, 2);
  const blob = new Blob([conteudo], { type: "application/json" });
  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.download = "copa2026_backup.json";
  document.body.appendChild(link);
  link.click();
  link.remove();

  URL.revokeObjectURL(url);

  mostrarNotificacao("Backup exportado com sucesso!", "sucesso");
}

function importarBackup(event) {
    const arquivo = event.target.files[0];

    if (!arquivo) return;

    const leitor = new FileReader();

    leitor.onload = function(e) {
        try {
            const dados = JSON.parse(e.target.result);

            if (!dados.grupos || !dados.jogos) {
                throw new Error("Backup inválido");
            }

            grupos = dados.grupos;
            jogos = dados.jogos;

            resultadosMataMata =
                dados.resultadosMataMata || {};

            rodadaAtual =
                dados.rodadaAtual || 1;

            localStorage.setItem(
                "resultadosMataMata",
                JSON.stringify(resultadosMataMata)
            );

            salvarDados();

            gerarTabelas();
            renderizarJogosDaRodada();

            mostrarNotificacao(
                "Backup restaurado com sucesso!",
                "sucesso"
            );

        } catch (erro) {
            console.error(erro);

            mostrarNotificacao(
                "Arquivo de backup inválido.",
                "erro"
            );
        }
    };

    leitor.readAsText(arquivo);
}

function aplicarTemaSalvo() {
  try {
    const temaSalvo = localStorage.getItem("temaCopa2026");

    if (temaSalvo === "escuro") {
      document.body.classList.add("dark-mode");
    } else if (temaSalvo === "claro") {
      document.body.classList.remove("dark-mode");
    } else if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      document.body.classList.add("dark-mode");
    }

    atualizarTextoBotaoTema();
  } catch (erro) {
    console.error("Erro ao aplicar tema salvo:", erro);
  }
}

function alternarTema() {
  document.body.classList.toggle("dark-mode");
  const temaAtual = document.body.classList.contains("dark-mode") ? "escuro" : "claro";
  localStorage.setItem("temaCopa2026", temaAtual);
  atualizarTextoBotaoTema();
}

function atualizarTextoBotaoTema() {
  const btnTema = document.getElementById("btnAlternarTema");
  if (!btnTema) return;
  btnTema.textContent = document.body.classList.contains("dark-mode")
    ? "☀️ Modo claro"
    : "🌙 Modo escuro";
}

// ================== INICIALIZAÇÃO ==================
const CONFIG_COPA_2026 = Object.freeze({
  GRUPOS: ['A','B','C','D','E','F','G','H','I','J','K','L'],
  CLASSIFICADOS_DIRETOS: 2,
  MELHORES_TERCEIROS: 8,
  RODADA_MIN: 1,
  RODADA_MAX: 3
});

document.addEventListener("DOMContentLoaded", function() {
  // Carrega dados e configurações iniciais
  carregarDados();
  aplicarTemaSalvo();
  gerarTabelas();
  renderizarJogosDaRodada();
  abrirRodadaDoJogoDeHoje();

  // Inicializa event listeners de forma consolidada
  const elementosEventos = {
    btnResetarTorneio: resetarTorneio,
    btnRodadaProxima: avancarRodada,
    btnRodadaAnterior: retrocederRodada,
    btnExportarDados: exportarBackup,
    btnConsultarResultados: consultarResultados,
    btnAlternarTema: alternarTema
  };

  Object.entries(elementosEventos).forEach(([id, callback]) => {
    const btn = document.getElementById(id);
    if (btn) btn.addEventListener('click', callback);
  });

  // Evento especial: Input de arquivo de backup
  const btnImportarDados = document.getElementById('btnImportarDados');
  const inputImportarBackup = document.getElementById('inputImportarBackup');
  if (btnImportarDados && inputImportarBackup) {
    btnImportarDados.addEventListener('click', () => inputImportarBackup.click());
    inputImportarBackup.addEventListener('change', importarBackup);
  }

  // Menu de aplicação
  const btnMenuApp = document.getElementById('btnMenuApp');
  const opcoesMenuApp = document.getElementById('opcoesMenuApp');
  if (btnMenuApp && opcoesMenuApp) {
    btnMenuApp.addEventListener('click', (e) => {
      e.stopPropagation();
      opcoesMenuApp.classList.toggle('ativo');
    });
    document.addEventListener('click', () => opcoesMenuApp.classList.remove('ativo'));
    opcoesMenuApp.addEventListener('click', () => opcoesMenuApp.classList.remove('ativo'));
  }
});

// ================== FUNÇÕES AUXILIARES ==================
function obterTimeDoJogo(jogo, lado) {
  if (!jogo || !grupos[jogo.grupo]) return null;
  return grupos[jogo.grupo][lado === 1 ? jogo.time1 : jogo.time2] || null;
}

function lerPlacarDoCard(jogoIndex) {
  const jogoCard = document.getElementById(`jogo-${jogoIndex}`);
  if (!jogoCard) return null;
  return {
    gols1: Math.max(0, parseInt(jogoCard.querySelector('.gol1')?.value, 10) || 0),
    gols2: Math.max(0, parseInt(jogoCard.querySelector('.gol2')?.value, 10) || 0)
  };
}

function aplicarResultadoAosTimes(time1, time2, gols1, gols2, fator = 1) {
  if (!time1 || !time2) return;

  time1.gm += gols1 * fator;
  time1.gs += gols2 * fator;
  time2.gm += gols2 * fator;
  time2.gs += gols1 * fator;

  if (gols1 > gols2) {
    time1.vitorias += fator;
    time2.derrotas += fator;
    time1.pontos += 3 * fator;
  } else if (gols2 > gols1) {
    time2.vitorias += fator;
    time1.derrotas += fator;
    time2.pontos += 3 * fator;
  } else {
    time1.empates += fator;
    time2.empates += fator;
    time1.pontos += fator;
    time2.pontos += fator;
  }

  time1.saldo = time1.gm - time1.gs;
  time2.saldo = time2.gm - time2.gs;
}

function compararTimes(a, b, grupoId = null) {
  if (b.pontos !== a.pontos) return b.pontos - a.pontos;

  if (grupoId) {
    const confronto = jogos.find(j =>
      j.grupo === grupoId && j.resultado &&
      ((j.time1 === a.codigo && j.time2 === b.codigo) ||
       (j.time1 === b.codigo && j.time2 === a.codigo))
    );

    if (confronto) {
      const golsA = confronto.time1 === a.codigo ? confronto.resultado.gols1 : confronto.resultado.gols2;
      const golsB = confronto.time1 === b.codigo ? confronto.resultado.gols1 : confronto.resultado.gols2;
      if (golsA !== golsB) return golsB - golsA;
    }
  }

  if (b.saldo !== a.saldo) return b.saldo - a.saldo;
  if (b.gm !== a.gm) return b.gm - a.gm;
  return a.nome.localeCompare(b.nome, 'pt-BR');
}

function calcularRanking(grupoId) {
  return Object.values(grupos[grupoId] || {}).slice().sort((a, b) => compararTimes(a, b, grupoId));
}

function confirmarResultado(jogoIndex) {
  const placar = lerPlacarDoCard(jogoIndex);
  const jogo = jogos[jogoIndex];
  if (!placar || !jogo || jogo.resultado) return;

  const time1 = obterTimeDoJogo(jogo, 1);
  const time2 = obterTimeDoJogo(jogo, 2);
  if (!time1 || !time2) return;

  aplicarResultadoAosTimes(time1, time2, placar.gols1, placar.gols2, 1);
  jogo.resultado = placar;

  atualizarTabela(jogo.grupo);
  renderizarJogosDaRodada();
  salvarDados();
  mostrarNotificacao(`Resultado de ${time1.nome} x ${time2.nome} registrado!`, 'sucesso');
}

function salvarEdicao(jogoIndex) {
  const placar = lerPlacarDoCard(jogoIndex);
  const jogo = jogos[jogoIndex];
  if (!placar || !jogo || !jogo.resultado) return;

  const time1 = obterTimeDoJogo(jogo, 1);
  const time2 = obterTimeDoJogo(jogo, 2);
  if (!time1 || !time2) return;

  aplicarResultadoAosTimes(time1, time2, jogo.resultado.gols1, jogo.resultado.gols2, -1);
  aplicarResultadoAosTimes(time1, time2, placar.gols1, placar.gols2, 1);
  jogo.resultado = placar;
  jogoEmEdicao = null;

  atualizarTabela(jogo.grupo);
  renderizarJogosDaRodada();
  salvarDados();
  mostrarNotificacao('Resultado atualizado com sucesso!', 'sucesso');
}

function carregarDados() {
  try {
    const gruposGuardados = localStorage.getItem('copa2026_grupos');
    const jogosGuardados = localStorage.getItem('copa2026_jogos');
    const mataMataGuardado = localStorage.getItem('resultadosMataMata');

    if (gruposGuardados && jogosGuardados) {
      grupos = JSON.parse(gruposGuardados);
      jogos = JSON.parse(jogosGuardados);
    }

    if (mataMataGuardado) {
      resultadosMataMata = JSON.parse(mataMataGuardado);
    }
  } catch (erro) {
    console.error('Erro ao carregar dados salvos. Usando estado inicial.', erro);
  }
}

function salvarDados() {
  try {
    localStorage.setItem('copa2026_grupos', JSON.stringify(grupos));
    localStorage.setItem('copa2026_jogos', JSON.stringify(jogos));
    localStorage.setItem('resultadosMataMata', JSON.stringify(resultadosMataMata));
  } catch (erro) {
    console.error('Erro ao salvar dados.', erro);
    mostrarNotificacao('Não foi possível salvar os dados no navegador.', 'erro');
  }
}

function atualizarInterfaceFase() {
  const titulo = document.getElementById('faseTitulo');
  const btnAnterior = document.getElementById('btnFaseAnterior');
  const btnProxima = document.getElementById('btnFaseProxima');
  const containerGrupos = document.getElementById('grupos');
  const containerLateral = document.querySelector('.painel-lateral');
  const mataMataSection = document.getElementById('faseMataMata');

  if (titulo) titulo.textContent = nomesFases[faseAtual];
  if (btnAnterior) btnAnterior.disabled = faseAtual === 0;
  if (btnProxima) btnProxima.disabled = faseAtual === nomesFases.length - 1;

  const naFaseDeGrupos = faseAtual === 0;
  if (containerGrupos) containerGrupos.style.display = naFaseDeGrupos ? 'block' : 'none';
  if (containerLateral) containerLateral.style.display = naFaseDeGrupos ? 'block' : 'none';

  if (mataMataSection) {
    mataMataSection.hidden = naFaseDeGrupos;
    mataMataSection.style.display = naFaseDeGrupos ? 'none' : 'block';
  }

  if (!naFaseDeGrupos) renderizarMataMata();
}

function mudarFase(direcao) {
  faseAtual = Math.max(0, Math.min(nomesFases.length - 1, faseAtual + direcao));
  atualizarInterfaceFase();
}

function resetarTorneio() {
  
  const confirmar = confirm("Tem certeza que deseja resetar todo o torneio? Todos os resultados serão apagados.");

  if (!confirmar) return;

  localStorage.removeItem("copa2026_grupos");
  localStorage.removeItem("copa2026_jogos");
  localStorage.removeItem("resultadosMataMata");
  confeteCampeaoExibido = false;


  location.reload();
  renderizarResumoFinal();
}

function renderizarResumoFinal() {
  const resumo = document.getElementById("resumoFinal");
  if (!resumo) return;

  const final = resultadosMataMata[104];
  const terceiroLugar = resultadosMataMata[103];

  if (!final || !final.vencedor) {
    resumo.style.display = "none";
    return;
  }

  const campeao = final.vencedor;
  const vice = final.perdedor;
  const terceiro = terceiroLugar?.vencedor;
  const quarto = terceiroLugar?.perdedor;

  const bandeira = (time) =>
    time?.codigo
      ? `<img src="https://flagcdn.com/w80/${time.codigo}.png" alt="${time.nome}">`
      : "";

  resumo.innerHTML = `
    <div class="trofeu-final">🏆</div>

    <p class="rotulo-campeao">Campeão</p>

    <div class="campeao-destaque">
      ${bandeira(campeao)}
      <strong>${campeao.nome}</strong>
    </div>
    
    <div class="podio-final">
      <div class="podio-card vice">
        <span class="medalha">🥈</span>
        ${bandeira(vice)}
        <div>
          <small>Vice-campeão</small>
          <strong>${vice?.nome || "Não definido"}</strong>
        </div>
    </div>

    <div class="podio-card terceiro">
      <span class="medalha">🥉</span>
      ${bandeira(terceiro)}
      <div>
        <small>3º lugar</small>
        <strong>${terceiro?.nome || "Não definido"}</strong>
      </div>
    </div>

    <div class="podio-card quarto">
      <span class="medalha">4º</span>
      ${bandeira(quarto)}
      <div>
        <small>4º lugar</small>
        <strong>${quarto?.nome || "Não definido"}</strong>
      </div>
    </div>
    </div>
  `;

  resumo.style.display = "block";

  if (!confeteCampeaoExibido) {
    celebrarCampeao();
    confeteCampeaoExibido = true;
  }
}

function celebrarCampeao() {
    if (typeof confetti !== "function") return;
    const duracao = 4000;
    const fim = Date.now() + duracao;

    (function frame() {
        confetti({
            particleCount: 5,
            angle: 60,
            spread: 55,
            origin: { x: 0 }
        });

        confetti({
            particleCount: 5,
            angle: 120,
            spread: 55,
            origin: { x: 1 }
        });

        if (Date.now() < fim) {
            requestAnimationFrame(frame);
        }
    })();
}

function consultarResultados() {
    window.open(
        "resultados.html",
        "_blank"
    );
}
