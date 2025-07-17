document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');
    const menuButton = document.getElementById('menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const closeMenuButton = document.getElementById('close-menu-button');
    const navLinks = mobileMenu.querySelectorAll('a');

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) { // Adjust scroll threshold as needed
            navbar.classList.remove('bg-transparent');
            navbar.classList.add('bg-gray-900', 'shadow-lg');
        } else {
            navbar.classList.remove('bg-gray-900', 'shadow-lg');
            navbar.classList.add('bg-transparent');
        }
    });

    // Function to open the mobile menu
    const openMobileMenu = () => {
        mobileMenu.classList.remove('translate-x-full'); // Slides in
        mobileMenu.classList.add('translate-x-0');
    };

    // Function to close the mobile menu
    const closeMobileMenu = () => {
        mobileMenu.classList.remove('translate-x-0'); // Slides out
        mobileMenu.classList.add('translate-x-full');
    };

    // Event listener for the hamburger button (now a toggle)
    if (menuButton) {
        menuButton.addEventListener('click', (event) => {
            // Stop propagation to prevent the document click listener from immediately closing it
            event.stopPropagation();
            if (mobileMenu.classList.contains('translate-x-0')) {
                closeMobileMenu(); // If open, close it
            } else {
                openMobileMenu(); // If closed, open it
            }
        });
    }

    // Event listener for the explicit close button (the 'X')
    if (closeMenuButton) {
        closeMenuButton.addEventListener('click', closeMobileMenu);
    }

    // Event listeners for each navigation link (to close menu on click)
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            closeMobileMenu(); // Close the menu when a link is clicked
        });
    });

    // New: Close mobile menu when clicking outside of it
    document.addEventListener('click', (event) => {
        // Check if the mobile menu is open AND
        // if the clicked element is NOT the mobile menu itself AND
        // if the clicked element is NOT the menu button itself AND
        // if the clicked element is NOT inside the mobile menu
        if (
            mobileMenu.classList.contains('translate-x-0') && // Check if menu is open
            !mobileMenu.contains(event.target) &&          // Click is not on the menu itself
            !menuButton.contains(event.target)              // Click is not on the hamburger button
        ) {
            closeMobileMenu();
        }
    });


    // Close mobile menu if resized to desktop view
    window.addEventListener('resize', () => {
        if (window.innerWidth >= 768) { // 768px is Tailwind's 'md' breakpoint
            closeMobileMenu(); // Ensure menu is closed when switching to desktop
        }
    });
});