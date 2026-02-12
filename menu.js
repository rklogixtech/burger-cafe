    // Burger data
    const burgers = [
        {
            id: 1,
            name: "Classic Cheeseburger",
            price: "₹1,161",
            description: "Juicy 1/3 lb beef patty with melted American cheese, crisp lettuce, tomato, red onion, pickles, and our special sauce on a toasted brioche bun.",
            image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            tags: ["Beef", "Classic", "Cheese"],
            category: "beef",
            badge: "Bestseller"
        },
        {
            id: 2,
            name: "Spicy Chicken Deluxe",
            price: "₹1,244",
            description: "Crispy fried chicken breast coated in our signature spice blend, topped with jalapeños, pepper jack cheese, chipotle mayo, and coleslaw.",
            image: "https://images.unsplash.com/photo-1626074353765-517a681e40be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            tags: ["Chicken", "Spicy", "Crispy"],
            category: "chicken",
            badge: "Spicy"
        },
        {
            id: 3,
            name: "Mushroom Swiss Bliss",
            price: "₹1,348",
            description: "Grass-fed beef patty topped with sautéed mushrooms, caramelized onions, melted Swiss cheese, and garlic aioli on a pretzel bun.",
            image: "https://images.unsplash.com/photo-1553979459-d2229ba7433c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            tags: ["Beef", "Mushroom", "Gourmet"],
            category: "beef",
            badge: "Chef's Special"
        },
        {
            id: 4,
            name: "Ultimate Veggie Stack",
            price: "₹1,204",
            description: "House-made black bean and quinoa patty with avocado, roasted peppers, spinach, cucumber, hummus, and tahini dressing.",
            image: "https://images.unsplash.com/photo-1559314809-2b99056a8c4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            tags: ["Vegetarian", "Healthy", "Plant-based"],
            category: "veggie",
            badge: "Veggie"
        },
        {
            id: 5,
            name: "BBQ Bacon Champion",
            price: "₹1,453",
            description: "Double beef patties with crispy bacon, smoked gouda, onion rings, BBQ sauce, and ranch dressing on a charcoal bun.",
            image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            tags: ["Beef", "Bacon", "BBQ"],
            category: "premium",
            badge: "Premium"
        },
        {
            id: 6,
            name: "Buffalo <br> Cauliflower",
            price: "₹1,141",
            description: "Crispy buffalo-spiced cauliflower with blue cheese sauce, celery slaw, and ranch dressing on a whole wheat bun.",
            image: "https://images.unsplash.com/photo-1596662951482-0c4ba74a6df6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            tags: ["Vegan", "Spicy", "Healthy"],
            category: "veggie",
            badge: "Vegan"
        }
    ];

    // Fries & Sides data
    const sides = [
        { id: 1, name: "Classic French Fries", price: "₹497", description: "Hand-cut russet potatoes, double-fried to golden perfection, lightly salted. Served with ketchup or your choice of dipping sauce.", image: "https://images.unsplash.com/photo-1576107232684-1279f390859f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", tags: ["Potato", "Classic", "Crispy"], badge: "Popular" },
        { id: 2, name: "Truffle Parmesan Fries", price: "₹706", description: "Our signature fries tossed in white truffle oil, grated Parmesan, parsley, and a hint of garlic. Served with truffle aioli.", image: "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", tags: ["Truffle", "Gourmet", "Cheese"], badge: "Gourmet" },
        { id: 3, name: "Sweet Potato Fries", price: "₹580", description: "Crispy sweet potato fries lightly seasoned with cinnamon and sea salt. Served with maple aioli dipping sauce.", image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", tags: ["Sweet Potato", "Healthy", "Gluten-Free"], badge: "Healthy" },
        { id: 4, name: "Onion Rings", price: "₹602", description: "Thick-cut onions coated in our special beer batter, deep-fried to a crispy golden brown. Served with spicy ranch.", image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", tags: ["Onion", "Crispy", "Beer Battered"], badge: "Crunchy" },
        { id: 5, name: "Loaded Nachos", price: "₹1,079", description: "Crispy tortilla chips topped with melted cheese, jalapeños, black beans, pico de gallo, guacamole, and sour cream.", image: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", tags: ["Shareable", "Spicy", "Cheesy"], badge: "Shareable" },
        { id: 6, name: "Coleslaw", price: "₹374", description: "Fresh cabbage and carrots tossed in our creamy house-made dressing with a hint of apple cider vinegar.", image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", tags: ["Fresh", "Creamy", "Healthy"], badge: "Fresh" }
    ];

    // Drinks data
    const drinks = [
        { id: 1, name: "Classic Milkshakes", price: "₹580", description: "Hand-spun creamy milkshakes available in chocolate, vanilla, strawberry, or cookies & cream. Topped with whipped cream.", image: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", tags: ["Creamy", "Dessert", "Classic"], badge: "Creamy" },
        { id: 2, name: "Fresh Lemonade", price: "₹374", description: "Freshly squeezed lemons with pure cane sugar and filtered water. Available in classic, strawberry, or mint flavors.", image: "https://images.unsplash.com/photo-1621264968373-430b6b6fb1d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", tags: ["Refreshing", "Fresh", "Fruity"], badge: "Refreshing" },
        { id: 3, name: "Artisanal Sodas", price: "₹436", description: "Handcrafted sodas in unique flavors: vanilla cream, ginger lime, black cherry, and root beer. Made with real cane sugar.", image: "https://images.unsplash.com/photo-1554866585-cd94860890b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", tags: ["Craft", "Vintage", "Sweet"], badge: "Craft" },
        { id: 4, name: "Iced Coffee & Tea", price: "₹477", description: "Cold brew coffee or freshly brewed iced tea. Customize with vanilla, caramel, or classic sweetener.", image: "https://images.unsplash.com/photo-1561047029-3000c68339ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", tags: ["Caffeinated", "Cold", "Refreshing"], badge: "Chilled" },
        { id: 5, name: "Fresh Fruit Smoothies", price: "₹623", description: "Blended with fresh fruits, yogurt, and honey. Choose from mango-pineapple, mixed berry, or tropical green.", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", tags: ["Healthy", "Fruity", "Fresh"], badge: "Healthy" },
        { id: 6, name: "Craft Beer Selection", price: "₹746", description: "Rotating selection of local and international craft beers. Ask your server for today's featured brews.", image: "https://images.unsplash.com/photo-1566633808646-9c0e9bc5b8d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", tags: ["Alcoholic", "Craft", "Local"], badge: "Craft" }
    ];

    // Function to create menu item HTML
    function createMenuItem(item, type) {
        return `
            <div class="menu-item">
                <div class="item-img" style="background-image: url('${item.image}')">
                    ${item.badge ? `<span class="badge">${item.badge}</span>` : ''}
                </div>
                <div class="item-content">
                    <div class="item-header">
                        <h3>${item.name}</h3>
                        <span class="price">${item.price}</span>
                    </div>
                    <div class="item-tags">
                        ${item.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                    </div>
                    <p class="item-desc">${item.description}</p>
                    <div class="item-buttons">
                        <button class="item-btn item-btn-primary" data-id="${item.id}" data-type="${type}">
                            <i class="fas fa-cart-plus"></i> Add to Order
                        </button>
                        <button class="item-btn item-btn-secondary" data-id="${item.id}">
                            <i class="fas fa-info-circle"></i> Details
                        </button>
                    </div>
                </div>
            </div>
        `;
    }

    // Render functions
    function renderBurgers(filter = "all") {
        const container = document.getElementById('burger-container');
        container.innerHTML = '';
        const filteredBurgers = filter === "all" ? burgers : burgers.filter(b => b.category === filter);
        filteredBurgers.forEach(burger => container.innerHTML += createMenuItem(burger, 'burger'));
    }

    function renderSides() {
        const container = document.getElementById('sides-container');
        container.innerHTML = '';
        sides.forEach(side => container.innerHTML += createMenuItem(side, 'side'));
    }

    function renderDrinks() {
        const container = document.getElementById('drinks-container');
        container.innerHTML = '';
        drinks.forEach(drink => container.innerHTML += createMenuItem(drink, 'drink'));
    }

    // Initialize page
    document.addEventListener('DOMContentLoaded', function () {
        renderBurgers();
        renderSides();
        renderDrinks();

        const categoryButtons = document.querySelectorAll('.category-btn');
        categoryButtons.forEach(button => {
            button.addEventListener('click', function () {
                categoryButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                const category = this.getAttribute('data-category');
                renderBurgers(category);
            });
        });

        document.addEventListener('click', function (e) {
            if (e.target.classList.contains('item-btn-primary') || e.target.closest('.item-btn-primary') || e.target.classList.contains('btn-primary')) {
                const itemId = e.target.getAttribute('data-id') || e.target.closest('.item-btn-primary').getAttribute('data-id');
                const itemType = e.target.getAttribute('data-type') || e.target.closest('.item-btn-primary').getAttribute('data-type');

                let itemName = "item";
                if (itemId && itemType) {
                    if (itemType === 'burger') itemName = burgers.find(b => b.id == itemId)?.name || "burger";
                    else if (itemType === 'side') itemName = sides.find(s => s.id == itemId)?.name || "side";
                    else if (itemType === 'drink') itemName = drinks.find(d => d.id == itemId)?.name || "drink";
                }
                alert(`Added "${itemName}" to your cart!`);
            }

            if (e.target.classList.contains('item-btn-secondary') || e.target.closest('.item-btn-secondary')) {
                alert("Customize your item by speaking with our staff or using the customization options in the full order screen.");
            }

            if (e.target.closest('nav a')) {
                const href = e.target.closest('nav a').getAttribute('href');
                if (href.startsWith('#')) {
                    e.preventDefault();
                    const targetId = href.substring(1);
                    const targetElement = document.getElementById(targetId);
                    if (targetElement) {
                        window.scrollTo({ top: targetElement.offsetTop - 100, behavior: 'smooth' });
                    }
                }
            }
        });
    });

