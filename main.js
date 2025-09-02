// Download Here: light reveal and float
(function () {
    const section = document.querySelector('.download-here');
    if (!section) return;

    const inView = (el) => {
        const r = el.getBoundingClientRect();
        return r.top < window.innerHeight - 100;
    };

    const run = () => {
        if (inView(section)) {
            section.classList.add('revealed');
            window.removeEventListener('scroll', run);
        }
    };
    window.addEventListener('scroll', run, { passive: true });
    run();

    // hover pulse on badges
    const dl = section.querySelector('.badge.dl');
    if (dl) {
        dl.addEventListener('mouseenter', () => dl.style.transform = 'translateY(-4px) scale(1.03)');
        dl.addEventListener('mouseleave', () => dl.style.transform = '');
    }
})();

// Language and Theme Switching for Download Section
(function () {
    const downloadSection = document.querySelector('.download-here');
    if (!downloadSection) return;

    // Function to update language
    function updateLanguage(lang) {
        const elements = downloadSection.querySelectorAll('[data-en][data-ar]');
        elements.forEach(el => {
            if (lang === 'ar') {
                el.textContent = el.getAttribute('data-ar');
            } else {
                el.textContent = el.getAttribute('data-en');
            }
        });

        // Update images for language
        const enImages = downloadSection.querySelectorAll('.store-img.en');
        const arImages = downloadSection.querySelectorAll('.store-img.ar');

        if (lang === 'ar') {
            enImages.forEach(img => img.style.display = 'none');
            arImages.forEach(img => img.style.display = 'block');
        } else {
            enImages.forEach(img => img.style.display = 'block');
            arImages.forEach(img => img.style.display = 'none');
        }

        // Update direction
        if (lang === 'ar') {
            downloadSection.setAttribute('dir', 'rtl');
        } else {
            downloadSection.setAttribute('dir', 'ltr');
        }
    }

    // Function to update theme
    function updateTheme(theme) {
        if (theme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'dark');
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
        }
    }

    // Listen for language changes
    document.addEventListener('languageChanged', (e) => {
        updateLanguage(e.detail.language);
    });

    // Listen for theme changes
    document.addEventListener('themeChanged', (e) => {
        updateTheme(e.detail.theme);
    });

    // Initialize with current language/theme
    const currentLang = document.documentElement.lang || 'en';
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';

    updateLanguage(currentLang);
    updateTheme(currentTheme);
})();

// Footer: Language and Theme Switching
(function () {
    const footer = document.querySelector('.footer');
    if (!footer) return;

    // Function to update language
    function updateFooterLanguage(lang) {
        const elements = footer.querySelectorAll('[data-en][data-ar]');
        elements.forEach(el => {
            if (lang === 'ar') {
                el.textContent = el.getAttribute('data-ar');
            } else {
                el.textContent = el.getAttribute('data-en');
            }
        });

        // Update direction
        if (lang === 'ar') {
            footer.setAttribute('dir', 'rtl');
        } else {
            footer.setAttribute('dir', 'ltr');
        }
    }

    // Function to update theme
    function updateFooterTheme(theme) {
        if (theme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'dark');
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
        }
    }

    // Listen for language changes
    document.addEventListener('languageChanged', (e) => {
        updateFooterLanguage(e.detail.language);
    });

    // Listen for theme changes
    document.addEventListener('themeChanged', (e) => {
        updateFooterTheme(e.detail.theme);
    });

    // Initialize with current language/theme
    const currentLang = document.documentElement.lang || 'en';
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';

    updateFooterLanguage(currentLang);
    updateFooterTheme(currentTheme);
})();

// Initialize Lucide Icons
lucide.createIcons();

// Hero 3D Sphere with Three.js
(function () {
    const container = document.getElementById('hero-3d-sphere');
    if (!container) return;

    // Scene setup
    const scene = new THREE.Scene();
    const size = container.offsetWidth || 300;
    const camera = new THREE.PerspectiveCamera(75, size / size, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true
    });

    renderer.setSize(size, size);
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // Create sphere geometry
    const geometry = new THREE.SphereGeometry(80, 32, 32);

    // Create material with gradient texture
    const material = new THREE.MeshPhongMaterial({
        color: 0xff6600,
        transparent: true,
        opacity: 0.8,
        shininess: 100,
        emissive: 0xE80009,
        emissiveIntensity: 0.2
    });

    // Create sphere mesh
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    // Add wireframe for extra effect
    const wireframe = new THREE.WireframeGeometry(geometry);
    const wireframeMaterial = new THREE.LineBasicMaterial({
        color: 0xE80009,
        transparent: true,
        opacity: 0.3
    });
    const wireframeLines = new THREE.LineSegments(wireframe, wireframeMaterial);
    scene.add(wireframeLines);

    // Add ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    // Add directional light
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(50, 50, 50);
    scene.add(directionalLight);

    // Add point light for glow effect
    const pointLight = new THREE.PointLight(0xff6600, 1, 200);
    pointLight.position.set(0, 0, 100);
    scene.add(pointLight);

    // Position camera
    camera.position.z = 200;

    // Animation variables
    let time = 0;
    let mouseX = 0;
    let mouseY = 0;

    // Mouse move event for interactivity
    document.addEventListener('mousemove', (event) => {
        mouseX = (event.clientX / window.innerWidth) * 2 - 1;
        mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    });

    // Animation loop
    function animate() {
        requestAnimationFrame(animate);

        time += 0.01;

        // Rotate sphere
        sphere.rotation.x += 0.005;
        sphere.rotation.y += 0.01;
        wireframeLines.rotation.x += 0.005;
        wireframeLines.rotation.y += 0.01;

        // Add subtle floating motion
        sphere.position.y = Math.sin(time) * 10;
        wireframeLines.position.y = Math.sin(time) * 10;

        // Interactive rotation based on mouse
        sphere.rotation.x += mouseY * 0.01;
        sphere.rotation.y += mouseX * 0.01;
        wireframeLines.rotation.x += mouseY * 0.01;
        wireframeLines.rotation.y += mouseX * 0.01;

        // Pulse effect
        const scale = 1 + Math.sin(time * 2) * 0.05;
        sphere.scale.set(scale, scale, scale);
        wireframeLines.scale.set(scale, scale, scale);

        renderer.render(scene, camera);
    }

    // Start animation
    animate();

    // Handle window resize
    window.addEventListener('resize', () => {
        const container = document.getElementById('hero-3d-sphere');
        if (container) {
            const size = container.offsetWidth;
            renderer.setSize(size, size);
            camera.aspect = size / size;
            camera.updateProjectionMatrix();
        }
    });
})();

// Enhanced Features Section with 3D Cards
(function () {
    const featureCards = document.querySelectorAll('.feature-card');

    featureCards.forEach(card => {
        // Add mouse move effect for 3D tilt
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px) scale(1.02)`;
        });

        // Reset transform on mouse leave
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px) scale(1)';
        });

        // Add click effect
        card.addEventListener('click', () => {
            card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(-4px) scale(0.98)';
            setTimeout(() => {
                card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(-8px) scale(1.02)';
            }, 150);
        });
    });

    // Handle language switching for feature cards
    function updateFeatureCardsLanguage(lang) {
        const statLabels = document.querySelectorAll('.stat-label');
        statLabels.forEach(label => {
            if (lang === 'ar') {
                label.textContent = label.getAttribute('data-ar');
            } else {
                label.textContent = label.getAttribute('data-en');
            }
        });
    }

    // Listen for language changes
    document.addEventListener('languageChanged', (e) => {
        updateFeatureCardsLanguage(e.detail.language);
    });

    // Initialize with current language
    const currentLang = document.documentElement.lang || 'en';
    updateFeatureCardsLanguage(currentLang);
})();



// Back to Top Button Functionality
(function () {
    const backToTopBtn = document.getElementById('backToTop');
    if (!backToTopBtn) return;

    // Show button when user scrolls down
    function toggleBackToTop() {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    }

    // Smooth scroll to top
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    // Event listeners
    window.addEventListener('scroll', toggleBackToTop, { passive: true });
    backToTopBtn.addEventListener('click', scrollToTop);

    // Show button on page load if already scrolled
    toggleBackToTop();
})();

// App State Management
const AppState = {
    theme: localStorage.getItem('theme') || 'light',
    language: localStorage.getItem('language') || 'en',
    isLoggedIn: localStorage.getItem('isLoggedIn') === 'true' || false,

    updateTheme(newTheme) {
        this.theme = newTheme;
        localStorage.setItem('theme', newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
    },

    updateLanguage(newLang) {
        this.language = newLang;
        localStorage.setItem('language', newLang);
        // تحديث اللغة والاتجاه
        document.documentElement.setAttribute('lang', newLang);
        document.documentElement.setAttribute('dir', newLang === 'ar' ? 'rtl' : 'ltr');
        // استدعاء languageManager لتحديث النصوص
        languageManager.updateTexts();
    },

    updateLoginStatus(status) {
        this.isLoggedIn = status;
        localStorage.setItem('isLoggedIn', status);
        navbarManager.updateNavbar();
    }
};

// DOM Elements
const elements = {
    themeToggle: document.getElementById('themeToggle'),
    languageToggle: document.getElementById('languageToggle'),
    navbarAuth: document.getElementById('navbarAuth'),
    navbarUser: document.getElementById('navbarUser'),
    mobileMenu: document.getElementById('mobileMenu'),
    mobileMenuToggle: document.getElementById('mobileMenuToggle'),
    mobileAuth: document.getElementById('mobileAuth'),
    mobileUser: document.getElementById('mobileUser'),
    loginDemo: document.getElementById('loginDemo'),
    logoutDemo: document.getElementById('logoutDemo'),

    // Modal elements
    authModal: document.getElementById('authModal'),
    closeModal: document.getElementById('closeModal'),
    loginTab: document.getElementById('loginTab'),
    signupTab: document.getElementById('signupTab'),
    loginForm: document.getElementById('loginForm'),
    signupForm: document.getElementById('signupForm'),

    // Auth buttons
    loginBtn: document.getElementById('loginBtn'),
    signupBtn: document.getElementById('signupBtn'),
    mobileLoginBtn: document.getElementById('mobileLoginBtn'),
    mobileSignupBtn: document.getElementById('mobileSignupBtn'),

    // Notifications and Cart
    notificationsBtn: document.getElementById('notificationsBtn'),
    cartBtn: document.getElementById('cartBtn'),
    notificationsPanel: document.getElementById('notificationsPanel'),
    cartPanel: document.getElementById('cartPanel'),
    closeNotifications: document.getElementById('closeNotifications'),
    closeCart: document.getElementById('closeCart'),
    mobileNotificationsBtn: document.getElementById('mobileNotificationsBtn'),
    mobileCartBtn: document.getElementById('mobileCartBtn')
};

// Text Translations
const translations = {
    en: {
        'title': 'VClasses - Learning Management System',
        'logo': 'VClasses',
        'notifications': 'Notifications',
        'shopping-cart': 'Shopping Cart',
        'language': 'Language',
        'sign-in': 'Sign In',
        'get-started': 'Get Started',
        'sign-out': 'Sign Out',
        'main-title': 'Master Your Skills with VClasses',
        'main-description': 'Join thousands of learners worldwide and master in-demand skills with our comprehensive online courses. From programming to design, we\'ve got you covered with expert-led instruction and hands-on projects.',
        'try-sign-in': 'Try Sign In',
        'try-sign-out': 'Try Sign Out',
        'notifications-tooltip': 'You have 3 new notifications!',
        'cart-tooltip': 'Your cart has 5 items',
        'language-tooltip': 'Language: English (العربية متاحة قريباً)',
        'login-success': 'Successfully signed in!',
        'logout-success': 'Successfully signed out!',
        'welcome-back': 'Welcome to VClasses',
        'create-account': 'Create Account',
        'email-address': 'Email Address',
        'password': 'Password',
        'full-name': 'Full Name',
        'confirm-password': 'Confirm Password',
        'remember-me': 'Remember me',
        'forgot-password': 'Forgot Password?',
        'agree-terms': 'I agree to the Terms & Conditions',
        'or-continue-with': 'Or continue with',
        'google': 'Google',
        'facebook': 'Facebook',
        'enter-email': 'Enter your email',
        'enter-password': 'Enter your password',
        'enter-full-name': 'Enter your full name',
        'create-strong-password': 'Create a strong password',
        'confirm-your-password': 'Confirm your password',
        'my-profile': 'My Profile',
        'my-courses': 'My Courses',
        'settings': 'Settings',
        'new-course-available': 'New Course Available',
        'certificate-earned': 'Certificate Earned',
        'live-session-reminder': 'Live Session Reminder',
        'mark-all-read': 'Mark All as Read',
        'proceed-to-checkout': 'Proceed to Checkout',
        'total': 'Total:',
        'advanced-javascript': 'Advanced JavaScript',
        'react-essentials': 'React Essentials',
        'complete-course-projects': 'Complete course with projects',
        'build-modern-apps': 'Build modern web applications',
        'ahmed-ali': 'Ahmed Ali',
        'ahmed-email': 'ahmed@example.com',
        'new-course-desc': 'Advanced JavaScript course is now available for enrollment',
        'certificate-desc': 'Congratulations! You\'ve earned a certificate for Web Development Basics',
        'live-session-desc': 'Your live coding session starts in 30 minutes',
        'hours-ago': 'hours ago',
        'day-ago': 'day ago',
        'days-ago': 'days ago'
    },
    ar: {
        'title': 'فصول - نظام إدارة التعلم',
        'logo': 'فصول',
        'notifications': 'الإشعارات',
        'shopping-cart': 'سلة التسوق',
        'language': 'اللغة',
        'sign-in': 'تسجيل دخول',
        'get-started': 'ابدأ الآن',
        'sign-out': 'تسجيل خروج',
        'main-title': 'أتقن مهاراتك مع فصول',
        'main-description': 'انضم إلى آلاف المتعلمين حول العالم وأتقن المهارات المطلوبة مع دوراتنا الشاملة عبر الإنترنت. من البرمجة إلى التصميم، نحن نغطي احتياجاتك مع تعليم بقيادة خبراء ومشاريع عملية.',
        'try-sign-in': 'جرب تسجيل الدخول',
        'try-sign-out': 'جرب تسجيل الخروج',
        'notifications-tooltip': 'لديك 3 إشعارات جديدة!',
        'cart-tooltip': 'سلة التسوق تحتوي على 5 عناصر',
        'language-tooltip': 'اللغة: العربية (English available soon)',
        'login-success': 'تم تسجيل الدخول بنجاح!',
        'logout-success': 'تم تسجيل الخروج بنجاح!',
        'welcome-back': 'مرحباً بك في فصول',
        'create-account': 'إنشاء حساب',
        'email-address': 'البريد الإلكتروني',
        'password': 'كلمة المرور',
        'full-name': 'الاسم الكامل',
        'confirm-password': 'تأكيد كلمة المرور',
        'remember-me': 'تذكرني',
        'forgot-password': 'نسيت كلمة المرور؟',
        'agree-terms': 'أوافق على الشروط والأحكام',
        'or-continue-with': 'أو استمر باستخدام',
        'google': 'جوجل',
        'facebook': 'فيسبوك',
        'enter-email': 'أدخل بريدك الإلكتروني',
        'enter-password': 'أدخل كلمة المرور',
        'enter-full-name': 'أدخل اسمك الكامل',
        'create-strong-password': 'أنشئ كلمة مرور قوية',
        'confirm-your-password': 'أكد كلمة المرور',
        'my-profile': 'الملف الشخصي',
        'my-courses': 'دوراتي',
        'settings': 'الإعدادات',
        'new-course-available': 'دورة جديدة متاحة',
        'certificate-earned': 'شهادة مكتسبة',
        'live-session-reminder': 'تذكير بالجلسة المباشرة',
        'mark-all-read': 'تحديد الكل كمقروء',
        'proceed-to-checkout': 'إتمام الشراء',
        'total': 'المجموع:',
        'advanced-javascript': 'JavaScript المتقدم',
        'react-essentials': 'أساسيات React',
        'complete-course-projects': 'دورة كاملة مع مشاريع',
        'build-modern-apps': 'بناء تطبيقات الويب الحديثة',
        'ahmed-ali': 'أحمد علي',
        'ahmed-email': 'أحمد@مثال.com',
        'new-course-desc': 'دورة JavaScript المتقدمة متاحة الآن للتسجيل',
        'certificate-desc': 'تهانينا! لقد حصلت على شهادة أساسيات تطوير الويب',
        'live-session-desc': 'جلسة البرمجة المباشرة تبدأ خلال 30 دقيقة',
        'hours-ago': 'ساعات',
        'day-ago': 'يوم',
        'days-ago': 'أيام'
    }
};

// Utility Functions
const utils = {
    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;

        // Add styles
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
            z-index: 10000;
            transform: translateX(100%);
            transition: transform 0.3s ease;
            font-weight: 500;
            max-width: 300px;
        `;

        document.body.appendChild(notification);

        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);

        // Remove after 3 seconds
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                if (document.body.contains(notification)) {
                    document.body.removeChild(notification);
                }
            }, 300);
        }, 3000);
    },

    addAnimation(element, animationClass) {
        element.classList.add(animationClass);
        setTimeout(() => {
            element.classList.remove(animationClass);
        }, 600);
    }
};

// Notifications Management
const notificationsManager = {
    init() {
        this.setupEventListeners();
    },

    setupEventListeners() {
        // Desktop notifications button
        if (elements.notificationsBtn) {
            elements.notificationsBtn.addEventListener('click', () => this.toggleNotifications());
        }

        // Mobile notifications button
        if (elements.mobileNotificationsBtn) {
            elements.mobileNotificationsBtn.addEventListener('click', () => this.toggleNotifications());
        }

        // Close notifications panel
        if (elements.closeNotifications) {
            elements.closeNotifications.addEventListener('click', () => this.closeNotifications());
        }

        // Mark all as read
        const markAllReadBtn = document.querySelector('.mark-all-read');
        if (markAllReadBtn) {
            markAllReadBtn.addEventListener('click', () => this.markAllAsRead());
        }

        // Close on escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && elements.notificationsPanel.classList.contains('active')) {
                this.closeNotifications();
            }
        });
    },

    toggleNotifications() {
        const isOpen = elements.notificationsPanel.classList.contains('active');

        if (isOpen) {
            this.closeNotifications();
        } else {
            this.openNotifications();
        }
    },

    openNotifications() {
        elements.notificationsPanel.classList.add('active');
        document.body.style.overflow = 'hidden';
    },

    closeNotifications() {
        elements.notificationsPanel.classList.remove('active');
        document.body.style.overflow = '';
    },

    markAllAsRead() {
        const unreadItems = document.querySelectorAll('.notification-item.unread');
        unreadItems.forEach(item => {
            item.classList.remove('unread');
        });

        // Update badge
        const badges = document.querySelectorAll('.notification-badge');
        badges.forEach(badge => {
            badge.textContent = '0';
            badge.style.display = 'none';
        });

        utils.showNotification(translations[AppState.language]['mark-all-read'], 'success');
    }
};

// Cart Management
const cartManager = {
    init() {
        this.setupEventListeners();
    },

    setupEventListeners() {
        // Desktop cart button
        if (elements.cartBtn) {
            elements.cartBtn.addEventListener('click', () => this.toggleCart());
        }

        // Mobile cart button
        if (elements.mobileCartBtn) {
            elements.mobileCartBtn.addEventListener('click', () => this.toggleCart());
        }

        // Close cart panel
        if (elements.closeCart) {
            elements.closeCart.addEventListener('click', () => this.closeCart());
        }

        // Remove items
        document.querySelectorAll('.remove-item').forEach(btn => {
            btn.addEventListener('click', (e) => this.removeItem(e));
        });

        // Checkout button
        const checkoutBtn = document.querySelector('.checkout-btn');
        if (checkoutBtn) {
            checkoutBtn.addEventListener('click', () => this.proceedToCheckout());
        }

        // Close on escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && elements.cartPanel.classList.contains('active')) {
                this.closeCart();
            }
        });
    },

    toggleCart() {
        const isOpen = elements.cartPanel.classList.contains('active');

        if (isOpen) {
            this.closeCart();
        } else {
            this.openCart();
        }
    },

    openCart() {
        elements.cartPanel.classList.add('active');
        document.body.style.overflow = 'hidden';
    },

    closeCart() {
        elements.cartPanel.classList.remove('active');
        document.body.style.overflow = '';
    },

    removeItem(e) {
        const cartItem = e.target.closest('.cart-item');
        if (cartItem) {
            cartItem.style.transform = 'translateX(100%)';
            cartItem.style.opacity = '0';

            setTimeout(() => {
                cartItem.remove();
                this.updateCartTotal();
            }, 300);
        }
    },

    updateCartTotal() {
        const prices = Array.from(document.querySelectorAll('.cart-item-price'))
            .map(price => parseFloat(price.textContent.replace(/[^0-9.]/g, '')));

        const total = prices.reduce((sum, price) => sum + price, 0);
        const totalElement = document.querySelector('.total-price');

        if (totalElement) {
            totalElement.textContent = `$${total.toFixed(2)}`;
        }
    },

    proceedToCheckout() {
        utils.showNotification('Redirecting to checkout...', 'info');
        setTimeout(() => {
            this.closeCart();
        }, 1000);
    }
};

// Modal Management
const modalManager = {
    currentTab: 'login',

    init() {
        this.setupEventListeners();
    },

    setupEventListeners() {
        // Open modal buttons
        [elements.loginBtn, elements.mobileLoginBtn].forEach(btn => {
            if (btn) {
                btn.addEventListener('click', () => this.openModal('login'));
            }
        });

        [elements.signupBtn, elements.mobileSignupBtn].forEach(btn => {
            if (btn) {
                btn.addEventListener('click', () => this.openModal('signup'));
            }
        });

        // Close modal
        elements.closeModal.addEventListener('click', () => this.closeModal());
        elements.authModal.addEventListener('click', (e) => {
            if (e.target === elements.authModal) {
                this.closeModal();
            }
        });

        // Tab switching
        elements.loginTab.addEventListener('click', () => this.switchTab('login'));
        elements.signupTab.addEventListener('click', () => this.switchTab('signup'));

        // Form submissions
        elements.loginForm.addEventListener('submit', (e) => this.handleLogin(e));
        elements.signupForm.addEventListener('submit', (e) => this.handleSignup(e));

        // Password toggles
        document.querySelectorAll('.password-toggle').forEach(toggle => {
            toggle.addEventListener('click', (e) => this.togglePassword(e));
        });

        // Social buttons
        document.querySelectorAll('.social-btn').forEach(btn => {
            btn.addEventListener('click', (e) => this.handleSocialLogin(e));
        });

        // Close on escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && elements.authModal.classList.contains('active')) {
                this.closeModal();
            }
        });
    },

    openModal(tab = 'login') {
        elements.authModal.classList.add('active');
        document.body.style.overflow = 'hidden';
        this.switchTab(tab);

        // Focus on first input
        setTimeout(() => {
            const firstInput = elements.authModal.querySelector('input');
            if (firstInput) firstInput.focus();
        }, 300);
    },

    closeModal() {
        elements.authModal.classList.remove('active');
        document.body.style.overflow = '';

        // Reset forms
        elements.loginForm.reset();
        elements.signupForm.reset();

        // Hide password fields
        document.querySelectorAll('input[type="password"]').forEach(input => {
            input.type = 'password';
        });
    },

    switchTab(tab) {
        this.currentTab = tab;

        // Update tab buttons
        [elements.loginTab, elements.signupTab].forEach(btn => {
            btn.classList.remove('active');
        });

        if (tab === 'login') {
            elements.loginTab.classList.add('active');
            elements.loginForm.classList.add('active');
            elements.signupForm.classList.remove('active');
        } else {
            elements.signupTab.classList.add('active');
            elements.signupForm.classList.add('active');
            elements.loginForm.classList.remove('active');
        }
    },

    togglePassword(e) {
        const button = e.currentTarget;
        const input = button.parentElement.querySelector('input');
        const icon = button.querySelector('i');

        if (input.type === 'password') {
            input.type = 'text';
            icon.setAttribute('data-lucide', 'eye-off');
        } else {
            input.type = 'password';
            icon.setAttribute('data-lucide', 'eye');
        }

        lucide.createIcons();
    },

    handleLogin(e) {
        e.preventDefault();
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;

        if (!email || !password) {
            utils.showNotification('Please fill in all fields', 'error');
            return;
        }

        // Simulate login
        this.simulateAuth('login', { email, password });
    },

    handleSignup(e) {
        e.preventDefault();
        const name = document.getElementById('signupName').value;
        const email = document.getElementById('signupEmail').value;
        const password = document.getElementById('signupPassword').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        const agreeTerms = document.getElementById('agreeTerms').checked;

        if (!name || !email || !password || !confirmPassword) {
            utils.showNotification('Please fill in all fields', 'error');
            return;
        }

        if (password !== confirmPassword) {
            utils.showNotification('Passwords do not match!', 'error');
            return;
        }

        if (!agreeTerms) {
            utils.showNotification('Please agree to the terms and conditions', 'error');
            return;
        }

        // Simulate signup
        this.simulateAuth('signup', { name, email, password });
    },

    handleSocialLogin(e) {
        e.preventDefault();
        const provider = e.currentTarget.classList.contains('google') ? 'Google' : 'Facebook';
        utils.showNotification(`Logging in with ${provider}...`, 'info');

        // Simulate social login
        setTimeout(() => {
            this.simulateAuth('social', { provider });
        }, 1500);
    },

    simulateAuth(type, data) {
        const submitBtn = elements.authModal.querySelector('.submit-btn');
        const originalText = submitBtn.innerHTML;

        // Show loading state
        submitBtn.innerHTML = '<i data-lucide="loader-2" class="animate-spin"></i> Loading...';
        submitBtn.disabled = true;
        lucide.createIcons();

        // Simulate API call
        setTimeout(() => {
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;

            // Success
            AppState.updateLoginStatus(true);
            this.closeModal();

            const message = type === 'login' ? 'Successfully signed in!' :
                type === 'signup' ? 'Account created successfully!' :
                    `Logged in with ${data.provider}!`;

            utils.showNotification(message, 'success');
            utils.addAnimation(document.querySelector('.navbar'), 'fade-in');
        }, 2000);
    }
};

// Theme Management
const themeManager = {
    init() {
        // Set initial theme
        document.documentElement.setAttribute('data-theme', AppState.theme);
        elements.themeToggle.checked = AppState.theme === 'dark';

        // Add event listener
        elements.themeToggle.addEventListener('change', (e) => {
            const newTheme = e.target.checked ? 'dark' : 'light';
            this.switchTheme(newTheme);
        });
    },

    switchTheme(theme) {
        AppState.updateTheme(theme);

        // Add animation to navbar
        const navbar = document.querySelector('.navbar');
        utils.addAnimation(navbar, 'fade-in');

        // Update toggle appearance
        this.updateToggleAppearance(theme);
    },

    updateToggleAppearance(theme) {
        const toggleTrack = document.querySelector('.toggle-track');
        const toggleThumb = document.querySelector('.toggle-thumb');
        const toggleStars = document.querySelector('.toggle-stars');

        if (theme === 'dark') {
            toggleTrack.style.background = 'linear-gradient(135deg, #4a5568 0%, #2d3748 100%)';
            toggleStars.style.opacity = '1';
        } else {
            toggleTrack.style.background = 'linear-gradient(135deg, #6ba3f5 0%, #4a90e2 100%)';
            toggleStars.style.opacity = '0.7';
        }
    }
};

// Language Management
const languageManager = {
    init() {
        // Set initial language
        document.documentElement.setAttribute('lang', AppState.language);
        document.documentElement.setAttribute('dir', AppState.language === 'ar' ? 'rtl' : 'ltr');
        this.updateTexts();

        // Add event listeners for both desktop and mobile language toggles
        [elements.languageToggle, document.getElementById('mobileLanguageBtn')].forEach(btn => {
            if (btn) {
                btn.addEventListener('click', () => {
                    const newLang = AppState.language === 'en' ? 'ar' : 'en';
                    this.switchLanguage(newLang);
                });
            }
        });
    },

    switchLanguage(language) {
        AppState.updateLanguage(language);

        // Add animation to navbar
        const navbar = document.querySelector('.navbar');
        utils.addAnimation(navbar, 'slide-in');

        // Show notification
        const message = language === 'ar' ? 'تم تغيير اللغة إلى العربية' : 'Language changed to English';
        utils.showNotification(message, 'info');
    },

    updateTexts() {
        const currentLang = AppState.language;
        const texts = translations[currentLang];

        // Update all elements with data attributes
        document.querySelectorAll('[data-en][data-ar]').forEach(element => {
            const key = element.getAttribute(`data-${currentLang}`);
            if (key) {
                // Check if element has children (like icons)
                const textSpan = element.querySelector('span[data-en][data-ar]');
                if (textSpan) {
                    // Update only the span content for buttons with icons
                    textSpan.textContent = key;
                } else {
                    // Update the entire element for simple text elements
                    element.textContent = key;
                }
            }
        });

        // Update placeholders
        document.querySelectorAll('input[data-placeholder-en][data-placeholder-ar]').forEach(input => {
            const placeholderKey = input.getAttribute(`data-placeholder-${currentLang}`);
            if (placeholderKey) {
                input.placeholder = placeholderKey;
            }
        });

        // Update title
        document.title = texts.title;

        // Update tooltips
        document.querySelectorAll('[data-tooltip-en][data-tooltip-ar]').forEach(element => {
            element.title = element.getAttribute(`data-tooltip-${currentLang}`);
        });

        // Update specific content that needs translation
        this.updateDynamicContent(currentLang, texts);
    },

    updateDynamicContent(lang, texts) {
        // Update user name
        const userNameElements = document.querySelectorAll('.user-name, .mobile-user-name');
        userNameElements.forEach(el => {
            el.textContent = texts['ahmed-ali'];
        });

        // Update user email
        const userEmailElements = document.querySelectorAll('.mobile-user-email');
        userEmailElements.forEach(el => {
            el.textContent = texts['ahmed-email'];
        });

        // Update notification content
        const notificationItems = document.querySelectorAll('.notification-item');
        if (notificationItems.length >= 3) {
            // First notification
            const firstTitle = notificationItems[0].querySelector('h4');
            const firstDesc = notificationItems[0].querySelector('p');
            const firstTime = notificationItems[0].querySelector('.notification-time');

            if (firstTitle) firstTitle.textContent = texts['new-course-available'];
            if (firstDesc) firstDesc.textContent = texts['new-course-desc'];
            if (firstTime) firstTime.textContent = `2 ${texts['hours-ago']}`;

            // Second notification
            const secondTitle = notificationItems[1].querySelector('h4');
            const secondDesc = notificationItems[1].querySelector('p');
            const secondTime = notificationItems[1].querySelector('.notification-time');

            if (secondTitle) secondTitle.textContent = texts['certificate-earned'];
            if (secondDesc) secondDesc.textContent = texts['certificate-desc'];
            if (secondTime) secondTime.textContent = `1 ${texts['day-ago']}`;

            // Third notification
            const thirdTitle = notificationItems[2].querySelector('h4');
            const thirdDesc = notificationItems[2].querySelector('p');
            const thirdTime = notificationItems[2].querySelector('.notification-time');

            if (thirdTitle) thirdTitle.textContent = texts['live-session-reminder'];
            if (thirdDesc) thirdDesc.textContent = texts['live-session-desc'];
            if (thirdTime) thirdTime.textContent = `3 ${texts['days-ago']}`;
        }

        // Update cart items
        const cartItems = document.querySelectorAll('.cart-item');
        if (cartItems.length >= 2) {
            // First cart item
            const firstCartTitle = cartItems[0].querySelector('h4');
            const firstCartDesc = cartItems[0].querySelector('p');

            if (firstCartTitle) firstCartTitle.textContent = texts['advanced-javascript'];
            if (firstCartDesc) firstCartDesc.textContent = texts['complete-course-projects'];

            // Second cart item
            const secondCartTitle = cartItems[1].querySelector('h4');
            const secondCartDesc = cartItems[1].querySelector('p');

            if (secondCartTitle) secondCartTitle.textContent = texts['react-essentials'];
            if (secondCartDesc) secondCartDesc.textContent = texts['build-modern-apps'];
        }
    }
};

// Navbar Management
const navbarManager = {
    init() {
        this.updateNavbar();
        this.setupEventListeners();
    },

    updateNavbar() {
        const show = (el, value) => { if (el) el.style.display = value; };

        if (AppState.isLoggedIn) {
            // Show user menu, hide auth buttons
            show(elements.navbarAuth, 'none');
            show(elements.navbarUser, 'flex');
            show(elements.mobileAuth, 'none');
            show(elements.mobileUser, 'flex');

            // Update demo buttons
            show(elements.loginDemo, 'none');
            show(elements.logoutDemo, 'flex');
        } else {
            // Show auth buttons, hide user menu
            show(elements.navbarAuth, 'flex');
            show(elements.navbarUser, 'none');
            show(elements.mobileAuth, 'flex');
            show(elements.mobileUser, 'none');

            // Update demo buttons
            show(elements.loginDemo, 'flex');
            show(elements.logoutDemo, 'none');
        }
    },

    setupEventListeners() {
        // Logout button clicks
        document.querySelectorAll('.logout-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                this.handleLogoutClick(btn);
            });
        });

        // Hero button
        const heroBtn = document.querySelector('.hero-btn');
        if (heroBtn) {
            heroBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.handleHeroButtonClick();
            });
        }
    },

    handleLogoutClick(button) {
        // Add loading state
        const originalText = button.innerHTML;
        button.innerHTML = '<i data-lucide="loader-2" class="animate-spin"></i> Loading...';
        button.disabled = true;

        // Simulate API call
        setTimeout(() => {
            this.simulateLogout();
            button.innerHTML = originalText;
            button.disabled = false;
        }, 1000);
    },

    simulateLogin() {
        modalManager.openModal('login');
    },

    simulateLogout() {
        AppState.updateLoginStatus(false);
        utils.showNotification(translations[AppState.language]['logout-success'], 'success');
        utils.addAnimation(document.querySelector('.navbar'), 'fade-in');
    },

    handleHeroButtonClick() {
        // Add click animation
        const heroBtn = document.querySelector('.hero-btn');
        utils.addAnimation(heroBtn, 'bounce');

        // Show success message
        const currentLang = AppState.language;
        const message = currentLang === 'ar' ?
            'مرحباً بك في رحلة استكشاف الصخور!' :
            'Welcome to the rock exploration journey!';

        utils.showNotification(message, 'success');

        // Simulate navigation (you can replace this with actual navigation)
        setTimeout(() => {
            utils.showNotification(
                currentLang === 'ar' ? 'جاري التحميل...' : 'Loading...',
                'info'
            );
        }, 1000);
    }
};

// Mobile Menu Manager
const mobileMenuManager = {
    init() {
        this.setupEventListeners();
        console.log('Mobile Menu Manager initialized');
    },

    setupEventListeners() {
        if (!elements.mobileMenuToggle || !elements.mobileMenu) {
            console.error('Mobile menu elements not found');
            return;
        }

        // Toggle mobile menu
        elements.mobileMenuToggle.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            this.toggleMobileMenu();
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!elements.mobileMenu.contains(e.target) &&
                !elements.mobileMenuToggle.contains(e.target)) {
                this.closeMobileMenu();
            }
        });

        // Close menu on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeMobileMenu();
            }
        });

        // Close menu on window resize
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768) {
                this.closeMobileMenu();
            }
        });

        console.log('Mobile menu event listeners set up');
    },

    toggleMobileMenu() {
        console.log('Toggling mobile menu');
        if (elements.mobileMenu.classList.contains('active')) {
            this.closeMobileMenu();
        } else {
            this.openMobileMenu();
        }
    },

    openMobileMenu() {
        console.log('Opening mobile menu');
        elements.mobileMenu.classList.add('active');
        elements.mobileMenuToggle.setAttribute('aria-expanded', 'true');
        document.body.style.overflow = 'hidden';
    },

    closeMobileMenu() {
        console.log('Closing mobile menu');
        elements.mobileMenu.classList.remove('active');
        elements.mobileMenuToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
    }
};

// Scroll Management
const scrollManager = {
    init() {
        let lastScrollTop = 0;

        window.addEventListener('scroll', () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const navbar = document.querySelector('.navbar');

            if (scrollTop > lastScrollTop && scrollTop > 100) {
                // Scrolling down
                navbar.style.transform = 'translateY(-100%)';
            } else {
                // Scrolling up
                navbar.style.transform = 'translateY(0)';
            }

            lastScrollTop = scrollTop;
        });
    }
};

// Animation Management
const animationManager = {
    init() {
        // Add entrance animations
        window.addEventListener('load', () => {
            const navbar = document.querySelector('.navbar');
            this.initHeroAnimations();
        });

        // Add scroll animations
        this.setupScrollAnimations();

        // Add parallax effects
        this.setupParallaxEffects();
    },

    initHeroAnimations() {
        console.log('Initializing Hero Animations...');

        // Staggered animation for hero elements
        const heroElements = document.querySelectorAll('.content-container > *');
        console.log('Found hero elements:', heroElements.length);
        heroElements.forEach((el, index) => {
            el.style.animationDelay = `${index * 0.2}s`;
        });

        // Gradient blob animation
        this.setupGradientBlob();

        // Earth layers labels animation
        this.setupEarthLayers();

        console.log('Hero animations initialized successfully!');
    },



    setupGradientBlob() {
        const blob = document.querySelector('.gradient-blob');
        if (blob) {
            console.log('Gradient blob found, setting up mouse follow effect');
            // Add mouse follow effect
            document.addEventListener('mousemove', (e) => {
                const { clientX, clientY } = e;
                const { innerWidth, innerHeight } = window;

                const x = (clientX / innerWidth - 0.5) * 20;
                const y = (clientY / innerHeight - 0.5) * 20;

                blob.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;
            });
        } else {
            console.warn('Gradient blob not found');
        }
    },

    setupEarthLayers() {
        const labels = document.querySelectorAll('.layer-label');
        console.log('Found earth layer labels:', labels.length);
        labels.forEach((label, index) => {
            // Add click interaction
            label.addEventListener('click', () => {
                utils.addAnimation(label, 'bounce');

                // Show tooltip with layer info
                this.showLayerInfo(label, index);
            });
        });
    },

    showLayerInfo(label, index) {
        const layerInfo = [
            { en: 'Earth\'s outermost layer', ar: 'الطبقة الخارجية للأرض' },
            { en: 'Upper part of Earth\'s mantle', ar: 'الجزء العلوي من وشاح الأرض' },
            { en: 'Lower part of Earth\'s mantle', ar: 'الجزء السفلي من وشاح الأرض' },
            { en: 'Liquid outer core of Earth', ar: 'النواة الخارجية السائلة للأرض' },
            { en: 'Solid inner core of Earth', ar: 'النواة الداخلية الصلبة للأرض' }
        ];

        const info = layerInfo[index];
        const currentLang = AppState.language;
        const text = info[currentLang];

        utils.showNotification(text, 'info');
    },

    setupScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                }
            });
        }, observerOptions);

        // Observe elements for animation only (scroll reveal disabled)
        document.querySelectorAll('.auth-btn, .nav-icon-btn, .hero-btn').forEach(el => {
            observer.observe(el);
        });
    },

    setupParallaxEffects() {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallaxElements = document.querySelectorAll('.gradient-blob');

            parallaxElements.forEach((el, index) => {
                const speed = 0.3 + (index * 0.1);
                const yPos = -(scrolled * speed);
                el.style.transform = `translate(calc(-50% + ${yPos * 0.1}px), calc(-50% + ${yPos}px))`;
            });
        });
    }
};

// Initialize all managers
document.addEventListener('DOMContentLoaded', () => {
    // Debug: Check if elements exist
    console.log('Mobile Menu Toggle:', elements.mobileMenuToggle);
    console.log('Mobile Menu:', elements.mobileMenu);

    themeManager.init();
    languageManager.init();
    modalManager.init();
    notificationsManager.init();
    cartManager.init();
    navbarManager.init();
    mobileMenuManager.init();
    scrollManager.init();
    animationManager.init();

    // Initialize AOS (Animate On Scroll)
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        offset: 100,
        delay: 0
    });

    // Initialize Particles.js
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            particles: {
                number: {
                    value: 80,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: '#ffffff'
                },
                shape: {
                    type: 'circle',
                    stroke: {
                        width: 0,
                        color: '#000000'
                    }
                },
                opacity: {
                    value: 0.3,
                    random: false,
                    anim: {
                        enable: false,
                        speed: 1,
                        opacity_min: 0.1,
                        sync: false
                    }
                },
                size: {
                    value: 3,
                    random: true,
                    anim: {
                        enable: false,
                        speed: 40,
                        size_min: 0.1,
                        sync: false
                    }
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: '#ffffff',
                    opacity: 0.2,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 2,
                    direction: 'none',
                    random: false,
                    straight: false,
                    out_mode: 'out',
                    bounce: false,
                    attract: {
                        enable: false,
                        rotateX: 600,
                        rotateY: 1200
                    }
                }
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: {
                        enable: true,
                        mode: 'repulse'
                    },
                    onclick: {
                        enable: true,
                        mode: 'push'
                    },
                    resize: true
                },
                modes: {
                    grab: {
                        distance: 400,
                        line_linked: {
                            opacity: 1
                        }
                    },
                    bubble: {
                        distance: 400,
                        size: 40,
                        duration: 2,
                        opacity: 8,
                        speed: 3
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.4
                    },
                    push: {
                        particles_nb: 4
                    },
                    remove: {
                        particles_nb: 2
                    }
                }
            },
            retina_detect: true
        });
    }

    // Add CSS for animations
    const style = document.createElement('style');
    style.textContent = `
        .animate-spin {
            animation: spin 1s linear infinite;
        }
        
        @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
        
        .notification {
            font-family: inherit;
        }
    `;
    document.head.appendChild(style);
});

// Export for debugging
window.AppState = AppState;
window.utils = utils;