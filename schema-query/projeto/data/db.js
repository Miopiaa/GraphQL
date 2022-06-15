const perfis = [
  {
    id: 1,
    nome: "Comum",
  },
  {
    id: 2,
    nome: "Administrador",
  },
];

const usuarios = [
  {
    id: 1,
    nome: "juan som brabo",
    email: "juanzinhosommarrento@mail.com",
    idade: 32,
    perfil_id: 1,
    status: 'ATIVO'
  },
  {
    id: 2,
    nome: "Rafao 512",
    email: "rafaounderground15@gmail.com",
    idade: 21,
    perfil_id: 2,
    status: 'INATIVO'
  },
  {
    id: 3,
    nome: "Dani Pocas Ideia",
    email: "MesterOfbeats5012@gmail.com",
    idade: 19,
    perfil_id: 1,
    status: 'BLOQUEADO'
  },
];

module.exports = { usuarios, perfis };
