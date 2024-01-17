
function deleteProduct() {
  const isConfirmed = confirm("Do you want to delete all products in the shopping cart?");
  
  if (isConfirmed) {
      // Lấy danh sách các sản phẩm trong giỏ hàng
      const boxes = document.querySelectorAll('.cart_item');

      boxes.forEach(box => {
          box.remove();
      });

      // Xóa giỏ hàng từ localStorage
      localStorage.removeItem("cart");
  }
}



const CartItems = document.querySelector(".cart-items");
let cartTotal = 0;

function displayCartItems() {
    const items = JSON.parse(localStorage.getItem("cart")) || [];
    CartItems.innerHTML = ""; // Xóa nội dung hiện tại để tránh trùng lặp

    items.forEach((item) => {
        const cartItem = document.createElement("div");
        cartItem.className = "cart_item";
        cartItem.innerHTML = `
            <p class="cart_id">${item.id}</p>
            <p class="cart_title">${item.title}</p>
            <img src="${item.image}" alt="${item.title}" class="cart_img" />
            <p class="cart_price">${item.price}</p>
            <button class="remove_from_cart" data-id="${item.id}">-</button>
        `;

        const removeButton = cartItem.querySelector(".remove_from_cart");
        removeButton.addEventListener("click", () => {
            const id = removeButton.getAttribute("data-id");

            const isConfirmed = confirm("Are you sure you want to remove this item from your cart? This action cannot be undone!");
            if (isConfirmed) {
                // Lấy giỏ hàng từ localStorage
                let cart = JSON.parse(localStorage.getItem("cart")) || [];

                // Lọc ra item có id cần xóa
                const updatedCart = cart.filter((item) => item.id !== id);

                // Cập nhật giỏ hàng trong localStorage
                localStorage.setItem("cart", JSON.stringify(updatedCart));

                // Gọi hàm hiển thị giỏ hàng mới
                displayCartItems();
            }
        });

        CartItems.appendChild(cartItem);
    });
}

displayCartItems();
