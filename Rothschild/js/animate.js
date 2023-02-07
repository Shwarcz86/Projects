if (window.matchMedia('(min-width: 1024.98px)').matches) {

    gsap.registerPlugin(ScrollTrigger)
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
}