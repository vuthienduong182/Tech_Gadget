const CartPage = document.querySelector("#cart");

function displayCartPages() {
    const items = JSON.parse(localStorage.getItem("cart")) || [];
    CartPage.innerHTML = ""; // Xóa nội dung hiện tại để tránh trùng lặp

    items.forEach((item) => {
        const cartItem = document.createElement("tr");
        cartItem.innerHTML = `
        <td class="product-col">
            <div class="product">
                <figure class="product-media">
                    <a href="#">
                        <img src="${item.image}" alt="Product image">
                    </a>
                </figure>

                <h3 class="product-title">
                    <a href="#">${item.title}</a>
                </h3><!-- End .product-title -->
            </div><!-- End .product -->
        </td>
        <td class="price-col">$${item.price}</td>
        <td class="quantity-col">
            <div class="cart-product-quantity">
                <input type="number" class="form-control" value="1" min="1" max="10" step="1" data-decimals="0" required>
            </div><!-- End .cart-product-quantity -->
        </td>
        <td class="total-col">$990.00</td>
        <td class="remove-col"><button class="btn-remove"><i class="icon-close"></i></button></td>
        `;

        // // Thêm sự kiện click cho nút "Delete"
        // const removeButton = cartItem.querySelector(".remove_from_cart");
        // removeButton.addEventListener("click", () => {
        //     const id = removeButton.getAttribute("data-id");

        //     // Lấy giỏ hàng từ localStorage
        //     let cart = JSON.parse(localStorage.getItem("cart")) || [];

        //     // Lọc ra item có id cần xóa
        //     const updatedCart = cart.filter((item) => item.id !== id);

        //     // Cập nhật giỏ hàng trong localStorage
        //     localStorage.setItem("cart", JSON.stringify(updatedCart));

        //     // Gọi hàm hiển thị giỏ hàng mới
        //     displayCartItems();
        CartPage.appendChild(cartItem);
        });
    };

    displayCartPages();