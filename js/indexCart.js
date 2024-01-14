import cart from "./productDetail.js";
import products from "../products.js";

let app = document.getElementById('app');
let temporaryContent = document.getElementById('temporaryContent');

//load tempalte file

const loadProductDetails = () =>{
    fetch('./productDetails.html')
    .then(response => response.text())
    .then(html => {
        app.innerHTML = html;
        let contentTab = document.getElementById('contentTab');
        contentTab.innerHTML = temporaryContent.innerHTML;
        temporaryContent.innerHTML = null;
        cart();
        initApp();
    })
}

loadProductDetails();
const initApp = ( ) =>{

    let listProduct = document.querySelector('.listProduct');
    listProduct.innerHTML = null;
    products.forEach(products =>{
        let newProduct = document.createElement('div');
        newProduct.classList.add('item');
        newProduct.innerHTML = 
        `
            <img src = "${products.image}"/>
            <h2>${products.name}</h2>
            <div class ="price">${products.price}</div>
            <button class="addCart">
                Add To Cart
            </button>
        `

        listProduct.appendChild(newProduct)
    })
}

