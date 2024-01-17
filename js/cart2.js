//filter array

let filterarray = [];
let galleryarray =[
    {
        id : 1,
        name: "Iphone 15 Pro Max ",
        price: "$900,00",
        link: "./ShoppingDetails/Detail_Iphone15.html",
        src : "./image/iphone15promax.webp",
        desc :"iPhone 15 Pro Max 256GB Natural Titan"
    
    },
    {
        id : 2,
        name: "Iphone 14 Pro Max",
        price: "$900,00",
        link: "./ShoppingDetails/Detail_Iphone14.html",
        src : "./image/iphone_14_pro.webp",
        desc :"iPhone 14 Pro Max 128GB Purple"
    
    },
    {
        id : 3,
        name: "Iphone 13",
        price: "$900,00",
        link: "./ShoppingDetails/Detail_Iphone13.html",
        src : "./image/Iphone12.png",
        desc :"iPhone 13 128GB"
    
    },
    {
        id : 4,
        name: "AirPod Pro",
        price: "$249",
        link: "./ShoppingDetails/Detail_AirPod.html",
        src : "./image/AirPodPro.png",
        desc :"AirPods Pro 2nd generation (USB-C)"
    
    },
    {
        id : 5,
        name: "AirPod 2nd Generation",
        price: "$129",
        src : "./image/Airpod2.webp",
        desc :"AirPods 2nd generation"
    },

    {
        id : 6,
        name: "Sony-WH1000XM5",
        price: "$900,00",
        link: "./ShoppingDetails/Detail_WH100XM5.html",
        src : "./image/sonywh1000xm5.webp",
        desc :"Noise cancellation technology WH-1000XM5"
    },
    {
        id : 7,
        name: "MacBook Pro M2",
        price: "$900,00",
        link: "./ShoppingDetails/Detail_MacM2.html",
        src : "./image/macBook.png",
        desc :"Apple MacBook Air M1 256GB 2020"
    },
    {
        id : 8,
        name: "JBL Charge 4",
        price: "$900,00",
        src : "./image/loaJBL.png",
        desc :"Wireless Speaker JBL Charge 4"
    },

    {
        id : 9,
        name: "Samsung Galaxy Z Fold 5",
        price: "$900,00",
        link: "./ShoppingDetails/Detail_ZFold.html",
        src : "./image/galaxyzfold5xam1.webp",
        desc :"Samsung Galaxy Z Fold5 12GB 256GB"
    },

    {
        id : 10,
        name: "Samsung Z Flip 5",
        price: "$900,00",
        link: "./ShoppingDetails/Detail_ZFlip.html",
        src : "./image/Zplip5.webp",
        desc :"Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },

    {
        id : 11,
        name: "Samsung Galaxy S23",
        price: "$900,00",
        link: "./ShoppingDetails/Detail_S23.html",
        src : "./image/samsungGalaxys23.webp",
        desc :"Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },

    {
        id : 12,
        name: "Samsung Galaxy S21 Ultra 5G",
        price: "$900,00",
        src : "./image/samsunggalaxys21ultra.png",
        desc :"Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },    
    
    {
        id : 13,
        name: "MacBook Pro 14 inch",
        price: "$900,00",
        src : "./image/macbook_pro_14.webp",
        desc :"Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        id : 14,
        name: "MacBook Air M1",
        price: "$900,00",
        src : "./image/macbook_air_m2.webp",
        desc :"Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },

    {
        id : 15,
        name: "MacBook Pro 13",
        price: "$900,00",
        src : "./image/macbook_pro_13.webp",
        desc :"Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },

    {
        id : 16,
        name: "Sony Playstation 5 Bundle ASIA-00441",
        price: "$900,00",
        src : "./image/Playstation5.webp",
        desc :"Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },

    {
        id : 17,
        name: "MacBook Pro 13",
        price: "$900,00",
        src : "./image/taycamps5.webp",
        desc :"Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },    
    
    {
        id : 18,
        name: "OFFICIAL XBOX SERIES X&S CONTROLLER ",
        price: "$900,00",
        src : "./image/taycamxbox.webp",
        desc :"Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    
    
]


showGallery(galleryarray)


function showGallery(currarray) {

    document.getElementById("card").innerText = "";

    for (var i = 0; i < currarray.length; i++) {
        document.getElementById("card").innerHTML +=
        `
            <div class="col-md-4 mt-4" id="card">
                <div class="card p-3 ps-5 pe-5">
                    <h4 class="text-capitalize text-center">${currarray[i].name}</h4>
                    <img src="${currarray[i].src}" width="auto" height="auto">
                    <p class="mt-2">${currarray[i].desc}</p>
                    <p class="mt-2">${currarray[i].price}</p>
                    <div class="d-flex justify-content-between">
                        <a href="${currarray[i].link}"><button class="btn btn-primary" >Details</button></a>
                        <button class="btn btn-primary">Add to cart</button>
                    </div>
                </div>
            </div>
        `;
    }
}





//live searching

document.getElementById("myinput").addEventListener("keyup", function(){
    let text = document.getElementById("myinput").value;

    filterarray = galleryarray.filter(function(a){
        if(a.name.includes(text)){
            return a.name;
        }

    }) ;
    if(this.value == ""){
        showGallery(galleryarray);
    }
    else{
        if(filterarray ==""){
            document.getElementById("para").style.display = 'block';
            document.getElementById("card").innerHTML = "";
        }
        else{
            showGallery(filterarray);
            document.getElementById("para").style.display='none';

        }
    }
})
