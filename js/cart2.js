
//filter array

let filterarray = [];
let galleryarray =[
    {
        id : 1,
        name: "Iphone 12 Pro Max White",
        price: "$900,00",
        src : "./image/Iphone12ProMaxWhite.webp",
        desc :"Lorem ipsum dolor sit amet consectetur adipisicing elit."
    
    },
    {
        id : 2,
        name: "Iphone 12 Pro Max Dark Blue",
        price: "$900,00",
        src : "./image/Iphone12ProMaxDarkBlue.webp",
        desc :"Lorem ipsum dolor sit amet consectetur adipisicing elit."
    
    },
    {
        id : 3,
        name: "Iphone 13",
        price: "$900,00",
        src : "./image/Iphone12.png",
        desc :"Lorem ipsum dolor sit amet consectetur adipisicing elit."
    
    },
    {
        id : 4,
        name: "AirPod Pro",
        price: "$900,00",
        src : "./image/AirPodPro.png",
        desc :"Lorem ipsum dolor sit amet consectetur adipisicing elit."
    
    },
    {
        id : 5,
        name: "AirPod 2nd Generation",
        price: "$900,00",
        src : "./image/Airpod2.webp",
        desc :"Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },

    {
        id : 6,
        name: "Headphone",
        price: "$900,00",
        src : "./image/tainghe.png",
        desc :"Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        id : 7,
        name: "MacBook",
        price: "$900,00",
        src : "./image/macBook.png",
        desc :"Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        id : 8,
        name: "Speaker",
        price: "$900,00",
        src : "./image/loaJBL.png",
        desc :"Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },

    {
        id : 9,
        name: "Samsung Galaxy Z Fold 5",
        price: "$900,00",
        src : "./image/galaxyzfold5xam1.webp",
        desc :"Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },

    {
        id : 10,
        name: "Samsung Z Flip 5",
        price: "$900,00",
        src : "./image/Zplip5.webp",
        desc :"Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },

    {
        id : 11,
        name: "Xiaomi Mi11 Ultra",
        price: "$900,00",
        src : "./image/XiaomiMi11Ultra.png",
        desc :"Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },

    {
        id : 12,
        name: "Samsung Galaxy S21 Ultra 5G",
        price: "$900,00",
        src : "./image/Samsung Galaxy S21 Ultra 5G.png",
        desc :"Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },    
    
    {
        id : 13,
        name: "MacBook Pro",
        price: "$900,00",
        src : "./image/MacBookPro.png",
        desc :"Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        id : 14,
        name: "MacBook Pro",
        price: "$900,00",
        src : "./image/MacBookPro.png",
        desc :"Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        id : 13,
        name: "MacBook Pro",
        price: "$900,00",
        src : "./image/MacBookPro.png",
        desc :"Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    
    
]


showGallery(galleryarray)

// function showGallery(currarray){

//     document.getElementById("card").innerText = "";

//     for(var i = 0; i < currarray.length; i++)
//     {
//         document.getElementById("card").innerHTML += 
//         `
//             <div class="col-md-4 mt-4" id = "card">
//                 <div class="card p-3 ps-5 pe-5">
//                     <h4 class="text-capitalize text-center">${currarray[i].name}<h4/>
//                     <img src ="${currarray[i].src}" class ="object-fit-contain" width = "100% height ="350px">
//                     <p class="mt-2">${currarray[i].desc}</p>
//                     <button class = "btn btn-primary w-100 mx-auto">More</button>
//                     <button class = "btn btn-primary w-100 mx-auto">Add to cart</button>
//                 <div/>
//             </div>

//         `
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
                    <p class="mt-2">${currarray[i].desc}</p>
                    <p class="mt-2">${currarray[i].price}</p>
                    <div class="d-flex justify-content-between">
                        <button class="btn btn-primary">Details</button>
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
