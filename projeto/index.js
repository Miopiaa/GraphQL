const { ApolloServer, gql } = require('apollo-server');

const ususarios = [{
    id: 1,
    nome: 'jao silva',
    email: 'jsilva@gmail.com',
    idade: 29
},
{
    id: 2,
    nome: 'Pedro',
    email: 'pedroJun@emailcom',
    idade: 666
}
]

// resolver ususario
const typeDefs = gql`
    scalar Date

    # Pontos entrada API

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
        ola: String!
        horaCerta: Date!
        usuarioLogado: Usuario
        produtoEmDestaque: Produto
        numerosMegaSena: [Int!]!
    }
`;

const resolvers = {    
    Usuario: {
        salario(usuario) {
            return usuario.salario_real
        }
    },

    Produto: {
        precoComDesconto(produto) {
            if (produto.preco) {
                return Math.round(produto.preco * (1 - produto.desconto))
            } else {
                return produto.preco
            }
        }
    },

    Query: {
        produtoEmDestaque() {
            return {
                nome: 'caixo de Bananas',
                preco: 12.15,
                desconto: 0.15
            }
        },        
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
        numerosMegaSena() {
            // return [4, 8, 13, 27, 33, 54]
            const crescente = (a, b) => a - b;
            return Array(6).fill(0).map(n => parseInt(Math.random() * 60 + 1)).sort(crescente)
        }
    }
};

const server = new ApolloServer({
    typeDefs,
    resolvers

})

server.listen(4001).then(({ url }) => {
    console.log(`Executando em ${url}`);
});