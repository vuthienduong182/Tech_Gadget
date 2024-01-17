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
        desc :"Samsung Z Flip 5 Green Neon"
    },

    {
        id : 11,
        name: "Samsung Galaxy S23",
        price: "$900,00",
        link: "./ShoppingDetails/Detail_S23.html",
        src : "./image/samsungGalaxys23.webp",
        desc :"Samsung Galaxy S23 Dark Green 128gb"
    },

    {
        id : 12,
        name: "Samsung Galaxy S21 Ultra 5G",
        price: "$900,00",
        link:"/Tech_Gadget/ShoppingDetails/Detail_S21_Ultra.html",
        src : "./image/samsunggalaxys21ultra.png",
        desc :"Samsung Galaxy S21 Ultra 5G LightBlue 256gb"
    },    
    
    {
        id : 13,
        name: "MacBook Pro 14 inch",
        price: "$900,00",
        link:"/Tech_Gadget/ShoppingDetails/Detail_MacM2.html",
        src : "./image/macbook_pro_14.webp",
        desc :"MacBook Pro 14 inch 528GB"
    },
    {
        id : 14,
        name: "MacBook Air M1",
        price: "$900,00",
        link:"/Tech_Gadget/ShoppingDetails/Detail_MacM2.html",
        src : "./image/macbook_air_m2.webp",
        desc :"MacBook Air M1 128gb"
    },

    {
        id : 15,
        name: "MacBook Pro 13",
        price: "$900,00",
        link:"/Tech_Gadget/ShoppingDetails/Detail_MacM2.html",
        src : "./image/macbook_pro_13.webp",
        desc :"MacBook Pro 13 Inch"
    },

    {
        id : 16,
        name: "Sony Playstation 5 Bundle ASIA-00441",
        price: "$900,00",
        link:"#",
        src : "./image/Playstation5.webp",
        desc :"Sony Playstation 5 Bundle ASIA-00441 White"
    },

    {
        id : 17,
        name: "Playstation 5 Controler",
        price: "$900,00",
        link:"#",
        src : "./image/taycamps5.webp",
        desc :"Playstation 5 Controler"
    },    
    
    {
        id : 18,
        name: "OFFICIAL XBOX SERIES X&S CONTROLLER ",
        price: "$900,00",
        link:"#",
        src : "./image/taycamxbox.webp",
        desc :"OFFICIAL XBOX SERIES X&S CONTROLLER"
    },
    
    
]


showGallery(galleryarray)


// function showGallery(currarray) {

//     document.getElementById("card").innerText = "";

//     for (var i = 0; i < currarray.length; i++) {
//         document.getElementById("card").innerHTML +=
//         `
//             <div class="col-md-4 mt-4" id="card">
//                 <div class="card p-3 ps-5 pe-5">
//                     <h4 class="text-capitalize text-center">${currarray[i].name}</h4>
//                     <img src="${currarray[i].src}" width="auto" height="auto">
//                     <p class="mt-2" style="font-size: 13px;font-family: 'Poppins', sans-serif;">${currarray[i].desc}</p>
//                     <p class="mt-2" style="color: red; font-size: larger;">${currarray[i].price}</p>
//                     <div class="d-flex justify-content-between">
//                         <a href="${currarray[i].link}"><button class="btn btn-primary" >Details</button></a>
//                         <button class="btn btn-primary">Add to cart</button>
//                     </div>
//                 </div>
//             </div>
//         `;
//     }
// }

function showGallery(currarray) {

    document.getElementById("card").innerText = "";

    for (var i = 0; i < currarray.length; i++) {
        document.getElementById("card").innerHTML +=
            `
            <div class="col-md-4 mt-4" id="card">
                <div class="card p-3 ps-5 pe-5">
                    <h4 class="text-capitalize text-center">${currarray[i].name}</h4>
                    <img src="${currarray[i].src}" width="auto" height="auto">
                    <p class="mt-2" style="font-size: 13px;font-family: 'Poppins', sans-serif;text-align: center">${currarray[i].desc}</p>
                    <p class="mt-2" style="color: red; font-size: 13px; font-family: 'Poppins', sans-serif; text-align: center">${currarray[i].price}</p>
                    <div class="d-flex justify-content-center">
                        <a href="${currarray[i].link}" class="btn btn-primary me-2">Details</a>
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
