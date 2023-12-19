const perfis = [
    { id: 1, nome: 'comum' },
    { id: 2, nome: 'administrador' }
]

const usuarios = [{
    id: 1,
    nome: 'jao silva',
    email: 'jsilva@gmail.com',
    idade: 29,
    perfil_id: 1
},
{
    id: 2,
    nome: 'Pedro',
    email: 'pedroJun@emailcom',
    idade: 666,
    perfil_id: 2
},
{
    id: 3,
    nome: 'Dani',
    email: 'Daniela@emailcom',
    idade: 669,
    perfil_id: 1
}
]

module.exports = { usuarios, perfis }