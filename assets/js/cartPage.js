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
        CartPage.appendChild(cartItem);
    });
};

function calTotalPage(){
    let totalNum = 0;
    total = document.getElementById("summary-subtotal");
    const items = JSON.parse(localStorage.getItem("cart")) || [];
    items.forEach((item) => {
        totalNum += Number(item.price);
    });
    total.innerHTML= "$" + totalNum;
    document.getElementById("summary-total").innerHTML = "$" + totalNum;
    return totalNum
}

const radioButtons = document.getElementsByName('shipping');

radioButtons.forEach(radioButton => {
  radioButton.addEventListener('click', function() {
    if (this.checked) {
      if (this.id == "free-shipping"){
        document.getElementById("summary-total").innerHTML = "$" + (calTotalPage() + 0);
      } else if (this.id == "standart-shipping"){
        document.getElementById("summary-total").innerHTML = "$" + (calTotalPage() + 10);
      } else if (this.id == "express-shipping"){
        document.getElementById("summary-total").innerHTML = "$" + (calTotalPage() + 20);
      }
    }
  });
});

calTotalPage();
displayCartPages();