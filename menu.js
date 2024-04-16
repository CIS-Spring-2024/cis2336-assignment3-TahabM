const menuItems = [
    { name: 'Burger', description: 'Classic beef burger with lettuce, tomato, and cheese, served with fries', price: '$11.99', image: 'menuItems/burger.jpg' },
    { name: 'Croissant', description: 'Freshly baked flaky butter croissant', price: '$3.49', image: 'menuItems/croissant.jpg' },
    { name: 'Muffin', description: 'Homemade Chocolate Chip Muffin', price: '$2.99', image: 'menuItems/muffin.jpg' },
    { name: 'Pizza', description: 'Thin crust pizza with melted mozzarella cheese, toppings extra $0.50', price: '$10.99', image: 'menuItems/pizza.jpg' },
    { name: 'Caesar Salad', description: 'Fresh salad with romaine lettuce and croutons in caesar dressing', price: '$7.99', image: 'menuItems/salad.jpg' },
    { name: 'Hot Chocolate', description: 'Creamy hot chocolate topped with optional marshmallows', price: '$4.99', image: 'menuItems/hotchocolate.jpg' },
    { name: 'Coffee', description: 'Freshly brewed coffee with a choice of milk or cream', price: '$2.49', image: 'menuItems/coffee.jpg' }
];

function generateMenuItemHTML(item) {
    return `
        <div class="menu-item">
            <img src="${item.image}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>${item.description}</p>
            <p>${item.price}</p>
        </div>
    `;
}

function displayMenuItems() {
    const menuContainer = document.querySelector('.menu-container');
    const menuHTML = menuItems.map(item => generateMenuItemHTML(item)).join('');
    menuContainer.innerHTML = menuHTML;
}

window.onload = displayMenuItems;
