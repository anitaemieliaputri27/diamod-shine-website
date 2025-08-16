// Fungsi ambil keranjang dari localStorage
function getCart() {
    return JSON.parse(localStorage.getItem('cart')) || [];
}

// Fungsi simpan keranjang ke localStorage
function saveCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Fungsi tambah produk ke keranjang
function addToCart(product) {
    let cart = getCart();
    cart.push(product);
    saveCart(cart);
    alert("Produk berhasil ditambahkan ke keranjang!");
}

// Fungsi hapus produk dari keranjang
function removeFromCart(index) {
    let cart = getCart();
    cart.splice(index, 1);
    saveCart(cart);
    renderCart();
}

// Fungsi render keranjang di keranjang.html
function renderCart() {
    const cartContainer = document.querySelector(".cart-items");
    if (!cartContainer) return;

    let cart = getCart();
    cartContainer.innerHTML = "";

    if (cart.length === 0) {
        cartContainer.innerHTML = "<p>Keranjang kosong.</p>";
        return;
    }

    cart.forEach((item, index) => {
        cartContainer.innerHTML += `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}">
                <div class="cart-info">
                    <h2>${item.name}</h2>
                    <p>${item.price}</p>
                </div>
                <a href="#" class="remove-btn" onclick="removeFromCart(${index})">🗑</a>
            </div>
        `;
    });
}
