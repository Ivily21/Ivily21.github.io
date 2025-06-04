export default class Aluno {
  #nome;
  #linha;

  getNome() {
    return this.#nome;
  }

  setNome(nome) {
    this.#nome = nome;
  }

  getMatricula() {
    return this.#linha;
  }

  setMatricula(linha) {
    this.#linha = linha;
  }

  constructor(nome, linha) {
    this.#nome = nome;
    this.#linha = linha;
  }
}
