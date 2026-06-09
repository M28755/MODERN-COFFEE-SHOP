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


    const addButton = document.querySelectorAll('.add-btn')
    const cartBadge = document.querySelector('.cart-badge')

    addButton.forEach(btn => {
        btn.addEventListener('click', (e) => {

            e.preventDefault()
            //get current count
            cartCount = parseInt(cartBadge.textContent) || 0;

            cartCount++;
            //update badge with new count
            cartBadge.textContent = cartCount;

            cartBadge.style.transform = 'scale(1.2)';
            cartBadge.style.transition = 'transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275)';

            setTimeout(() => {
                cartBadge.style.transform = 'scale(1)';
            }, 200);


            btn.style.backgroundColor = '#c76c00';
            btn.style.color = '#ffffff';
            btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`;


            setTimeout(() => {
                btn.style.backgroundColor = '';
                btn.style.color = '';
                btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>`;
            }, 1000);




        })
    })
    const timeLineContent = document.getElementById('timelineContent');
    const stickyYear = document.getElementById('stickyYear');
    const timelineProgress = document.getElementById('timeLineprogress');
    const storyBlocks = document.querySelectorAll('.story-block');

    if (storyBlocks.length > 0) {
        const observerOption = {
            root: null,
            rootMargin: '0px 0px -40% 0px',
            threshold: 0
        }
        let currentYear = stickyYear.innerText;
        const storyObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const year = entry.target.getAttribute('data-year');

                    if (year !== currentYear) {
                        stickyYear.classList.add('is-switching');

                        setTimeout(() => {
                            stickyYear.innerText = year;
                            currentYear = year; // Update tracker
                            stickyYear.classList.remove('is-switching');

                            // console.log('Year changed', year)
                        }, 400); // Matches the CSS transition speed

                    }


                    //  console.log('story-block is intersecting')

                    entry.target.classList.add('is-visible')
                } else {
                    entry.target.classList.remove('is-visible')
                }
            })
        }, observerOption);

        storyBlocks.forEach(block => {
            storyObserver.observe(block)
        })
    }
    if (timelineProgress && timeLineContent) {
        const handleProgress = () => {
            //Get dimensions relative to the viewport
            const rect = timeLineContent.getBoundingClientRect();
            const sectionTop = rect.top;
            const sectionHeight = rect.height;

            //Calculate how far we've scrolled through the timeline content
            const startPoint = window.innerHeight / 2;
            const scrollDistance = sectionHeight - startPoint;
            const scrolledPast = startPoint - sectionTop;
            //Calculate percentage
            let progress = (scrolledPast / scrollDistance) * 100;

            progress = Math.max(0, Math.min(progress, 100));

            timelineProgress.style.height = `${progress}%`

        }
        let ticking = false;
        window.addEventListener('scroll', () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    handleProgress();
                    ticking = false;
                });
                ticking = true;
            }
        });

        handleProgress(); // Run on load

    }
})