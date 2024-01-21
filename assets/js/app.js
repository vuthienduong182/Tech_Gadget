const AddToCart = document.querySelectorAll(".add-to-cart");

AddToCart.forEach((button) => {
  button.addEventListener("click", () => {
    alert(`Added to cart successfully.`);
    const id = button.getAttribute("data-id");
    const title = button.getAttribute("data-title");
    const image = button.getAttribute("data-image");
    const price = button.getAttribute("data-price");

    const cartItem = { id, title, image, price };
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(cartItem);
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCartItems();
    calTotal();
  });
});

