const CartItems = document.querySelector(".dropdown-cart-products");

let cartTotal = 0;

function displayCartItems() {
    const items = JSON.parse(localStorage.getItem("cart")) || [];
    CartItems.innerHTML = ""; // Xóa nội dung hiện tại để tránh trùng lặp

    items.forEach((item) => {
        const cartItem = document.createElement("div");
        cartItem.className = "product";
        cartItem.innerHTML = `
        <div class="product-cart-details">
            <h4 class="product-title">
                <a href="product.html">${item.title}</a>
            </h4>

            <span class="cart-product-info">
                <span class="cart-product-qty" id="cart-product-qty">1</span>
                x $${item.price}
            </span>
        </div><!-- End .product-cart-details -->

        <figure class="product-image-container">
            <a href="product.html" class="product-image">
                <img src="${item.image}" alt="product">
            </a>
        </figure>
        <a href="#" class="btn-remove" title="Remove Product" data-id="${item.id}"><i class="icon-close"></i></a>
        `;

        // Thêm sự kiện click cho nút "Delete"
        const removeButton = cartItem.querySelector(".btn-remove");
        removeButton.addEventListener("click", () => {
            const id = removeButton.getAttribute("data-id");

            // Lấy giỏ hàng từ localStorage
            let cart = JSON.parse(localStorage.getItem("cart")) || [];

            // Lọc ra item có id cần xóa
            const updatedCart = cart.filter((item) => item.id !== id);

            // Cập nhật giỏ hàng trong localStorage
            localStorage.setItem("cart", JSON.stringify(updatedCart));

            // Gọi hàm hiển thị giỏ hàng mới
            displayCartItems();
            calTotal();
        })
        CartItems.appendChild(cartItem);
    });
};

function calTotal(){
    let totalNum = 0;
    total = document.getElementById("cart-total-price");
    const items = JSON.parse(localStorage.getItem("cart")) || [];
    items.forEach((item) => {
        totalNum += Number(item.price);
    });
    total.innerHTML= "$" + totalNum;
}

calTotal();
displayCartItems();