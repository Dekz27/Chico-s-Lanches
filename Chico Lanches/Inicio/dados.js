const produtos = {
    { id: 'burger-1', nome: 'Hambúrguer', preco: '25,00', desc: 'Pão, carne 180g, queijo e molho.', img: 'burger.jpg' },
    { id: 'pizza-1', nome: 'Pizza', preco: '45,00', desc: 'Molho de tomate e mussarela.', img: 'pizza.jpg' },
    { id: '', nome: '', preco: '', desc: '', img: '',}
}

const parametros = new
URLSearchParams(window.location.search);
const idProduto = parametros.get('id');

const produtoEncontrado = produtos.find(p => p.id === idProduto);

if (produtoEncontrado) {

document.getElementById('nomeProduto').inner
Text = produtoEncontrado.nome;

document.getElementById('precoProduto')inner
Text = `R$ ${produtoEncontrado.preco}`;

document.getElementById('descProduto').inner
Text = produtoEncontrado.desc;

document.getElementById('fotoProduto').src = produtoEncontrado.img;
}