tailwind.config = {
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            colors: {
                brand: {
                    light: '#d9f99d',
                    DEFAULT: '#a3e635',
                    dark: '#65a30d',
                }
            }
        }
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const allPages = document.querySelectorAll('.page-content');
    const allNavLinks = document.querySelectorAll('.nav-link, .nav-link-button');

    // Function to switch pages
    function showPage(pageId) {
        // Hide all pages
        allPages.forEach(page => {
            page.classList.remove('active');
        });

        // Show the target page
        const targetPage = document.getElementById(`page-${pageId}`);
        if (targetPage) {
            targetPage.classList.add('active');
        }

        // Update active state on nav links
        allNavLinks.forEach(link => {
            if (link.dataset.page === pageId) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });

        // Scroll behavior for new page
        if (pageId === 'details') {
            const detailsSection = document.getElementById('details');
            if (detailsSection) {
                detailsSection.scrollIntoView({ behavior: 'smooth' });
            } else {
                window.scrollTo(0, 0);
            }
        } else {
            window.scrollTo(0, 0);
        }
    }

    // Set initial page (Home)
    showPage('home');

    // Add click listeners to all nav links
    allNavLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent default anchor behavior
            const pageId = link.dataset.page;
            if (pageId) {
                showPage(pageId);
            }
            // Close mobile menu if open
            mobileMenu.classList.add('hidden');
        });
    });

    // Toggle mobile menu
    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
});

// Show a simple success message for the demo form
function showMessage() {
    const successMessage = document.getElementById('success-message');
    successMessage.classList.remove('hidden');
    // Optional: reset form
    document.querySelector('form').reset(); 
    setTimeout(() => {
        successMessage.classList.add('hidden');
    }, 4000); // Hide message after 4 seconds
}