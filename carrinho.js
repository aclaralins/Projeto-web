const buttons = document.querySelectorAll('.addCarrinho');


const carrinho = document.getElementById('carrinho');
const total = document.getElementById('total');
const cartCount = document.getElementById('cart-count');


let totalCompra = 0;
let itemCount = 0;


function adicionarAoCarrinho(nome, preco) {
    
    const item = document.createElement('li');
    item.textContent = `${nome} - R$ ${preco}`;
    carrinho.appendChild(item);

    
    totalCompra += parseFloat(preco);
    total.textContent = totalCompra.toFixed(2);


    itemCount++;
    cartCount.textContent = itemCount;
}


buttons.forEach(button => {
    button.addEventListener('click', () => {
        const nomeProduto = button.getAttribute('data-nome');
        const precoProduto = button.getAttribute('data-preco');
        adicionarAoCarrinho(nomeProduto, precoProduto);
    });
});