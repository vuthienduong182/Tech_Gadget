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
      src1 : "/image/Macbook/",
      desc :"Lorem ipsum dolor sit amet consectetur adipisicing elit."
  }, 
]

function fillDetails(index){
  let title = document.getElementById("product_title");
  title.innerHTML=galleryarray[index].name;
  let price = document.getElementById("price");
  price.innerHTML=galleryarray[index].price;
}