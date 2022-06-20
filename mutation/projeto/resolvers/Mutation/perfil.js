const { perfis, proximoId } = require("../../data/db");

function indicePerfil(filtro) {
  if (!filtro) return -1;
  const { id } = filtro;
  if (id) {
    return perfis.findIndex((u) => u.id === id);
  } else if (email) {
    return perfis.findIndex((u) => u.email === email);
  }
  return -1;
}

module.exports = {
  //{ nome, email, idade }
  novoPerfil(_, { dados }) {
    const NomeExistente = perfis.some((u) => u.nome === dados.nome);
    if (NomeExistente) {
      throw new Error("Perfil cadastrado");
    }

    const novo = {
      id: proximoId(),
      ...dados,
      perfil_id: 1,
      status: "ATIVO",
    };

    perfis.push(novo);
    return novo;
  },
  excluirPerfil(_, { filtro }) {
    const i = indicePerfil(filtro);
    if (i < 0) return null;
    const excluidos = perfis.splice(i, 1);
    return excluidos ? excluidos[0] : null;
  },
  alterarPerfil(_, dados) {
    const i = indicePerfil(filtro);
    if (i < 0) return null;

    perfis[i].nome = dados.nome;
    perfis[i].email = dados.email;
    if (dados.idade) {
      perfis[i].idade = dados.idade;
    }
    // const usuario = {
    //   ...perfis[i],
    //   ...args,
    // };

    // perfis.splice(i, 1, usuario);
    return usuario;
  },
};
