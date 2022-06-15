const { usuarios, perfis } = require("../data/db");

module.exports = {
  ola() {
    return "BOIIIII!";
  },
  horaAtual() {
    return new Date();
  },
  usuarioLogado(obj) {
    console.log(obj);
    return {
      id: 1,
      nome: "Rafao Codigos",
      email: "rafaocodigos@gmail.com",
      idade: 21,
      salario: 1000.0,
      vip: true,
    };
  },
  produtoEmDestaque() {
    return {
      nome: "Celular",
      preco: 1200.0,
      desconto: 0.15,
    };
  },
  numerosMegaSena() {
    // return [4, 8, 13, 27, 33,54]
    const crescente = (a, b) => a - b;
    return Array(6)
      .fill(0)
      .map((n) => parseInt(Math.random() * 60 + 1))
      .sort(crescente);
  },
  usuarios() {
    return usuarios;
  },
  usuario(_, { id }) {
    const sels = usuarios.filter((u) => u.id === id);
    return sels ? sels[0] : null;
  },
  perfis() {
    return perfis;
  },
  perfil(_, { id }) {
    const perf = perfis.filter((p) => p.id === id);
    return perf ? perf[0] : null;
  },
};
