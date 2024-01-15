
//filter array

let filterarray = [];
let galleryarray =[
    {
        id : 1,
        name: "Apple Watch Series 3",
        src : "./image/IphoneXR.png",
        desc :"Lorem ipsum dolor sit amet consectetur adipisicing elit."
    
    },
    {
        id : 2,
        name: "Iphone XS Max",
        src : "./image/Iphone12Promax.png",
        desc :"Lorem ipsum dolor sit amet consectetur adipisicing elit."
    
    },
    {
        id : 3,
        name: "Iphone 13",
        src : "./image/Iphone12.png",
        desc :"Lorem ipsum dolor sit amet consectetur adipisicing elit."
    
    },
    {
        id : 4,
        name: "AirPod Pro",
        src : "./image/AirPodPro.png",
        desc :"Lorem ipsum dolor sit amet consectetur adipisicing elit."
    
    },
    {
        id : 5,
        name: "AirPod 2",
        src : "./image/AirPod2.png",
        desc :"Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },

    {
        id : 6,
        name: "Headphone",
        src : "./image/tainghe.png",
        desc :"Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        id : 7,
        name: "MacBook",
        src : "./image/macBook.png",
        desc :"Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        id : 8,
        name: "Speaker",
        src : "./image/loaJBL.png",
        desc :"Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },

    {
        id : 9,
        name: "Samsung Galaxy S9+",
        src : "./image/samsungGalaxys9.png",
        desc :"Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },

    {
        id : 10,
        name: "AirPod MAX",
        src : "./image/AirPodMax.png",
        desc :"Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },

    {
        id : 11,
        name: "Xiaomi Mi11 Ultra",
        src : "./image/XiaomiMi11Ultra.png",
        desc :"Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },

    {
        id : 12,
        name: "Samsung Galaxy S21 Ultra 5G",
        src : "./image/Samsung Galaxy S21 Ultra 5G.png",
        desc :"Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },    
    
    {
        id : 13,
        name: "MacBook Pro",
        src : "./image/MacBookPro.png",
        desc :"Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    
    
]


showGallery(galleryarray)

function showGallery(currarray){

    document.getElementById("card").innerText = "";

    for(var i = 0; i < currarray.length; i++)
    {
        document.getElementById("card").innerHTML += 
        `
        
            <div class="col-md-4 mt-4" id = "card">
                <div class="card p-3 ps-5 pe-5">
                    <h4 class="text-capitalize text-center">${currarray[i].name}<h4/>
                    <img src ="${currarray[i].src}" width = "100% height ="350px">
                    <p class="mt-2">${currarray[i].desc}</p>
                    <button class = "btn btn-primary w-100 mx-auto">More</button>
                <div/>
            </div>

        `
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
