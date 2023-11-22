const { ApolloServer, gql } = require('apollo-server');
// resolver ususario
const typeDefs = gql`
    scalar Date

    # Pontos entrada API

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
    }
`;

const resolvers = {
    Usuario: {
        salario(usuario) {
            return usuario.salario_real
        }
    },

    Query: {
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