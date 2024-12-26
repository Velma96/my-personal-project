// index.js
const productContainer = document.getElementById('product-list');
const cart = []; // Array to store items added to the cart

// Fetch products from the JSON server
fetch('http://localhost:3001/products')
    .then(response => response.json())
    .then(data => {
        data.forEach(product => {
            const productCard = document.createElement('div');
            productCard.classList.add('col-md-4', 'mb-4');

            productCard.innerHTML = `
                <div class="card">
                    <img src="${product.image}" class="card-img-top" alt="${product.name}">
                    <div class="card-body">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-text">${product.description}</p>
                        <p class="text-primary">$${product.price}</p>
                        <button class="btn btn-success add-to-cart" data-id="${product.id}">Add to Cart</button>
                    </div>
                </div>
            `;

            productContainer.appendChild(productCard);
        });

        // Add event listeners to Add to Cart buttons
        document.querySelectorAll('.add-to-cart').forEach(button => {
            button.addEventListener('click', event => {
                const productId = parseInt(event.target.getAttribute('data-id'));
                const product = data.find(item => item.id === productId);
                if (product) {
                    cart.push(product);
                    alert(`${product.name} has been added to your cart!`);
                }
            });
        });
    })
    .catch(error => console.error('Error fetching products:', error));

// Add smooth scrolling for navbar links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
