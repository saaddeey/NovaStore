// NovaStore - Gaming Gear & Digital Books E-Commerce
// SINGLE STATE OBJECT - NO DUPLICATES ALLOWED

const App = {
    // STATE MANAGEMENT - ONLY ONE SOURCE OF TRUTH
    state: {
        cart: [],
        wishlist: [],
        library: [],
        user: null,
        searchQuery: '',
        currentCategory: 'all',
        sortBy: 'featured'
    },

    // PRODUCT DATABASE - SINGLE ARRAY ONLY
    products: [
        // Gaming Gear - Mouse Products
        {
            id: "gm1",
            title: "Logitech G502 Hero",
            category: "Gaming Gear - Mouse",
            price: 49.99,
            rating: 4.7,
            description: "High-precision gaming mouse with customizable RGB lighting"
        },
        {
            id: "gm2",
            title: "Razer DeathAdder V2",
            category: "Gaming Gear - Mouse",
            price: 69.99,
            rating: 4.8,
            description: "Ergonomic gaming mouse with 20K DPI optical sensor"
        },
        {
            id: "gm3",
            title: "Razer Viper Ultimate",
            category: "Gaming Gear - Mouse",
            price: 149.99,
            rating: 4.6,
            description: "Ultra-lightweight wireless gaming mouse with 20K DPI"
        },
        {
            id: "gm4",
            title: "SteelSeries Rival 600",
            category: "Gaming Gear - Mouse",
            price: 79.99,
            rating: 4.5,
            description: "Dual sensor gaming mouse with customizable weight"
        },
        {
            id: "gm5",
            title: "Glorious Model O",
            category: "Gaming Gear - Mouse",
            price: 49.99,
            rating: 4.4,
            description: "Honeycomb shell ultra-lightweight gaming mouse"
        },
        {
            id: "gm6",
            title: "Corsair M65 RGB Elite",
            category: "Gaming Gear - Mouse",
            price: 59.99,
            rating: 4.6,
            description: "FPS gaming mouse with adjustable DPI and RGB"
        },
        {
            id: "gm7",
            title: "Logitech G Pro X Superlight",
            category: "Gaming Gear - Mouse",
            price: 159.99,
            rating: 4.9,
            description: "Ultra-lightweight wireless gaming mouse for pros"
        },
        {
            id: "gm8",
            title: "HyperX Pulsefire Haste",
            category: "Gaming Gear - Mouse",
            price: 39.99,
            rating: 4.3,
            description: "Lightweight honeycomb gaming mouse"
        },
        {
            id: "gm9",
            title: "Redragon M711 Cobra",
            category: "Gaming Gear - Mouse",
            price: 29.99,
            rating: 4.2,
            description: "Affordable wireless gaming mouse with RGB"
        },
        {
            id: "gm10",
            title: "Asus ROG Gladius III",
            category: "Gaming Gear - Mouse",
            price: 89.99,
            rating: 4.5,
            description: "Tri-mode wireless gaming mouse with push-fit switches"
        },

        // Gaming Gear - Keyboard Products
        {
            id: "gk1",
            title: "Razer Huntsman Elite",
            category: "Gaming Gear - Keyboard",
            price: 199.99,
            rating: 4.7,
            description: "Optical mechanical keyboard with per-key RGB"
        },
        {
            id: "gk2",
            title: "SteelSeries Apex Pro",
            category: "Gaming Gear - Keyboard",
            price: 179.99,
            rating: 4.8,
            description: "Adjustable mechanical switches with OLED display"
        },
        {
            id: "gk3",
            title: "Corsair K95 RGB Platinum",
            category: "Gaming Gear - Keyboard",
            price: 199.99,
            rating: 4.6,
            description: "Premium mechanical gaming keyboard with macro keys"
        },
        {
            id: "gk4",
            title: "Logitech G Pro X Keyboard",
            category: "Gaming Gear - Keyboard",
            price: 179.99,
            rating: 4.8,
            description: "Hot-swappable mechanical keyboard with RGB"
        },
        {
            id: "gk5",
            title: "HyperX Alloy FPS Pro",
            category: "Gaming Gear - Keyboard",
            price: 99.99,
            rating: 4.4,
            description: "Compact mechanical keyboard for FPS gaming"
        },
        {
            id: "gk6",
            title: "Keychron K6",
            category: "Gaming Gear - Keyboard",
            price: 89.99,
            rating: 4.5,
            description: "Wireless mechanical keyboard with hot-swappable switches"
        },
        {
            id: "gk7",
            title: "Redragon K552 Kumara",
            category: "Gaming Gear - Keyboard",
            price: 39.99,
            rating: 4.2,
            description: "Budget-friendly mechanical gaming keyboard"
        },
        {
            id: "gk8",
            title: "Asus ROG Strix Scope RX",
            category: "Gaming Gear - Keyboard",
            price: 159.99,
            rating: 4.6,
            description: "Mechanical keyboard with optical switches"
        },
        {
            id: "gk9",
            title: "Logitech G213 Prodigy",
            category: "Gaming Gear - Keyboard",
            price: 69.99,
            rating: 4.3,
            description: "Affordable RGB gaming keyboard"
        },
        {
            id: "gk10",
            title: "Corsair K70 RGB MK.2",
            category: "Gaming Gear - Keyboard",
            price: 149.99,
            rating: 4.7,
            description: "Cherry MX mechanical gaming keyboard"
        },

        // Gaming Gear - Headsets
        {
            id: "gh1",
            title: "HyperX Cloud II",
            category: "Gaming Gear - Headsets",
            price: 99.99,
            rating: 4.6,
            description: "Comfortable gaming headset with 7.1 surround sound"
        },
        {
            id: "gh2",
            title: "Razer BlackShark V2",
            category: "Gaming Gear - Headsets",
            price: 129.99,
            rating: 4.7,
            description: "Lightweight gaming headset with THX spatial audio"
        },
        {
            id: "gh3",
            title: "SteelSeries Arctis 7",
            category: "Gaming Gear - Headsets",
            price: 149.99,
            rating: 4.5,
            description: "Wireless gaming headset with DTS Headphone:X"
        },
        {
            id: "gh4",
            title: "Logitech G Pro X Headset",
            category: "Gaming Gear - Headsets",
            price: 129.99,
            rating: 4.8,
            description: "Pro gaming headset with Blue VO!CE microphone"
        },
        {
            id: "gh5",
            title: "Corsair HS80 RGB",
            category: "Gaming Gear - Headsets",
            price: 119.99,
            rating: 4.4,
            description: "Wireless gaming headset with RGB lighting"
        },
        {
            id: "gh6",
            title: "ASUS ROG Delta",
            category: "Gaming Gear - Headsets",
            price: 159.99,
            rating: 4.6,
            description: "Gaming headset with ESS 9218 Quad DAC"
        },
        {
            id: "gh7",
            title: "Turtle Beach Stealth 600",
            category: "Gaming Gear - Headsets",
            price: 99.99,
            rating: 4.3,
            description: "Wireless gaming headset for console and PC"
        },
        {
            id: "gh8",
            title: "JBL Quantum 800",
            category: "Gaming Gear - Headsets",
            price: 199.99,
            rating: 4.5,
            description: "Wireless gaming headset with active noise cancellation"
        },
        {
            id: "gh9",
            title: "HyperX Cloud Alpha",
            category: "Gaming Gear - Headsets",
            price: 79.99,
            rating: 4.4,
            description: "Comfortable gaming headset with dual chamber drivers"
        },
        {
            id: "gh10",
            title: "Sony Inzone H9",
            category: "Gaming Gear - Headsets",
            price: 249.99,
            rating: 4.7,
            description: "Premium wireless gaming headset with ANC"
        },

        // Gaming Gear - Accessories
        {
            id: "ga1",
            title: "Mousepad RGB Extended XXL",
            category: "Gaming Gear - Accessories",
            price: 29.99,
            rating: 4.3,
            description: "Large RGB gaming mousepad with anti-slip base"
        },
        {
            id: "ga2",
            title: "Gaming Controller Xbox Series X",
            category: "Gaming Gear - Accessories",
            price: 59.99,
            rating: 4.6,
            description: "Official Xbox Series X wireless controller"
        },
        {
            id: "ga3",
            title: "PS5 DualSense Controller",
            category: "Gaming Gear - Accessories",
            price: 69.99,
            rating: 4.7,
            description: "PlayStation 5 DualSense wireless controller"
        },
        {
            id: "ga4",
            title: "Controller Charging Dock",
            category: "Gaming Gear - Accessories",
            price: 39.99,
            rating: 4.4,
            description: "Dual controller charging station with LED indicators"
        },
        {
            id: "ga5",
            title: "RGB Desk Light Strip",
            category: "Gaming Gear - Accessories",
            price: 49.99,
            rating: 4.2,
            description: "Smart RGB LED strip for desk illumination"
        },
        {
            id: "ga6",
            title: "Gaming Chair Lumbar Support",
            category: "Gaming Gear - Accessories",
            price: 34.99,
            rating: 4.5,
            description: "Ergonomic lumbar support cushion for gaming chairs"
        },
        {
            id: "ga7",
            title: "Monitor Stand Adjustable Arm",
            category: "Gaming Gear - Accessories",
            price: 89.99,
            rating: 4.6,
            description: "Fully adjustable monitor arm with cable management"
        },
        {
            id: "ga8",
            title: "Cable Management Kit",
            category: "Gaming Gear - Accessories",
            price: 19.99,
            rating: 4.1,
            description: "Complete cable management solution for clean setup"
        },
        {
            id: "ga9",
            title: "Mechanical Keycap Set",
            category: "Gaming Gear - Accessories",
            price: 59.99,
            rating: 4.4,
            description: "PBT mechanical keycap set with custom legends"
        },
        {
            id: "ga10",
            title: "USB Gaming Hub 7-Port",
            category: "Gaming Gear - Accessories",
            price: 44.99,
            rating: 4.3,
            description: "High-speed USB 3.0 hub with individual power switches"
        },
        {
            id: "ga11",
            title: "Headset Stand RGB",
            category: "Gaming Gear - Accessories",
            price: 24.99,
            rating: 4.2,
            description: "RGB headset stand with USB charging port"
        },
        {
            id: "ga12",
            title: "Wrist Rest Gel Pad",
            category: "Gaming Gear - Accessories",
            price: 19.99,
            rating: 4.1,
            description: "Ergonomic gel wrist rest for keyboard and mouse"
        },
        // eBook Products
        {
            id: "eb1",
            title: "Clean Code: A Handbook of Agile Software",
            category: "eBooks",
            price: 29.99,
            rating: 4.6,
            description: "Essential guide for writing clean, maintainable code"
        },
        {
            id: "eb2",
            title: "The Pragmatic Programmer",
            category: "eBooks",
            price: 39.99,
            rating: 4.8,
            description: "Classic programming guide for software developers"
        },
        {
            id: "eb3",
            title: "Design Patterns: Elements of Reusable Software",
            category: "eBooks",
            price: 49.99,
            rating: 4.5,
            description: "Fundamental software design patterns and principles"
        },
        {
            id: "eb4",
            title: "JavaScript: The Good Parts",
            category: "eBooks",
            price: 24.99,
            rating: 4.3,
            description: "Essential JavaScript programming concepts and best practices"
        },
        {
            id: "eb5",
            title: "The Lean Startup",
            category: "eBooks",
            price: 19.99,
            rating: 4.2,
            description: "How today's entrepreneurs use continuous innovation"
        },
        {
            id: "eb6",
            title: "Atomic Habits",
            category: "eBooks",
            price: 14.99,
            rating: 4.7,
            description: "Tiny changes, remarkable results - build good habits"
        }
    ],

    // INITIALIZATION
    init() {
        App.loadState();
        App.setupEventListeners();
        App.updateUI();
        App.renderProducts();
        App.setupIntersectionObserver();
    },

    // LOCAL STORAGE FUNCTIONS
    loadState() {
        try {
            const cartData = localStorage.getItem('novastore_cart');
            const wishlistData = localStorage.getItem('novastore_wishlist');
            const libraryData = localStorage.getItem('novastore_library');
            const userData = localStorage.getItem('novastore_user');

            if (cartData) App.state.cart = JSON.parse(cartData);
            if (wishlistData) App.state.wishlist = JSON.parse(wishlistData);
            if (libraryData) App.state.library = JSON.parse(libraryData);
            if (userData) App.state.user = JSON.parse(userData);
        } catch (error) {
            console.error('Error loading state:', error);
        }
    },

    saveState() {
        try {
            localStorage.setItem('novastore_cart', JSON.stringify(App.state.cart));
            localStorage.setItem('novastore_wishlist', JSON.stringify(App.state.wishlist));
            localStorage.setItem('novastore_library', JSON.stringify(App.state.library));
            localStorage.setItem('novastore_user', JSON.stringify(App.state.user));
        } catch (error) {
            console.error('Error saving state:', error);
        }
    },

    // EVENT LISTENERS - SINGLE SETUP ONLY
    setupEventListeners() {
        // Navigation
        const loginBtn = document.getElementById('loginBtn');
        if (loginBtn) loginBtn.addEventListener('click', App.showLoginModal);
        
        const cartBtn = document.getElementById('cartBtn');
        if (cartBtn) cartBtn.addEventListener('click', App.toggleCart);
        
        const wishlistBtn = document.getElementById('wishlistBtn');
        if (wishlistBtn) wishlistBtn.addEventListener('click', App.showWishlist);
        
        const mobileMenuToggle = document.getElementById('mobileMenuToggle');
        if (mobileMenuToggle) mobileMenuToggle.addEventListener('click', App.toggleMobileMenu);

        // Cart
        const closeCartBtn = document.getElementById('closeCartBtn');
        if (closeCartBtn) closeCartBtn.addEventListener('click', App.toggleCart);
        
        const cartOverlay = document.getElementById('cartOverlay');
        if (cartOverlay) cartOverlay.addEventListener('click', App.toggleCart);
        
        const checkoutBtn = document.getElementById('checkoutBtn');
        if (checkoutBtn) checkoutBtn.addEventListener('click', App.checkout);

        // Wishlist
        const closeWishlistBtn = document.getElementById('closeWishlistBtn');
        if (closeWishlistBtn) closeWishlistBtn.addEventListener('click', App.hideWishlist);
        
        const wishlistOverlay = document.getElementById('wishlistOverlay');
        if (wishlistOverlay) wishlistOverlay.addEventListener('click', App.hideWishlist);

        // Login
        const closeLoginBtn = document.getElementById('closeLoginBtn');
        if (closeLoginBtn) closeLoginBtn.addEventListener('click', App.hideLoginModal);
        
        const loginOverlay = document.getElementById('loginOverlay');
        if (loginOverlay) loginOverlay.addEventListener('click', App.hideLoginModal);
        
        const loginForm = document.getElementById('loginForm');
        if (loginForm) loginForm.addEventListener('submit', App.handleLogin);

        // Search
        const searchInput = document.getElementById('searchInput');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => App.handleSearch(e.target.value));
        }

        // Filters (only on browse page)
        const categoryFilter = document.getElementById('categoryFilter');
        if (categoryFilter) {
            categoryFilter.addEventListener('change', (e) => App.handleCategoryFilter(e.target.value));
        }

        const sortFilter = document.getElementById('sortFilter');
        if (sortFilter) {
            sortFilter.addEventListener('change', (e) => App.handleSort(e.target.value));
        }

        // Category cards (only on index page)
        document.querySelectorAll('.category-card').forEach(card => {
            card.addEventListener('click', (e) => {
                const category = e.currentTarget.dataset.category;
                App.handleCategoryFilter(category);
                
                // Navigate to browse page
                window.location.href = 'browse.html';
            });
        });

        // Explore button (only on index page)
        const exploreBtn = document.getElementById('exploreBtn');
        if (exploreBtn) {
            exploreBtn.addEventListener('click', () => {
                window.location.href = 'browse.html';
            });
        }
    },

    // UPDATE UI
    updateUI() {
        App.updateCartCount();
        App.updateWishlistCount();
        App.updateUserDisplay();
        App.renderCart();
        App.renderWishlist();
        App.renderLibrary();
    },

    // CART SYSTEM - SINGLE IMPLEMENTATION ONLY
    addToCart(productId) {
        const product = App.products.find(p => p.id === productId);
        if (!product) return;
        
        const existingItem = App.state.cart.find(item => item.id === product.id);
        
        if (existingItem) {
            existingItem.quantity += 1;
            App.showToast('Product quantity updated in cart', 'info');
        } else {
            App.state.cart.push({ ...product, quantity: 1 });
            App.showToast('Product added to cart!', 'success');
            
            // Add bounce animation to cart button
            const cartBtn = document.getElementById('cartBtn');
            if (cartBtn) {
                cartBtn.style.animation = 'bounce 0.6s ease';
                setTimeout(() => {
                    cartBtn.style.animation = '';
                }, 600);
            }
        }
        
        App.saveState();
        App.updateUI();
        App.renderProducts();
    },

    removeFromCart(productId) {
        App.state.cart = App.state.cart.filter(item => item.id !== productId);
        App.saveState();
        App.updateUI();
        App.renderProducts();
        App.showToast('Product removed from cart', 'info');
    },

    updateQuantity(productId, change) {
        const item = App.state.cart.find(item => item.id === productId);
        if (item) {
            item.quantity += change;
            if (item.quantity <= 0) {
                App.removeFromCart(productId);
            } else {
                App.saveState();
                App.updateUI();
            }
        }
    },

    toggleCart() {
        const cartSidebar = document.getElementById('cartSidebar');
        const cartOverlay = document.getElementById('cartOverlay');
        
        if (cartSidebar && cartOverlay) {
            if (cartSidebar.classList.contains('active')) {
                cartSidebar.classList.remove('active');
                cartOverlay.classList.remove('active');
            } else {
                cartSidebar.classList.add('active');
                cartOverlay.classList.add('active');
            }
        }
    },

    renderCart() {
        const cartItems = document.getElementById('cartItems');
        const cartTotal = document.getElementById('cartTotal');
        
        if (!cartItems) return;
        
        if (App.state.cart.length === 0) {
            cartItems.innerHTML = '<p style="text-align: center; color: var(--text-muted); padding: 2rem;">Your cart is empty</p>';
        } else {
            cartItems.innerHTML = App.state.cart.map(item => `
                <div class="cart-item">
                    <div class="cart-item-info">
                        <div class="cart-item-title">${item.title}</div>
                        <div class="cart-item-price">$${item.price} x ${item.quantity}</div>
                        <div class="quantity-controls">
                            <button class="quantity-btn" onclick="App.updateQuantity('${item.id}', -1)">-</button>
                            <span class="quantity-value">${item.quantity}</span>
                            <button class="quantity-btn" onclick="App.updateQuantity('${item.id}', 1)">+</button>
                        </div>
                    </div>
                    <button class="remove-item" onclick="App.removeFromCart('${item.id}')">×</button>
                </div>
            `).join('');
        }
        
        const total = App.state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        if (cartTotal) cartTotal.textContent = `$${total.toFixed(2)}`;
    },

    updateCartCount() {
        const cartCount = document.getElementById('cartCount');
        if (cartCount) {
            const count = App.state.cart.reduce((sum, item) => sum + item.quantity, 0);
            cartCount.textContent = count;
        }
    },

    // WISHLIST SYSTEM - SINGLE IMPLEMENTATION ONLY
    toggleWishlist(productId) {
        const product = App.products.find(p => p.id === productId);
        if (!product) return;
        
        const index = App.state.wishlist.findIndex(item => item.id === product.id);
        
        if (index > -1) {
            App.state.wishlist.splice(index, 1);
            App.showToast('Product removed from wishlist', 'info');
        } else {
            App.state.wishlist.push(product);
            App.showToast('Product added to wishlist!', 'success');
        }
        
        App.saveState();
        App.updateUI();
        App.renderProducts();
    },

    showWishlist() {
        const wishlistModal = document.getElementById('wishlistModal');
        const wishlistOverlay = document.getElementById('wishlistOverlay');
        
        if (wishlistModal && wishlistOverlay) {
            wishlistModal.classList.add('active');
            wishlistOverlay.classList.add('active');
        }
    },

    hideWishlist() {
        const wishlistModal = document.getElementById('wishlistModal');
        const wishlistOverlay = document.getElementById('wishlistOverlay');
        
        if (wishlistModal && wishlistOverlay) {
            wishlistModal.classList.remove('active');
            wishlistOverlay.classList.remove('active');
        }
    },

    renderWishlist() {
        const wishlistItems = document.getElementById('wishlistItems');
        
        if (!wishlistItems) return;
        
        if (App.state.wishlist.length === 0) {
            wishlistItems.innerHTML = '<p style="text-align: center; color: var(--text-muted); padding: 2rem;">Your wishlist is empty</p>';
        } else {
            wishlistItems.innerHTML = App.state.wishlist.map(item => `
                <div class="wishlist-item">
                    <div class="wishlist-item-info">
                        <div class="wishlist-item-title">${item.title}</div>
                        <div class="wishlist-item-price">$${item.price}</div>
                    </div>
                    <button class="remove-item" onclick="App.toggleWishlist('${item.id}')">×</button>
                </div>
            `).join('');
        }
    },

    updateWishlistCount() {
        const wishlistCount = document.getElementById('wishlistCount');
        if (wishlistCount) {
            wishlistCount.textContent = App.state.wishlist.length;
        }
    },

    // LIBRARY SYSTEM
    renderLibrary() {
        const libraryGrid = document.getElementById('libraryGrid');
        const libraryCount = document.getElementById('libraryCount');
        const emptyLibrary = document.getElementById('emptyLibrary');
        
        if (!libraryGrid) return;
        
        if (libraryCount) {
            libraryCount.textContent = App.state.library.length;
        }
        
        if (App.state.library.length === 0) {
            if (libraryGrid) libraryGrid.style.display = 'none';
            if (emptyLibrary) emptyLibrary.style.display = 'block';
        } else {
            if (libraryGrid) libraryGrid.style.display = 'grid';
            if (emptyLibrary) emptyLibrary.style.display = 'none';
            
            libraryGrid.innerHTML = App.state.library.map(item => App.createProductCard(item, true)).join('');
        }
        
        App.setupIntersectionObserver();
    },

    // USER SYSTEM
    showLoginModal() {
        const loginModal = document.getElementById('loginModal');
        const loginOverlay = document.getElementById('loginOverlay');
        
        if (App.state.user) {
            App.logout();
        } else if (loginModal && loginOverlay) {
            loginModal.classList.add('active');
            loginOverlay.classList.add('active');
        }
    },

    hideLoginModal() {
        const loginModal = document.getElementById('loginModal');
        const loginOverlay = document.getElementById('loginOverlay');
        
        if (loginModal && loginOverlay) {
            loginModal.classList.remove('active');
            loginOverlay.classList.remove('active');
        }
    },

    handleLogin(e) {
        e.preventDefault();
        
        const username = document.getElementById('loginUsername')?.value;
        const password = document.getElementById('loginPassword')?.value;
        
        if (username && password) {
            App.state.user = { username, name: username };
            App.saveState();
            App.updateUI();
            App.hideLoginModal();
            App.showToast(`Welcome back, ${App.state.user.name}!`, 'success');
            
            // Reset form
            const loginForm = document.getElementById('loginForm');
            if (loginForm) loginForm.reset();
        }
    },

    logout() {
        App.state.user = null;
        App.saveState();
        App.updateUI();
        App.showToast('Logged out successfully', 'info');
    },

    updateUserDisplay() {
        const loginBtn = document.getElementById('loginBtn');
        if (loginBtn) {
            if (App.state.user) {
                loginBtn.textContent = 'Logout';
            } else {
                loginBtn.textContent = 'Login';
            }
        }
    },

    // SEARCH AND FILTER
    handleSearch(query) {
        App.state.searchQuery = query.toLowerCase();
        App.renderProducts();
    },

    handleCategoryFilter(category) {
        App.state.currentCategory = category;
        
        // Update category filter select
        const categoryFilter = document.getElementById('categoryFilter');
        if (categoryFilter) {
            categoryFilter.value = category;
        }
        
        App.renderProducts();
    },

    handleSort(sortBy) {
        App.state.sortBy = sortBy;
        App.renderProducts();
    },

    getFilteredProducts() {
        let filtered = [...App.products];
        
        // Category filter
        if (App.state.currentCategory !== 'all') {
            filtered = filtered.filter(product => product.category === App.state.currentCategory);
        }
        
        // Search filter
        if (App.state.searchQuery) {
            filtered = filtered.filter(product => 
                product.title.toLowerCase().includes(App.state.searchQuery) ||
                product.description.toLowerCase().includes(App.state.searchQuery) ||
                product.category.toLowerCase().includes(App.state.searchQuery)
            );
        }
        
        // Sort
        return App.getSortedProducts(filtered);
    },

    getSortedProducts(productsToSort) {
        const sorted = [...productsToSort];
        
        switch (App.state.sortBy) {
            case 'price-low':
                return sorted.sort((a, b) => a.price - b.price);
            case 'price-high':
                return sorted.sort((a, b) => b.price - a.price);
            case 'rating':
                return sorted.sort((a, b) => b.rating - a.rating);
            case 'featured':
            default:
                return sorted.sort((a, b) => b.rating - a.rating);
        }
    },

    // PRODUCT RENDERING
    renderProducts() {
        const featuredGrid = document.getElementById('featuredProductsGrid');
        const allGrid = document.getElementById('allProductsGrid');
        
        const filteredProducts = App.getFilteredProducts();
        
        // Render featured products (first 4) - only on index page
        if (featuredGrid) {
            const featuredProducts = filteredProducts.slice(0, 4);
            featuredGrid.innerHTML = featuredProducts.map(product => App.createProductCard(product)).join('');
        }
        
        // Render all products - only on browse page
        if (allGrid) {
            allGrid.innerHTML = filteredProducts.map(product => App.createProductCard(product)).join('');
        }
        
        App.setupIntersectionObserver();
    },

    createProductCard(product, isInLibrary = false) {
        const isInWishlist = App.state.wishlist.some(item => item.id === product.id);
        const isInCart = App.state.cart.some(item => item.id === product.id);
        
        return `
            <div class="product-card">
                <div class="product-image">
                    <span>${product.category === 'Gaming Gear' ? '🎮' : '📚'}</span>
                    ${product.rating >= 4.7 ? '<div class="product-badge">HOT</div>' : ''}
                </div>
                <h3 class="product-title">${product.title}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-meta">
                    <span class="product-price">$${product.price}</span>
                    <div class="product-rating">
                        <span class="stars">${'⭐'.repeat(Math.floor(product.rating))}</span>
                        <span class="rating-value">${product.rating}</span>
                    </div>
                </div>
                <div class="product-actions">
                    <button class="product-btn" onclick="App.addToCart('${product.id}')" ${isInCart || isInLibrary ? 'disabled' : ''}>
                        ${isInLibrary ? 'In Library' : isInCart ? 'In Cart' : 'Add to Cart'}
                    </button>
                    <button class="wishlist-btn ${isInWishlist ? 'active' : ''}" onclick="App.toggleWishlist('${product.id}')">
                        ${isInWishlist ? '❤️' : '🤍'}
                    </button>
                </div>
            </div>
        `;
    },

    // CHECKOUT
    checkout() {
        if (App.state.cart.length === 0) {
            App.showToast('Your cart is empty', 'error');
            return;
        }
        
        if (!App.state.user) {
            App.showToast('Please login first', 'error');
            App.showLoginModal();
            return;
        }
        
        // Move items to library and clear cart
        App.state.library.push(...App.state.cart);
        App.state.cart = [];
        App.saveState();
        App.updateUI();
        App.toggleCart();
        App.renderProducts();
        
        App.showToast('Order placed successfully! Items added to your library.', 'success');
    },

    // UTILITY FUNCTIONS
    toggleMobileMenu() {
        const navMenu = document.querySelector('.nav-menu');
        if (navMenu) {
            navMenu.classList.toggle('active');
        }
    },

    setupIntersectionObserver() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fade-in');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.product-card').forEach(card => {
            observer.observe(card);
        });
    },

    showToast(message, type = 'info') {
        const toastContainer = document.getElementById('toastContainer');
        if (!toastContainer) return;
        
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        toast.textContent = message;
        
        toastContainer.appendChild(toast);
        
        setTimeout(() => {
            if (toast.parentNode) {
                toast.parentNode.removeChild(toast);
            }
        }, 3000);
    }
};

// MAKE FUNCTIONS GLOBAL FOR ONCLICK HANDLERS
window.App = App;
window.addToCart = App.addToCart;
window.toggleWishlist = App.toggleWishlist;
window.updateQuantity = App.updateQuantity;

// INITIALIZE APP WHEN DOM IS LOADED - SINGLE BLOCK ONLY
document.addEventListener('DOMContentLoaded', App.init);
