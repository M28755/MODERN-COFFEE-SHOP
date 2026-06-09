document.addEventListener('DOMContentLoaded', () => {
    const mainNav = document.getElementById('mainNav');
    const mobileToggle = document.getElementById('mobileToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    const cartToggle = document.getElementById('cartToggle');
    const cartDrawer = document.getElementById('cartDrawer');
    const cartClose = document.getElementById('cartClose');
    //search element
    const searchToggle = document.getElementById('searchToggle');
    const searchOverlay = document.getElementById('searchOverlay');
    const searchClose = document.getElementById('searchClose');
    const searchInput = document.getElementById('searchInput');
    const searchPills = document.querySelectorAll('.search-pill');



    const heroSection = document.getElementById('home');


    const handleNavScroll = () => {

        const scrollTrigger = heroSection.offsetHeight * 0.5;

        if (window.scrollY > scrollTrigger) {
            mainNav.classList.add('scrolled');
        } else {
            mainNav.classList.remove('scrolled');
        }
    };

    window.addEventListener('scroll', handleNavScroll);
    handleNavScroll();

    //scrolling effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            mainNav.classList.add('scrolled');

        } else {
            mainNav.classList.remove('scrolled')
        }
    })
    searchToggle.addEventListener('click', () => {
        searchOverlay.classList.add('is-open')
        document.body.style.overflow = "hidden"

        setTimeout(() => {
            searchInput.focus();
        }, 300);
    })
    //close search
    function closeSearch() {
        searchOverlay.classList.remove('is-open')
        document.body.style.overflow = ""
        searchInput.value = ""
    }
    searchClose.addEventListener('click', closeSearch)
    //Keyboard Accessibility (ESC to close)

    document.addEventListener('keydown', (e) => {
        if (e.key == 'Escape') {
            if (searchOverlay.classList.contains('is-open')) {
                closeSearch()
            }

        }

    })
    searchPills.forEach(pill => {
        pill.addEventListener('click', () => {
            const query = pill.getAttribute('data-query')
            searchInput.value = query;



            searchInput.focus();


            // performSearch(query);
        })
    })



    //mobile menu toggle
    mobileToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('is-open');

        document.body.style.overflow = mobileMenu.classList.contains('is-open') ? 'hidden' : '';


    })
    //// Close mobile menu when a link inside is clicked
    mobileMenu.querySelectorAll('.nav-link').forEach((link) => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('is-open')
            document.body.style.overflow = '';
        })
    })

    //cart drawer toggle

    cartToggle.addEventListener('click', () => {
        cartDrawer.classList.toggle('is-open');
        document.body.style.overflow = 'hidden'

    })
    cartClose.addEventListener('click', () => {
        cartDrawer.classList.remove('is-open');
        document.body.style.overflow = ''
    })
})