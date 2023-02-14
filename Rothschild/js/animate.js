if (window.matchMedia('(min-width: 1024.98px)').matches) {

    gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

    // ScrollSmoother.create({
    //     wrapper: '.content',
    //     content: '.wrapper',
    // })

    const tl = gsap.timeline()

    tl.fromTo(
        '.main-page__img',
        {
            opacity: 0,
            scale: 0.5,

        },
        {
            opacity: 1,
            scale: 1,
            duration: 1
        },
    )
        .fromTo(
            '.main-page__title',
            {
                x: -200,
                opacity: 0,
            },
            {
                x: 0,
                opacity: 1,
                duration: 1
            },
            1,
        )
        .fromTo(
            '.main-page__subtitle',
            {
                y: 50,
                opacity: 0
            },
            {
                y: 0,
                opacity: 1,
                duration: 1
            },
        )
        .fromTo(
            '.main-page__body',
            {
                x: 300,
                opacity: 0
            },
            {
                x: 0,
                opacity: 1,
                duration: 1
            },
            2.5,
        )
        .fromTo(
            '.top-header__inner',
            {
                y: -50,
                opacity: 0
            },
            {
                y: 0,
                opacity: 1,
                duration: 1
            },
            3.5,
        )
        .fromTo(
            '.bottom-header',
            {
                opacity: 0,
            },
            {
                opacity: 1,
                duration: 1,
            },
            4.5,
        )
        .fromTo(
            '.bottom-header__menu li',
            {
                y: -50,
                opacity: 0,
            },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                stagger: 0.1,
            },
            4.5,
        )
        .fromTo(
            '.main-page__social-item',
            {
                scale: 0,
                opacity: 0
            },
            {
                scale: 1,
                opacity: 1,
                duration: 1,
            },
            6
        )

    // Scroll animation
    gsap.to('.main-page__inner', {
        scrollTrigger: {
            trigger: '.main-page',
            start: 'top top',
            scrub: true,
        },
        yPercent: 50,
        scale: 0.5,
        xPercent: -50,
        opacity: 0,
    })
    gsap.to('.main-page__bg', {
        scrollTrigger: {
            trigger: '.main-page',
            start: 'top top',
            scrub: true,
        },
        scale: 2,
    })
    gsap.to('.main-page__img img', {
        scrollTrigger: {
            trigger: '.main-page',
            start: 'top top',
            scrub: true,
        },
        opacity: 0.5
    })

    gsap.to('.about-page__img img', {
        scrollTrigger: {
            trigger: '.about-page',
            start: '100 center',
            scrub: true,
        },
        scale: 1.2
    })

    // Animation stars
    // gsap.to('[data-speed]', {
    //     y: (i, el) => - (1 - parseFloat(el.getAttribute('data-speed'))) * ScrollTrigger.maxScroll(window),
    //     scrollTrigger: {
    //         trigger: '.insight-page',
    //         scrub: 0,
    //     },
    // })
    gsap.from('.advantages-page__title', {
        scrollTrigger: {
            trigger: '.advantages-page',
            start: '-200 center',
            end: '+=300px',
            scrub: true,
        },
        opacity: 0,
        yPercent: 100,
        transformOrigin: 'left center',
    })

    gsap.from('.advantages-page__item', {
        scrollTrigger: {
            trigger: '.advantages-page',
            start: '-100 center',
            end: '+=400px',
            scrub: true,
        },
        opacity: 0,
        yPercent: 200,
        transformOrigin: 'left center',
    })

    gsap.from('.features-page__column:first-child', {
        scrollTrigger: {
            trigger: '.features-page',
            start: '0 center',
            end: '+=500px',
            scrub: true,
        },
        opacity: 0,
        xPercent: -30,
    })

    gsap.from('.features-page__column:last-child', {
        scrollTrigger: {
            trigger: '.features-page',
            start: '0 center',
            end: '+=500px',
            scrub: true,
        },
        opacity: 0,
        xPercent: 30,
    })

    gsap.from('.insight-page__img', {
        scrollTrigger: {
            trigger: '.insight-page',
            start: '0 center',
            end: '+=600px',
            scrub: true,
        },
        opacity: 0,
        yPercent: 30,
        // transformOrigin: 'left center',
    })

    gsap.from('.value-page__item', {
        scrollTrigger: {
            trigger: '.value-page',
            start: '0 center',
            end: '+=400px',
            scrub: true,
        },
        opacity: 0,
        yPercent: 30,
        stagger: 1,
    })

    gsap.from('.consultation-page__title', {
        scrollTrigger: {
            trigger: '.consultation-page',
            start: '-300 center',
            end: '+=200px',
            scrub: true,
        },
        opacity: 0,
        xPercent: -20,
    })

    gsap.from('.consultation-page__text', {
        scrollTrigger: {
            trigger: '.consultation-page',
            start: '0 center',
            end: '+=100px',
            scrub: true,
        },
        opacity: 0,
        xPercent: -50,
    })

    gsap.from('.consultation-page__list', {
        scrollTrigger: {
            trigger: '.consultation-page',
            start: '200 center',
            end: '+=100px',
            scrub: true,
        },
        opacity: 0,
        xPercent: -30,
    })

    gsap.to('.consultation-page__img img', {
        scrollTrigger: {
            trigger: '.consultation-page',
            start: 'top center',
            scrub: true,
        },
        scale: 1.2,
    })

    gsap.to('.feedback-page__img img', {
        scrollTrigger: {
            trigger: '.feedback-page',
            start: '400 center',
            scrub: true,
        },
        xPercent: 50,
        opacity: 0
    })

    gsap.to('.biography-page__img img', {
        scrollTrigger: {
            trigger: '.biography-page',
            start: 'top center',
            scrub: true,
        },
        scale: 1.2,
    })

    gsap.from('.biography-page__column:first-child', {
        scrollTrigger: {
            trigger: '.biography-page',
            start: '0 center',
            end: '+=500px',
            scrub: true,
        },
        opacity: 0,
        yPercent: 30,
    })

    gsap.from('.biography-page__column:last-child', {
        scrollTrigger: {
            trigger: '.biography-page',
            start: '0 center',
            end: '+=500px',
            scrub: true,
        },
        opacity: 0,
        yPercent: 30,
    })

    gsap.from('.products-page__tabs-container', {
        scrollTrigger: {
            trigger: '.products-page',
            start: '0 center',
            end: '+=200px',
            scrub: true,
        },
        opacity: 0,
        yPercent: 30,
    })

    gsap.from('.practice-page__column:last-child', {
        scrollTrigger: {
            trigger: '.practice-page',
            start: '0 center',
            end: '+=300px',
            scrub: true,
        },
        opacity: 0,
        xPercent: 30,
    })

    gsap.from('.webinar-page .container', {
        scrollTrigger: {
            trigger: '.webinar-page',
            start: '-200 center',
            end: '+=300px',
            scrub: true,
        },
        opacity: 0,
        scale: 0.5,
        yPercent: 50,
    })

    gsap.from('.meditation-page__slider', {
        scrollTrigger: {
            trigger: '.meditation-page',
            start: 'top center',
            end: '+=300px',
            scrub: true,
        },
        opacity: 0,
        scale: 0,
        rotate: 180,
    })

    gsap.from('.retreat-page__tabs-container', {
        scrollTrigger: {
            trigger: '.retreat-page',
            start: '0 center',
            end: '+=200px',
            scrub: true,
        },
        opacity: 0,
        yPercent: 30,
    })

    // const items = gsap.utils.toArray('.social-page__slider-item')

    // gsap.from(items, {
    //     scrollTrigger: {
    //         trigger: '.social-page',
    //         start: '-300px center',
    //         end: '+=800px',
    //         scrub: true,
    //     },
    //     xPercent:  -100 * (items.length - 1),
    // })

    gsap.from('.social-page__gallery', {
        scrollTrigger: {
            trigger: '.social-page',
            start: '-300px center',
            end: '+=700px',
            scrub: true,
        },
        xPercent: -100,
    })

    gsap.from('.appointment-page__title', {
        scrollTrigger: {
            trigger: '.appointment-page',
            start: '-300px center',
            end: '+=700px',
            scrub: true,
        },
        scale: 0.5,
        opacity: 0,
    })

    gsap.from('.questions-page__items', {
        scrollTrigger: {
            trigger: '.questions-page',
            start: '0 center',
            end: '+=300px',
            scrub: true,
        },
        opacity: 0,
        xPercent: -10,
    })

    gsap.from('.questions-page__form ', {
        scrollTrigger: {
            trigger: '.questions-page',
            start: '0 center',
            end: '+=300px',
            scrub: true,
        },
        opacity: 0,
        xPercent: 20,
    })


    /*
    function initHeaderTilt() {
        document.querySelector('main').addEventListener('mousemove', moveImages)
    }

    function moveImages(e) {

        const { offsetX, offsetY, target } = e;
        const { clientWidth, clientHeight } = target;


        // get 0 0 in the center
        const xPos = (offsetX / clientWidth) - 0.5;
        const yPos = (offsetY / clientHeight) - 0.5;

        const leftImages = gsap.utils.toArray('.features-page__column:nth-child(2)');
        const rightImages = gsap.utils.toArray('.hg__right .hg__image');

        const modifier = (index) => index * 1.2 + 0.5;

        // движение трех картинок слева
        leftImages.forEach((image, index) => {
            gsap.to(image, {
                duration: 1.2,
                x: xPos * 20 * modifier(index),
                y: yPos * 30 * modifier(index),
                rotationY: xPos * 40,
                rotationX: yPos * 10,
                ease: 'power3.out',
                transformOrigin: "center",
                transformPerspective: 1500
            });
        });

        // движение трех картинок справа
        rightImages.forEach((image, index) => {
            gsap.to(image, {
                duration: 1.2,
                x: xPos * 20 * modifier(index),
                y: -yPos * 30 * modifier(index),
                rotationY: xPos * 40,
                rotationX: yPos * 10,
                ease: 'power3.easeOut',
                transformOrigin: "center",
                transformPerspective: 1500
            })
        })
    }

    function init() {
        initHeaderTilt();
    }

    window.addEventListener('load', function () {
        init();
    })

    */

}