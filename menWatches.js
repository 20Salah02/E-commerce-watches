
document.addEventListener('DOMContentLoaded', function () {
    const seikoButton = document.getElementById('seiko');
    const charlieButton = document.getElementById('charlie');
    const solarButton = document.getElementById('solar');
    const iwcButton = document.getElementById('iwc');

    const seikoWatches = document.getElementById('seiko-watches');
    const charlieWatches = document.getElementById('charlie-watches');
    const solarWatches = document.getElementById('solar-watches');
    const iwcWatches = document.getElementById('iwc-watches');

    const watchCategories = [seikoWatches, charlieWatches, solarWatches, iwcWatches];

    function showOnly(activeCategory) {
        watchCategories.forEach(category => {
            if (category === activeCategory) {
                category.classList.remove('hidden');
                category.classList.add('active');
            } else {
                category.classList.add('hidden');
                category.classList.remove('active');
            }
        });
    }

    seikoButton.addEventListener('click', () => showOnly(seikoWatches));
    charlieButton.addEventListener('click', () => showOnly(charlieWatches));
    solarButton.addEventListener('click', () => showOnly(solarWatches));
    iwcButton.addEventListener('click', () => showOnly(iwcWatches));
});




// ///////////////




document.getElementById('addToCart').addEventListener('click', function() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    const name = this.getAttribute('data-name');
    const price = parseFloat(this.getAttribute('data-price'));
    const image = this.getAttribute('data-image');  // Get the image URL

    const item = cart.find(product => product.name === name);
    if (item) {
        item.quantity++;
    } else {
        cart.push({ name, price, image, quantity: 1 });  // Store the image URL in the cart
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    window.location.href = 'cart.html';  // Redirect to cart page
});


