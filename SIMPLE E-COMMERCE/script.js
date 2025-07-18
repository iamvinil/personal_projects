const products = [
  {
    id: 1,
    name: "T-Shirt",
    price: 499,
    image:
      "https://cdn-images.farfetch-contents.com/19/76/12/51/19761251_44338698_2048.jpg",
  },
  {
    id: 2,
    name: "Jeans",
    price: 799,
    image:
      "https://tiimg.tistatic.com/fp/1/006/930/branded-denim-men-jeans-060.jpg",
  },
  {
    id: 3,
    name: "Sneakers",
    price: 1299,
    image:
      "https://redtape.com/cdn/shop/products/8-800x800_40a014fd-4a0b-4a1f-b093-b912125eceef.jpg?v=1750055334",
  },
];

let cart = [];

function renderProducts() {
  const productList = document.getElementById("product-list");
  products.forEach((product) => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>₹${product.price}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
      `;
    productList.appendChild(div);
  });
}

function addToCart(id) {
  const product = products.find((p) => p.id === id);
  cart.push(product);
  document.getElementById("cart-count").innerText = cart.length;
}

function openCart() {
  const cartModal = document.getElementById("cart-modal");
  const cartItems = document.getElementById("cart-items");
  cartItems.innerHTML = "";
  cart.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - ₹${item.price}`;
    cartItems.appendChild(li);
  });
  cartModal.style.display = "block";
}

function closeCart() {
  document.getElementById("cart-modal").style.display = "none";
}

document.querySelector(".cart").addEventListener("click", openCart);

renderProducts();
