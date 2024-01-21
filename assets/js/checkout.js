const CartCheckOut = document.querySelector("#body-summary");

function displayCartCheckOut() {
    const items = JSON.parse(localStorage.getItem("cart")) || [];
    CartCheckOut.innerHTML = ""; // Xóa nội dung hiện tại để tránh trùng lặp

    items.forEach((item) => {
        const cartItem = document.createElement("tr");
        cartItem.innerHTML = `
            <td><a href="#">${item.title}</a></td>
            <td>$${item.price}</td>
        `;
        CartCheckOut.appendChild(cartItem);
    });
    const cartItem1 = document.createElement("tr");
    cartItem1.className = 'summary-subtotal'
    cartItem1.innerHTML = `
        <td>Subtotal:</td>
        <td id="summary-subtotal">$160.00</td>
    `;
    
    const cartItem2 = document.createElement("tr");
    cartItem2.className = 'summary-subtotal'
    cartItem2.innerHTML = `
        <td>Shipping:</td>
        <td>Free shipping</td>
    `;
    const cartItem3 = document.createElement("tr");
    cartItem3.className = 'summary-total'
    cartItem3.innerHTML = `
        <td>Total:</td>
        <td id="summary-total">$160.00</td>
    `;
    CartCheckOut.appendChild(cartItem1)
    CartCheckOut.appendChild(cartItem2)
    CartCheckOut.appendChild(cartItem3)
    CartCheckOut.appendChild(total);
};

displayCartCheckOut()