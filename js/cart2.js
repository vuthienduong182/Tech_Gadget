
//filter array

let filterarray = [];
let galleryarray =[
    {
        id : 1,
        name: "samsung watch",
        src : "./image/samsungwatch.jpg",
        desc :"Lorem ipsum dolor sit amet consectetur adipisicing elit."
    
    },
    {
        id : 2,
        name: "ipad",
        src : "./image/ipad.jpg",
        desc :"Lorem ipsum dolor sit amet consectetur adipisicing elit."
    
    },
    {
        id : 3,
        name: "iphone 13",
        src : "./image/iphone13.jpg",
        desc :"Lorem ipsum dolor sit amet consectetur adipisicing elit."
    
    },
    {
        id : 4,
        name: "samsung tab",
        src : "./image/samsungtabjpg.jpg",
        desc :"Lorem ipsum dolor sit amet consectetur adipisicing elit."
    
    },
    {
        id : 5,
        name: "samsung watch",
        src : "./image/samsungwatch.jpg",
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

    
]


showGallery(galleryarray)

function showGallery(currarray){

    document.getElementById("card").innerText = "";

    for(var i = 0; i < currarray.length; i++)
    {
        document.getElementById("card").innerHTML += 
        `
        <div class="col-md-4 mt-3">
            <div class="card p-3 ps-5 pe-5">
                <h4 class="text-capitalize text-center">${currarray[i].name}<h4/>
                <img src ="${currarray[i].src}" width = "100% height ="320px">
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
