let cart = [];

function addToCart(name, price) {
    cart.push({ name, price });
    renderCart();
}

function removeFromCart(index) {
    // Fitur Pembatalan: Menghapus item berdasarkan index
    cart.splice(index, 1);
    renderCart();
}

function renderCart() {
    const cartList = document.getElementById('cart-items');
    const totalPriceEl = document.getElementById('total-price');
    const totalItemsEl = document.getElementById('total-items');
    
    cartList.innerHTML = '';
    let total = 0;

    cart.forEach((item, index) => {
        total += item.price;
        const li = document.createElement('li');
        li.className = 'cart-item';
        li.innerHTML = `
            <span>${item.name}</span>
            <div>
                <span>Rp ${item.price.toLocaleString()}</span>
                <button class="btn-cancel" onclick="removeFromCart(${index})">Batal</button>
            </div>
        `;
        cartList.appendChild(li);
    });

    totalPriceEl.innerText = `Rp ${total.toLocaleString()}`;
    totalItemsEl.innerText = cart.length;
}

function checkoutWA() {
    if (cart.length === 0) {
        alert("Pilih produk dulu yuk!");
        return;
    }

    const phone = "6285692212417"; 
     
    let message = "Halo, saya mau pesan:%0A";
    
    cart.forEach((item, i) => {
        message += `${i+1}. ${item.name} - Rp ${item.price.toLocaleString()}%0A`;
    });

    const total = cart.reduce((sum, item) => sum + item.price, 0);
    message += `%0ATotal Bayar: *Rp ${total.toLocaleString()}*`;

    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
}