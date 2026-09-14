(function ($) {
   "use strict";
    const $window = $(window);
    const CONFIG = { mobileBreakpoint: 768, formAction: ["form-process.php", "review-form.php"] };

    // Preloader
    $window.on("load", () => setTimeout(() => $(".sis-preloader").fadeOut(1000), 700));

   // Sticky Header
    if ($('.sis-active-sticky-header').length) {

        const $window = $(window);
        const $mainHeader = $(".sis-main-header");
        const $stickyHeader = $('header .sis-header-sticky');

        function setHeaderHeight() {
            $mainHeader.css("height", $stickyHeader.outerHeight());
        }

        $window.on('resize', setHeaderHeight);

        $stickyHeader.removeClass("active hide");

        $window.on("scroll", function () {
            var fromTop = $window.scrollTop();
            setHeaderHeight();

            var siteHeaderHeight = $mainHeader.outerHeight();

            if (fromTop > siteHeaderHeight) {
                $stickyHeader.addClass("active").removeClass("hide");
            } else {
                $stickyHeader.removeClass("active hide");
            }
        });
    }

    // Mobile Menu
        const initialMenuItems = $('#menu > li').toArray();
        const initialMenu2Items = $('#menu2 > li').toArray();

        const handleMobileMenus = () => {
            const isMobile = $window.width() <= CONFIG.mobileBreakpoint;
            const hasSlickNav = $(".slicknav_nav").length;

            if (isMobile && !hasSlickNav && $.fn.slicknav) {

                $("#menu2").children().appendTo("#menu");

                $("#menu").slicknav({
                    label: "",
                    prependTo: ".responsive-menu",

                    beforeOpen: function () {
                        $('body').addClass('mobile-menu-open');
                    },

                    beforeClose: function () {
                        $('body').removeClass('mobile-menu-open');
                    }
                });

            } else if (!isMobile && hasSlickNav) {

                $("#menu").slicknav("destroy");

                initialMenuItems.forEach(item => $("#menu").append(item));
                initialMenu2Items.forEach(item => $("#menu2").append(item));
            }
        };

        handleMobileMenus();

        let resizeTimer;
        $window.on("resize", () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(handleMobileMenus, 200);
        });


        // submenu scroll fix
        $(document).on('click', '.slicknav_arrow', function () {
            setTimeout(() => {
                const parent = $(this).closest('.slicknav_parent');
                const menu = $('.slicknav_menu');

                menu.animate({
                    scrollTop: parent.position().top + menu.scrollTop() - 80
                }, 300);
            }, 200);
        });

    // Active Navigation is handled by React Router Header.jsx.

    // Skills Progress Bar
    if ($.fn.waypoint && $('.sis-skills-progress-bar').length) {
        let animated = false;
        $('.sis-skills-progress-bar').waypoint(() => {
            if (animated) return;
            animated = true;
            $('.sis-skillbar').each(function () {
                const $this = $(this);
                const percent = parseInt($this.attr('data-percent'), 10) || 0;
                const $bar = $this.find('.sis-count-bar');
                const $text = $this.find('.sis-skill-no');

                $bar.css('width', '0%').animate({ width: percent + '%' }, 2000, 'swing');
                $({ value: 0 }).animate({ value: percent }, { duration: 2000, easing: 'swing', step: val => $text.text(Math.ceil(val) + '%') });
            });
        }, { offset: '50%' });
    }

 
    if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
        gsap.registerPlugin(ScrollTrigger);

        document.querySelectorAll(".sis-reveal").forEach(container => {
            const image = container.querySelector("img"); if (!image) return;
            const tl = gsap.timeline({ scrollTrigger: { trigger: container, toggleActions: "play none none none" } });
            tl.set(container, { autoAlpha: 1 });
            tl.from(container, { xPercent: -100, duration: 1, ease: "power2.out" });
            tl.from(image, { xPercent: 100, duration: 1, delay: -1, scale: 1, ease: "power2.out" });
        });

              document.querySelectorAll('.sis-text-anime-style-1').forEach(element => {
    const split = new SplitText(element, { type: "words" });
    gsap.from(split.words, {
        duration: 0.8, delay: 0.3, x: 10,
        autoAlpha: 0, stagger: 0.04, ease: "sine.out",
        scrollTrigger: { trigger: element, start: "top 85%" }
    });
});

document.querySelectorAll('.sis-text-anime-style-3').forEach(element => {
    const split = new SplitText(element, { type: "words" });
    gsap.from(split.words, {
        duration: 0.7, delay: 0.15, x: 10,
        autoAlpha: 0, stagger: 0.04, ease: "sine.out",
        scrollTrigger: { trigger: element, start: "top 85%" }
    });
});
    }

    // Animation On Scroll Js
    if (typeof AOS !== "undefined") {
        AOS.init({
            once: true,
            duration: 1000,
            easing: 'ease-out-cubic'
        });
    }
    // Counter Up
    if ($.fn.counterUp && $('.sis-counter').length) $('.sis-counter').counterUp({ delay: 6, time: 3000 });

    // Back to Top
    const backToTop = document.getElementById('backToTop');
    if (backToTop) {
        $window.on('scroll', () => backToTop.classList.toggle('show', window.scrollY > 300));
        backToTop.addEventListener('click', e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); });
    }

    // Forms
    if ($.fn.validator && $("#enquiryForm").length) {
        $("#enquiryForm").validator({ focus: false }).on("submit", e => {
            if (!e.isDefaultPrevented()) { e.preventDefault(); submitForm($(e.target)); }
        });
    }
    if ($.fn.validator && $("#reviewForm").length) {
        $("#reviewForm").validator({ focus: false }).on("submit", e => {
            if (!e.isDefaultPrevented()) { e.preventDefault(); submitForm($(e.target)); }
        });
    }
    if ($.fn.validator && $("#bookingForm").length) {
        $("#bookingForm").validator({ focus: false }).on("submit", e => {
            if (!e.isDefaultPrevented()) { e.preventDefault(); submitForm($(e.target)); }
        });
    }
   function submitForm($form) {

        let actionUrl = "";

        if ($form.attr("id") === "enquiryForm") {
            actionUrl = CONFIG.formAction[0];
        } else if ($form.attr("id") === "reviewForm") {
            actionUrl = CONFIG.formAction[1];
        }else if ($form.attr("id") === "bookingForm") {
            actionUrl = CONFIG.formAction[2];
        }

        $.post(actionUrl, $form.serialize(), function (response) {

            if (response?.trim() === "success") {
                $form[0].reset();
                showMsg(true, "Booking email sent successfully!");
            } else {
                showMsg(false, response || "Something went wrong.");
            }

        }).fail(function () {
            showMsg(false, "Server request failed.");
        });
    }
    function showMsg(valid, msg) { $("#msgSubmit").removeClass().addClass(valid ? "text-success" : "text-danger").text(msg); }

    /* Initialize Swiper Sliders */
    const initSwiper = (selector, options) => {
        if (typeof Swiper === "undefined") return null;
        if ($(selector).length) {
            return new Swiper(selector, options);
        }
        return null;
    };

	const swiperOptions = {
        slidesPerView: 1,
        speed: 1000,
        loop: true,
        autoplay: { delay: 5000 },
    };
    // Six Slide Per View - Swiper Slider Js
    initSwiper(".sisf-comman-swiper--slider .swiper", {
        ...swiperOptions,
        spaceBetween: 20,
        breakpoints: { 0: { slidesPerView: 2 }, 768: { slidesPerView: 3, centeredSlides: false }, 1024: { slidesPerView: 6 } }
    });

    // Four Slide Per View - Swiper Slider Js
    initSwiper(".sis-comman-swiper-slider .swiper", {
        ...swiperOptions,
        spaceBetween: 20,
        navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
        pagination: { el: ".swiper-pagination", clickable: true},
        breakpoints: { 0: { slidesPerView: 1 }, 768: { slidesPerView: 2, centeredSlides: false }, 1024: { slidesPerView: 4 } }
    });

    // Three Slide Per View - Swiper Slider Js
    initSwiper(".sis-comman--swiper-slider .swiper", {
        ...swiperOptions,
        spaceBetween: 20,
        navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
        pagination: { el: ".swiper-pagination", clickable: true},
        breakpoints: { 0: { slidesPerView: 1 }, 768: { slidesPerView: 2, centeredSlides: false }, 1024: { slidesPerView: 4 } }
    });

    // Two Slide Per View - Swiper Slider Js
    initSwiper(".sisf-comman--swiper-slider .swiper", {
        ...swiperOptions,
        spaceBetween: 20,
        navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
        pagination: { el: ".swiper-pagination", clickable: true},
        breakpoints: { 0: { slidesPerView: 1 }, 768: { slidesPerView: 1, centeredSlides: false }, 1024: { slidesPerView: 2 } }
    });

    // One Slide Per View - Swiper Slider Js
    initSwiper(".sis-comman-swiper--slider .swiper", {
        ...swiperOptions,
        spaceBetween: 20,
        navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
        pagination: { el: ".swiper-pagination", clickable: true},
        breakpoints: { 0: { slidesPerView: 1 }, 768: { slidesPerView: 1, centeredSlides: false }, 1024: { slidesPerView: 1 } }
    });

    // Hero Slider Start 
	function animateActiveSlideText() {
        gsap.set(".sis-text-anime-style-2", { clearProps: "all" });

        const activeSlide = document.querySelector(".swiper-slide-active");
        if (!activeSlide) return;
        const animatedTextElements = activeSlide.querySelectorAll(".sis-text-anime-style-2");

        animatedTextElements.forEach((element) => {
            const animationSplitText = new SplitText(element, { type: "chars, words" });

            gsap.from(animationSplitText.chars, {
				opacity: 0,
                duration: 0.11,         
				delay: 0.14,
				x: 250,                 
				autoAlpha: 0,
				stagger: 0.09,         
				ease: "power5.out",
            });
        });
    }
    
	initSwiper(".hero-slider-layout .swiper", {
        ...swiperOptions,
        autoplay: { delay: 6000 },
        breakpoints: { 0: { slidesPerView: 1 }, 768: { slidesPerView: 1 }, 1024: { slidesPerView: 1 } },
        pagination: { el: ".hero-pagination", clickable: true },
        navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
		on: {
			init: function () {
				animateActiveSlideText(); 
			},
			slideChangeTransitionStart: function () {
				animateActiveSlideText(); 
			}
		}
    });
    // Hero Slider End

    // Magnific Popup - Gallery
    if ($.fn.magnificPopup && $('.sis-gallery-items').length) {
        $('.sis-gallery-items').magnificPopup({
            delegate: 'a', type: 'image', closeOnContentClick: false, closeBtnInside: false,
            mainClass: 'mfp-with-zoom', image: { verticalFit: true }, gallery: { enabled: true },
            zoom: { enabled: true, duration: 300, opener: el => el.find('img') }
        });
    }

    // Magnific Popup - Video
    if ($.fn.magnificPopup && $('.popup-video').length) {
        $('.popup-video').magnificPopup({
            type: 'iframe', mainClass: 'mfp-fade', removalDelay: 160, preloader: false, fixedContentPos: true,
            callbacks: {
                open: function () {
                    const videoSrc = $.magnificPopup.instance.currItem.src;
                    setTimeout(() => {
                        const content = document.querySelector('.mfp-content'); if (!content) return;
                        const iframe = content.querySelector('iframe'); if (iframe) iframe.remove();
                        const video = document.createElement('video');
                        video.src = videoSrc; video.autoplay = true; video.muted = true;
                        video.controls = true; video.playsInline = true;
                        video.style.width = '100%'; video.style.height = 'auto';
                        video.addEventListener('click', e => e.stopPropagation());
                        content.appendChild(video); video.play().catch(() => {});
                    }, 50);
                },
                close: function () {
                    const video = document.querySelector('.mfp-content video');
                    if (video) { video.pause(); video.remove(); }
                }
            }
        });
    }
})(jQuery);

 /* =========================================
   GO2ABROAD
   OFFICE LOCATION TAB SCRIPT
========================================= */

document.addEventListener("DOMContentLoaded", function () {


    /* =====================================
       OFFICE DATA
    ====================================== */

    const locations = {


        /* =================================
           HEAD OFFICE - FARIDABAD
        ================================== */

        headOffice: {

            address:
                "B-395, 2nd Floor, Nehru Ground, Neelam Chowk, Faridabad, Haryana - 121001",

            phone:
                "+91-7905377279",

            email:
                "info@go2abroad.co",

            map:
                "https://www.google.com/maps?q=B-395%2C%202nd%20Floor%2C%20Nehru%20Ground%2C%20Neelam%20Chowk%2C%20Faridabad%2C%20Haryana%20121001&output=embed",

            direction:
                "https://www.google.com/maps/search/?api=1&query=B-395%2C+2nd+Floor%2C+Nehru+Ground%2C+Neelam+Chowk%2C+Faridabad%2C+Haryana+121001"

        },


        /* =================================
           BRANCH OFFICE - PANIPAT
        ================================== */

        branchOffice: {

            address:
                "SCO-223, Sector 13-17 Main Road, HUDA, Panipat, Haryana - 132104",

            phone:
                "+91-7905377279",

            email:
                "info@go2abroad.co",

            map:
                "https://www.google.com/maps?q=SCO-223%2C%20Sector%2013-17%20Main%20Road%2C%20HUDA%2C%20Panipat%2C%20Haryana%20132104&output=embed",

            direction:
                "https://www.google.com/maps/search/?api=1&query=SCO-223%2C+Sector+13-17+Main+Road%2C+HUDA%2C+Panipat%2C+Haryana+132104"

        }

    };


    /* =====================================
       ELEMENTS
    ====================================== */

    const tabs =
        document.querySelectorAll(
            ".sis-location-tab"
        );


    const officeAddress =
        document.getElementById(
            "officeAddress"
        );


    const officePhone =
        document.getElementById(
            "officePhone"
        );


    const officeEmail =
        document.getElementById(
            "officeEmail"
        );


    const officeMap =
        document.getElementById(
            "officeMap"
        );


    const directionBtn =
        document.getElementById(
            "directionBtn"
        );


    /* =====================================
       CHANGE OFFICE
    ====================================== */

    function changeLocation(locationName) {

        const location =
            locations[locationName];


        if (!location) {
            return;
        }


        /* =================================
           UPDATE ADDRESS
        ================================== */

        officeAddress.textContent =
            location.address;


        /* =================================
           UPDATE PHONE
        ================================== */

        officePhone.textContent =
            location.phone;


        /* =================================
           UPDATE EMAIL
        ================================== */

        officeEmail.textContent =
            location.email;


        /* =================================
           UPDATE MAP
        ================================== */

        if (officeMap && location.map) {

            officeMap.src =
                location.map;

        }


        /* =================================
           UPDATE DIRECTION BUTTON
        ================================== */

        if (directionBtn && location.direction) {

            directionBtn.href =
                location.direction;

        }


        /* =================================
           UPDATE ACTIVE TAB
        ================================== */

        tabs.forEach(function (tab) {

            tab.classList.remove("active");

        });


        const activeTab =
            document.querySelector(
                '[data-location="' +
                locationName +
                '"]'
            );


        if (activeTab) {

            activeTab.classList.add("active");

        }

    }


    /* =====================================
       TAB CLICK
    ====================================== */

    tabs.forEach(function (tab) {

        tab.addEventListener(
            "click",
            function () {

                const locationName =
                    this.getAttribute(
                        "data-location"
                    );


                changeLocation(
                    locationName
                );

            }
        );

    });


});


   (function(){
  var wrap = document.querySelector('.sis-journey-wrap');
  if(!wrap) return;
  if (wrap.dataset.g2aReactJourney === '1') return;
  var path = document.getElementById('sis-journey-path');
  var items = document.querySelectorAll('.sis-step-item');
  if(!wrap || !path) return;

  var len = path.getTotalLength();
  path.style.strokeDasharray = len;
  wrap.style.setProperty('--path-len', len);

  var observer = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if(entry.isIntersecting){
        wrap.classList.add('in-view');

        items.forEach(function(item, index){
          var icon = item.querySelector('.sis-step-icon');
          if(!icon) return;
          icon.style.animationDelay = (index * 0.5) + 's';
          icon.classList.add('sis-pulse-loop'); // hamesha chalega, ruke ga nahi
        });

        observer.unobserve(wrap); // reveal (fade-up + wave draw) sirf ek baar hoga, blink hamesha chalta rahega
      }
    });
  }, { threshold: 0.25 });

  observer.observe(wrap);
})();



document.addEventListener("DOMContentLoaded", function () {

    // Team card click
    document.addEventListener("click", function (e) {

        const teamCard = e.target.closest(".sisf-sis-team-member");

        if (!teamCard) return;

        // Sirf Team section ke card par work kare
        if (!teamCard.closest(".sis-team-member-section")) return;

        // Social icon click par modal open nahi hoga
        if (e.target.closest(".sisf-m-social-icons")) return;

        e.preventDefault();

        const modal = document.getElementById("teamProfileModal");

        if (!modal) {
            console.error("teamProfileModal not found");
            return;
        }

        // Modal open
        modal.classList.add("active");
        document.body.classList.add("team-modal-open");

    });


    // Close button
    document.addEventListener("click", function (e) {

        if (e.target.closest("#teamModalClose")) {

            const modal = document.getElementById("teamProfileModal");

            modal.classList.remove("active");
            document.body.classList.remove("team-modal-open");
        }

    });


    // Overlay click close
    document.addEventListener("click", function (e) {

        if (e.target.classList.contains("team-modal-overlay")) {

            const modal = document.getElementById("teamProfileModal");

            modal.classList.remove("active");
            document.body.classList.remove("team-modal-open");
        }

    });


    // ESC key close
    document.addEventListener("keydown", function (e) {

        if (e.key === "Escape") {

            const modal = document.getElementById("teamProfileModal");

            if (modal) {
                modal.classList.remove("active");
                document.body.classList.remove("team-modal-open");
            }

        }

    });

});



