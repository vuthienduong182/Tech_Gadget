const CartItems = document.querySelector(".cart-items");

let cartTotal = 0;
function displayCartItems() {
  var values = [],
  keys = Object.keys(localStorage),
  i = keys.length;
  const items = JSON.parse(localStorage.getItem("cart"));
  items.forEach((item) => {
    const cartItem = document.createElement("div");
    cartItem.className = "cart_item";
    cartItem.id = "cart_item";
    cartItem.innerHTML = `
    <p class="cart_id">${item.id}</p>
              <p class="cart_title">${item.title}</p>
              <img src="${item.image}" alt="${item.title}" class="cart_img" />
              <p class="cart_price">${item.price}</p>
              <button id="item${item.id}"">Delete</button>
    `;
      CartItems.appendChild(cartItem);
  });
}

displayCartItems();

function deleteProduct(){
  const boxes = document.querySelectorAll('.cart_item');

  boxes.forEach(box => {
    box.remove();
  });
  localStorage.removeItem("cart");
}


