// index.js
const productContainer = document.getElementById('product-list');

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
                    </div>
                </div>
            `;

            productContainer.appendChild(productCard);
        });
    })
    .catch(error => console.error('Error fetching products:', error));
