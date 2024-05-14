// Product data array
var products = [
    {
      imageUrl: "./assets/images/product-1.png",
      name: "Office Chairs"
    },
    {
      imageUrl: "./assets/images/product-5.png",
      name: "Bunker Beds"
    },
    {
      imageUrl: "https://i.pinimg.com/564x/1f/85/ca/1f85ca612150ac4b0f6f2ab61c0d5466.jpg",
      name: "Restaurants"
    },
    {
      imageUrl: "https://i.pinimg.com/564x/31/14/03/311403c5a9851d49c378dd132f413d48.jpg",
      name: "Waiting Chairs"
    },
    {
      imageUrl: "https://c0.wallpaperflare.com/preview/135/576/884/brown-and-gray-wooden-tables-and-chairs.jpg",
      name: "College Desks and Benches"
    },
    {
      imageUrl: "./assets/images/product-6.png",
      name: "School Chairs"
    },
    {
      imageUrl: "./assets/images/product-8.png",
      name: "Study Chairs"
    }
  ];
  
  // Function to dynamically generate product list items
  function generateProductItems() {
    var productList = document.getElementById("product-list");
    products.forEach(function(product) {
      var li = document.createElement("li");
      li.classList.add("scrollbar-item");
      li.innerHTML = `
        <div class="company-card">
          <figure class="card-banner img-holder" style="--width: 500; --height: 600;">
            <img src="${product.imageUrl}" width="500" height="600" alt="${product.name}" class="img-cover">
            <ul class="company-icon">
              <li>
                
              </li>
            </ul>
          </figure>
          <div class="card-content">
            <h3 class="card-title">${product.name}</h3>
          </div>
        </div>
      `;
      productList.appendChild(li);
    });
  }
  
  // Call the function to generate product items
  generateProductItems();
  
// Function to loop the scrolling content
