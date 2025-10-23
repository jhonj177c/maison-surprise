// Mobile Menu Toggle
const menuToggle = document.getElementById("menuToggle")
const nav = document.getElementById("nav")

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("active")

  // Animate hamburger menu
  const spans = menuToggle.querySelectorAll("span")
  if (nav.classList.contains("active")) {
    spans[0].style.transform = "rotate(45deg) translate(5px, 5px)"
    spans[1].style.opacity = "0"
    spans[2].style.transform = "rotate(-45deg) translate(7px, -6px)"
  } else {
    spans[0].style.transform = "none"
    spans[1].style.opacity = "1"
    spans[2].style.transform = "none"
  }
})

// Close menu when clicking on a link
const navLinks = nav.querySelectorAll("a")
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("active")
    const spans = menuToggle.querySelectorAll("span")
    spans[0].style.transform = "none"
    spans[1].style.opacity = "1"
    spans[2].style.transform = "none"
  })
})

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// Newsletter form submission
const newsletterForm = document.getElementById("newsletterForm")
newsletterForm.addEventListener("submit", (e) => {
  e.preventDefault()
  const email = newsletterForm.querySelector('input[type="email"]').value

  // Simulate form submission
  alert(`¡Gracias por suscribirte! Te hemos enviado un correo de confirmación a ${email}`)
  newsletterForm.reset()
})

// Add scroll effect to header
let lastScroll = 0
const header = document.querySelector(".header")

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset

  if (currentScroll > 100) {
    header.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.1)"
  } else {
    header.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.05)"
  }

  lastScroll = currentScroll
})

// Animate elements on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1"
      entry.target.style.transform = "translateY(0)"
    }
  })
}, observerOptions)

// Observe all cards and sections
document.querySelectorAll(".feature-card, .box-card, .testimonial-card").forEach((el) => {
  el.style.opacity = "0"
  el.style.transform = "translateY(30px)"
  el.style.transition = "opacity 0.6s ease, transform 0.6s ease"
  observer.observe(el)
})

// Add click handlers to all "Elegir Plan" buttons
document.querySelectorAll(".box-card .btn-primary").forEach((button) => {
  button.addEventListener("click", (e) => {
    const boxName = e.target.closest(".box-card").querySelector("h3").textContent
    alert(`¡Excelente elección! Has seleccionado la caja ${boxName}. Redirigiendo al proceso de pago...`)
  })
})

// Add click handlers to hero buttons
document.querySelector(".hero-buttons .btn-primary").addEventListener("click", () => {
  document.querySelector("#cajas").scrollIntoView({ behavior: "smooth" })
})

document.querySelector(".hero-buttons .btn-secondary").addEventListener("click", () => {
  document.querySelector("#cajas").scrollIntoView({ behavior: "smooth" })
})
