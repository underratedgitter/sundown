const scroll = typeof LocomotiveScroll === 'function' ? new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
}) : {};


function page4Animation() {
    var elemC = document.querySelector("#elem-container")
    var fixed = document.querySelector("#fixed-image")
    elemC.addEventListener("mouseenter", function () {
        fixed.style.display = "block"
    })
    elemC.addEventListener("mouseleave", function () {
        fixed.style.display = "none"
    })

    var elems = document.querySelectorAll(".elem")
    elems.forEach(function (e) {
        e.addEventListener("mouseenter", function () {
            var image = e.getAttribute("data-image")
            fixed.style.backgroundImage = `url(${image})`
        })
    })
}

function swiperAnimation() {
    if (typeof Swiper !== 'function') return;
    new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 100,
    });
}

function navigateToSection(target, hash) {
    if (typeof scroll.scrollTo === "function") {
        scroll.scrollTo(target);
    } else {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    if (window.history && window.history.pushState) {
        window.history.pushState(null, "", hash);
    }

    target.focus({ preventScroll: true });
}

function menuAnimation() {

    var menu = document.querySelector("#menu-toggle")
    var full = document.querySelector("#full-scr")
    var panel = document.querySelector("#full-div1")
    var navimg = document.querySelector("nav img")
    var links = full.querySelectorAll('a[href^="#"]')
    var isOpen = false

    function setMenu(open, restoreFocus) {
        isOpen = open
        full.classList.toggle("is-open", open)
        full.setAttribute("aria-hidden", open ? "false" : "true")
        menu.setAttribute("aria-expanded", open ? "true" : "false")
        navimg.style.opacity = open ? "0" : "1"

        if (open) {
            full.removeAttribute("inert")
            if (links.length) links[0].focus()
        } else {
            full.setAttribute("inert", "")
            if (restoreFocus) menu.focus()
        }
    }

    menu.addEventListener("click", function () {
        setMenu(!isOpen, true)
    })

    links.forEach(function (link) {
        link.addEventListener("click", function (event) {
            var hash = link.getAttribute("href")
            var target = document.querySelector(hash)

            if (!target) return

            event.preventDefault()
            setMenu(false, false)
            navigateToSection(target, hash)
        })
    })

    full.addEventListener("click", function (event) {
        if (isOpen && !panel.contains(event.target)) {
            setMenu(false, true)
        }
    })

    document.addEventListener("keydown", function (event) {
        if (!isOpen) return

        if (event.key === "Escape") {
            event.preventDefault()
            setMenu(false, true)
            return
        }

        if (event.key !== "Tab") return

        var focusable = [menu].concat(Array.prototype.slice.call(links))
        var first = focusable[0]
        var last = focusable[focusable.length - 1]

        if (event.shiftKey && document.activeElement === first) {
            event.preventDefault()
            last.focus()
        } else if (!event.shiftKey && document.activeElement === last) {
            event.preventDefault()
            first.focus()
        }
    })
}

function navLinksAnimation() {
    var links = document.querySelectorAll("#nav-part2 a[href^='#']")

    links.forEach(function (link) {
        link.addEventListener("click", function (event) {
            var hash = link.getAttribute("href")
            var target = document.querySelector(hash)

            if (!target) return

            event.preventDefault()
            navigateToSection(target, hash)
        })
    })
}

function loaderAnimation() {
    var loader = document.querySelector("#loader")
    setTimeout(function () {
        loader.style.top = "-100%"
    }, 4200)
}

swiperAnimation()
page4Animation()
menuAnimation()
navLinksAnimation()
loaderAnimation()
