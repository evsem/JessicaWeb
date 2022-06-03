// ANCHORS
let anchors = document.querySelectorAll('a[href*="#"]')
for (let anchor of anchors) {
  anchor.addEventListener("click", (e) => {
    e.preventDefault()
    const blockID = anchor.getAttribute("href")
    document.querySelector("" + blockID).scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  })
}

// THEME
let themes = document.querySelectorAll(".header__logo-theme__text")

themes.forEach((theme) => {
  theme.addEventListener("click", function () {
    applyTheme(this.dataset.theme)
    localStorage.setItem("theme", this.dataset.theme)
  })
})
function applyTheme(themeName) {
  let urlTheme = `style/css/theme-${themeName}.css`
  document.querySelector('[title="theme"]').setAttribute("href", urlTheme)
}

let active = localStorage.getItem("theme")
if (active === null) {
  applyTheme("light")
} else {
  applyTheme(active)
}

// ITEMS
document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".images__left-img__box")

  function itemsAnimation() {
    let windowCenter = window.innerHeight + window.scrollY

    items.forEach((item) => {
      let itemOffset = item.offsetTop + item.offsetHeight / 2
      if (windowCenter >= itemOffset) {
        item.classList.add("item__animation")
      } else {
        item.classList.remove("item__animation")
      }
    })
  }

  itemsAnimation()
  window.addEventListener("scroll", () => {
    itemsAnimation()
  })
})

// BURGER
let body = document.body
let wrapper = document.querySelector(".wrapper")
let hamb = wrapper.querySelector(".header__hamb")
let popup = wrapper.querySelector(".mobile__nav")

hamb.addEventListener("click", openMenuMobile)

function openMenuMobile(e) {
  e.preventDefault()
  popup.classList.toggle("open")
  hamb.classList.toggle("active")
  // body.classList.toggle("noscroll")
}
