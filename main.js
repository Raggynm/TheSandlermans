
// OPEN AND CLOSE MENU
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const toggleMenu of toggle) {
    toggleMenu.addEventListener('click', function() {
        nav.classList.toggle('show')
    })
}

// MENU CLOSES WHEN CLICKING AN ITEM
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
    link.addEventListener('click', function() {
        nav.classList.remove('show')
    })

}

/* TRANSFORME HEADER FOR SCROLL */
function changeHeaderWhenScroll() {
    const header = document.querySelector('#header')
    const navHeight = header.offsetHeight
  
    if (window.scrollY >= navHeight) {
      // scroll é maior que a altura do header
      header.classList.add('scroll')
    } else {
      // menor que a altura do header
      header.classList.remove('scroll')
    }
  }

// SWIPER

const swiper = new Swiper('.swiper-container',{
    slidesPerView: 1,
    pagination: {
        el:'.swiper-pagination'
    },
    mousewheel:true,
    Keyboard:true
});

// SCROLLREVIEW
const scrollReveal = ScrollReveal({
    origin:'top',
    distance: '30px',
    duration:700,
    reset: true
})

scrollReveal.reveal(
    `#home .image, #home .text, 
    #about .image, #about .text
    #services header, #services .card,
    #testimonials header, #testimonials .testimonials
    #contact .text, #contact .links
    footer .brand, footer .social
    `,
{interval:100})

/* BACK TO TOP */
function backToTop() {
    const backToTopButton = document.querySelector('.back-to-top')
  
    if (window.scrollY >= 560) {
      backToTopButton.classList.add('show')
    } else {
      backToTopButton.classList.remove('show')
    }
  }

  /* MENU ON  */
const sections = document.querySelectorAll('main section[id]')
function activateMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}
  
  /* WHEN SCROLL */
  window.addEventListener('scroll', function () {
    changeHeaderWhenScroll()
    backToTop()
  })
  