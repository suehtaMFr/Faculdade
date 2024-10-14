// Classe para criar o objeto Filme
class Filme {
    constructor(titulo, duracao, classificacao, generos) {
        this.titulo = titulo;
        this.duracao = duracao;
        this.classificacao = classificacao;
        this.generos = generos;  // Array de gêneros
    }
}

// Classe para criar o objeto Sala
class Sala {
    constructor(numero, capacidade) {
        this.numero = numero;
        this.capacidade = capacidade;
    }
}

// Classe para criar o objeto Sessao
class Sessao {
    constructor(filme, sala, horario) {
        this.filme = filme;
        this.sala = sala;
        this.horario = horario;
        this.ingressosVendidos = 0;
    }

    // Método para vender ingresso
    venderIngresso() {
        if (this.ingressosVendidos < this.sala.capacidade) {
            this.ingressosVendidos++;
            return true;
        }
        return false;
    }
}

// Arrays para armazenar os filmes, salas e sessões
const filmes = [];
const salas = [];
const sessoes = [];

// Função para registrar um filme
function registrarFilme() {
    
}

// Função para criar uma sessão
function criarSessao() {
    
}

// Função para adicionar uma sala
function adicionarSala(numero, capacidade) {
    
}
