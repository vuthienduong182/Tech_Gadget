const product =[
    {
        id: 0,
        image: 'assets/images/samsung/galaxy-z-flip5-highlights-camera-flexcam.jpg',
        topic: 'Smartphones',
        title: 'Samsung Galaxy Z Flip 5 512GB',
        price: 899,
        link: '#',
    },

    {
        id: 1,
        image: 'assets/images/samsung/samsunggalaxyzflipxam4.webp',
        topic: 'Smartphones',
        title: 'Samsung Galaxy Z Flip 4 512GB',
        price: 890,
        link: 'product.html',

    },
    {
        id: 2,
        image: 'assets/images/samsung/sm-s901_galaxys22_front_phantomwhite_211122.webp',
        topic: 'Smartphones',
        title: 'Samsung Galaxy Z Flip 5 512GB',
        price: 899,
        link: '#',

    },

    {
        id: 3,
        image: 'assets/images/iPhone/iphone14pro.webp',
        topic: 'Smartphones',
        title: 'iPhone 14 Pro 512GB',
        price: 899,
        link: '#',

    },

    {
        id: 4,
        image: 'assets/images/iPhone/iphone15blue.webp',
        topic: 'Smartphones',
        title: 'iPhone 15 Pro 512GB',
        price: 899,
        link: 'productIphone15.html'

    },
    {
        id: 5,
        image: 'assets/images/samsung/galaxy-z-fold-5-kem-1.webp',
        topic: 'Smartphones',
        title: 'Samsung Galaxy Z Fold 5 512GB',
        price: 899,
        link: '#',

    },
    {
        id: 6,
        image: 'assets/images/smartwatch/apple-watch-se-2023.webp',
        topic: 'Smartwatch',
        title: 'Apple Watch SE 2023',
        price: 899,
        link: '#',

    },

    {
        id: 7,
        image: 'assets/images/laptop/macbook-pro-2021-06_8.webp',
        topic: 'Laptop',
        title: 'Macbook Pro 14 M1 Pro 10 CPU - 16 GPU 16GB 1TB 2021',
        price: 1909,
        link: 'productMacbookPro14.html',

    },

    {
        id: 8,
        image: 'assets/images/laptop/macbook_air_m2_1_1.jpg',
        topic: 'Laptop',
        title: 'Macbook Air M2 256GB',
        price: 1900,
        link: '#',

    },

    {
        id: 9,
        image: 'assets/images/laptop/20_6_3_2.webp',
        topic: 'Laptop',
        title: 'DELL XPS 2022 8GB 512GB',
        price: 899,
        link: '#',
        
    },

    {
        id: 10,
        image: 'assets/images/smartwatch/1_568.webp',
        topic: 'Smartwatch',
        title: 'Samsung Galaxy Watch SE 2022',
        price: 609,
        link: '#',
        
    },

    {
        id: 11,
        image: 'assets/images/samsung/galaxy-z-fold-5-kem-1.webp',
        topic: 'Smartphones',
        title: 'Samsung Galaxy Z Fold 5 512 GB',
        price: 899,
        link: '#',
        
    },

    {
        id: 12,
        image: 'assets/images/samsung/s23-ultra-xanh.webp',
        topic: 'Smartphones',
        title: 'Samsung Galaxy S23 Ultra 5G',
        price: 899,
        link: '#',
        
    },

    {
        id: 13,
        image: 'assets/images/iPhone/iphone-14_1.png',
        topic: 'Smartphones',
        title: 'iPhone 14 128GB',
        price: 799,
        link: '#',
        
    },

    {
        id: 14,
        image: 'assets/images/iPhone/vn_iphone_15_green.webp',
        topic: 'Smartphones',
        title: 'iPhone 15 512GB',
        price: 999,
        link: '#',
        
    },

    {
        id: 15,
        image: 'assets/images/smartwatch/apple-watch-ultra-2-49mm-4g_1_.jpg',
        topic: 'Smartwatch',
        title: 'Apple Watch Ultra 2023',
        price: 899,
        link: 'productAppleWatchUltra.html',
        
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
        var{image, topic,title, price, link} = item;
        return(
            ` 
                <div class="col-6 col-md-4 col-lg-4 col-xl-3">
                    <div class="product">
                        <figure class="product-media">
                            <a href= ${link}>
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
                                <a href="#"> ${topic}</a>
                            </div>
                            <h3 class="product-title"><a href="product.html"> ${title}</a></h3>
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
            </div>
            
        `
        )
    }).join('')
};

displayItem(categories);