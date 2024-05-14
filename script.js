// Function to fetch products from products.json
function fetchProducts() {
    return fetch('products.json')
        .then(response => response.json())
        .catch(error => console.error('Error fetching products:', error));
}

// Function to render products with a maximum of 10 products
function renderProducts(products) {
    const productRow = document.getElementById('productRow');
    productRow.innerHTML = '';

    // Limit the number of products to display
    const limitedProducts = products.slice(0, 10);

    limitedProducts.forEach(product => {
        const card = document.createElement('div');
        card.classList.add('col-md-4', 'd-flex');
        card.innerHTML = `
            <div class="card mb-4" style="margin-bottom: 20px;">
                <img class="card-img-top" src="${product.image}" alt="Product Image">
                <div class="card-body">
                    <!-- Add your product information here -->
                </div>
            </div>
        `;
        productRow.appendChild(card);
    });
}

// Function to filter products by category
function filterByCategory(category) {
    fetchProducts().then(products => {
        const filteredProducts = products.filter(product => {
            const categoryFromPath = product.image.split('/')[2];
            return categoryFromPath.toLowerCase() === category.toLowerCase();
        });
        renderProducts(filteredProducts);
    });
}

// Initial render of all products
fetchProducts().then(products => renderProducts(products));

// ekkoLightbox functionality
$(document).on("click", '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
});

// Function to redirect to products.html
function redirectToProducts() {
    window.location.href = 'products.html';
}

// Get the navbar element by its ID
const navbar = document.getElementById('navbar');

// Variable to store the previous scroll position
let lastScrollTop = 0;

// Event listener for scroll events
window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > navbar.offsetTop) {
        navbar.classList.add('sticky-top');
    } else {
        navbar.classList.remove('sticky-top');
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// JavaScript to add a parallax effect to the main photo
document.addEventListener("DOMContentLoaded", function() {
    const photoMain = document.getElementById("photomain");
    document.addEventListener("mousemove", function(event) {
        const mouseX = event.clientX;
        const mouseY = event.clientY;
        const photoRect = photoMain.getBoundingClientRect();
        const photoCenterX = photoRect.left + photoRect.width / 2;
        const photoCenterY = photoRect.top + photoRect.height / 2;
        const deltaX = mouseX - photoCenterX;
        const deltaY = mouseY - photoCenterY;
        const maxMovement = 30; // Adjust as needed
        const movementX = (deltaX / photoRect.width) * maxMovement;
        const movementY = (deltaY / photoRect.height) * maxMovement;
        photoMain.style.transform = `translate(${movementX}px, ${movementY}px)`;
    });
});

// JavaScript to remove the loader after 1.25 seconds
document.addEventListener("DOMContentLoaded", function() {
    var preloader = document.getElementById('preloader');
    function removeLoader() {
        preloader.style.display = 'none';
    }
    setTimeout(removeLoader, 1250); // Remove after 1.25 seconds
});
