(function (window, document) {
  "use strict";

  var initialized = new WeakSet();
  var mobileMenuInitialized = false;

  function initMobileMenu() {
    if (!window.jQuery || !window.jQuery.fn || !window.jQuery.fn.slicknav) return;
    var $ = window.jQuery;
    var $menu = $("#menu");
    var $target = $(".responsive-menu");
    if (!$menu.length || !$target.length) return;

    var isMobile = window.innerWidth <= 767;
    var hasSlickNav = $(".slicknav_menu").length > 0;

    if (isMobile && !hasSlickNav) {
      try {
        $menu.slicknav({
          label: "",
          prependTo: ".responsive-menu",
          closeOnClick: true,
          beforeOpen: function () { document.body.classList.add("mobile-menu-open"); },
          beforeClose: function () { document.body.classList.remove("mobile-menu-open"); }
        });
        mobileMenuInitialized = true;
      } catch (e) {}
    }
  }

  function initSwipers() {
    if (typeof window.Swiper === "undefined") return;

    var swiperOptions = {
      slidesPerView: 1,
      speed: 1000,
      loop: true,
      autoplay: { delay: 5000 },
    };

    document.querySelectorAll(".sisf-comman-swiper--slider .swiper").forEach(function (el) {
      if (el.swiper || initialized.has(el)) return;
      initialized.add(el);
      new window.Swiper(el, Object.assign({}, swiperOptions, {
        spaceBetween: 20,
        breakpoints: { 0: { slidesPerView: 2 }, 768: { slidesPerView: 3 }, 1024: { slidesPerView: 6 } }
      }));
    });

    document.querySelectorAll(".sis-comman--swiper-slider .swiper").forEach(function (el) {
      if (el.swiper || initialized.has(el)) return;
      initialized.add(el);
      new window.Swiper(el, Object.assign({}, swiperOptions, {
        spaceBetween: 20,
        navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
        pagination: { el: ".swiper-pagination", clickable: true },
        breakpoints: { 0: { slidesPerView: 1 }, 768: { slidesPerView: 2 }, 1024: { slidesPerView: 4 } }
      }));
    });

    document.querySelectorAll(".sis-comman-swiper-slider .swiper").forEach(function (el) {
      if (el.swiper || initialized.has(el)) return;
      initialized.add(el);
      new window.Swiper(el, Object.assign({}, swiperOptions, {
        spaceBetween: 20,
        navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
        pagination: { el: ".swiper-pagination", clickable: true },
        breakpoints: { 0: { slidesPerView: 1 }, 768: { slidesPerView: 2 }, 1024: { slidesPerView: 4 } }
      }));
    });

    document.querySelectorAll(".hero-slider-layout .swiper, .hero-swiper").forEach(function (el) {
      if (el.swiper || initialized.has(el)) return;
      initialized.add(el);
      var heroSlides = el.querySelectorAll(".swiper-slide:not(.swiper-slide-duplicate)").length;
      var heroHasMultipleSlides = heroSlides > 1;
      new window.Swiper(el, Object.assign({}, swiperOptions, {
        loop: heroHasMultipleSlides,
        autoplay: heroHasMultipleSlides ? { delay: 6000 } : false,
        breakpoints: { 0: { slidesPerView: 1 }, 768: { slidesPerView: 1 }, 1024: { slidesPerView: 1 } },
        pagination: { el: ".hero-pagination", clickable: true },
        navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }
      }));
    });
  }

  function initAos() {
    if (!window.AOS) return;

    // Keep AOS for visual/card animations, but never animate text-only elements.
    document.querySelectorAll("[data-aos]").forEach(function (element) {
      var hasText = element.textContent && element.textContent.trim().length > 0;
      var hasVisualChild = element.querySelector("img, svg, video, canvas");
      if (hasText && !hasVisualChild) {
        element.removeAttribute("data-aos");
        element.removeAttribute("data-aos-delay");
        element.removeAttribute("data-aos-duration");
        element.removeAttribute("data-aos-easing");
        element.removeAttribute("data-aos-anchor");
        element.removeAttribute("data-aos-anchor-placement");
        element.removeAttribute("data-aos-offset");
      }
    });
    try {
      if (!window.AOS.__go2abroadInitialized) {
        window.AOS.init({ once: true, duration: 650, easing: "ease-out-cubic" });
        window.AOS.__go2abroadInitialized = true;
      }
      if (typeof window.AOS.refreshHard === "function") window.AOS.refreshHard();
      else if (typeof window.AOS.refresh === "function") window.AOS.refresh();
    } catch (e) {}
  }

  function initGsap() {
    /* Make reveal images visible even if GSAP is not available yet. */
    document.querySelectorAll(".sis-reveal").forEach(function (el) {
      el.style.visibility = "visible";
    });

    if (!window.gsap || !window.ScrollTrigger || !window.SplitText) return;

    try {
      window.gsap.registerPlugin(window.ScrollTrigger);

      document.querySelectorAll(".sis-reveal").forEach(function (container) {
        if (container.dataset.g2aGsapInitialized === "1") return;
        var image = container.querySelector("img");
        if (!image) return;
        container.dataset.g2aGsapInitialized = "1";
        var tl = window.gsap.timeline({
          scrollTrigger: { trigger: container, toggleActions: "play none none none" }
        });
        tl.set(container, { autoAlpha: 1 });
        tl.from(container, { xPercent: -100, duration: 1, ease: "power2.out" });
        tl.from(image, { xPercent: 100, duration: 1, delay: -1, scale: 1, ease: "power2.out" });
      });

      if (typeof window.ScrollTrigger.refresh === "function") window.ScrollTrigger.refresh();
    } catch (e) {}
  }

  function initCounters() {
    if (!window.jQuery || !window.jQuery.fn) return;

    // Keep the original CounterUp animation for numbers only.
    // Do not mark a counter as initialized until CounterUp is actually available.
    if (!window.jQuery.fn.counterUp) {
      window.setTimeout(initCounters, 500);
      return;
    }

    try {
      window.jQuery(".sis-counter").each(function () {
        if (this.dataset.g2aCounterInitialized === "1") return;
        window.jQuery(this).counterUp({ delay: 6, time: 3000 });
        this.dataset.g2aCounterInitialized = "1";
      });
    } catch (e) {}
  }

  function initMagnificPopup() {
    if (!window.jQuery || !window.jQuery.fn || !window.jQuery.fn.magnificPopup) return;
    var $ = window.jQuery;
    try {
      $(".sis-gallery-items").each(function () {
        if (this.dataset.g2aPopupInitialized === "1") return;
        this.dataset.g2aPopupInitialized = "1";
        $(this).magnificPopup({
          delegate: "a", type: "image", closeOnContentClick: false, closeBtnInside: false,
          mainClass: "mfp-with-zoom", image: { verticalFit: true }, gallery: { enabled: true },
          zoom: { enabled: true, duration: 300, opener: function (el) { return el.find("img"); } }
        });
      });
      $(".popup-video").each(function () {
        if (this.dataset.g2aPopupInitialized === "1") return;
        this.dataset.g2aPopupInitialized = "1";
        $(this).magnificPopup({ type: "iframe", mainClass: "mfp-fade", removalDelay: 160, preloader: false, fixedContentPos: true });
      });
    } catch (e) {}
  }

  function initLocationTabs() {
    var tabs = document.querySelectorAll(".sis-location-tab");
    if (!tabs.length) return;

    var data = {
      headOffice: {
        address: "B-395, 2nd Floor, Nehru Ground, Neelam Chowk, Faridabad, Haryana - 121001",
        phone: "+91-7068821740",
        email: "info@go2abroad.co",
        map: "https://www.google.com/maps?q=B-395%2C%202nd%20Floor%2C%20Nehru%20Ground%2C%20Neelam%20Chowk%2C%20Faridabad%2C%20Haryana%20121001&output=embed",
        direction: "https://www.google.com/maps/search/?api=1&query=B-395%2C+2nd+Floor%2C+Nehru+Ground%2C+Neelam+Chowk%2C+Faridabad%2C+Haryana+121001"
      },
      branchOffice: {
        address: "SCO-223, Sector 13-17 Main Road, HUDA, Panipat, Haryana - 132104",
        phone: "+91-7068821740",
        email: "info@go2abroad.co",
        map: "https://www.google.com/maps?q=SCO-223%2C%20Sector%2013-17%20Main%20Road%2C%20HUDA%2C%20Panipat%2C%20Haryana%20132104&output=embed",
        direction: "https://www.google.com/maps/search/?api=1&query=SCO-223%2C+Sector+13-17+Main+Road%2C+HUDA%2C+Panipat%2C+Haryana+132104"
      }
    };

    tabs.forEach(function (tab) {
      if (tab.dataset.g2aLocationInitialized === "1") return;
      tab.dataset.g2aLocationInitialized = "1";
      tab.addEventListener("click", function () {
        var location = data[this.getAttribute("data-location")];
        if (!location) return;
        var address = document.getElementById("officeAddress");
        var phone = document.getElementById("officePhone");
        var email = document.getElementById("officeEmail");
        var map = document.getElementById("officeMap");
        var direction = document.getElementById("directionBtn");
        if (address) address.textContent = location.address;
        if (phone) phone.textContent = location.phone;
        if (email) email.textContent = location.email;
        if (map) map.src = location.map;
        if (direction) direction.href = location.direction;
        tabs.forEach(function (item) { item.classList.remove("active"); });
        this.classList.add("active");
      });
    });
  }

  function initJourney() {
    document.querySelectorAll(".sis-journey-wrap").forEach(function (wrap) {
      if (wrap.dataset.g2aReactJourney === "1") return;
      var path = wrap.querySelector("#sis-journey-path");
      if (!path || typeof path.getTotalLength !== "function") return;

      var len = path.getTotalLength();
      path.style.strokeDasharray = len;
      path.style.strokeDashoffset = len;
      wrap.style.setProperty("--path-len", len);

      if (wrap.dataset.g2aJourneyInitialized === "1") return;
      wrap.dataset.g2aJourneyInitialized = "1";

      var items = wrap.querySelectorAll(".sis-step-item");
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          wrap.classList.add("in-view");
          items.forEach(function (item, index) {
            var icon = item.querySelector(".sis-step-icon");
            if (!icon) return;
            icon.style.animationDelay = (index * 0.5) + "s";
            icon.classList.add("sis-pulse-loop");
          });
          observer.unobserve(wrap);
        });
      }, { threshold: 0.25 });
      observer.observe(wrap);
    });
  }

  function runAll() {
    window.requestAnimationFrame(function () {
      initMobileMenu();
      initAos();
      initSwipers();
      initGsap();
      initCounters();
      initMagnificPopup();
      initLocationTabs();
    });
  }

  window.go2AbroadReinit = runAll;

  /* Initial load: React must have rendered before plugins scan the DOM. */
  window.addEventListener("load", function () {
    runAll();
    window.setTimeout(runAll, 250);
    window.setTimeout(runAll, 800);
  });

  /* If the script itself loads after window.load. */
  if (document.readyState === "complete") {
    window.setTimeout(runAll, 0);
  }
})(window, document);
