document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('bg-video');
    const appContent = document.getElementById('app-content');

    // Wait for the video to reach the point where content should appear
    // The transition from intro to menu happens around 4 seconds
    video.addEventListener('timeupdate', () => {
        if (video.currentTime > 3.8 && appContent.classList.contains('hidden')) {
            appContent.classList.remove('hidden');
            setTimeout(() => {
                appContent.classList.add('visible');
                renderProducts();
            }, 50);
        }
    });

    // Make the video loop starting from the content portion
    video.addEventListener('ended', () => {
        video.currentTime = 4.0; // Skip the intro
        video.play();
    });

    // Sample data based on example_filled_product_tiers_1.jpg
    const productData = [
        {
            tier: "GOLD",
            items: [
                { brand: "MI LOUD", product: "Gush Mints 3.5g", price: "20" },
                { brand: "MI LOUD", product: "Kush Mint 3.5g", price: "20" },
                { brand: "Grown Rogue", product: "Blue Dream 3.5g", price: "20" },
                { brand: "Grown Rogue", product: "Sherb Cake 3.5g", price: "20" },
                { brand: "Quality Roots", product: "Permanent Marker 3.5g", price: "20" },
                { brand: "Quality Roots", product: "Super Boof 3.5g", price: "20" },
            ]
        },
        {
            tier: "PLATINUM",
            items: [
                { brand: "Peninsula Gardens", product: "Sherb Pie 3.5g", price: "25" },
                { brand: "Peninsula Gardens", product: "Super Boof 3.5g", price: "25" },
                { brand: "Uplyfted", product: "Super Boof 3.5g", price: "30" },
                { brand: "Uplyfted", product: "White Truffle 3.5g", price: "30" },
                { brand: "Michigander Fire", product: "Zkittlez 3.5g", price: "30" },
            ]
        },
        {
            tier: "DIAMOND",
            items: [
                { brand: "Pro Gro", product: "Lunar Lemon 3.5g", price: "35" },
                { brand: "Pro Gro", product: "Watermelon Zkittlez 3.5g", price: "35" },
                { brand: "Gus's Real Exotics", product: "Zaza 3.5g", price: "40" },
                { brand: "Gus's Real Exotics", product: "Gushers 3.5g", price: "40" },
                { brand: "Local Grove", product: "Brain Stew 3.5g", price: "45" },
                { brand: "Local Grove", product: "Runtz 3.5g", price: "45" },
            ]
        }
    ];

    function renderProducts() {
        appContent.innerHTML = '';

        // Create container for the tiers
        const tiersContainer = document.createElement('div');
        tiersContainer.className = 'tiers-container';

        productData.forEach(tier => {
            const tierDiv = document.createElement('div');
            tierDiv.className = `tier-section tier-${tier.tier.toLowerCase()}`;

            // Header for tier
            const tierHeader = document.createElement('h2');
            tierHeader.className = 'tier-header';
            tierHeader.textContent = tier.tier;
            tierDiv.appendChild(tierHeader);

            // Product list
            const productList = document.createElement('ul');
            productList.className = 'product-list';

            tier.items.forEach(item => {
                const li = document.createElement('li');
                li.className = 'product-item';

                li.innerHTML = `
                    <div class="product-info">
                        <span class="product-brand">${item.brand}</span>
                        <span class="product-name">${item.product}</span>
                    </div>
                    <span class="product-price">${item.price}</span>
                `;

                productList.appendChild(li);
            });

            tierDiv.appendChild(productList);
            tiersContainer.appendChild(tierDiv);
        });

        appContent.appendChild(tiersContainer);
    }
});