const { ApolloServer, gql } = require('apollo-server')

const typeDefs = gql`
    # Pontos de entrada da sua API
    scalar Date

    type Produto {
        nome: String!
        preco: Float!
        desconto: Float
        precoComDesconto: Float
    }

    type Usuario {
        id: ID
        nome: String!
        email: String!
        idade: Int
        salario: Float
        vip: Boolean
    }

    type Query {
        ola: String
        horaAtual: Date
        usuarioLogado: Usuario
        produtoEmDestaque: Produto
        numerosMegaSena: [Int!]!
    }
`
 
const resolvers = {
    Produto: {
        precoComDesconto(produto){
            if (produto.desconto) {
                return produto.preco 
                * (1 - produto.desconto)
            } else {
                return produto.preco
            }
        }
    },
    Usuario: {
        salario(usuario){
            return usuario.salario_real
        }
    },
    Query: {
        ola() {
            return 'BOIIIII!'
        },
        horaAtual() {
            return new Date
        },
        usuarioLogado(obj) {
            console.log(obj)
            return {
                id: 1,
                nome: 'Rafao Codigos',
                email: 'rafaocodigos@gmail.com',
                idade: 21,
                salario: 1000.00,
                vip: true
            }
        },
        produtoEmDestaque() {
            return{
                nome: 'Celular',
                preco: 1200.00,
                desconto: 0.15,
            }
        },
        numerosMegaSena() {
            // return [4, 8, 13, 27, 33,54]
            const crescente  = (a, b) => a - b
            return Array(6).fill(0)
            .map(n => parseInt(Math.random() * 60 + 1))
            .sort(crescente)
        }
    }
}

const server = new ApolloServer({
    typeDefs, 
    resolvers,
    csrfPrevention: true,
})

server.listen().then(({ url }) => {
    console.log(`Executando em ${url}`)
})