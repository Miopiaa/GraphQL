module.exports = {
    precoComDesconto(produto) {
        if (produto.preco) {
            return Math.round(produto.preco * (1 - produto.desconto))
        } else {
            return produto.preco
        }
    }
}