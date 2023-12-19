const { usuarios, perfis } = require('../data/db')

module.exports = {
    ola() {
        return 'Bom dia!'
    },
    horaCerta() {
        return new Date();
    },
    usuarioLogado() {
        return {
            id: 1,
            nome: 'ana da web',
            email: 'anadaweb@email.com',
            idade: 23,
            salario_real: 2000.57,
            vip: true
        }
    },
    produtoEmDestaque() {
        return {
            nome: 'caixo de Bananas',
            preco: 12.15,
            desconto: 0.15
        }
    },
    numerosMegaSena() {
        // return [4, 8, 13, 27, 33, 54]
        const crescente = (a, b) => a - b;
        return Array(6).fill(0).map(n => parseInt(Math.random() * 60 + 1)).sort(crescente)
    },
    usuarios(){
        return usuarios
    },
    usuario(_, { id }) {
        const sels = usuarios.filter(u => u.id === id)
        return sels ? sels[0] : null
    },
    perfis() {
        return perfis
    },
    perfil(_, { id }) {
        const sels = perfis.filter(p => p.id === id)
        return sels ? sels[0] : null
    }
}