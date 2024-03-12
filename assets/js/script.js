const menuIcon = document.querySelector(".menuIcon")
const menulist = document.querySelector(".menulist")


menuIcon.addEventListener("click", function () {
    menulist.classList.toggle("show");
    document.body.classList.toggle("overFlowHidden")
    document.querySelector(".menuIcon").classList.toggle("cross")
})



$('.responsive').slick({
    dots: false,
    infinite: true,
    speed: 300,
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: ".prev",
    nextArrow: ".next",
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false,

            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                // autoplay: true,

            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                // autoplay: true,

            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                // autoplay: true,
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});
$(document).ready(function () {
    $('.arrow').on('click', function () {
        $('.arrow').removeClass('active');
        $(this).addClass('active');
    })
});

// =========================== accordion ===============================================
const accordionHead = document.querySelectorAll(".accordionHead");
accordionHead.forEach((e) => {
    e.addEventListener("click", () => {
        const activeAccordion = document.querySelector(".active")
        e.parentElement.classList.toggle("active")
        activeAccordion && activeAccordion.classList.remove("active")
    })
})

function navtabs(tabs) {
    const tabshow = document.querySelectorAll('.tabshow')
    const tabbtn = document.querySelectorAll('.tabs button')
    tabshow.forEach(content => {
        content.style.display = 'none'
    })
    const selecttoshow = document.getElementById(tabs)
    selecttoshow.style.display = 'block'
}
$(document).ready(function () {
    $('.navTab').on('click', function () {
        $('.navTab').removeClass('active');
        $(this).addClass('active');
    })
});
navtabs('tab1')

function historytabs(tab) {
    const tabShow = document.querySelectorAll('.tabShow')
    const tabbuton = document.querySelectorAll('.tab button')
    tabShow.forEach(content => {
        content.style.display = 'none'
    })
    const selecttoshow = document.getElementById(tab)
    selecttoshow.style.display = 'block'
}
$(document).ready(function () {
    $('.Tabs').on('click', function () {
        $('.Tabs').removeClass('active');
        $(this).addClass('active');
    })
});
historytabs('tabs1')

// ============ back to top btn =============================
const topBtn = document.querySelector(".topBtn");
const show = document.querySelector(".show");

window.addEventListener("scroll", function () {
    if (window.scrollY > 60) {
        topBtn.classList.add("show");
    } else {
        topBtn.classList.remove("show");
    }
})
topBtn.addEventListener("click", function () {
    document.documentElement.scrollTop = 0;
})