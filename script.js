let products = {
  data: [
    {
      productName: "Regular White T-Shirt",
      category: "Topwear",
      price: "30",
      image: "./assests/white-tshirt.jpg",
    },
    {
      productName: "Beige Short Skirt",
      category: "Bottomwear",
      price: "49",
      image: "./assests/short-skirt.jpg",
    },
    {
      productName: "Sporty SmartWatch",
      category: "Watch",
      price: "99",
      image: "./assests/sporty-smartwatch.jpg",
    },
    {
      productName: "Fossil Watch",
      category: "Watch",
      price: "3000",
      image: "./assests/men8.jpg",
    },
    {
      productName: "VictorInox Watch",
      category: "Watch",
      price: "2999",
      image: "./assests/men10.jpg",
    },
    {
      productName: "Titan Watch",
      category: "Watch",
      price: "5000",
      image: "./assests/men9.jpg",
    },
    {
      productName: "Basic Knitted Top",
      category: "Topwear",
      price: "29",
      image: "./assests/knitted-top.jpg",
    },
    {
      productName: "Black Leather Jacket",
      category: "Jacket",
      price: "129",
      image: "./assests/black-leather-jacket.jpg",
    },
    {
      productName: "Stylish Pink Trousers",
      category: "Bottomwear",
      price: "89",
      image: "./assests/pink-trousers.jpg",
    },
    {
      productName: "Brown Men's Jacket",
      category: "Jacket",
      price: "189",
      image: "./assests/brown-jacket.jpg",
    },
    {
      productName: "Comfy Gray Pants",
      category: "Bottomwear",
      price: "49",
      image: "./assests/comfy-gray-pants.jpg",
    },
    {
      productName: "Iphone 16",
      category: "Mobile",
      price: "80000",
      image: "./assests/phone1.jpg",
    },
     {
      productName: "Iphone 15",
      category: "Mobile",
      price: "60000",
      image: "./assests/phone2.jpg",
    },
     {
      productName: "Iphone 14",
      category: "Mobile",
      price: "50000",
      image: "./assests/phone3.jpg",
    },
     {
      productName: "Iphone 16 pro",
      category: "Mobile",
      price: "120000",
      image: "./assests/phone4.jpg",
    },
    {
      productName: "Samsung s25 ultra",
      category: "Mobile",
      price: "110000",
      image: "./assests/phone12.jpg",
    },
     {
      productName: "Rebook Shoe",
      category: "Shoe",
      price: "3000",
      image: "./assests/men11.jpg",
    },
    {
      productName: "Puma Shoe",
      category: "Shoe",
      price: "2500",
      image: "./assests/men12.jpg",
    },
    {
      productName: "Puma Shoe",
      category: "Shoe",
      price: "4500",
      image: "./assests/men13.jpg",
    },
    {
      productName: "Leather Shoe",
      category: "Shoe",
      price: "3000",
      image: "./assests/men14.jpg",
    },
     {
      productName: "LG OLED Tv",
      category: "Tv",
      price: "50000",
      image: "./assests/tv1.jpg",
    },
     {
      productName: "Sony UHD Tv",
      category: "Tv",
      price: "30000",
      image: "./assests/tv2.jpg",
    },
     {
      productName: "XIAOMI OLED Tv",
      category: "Tv",
      price: "35000",
      image: "./assests/tv3.jpg",
    },
     {
      productName: "Samsung OLED Tv",
      category: "Tv",
      price: "60000",
      image: "./assests/tv4.jpg",
    },
  ],
};

for (let i of products.data) {
  
  let card = document.createElement("div");

  card.classList.add("card", i.category, "hide");
  
  let imgContainer = document.createElement("div");
  imgContainer.classList.add("image-container");
  
  let image = document.createElement("img");
  image.setAttribute("src", i.image);
  imgContainer.appendChild(image);
  card.appendChild(imgContainer);

  let container = document.createElement("div");
  container.classList.add("container");

  let name = document.createElement("h5");
  name.classList.add("product-name");
  name.innerText = i.productName.toUpperCase();
  container.appendChild(name);
  
  let price = document.createElement("h6");
  price.innerText = "$" + i.price;
  container.appendChild(price);

  card.appendChild(container);
  document.getElementById("products").appendChild(card);
}


function filterProduct(value) {
  //Button class code
  let buttons = document.querySelectorAll(".button-value");
  buttons.forEach((button) => {
   
    if (value.toUpperCase() == button.innerText.toUpperCase()) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });

  
  let elements = document.querySelectorAll(".card");
  
  elements.forEach((element) => {
   
    if (value == "all") {
      element.classList.remove("hide");
    } else {
      
      if (element.classList.contains(value)) {
        
        element.classList.remove("hide");
      } else {
        
        element.classList.add("hide");
      }
    }
  });
}


document.getElementById("search").addEventListener("click", () => {
  
  let searchInput = document.getElementById("search-input").value;
  let elements = document.querySelectorAll(".product-name");
  let cards = document.querySelectorAll(".card");

 
  elements.forEach((element, index) => {
    
    if (element.innerText.includes(searchInput.toUpperCase())) {
     
      cards[index].classList.remove("hide");
    } else {
      
      cards[index].classList.add("hide");
    }
  });
});

window.onload = () => {
  filterProduct("all");
};

