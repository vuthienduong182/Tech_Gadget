const product =[
    {
        id: 0,
        image: 'assets/images/samsung/galaxy-z-flip5-highlights-camera-flexcam.jpg',
        title: 'Samsung Galaxy Z Flip 5 512GB',
        price: 899,
    },

    {
        id: 1,
        image: 'assets/images/samsung/samsunggalaxyzflipxam4.webp',
        title: 'Samsung Galaxy Z Flip 4 512GB',
        price: 890,
    },
    {
        id: 2,
        image: 'assets/images/samsung/galaxy-z-flip5-highlights-camera-flexcam.jpg',
        title: 'Samsung Galaxy Z Flip 5 512GB',
        price: 899,
    },
    {
        id: 3,
        image: 'assets/images/iPhone/iphone14pro.webp',
        title: 'iPhone 14 Pro 512GB',
        price: 899,
    },
    {
        id: 4,
        image: 'assets/images/iPhone/iphone15blue.webp',
        title: 'iPhone 15 Pro 512GB',
        price: 899,
    },
    {
        id: 5,
        image: 'assets/images/samsung/galaxy-z-fold-5-kem-1.webp',
        title: 'Samsung Galaxy Z Fold 5 512GB',
        price: 899,
    },
    {
        id: 6,
        image: 'assets/images/smartwatch/apple-watch-se-2023.webp',
        title: 'Apple Watch SE 2023',
        price: 899,
    },
]

const categories = [...new Set(product.map((item)=> {return item}))]

document.getElementById("q").addEventListener('keyup', (e)=>{
    const searchData = e.target.value.toLowerCase();
    const filterData = categories.filter((item)=> {
        return item.title.toLowerCase().includes(searchData)
    })
    displayItem(filterData)
});

const displayItem = (item)=> {
    document.getElementById('root').innerHTML = item.map((item)=> {
        var{image, title, price} = item;
        return(
            ` 
                <div class="col-6 col-md-4 col-lg-4 col-xl-3">
                    <div class="product">
                        <figure class="product-media">
                            <a href="product.html">
                                <img src= ${image} alt="Product image" class="product-image">
                            </a>

                            <div class="product-action-vertical">
                                <a href="#" class="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                            </div>

                            <div class="product-action action-icon-top">
                                <a href="#" class="btn-product btn-cart"><span>add to cart</span></a>
                                <a href="popup/quickView.html" class="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
                                <a href="#" class="btn-product btn-compare" title="Compare"><span>compare</span></a>
                            </div>
                        </figure>

                        <div class="product-body">
                            <div class="product-cat">
                                <a href="#">Laptop</a>
                            </div>
                            <h3 class="product-title"><a href="product.html">$ ${title}</a></h3>
                            <div class="product-price">
                                $ ${price}
                            </div>
                            <div class="ratings-container">
                                <div class="ratings">
                                    <div class="ratings-val" style="width: 0%;"></div>
                                </div>
                                <span class="ratings-text">( 809 Reviews )</span>
                            </div>

                            <div class="product-nav product-nav-dots">
                                <a href="#" class="active" style="background: #727272;"><span class="sr-only">Color name</span></a>
                                <a href="#" style="background: #333333;"><span class="sr-only">Color name</span></a>
                            </div>

                        </div>
                    </div>
                </div>
            
        `
        )
    }).join('')
};

displayItem(categories);