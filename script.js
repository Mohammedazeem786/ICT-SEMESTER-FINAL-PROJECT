const cart = [];
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const product = button.closest('.product');
        const id = product.dataset.id;
        const name = product.querySelector('h3').textContent;
        const price = parseFloat(product.querySelector('p').textContent.replace('Price: $', ''));
        cart.push({ id, name, price });
        alert(`${name} added to the cart!`);
        updateCartUI();
    });
});
function updateCartUI() {
    document.getElementById('cart-count').textContent = cart.length;
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = '';
    let totalPrice = 0;
    cart.forEach(({ name, price }) => {
        const itemRow = document.createElement('p');
        itemRow.textContent = `${name} - $${price.toFixed(2)}`;
        cartItemsContainer.appendChild(itemRow);
        totalPrice += price;
    });
    const totalRow = document.createElement('p');
    totalRow.innerHTML = `<strong>Total Price: $${totalPrice.toFixed(2)}</strong>`;
    cartItemsContainer.appendChild(totalRow);
}