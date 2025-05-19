let cart = localStorage.getItem("cartCount") || 0;
document.getElementById("cart").innerText = cart;

function addToCart(button) {
  cart++;
  document.getElementById("cart").innerText = cart;
  localStorage.setItem("cartCount", cart);
  alert("Added to cart!");
  button.disabled = true;
  button.innerText = "Added";
}