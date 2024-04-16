const menuItems = [
    { name: 'Burger', description: 'Classic beef burger with lettuce, tomato, and cheese', price: '$8.99', image: 'menuItems/burger.jpg' },
    { name: 'Croissant', description: 'Freshly baked butter croissant', price: '$3.49', image: 'menuItems/croissant.jpg' },
    { name: 'Muffin', description: 'Blueberry muffin with a hint of lemon zest', price: '$2.99', image: 'menuItems/muffin.jpg' },
    { name: 'Pizza', description: 'Delicious pepperoni pizza with melted mozzarella cheese', price: '$10.99', image: 'menuItems/pizza.jpg' },
    { name: 'Salad', description: 'Fresh garden salad with mixed greens, tomatoes, cucumbers, and balsamic vinaigrette', price: '$7.99', image: 'menuItems/salad.jpg' },
    { name: 'Hot Chocolate', description: 'Creamy hot chocolate topped with whipped cream and chocolate shavings', price: '$4.99', image: 'menuItems/hotchocolate.jpg' },
    { name: 'Coffee', description: 'Freshly brewed coffee with a choice of milk or cream', price: '$2.49', image: 'menuItems/coffee.jpg' }
];

function generateMenuItemHTML(item) {
    return `
        <div class="menu-item">
            <img src="${item.image}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>${item.description}</p>
            <p>${item.price}</p>
            <label for="${item.name.replace(/\s+/g, '-').toLowerCase()}-quantity">Quantity:</label>
            <input type="number" id="${item.name.replace(/\s+/g, '-').toLowerCase()}-quantity" name="${item.name.replace(/\s+/g, '-').toLowerCase()}-quantity" min="0" max="10" value="0">
        </div>
    `;
}

function displayMenuItems() {
    const menuContainer = document.getElementById('order-form');
    const menuHTML = menuItems.map(item => generateMenuItemHTML(item)).join('');
    menuContainer.innerHTML = menuHTML;

    // Add submit button
    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = 'Submit Order';
    menuContainer.appendChild(submitButton);
}

function handleSubmit(event) {
    event.preventDefault();

    menuItems.forEach(item => {
        const quantityInput = document.getElementById(`${item.name.replace(/\s+/g, '-').toLowerCase()}-quantity`);
        const quantity = parseInt(quantityInput.value);

        if (quantity > 0) {
            console.log(`Ordered ${quantity} ${item.name}`);
        } else {
            console.error(`Invalid quantity for ${item.name}`);
        }
    });

    alert('Order submitted successfully!');
}

window.onload = () => {
    displayMenuItems();
    const form = document.getElementById('order-form');
    form.addEventListener('submit', handleSubmit);
};
