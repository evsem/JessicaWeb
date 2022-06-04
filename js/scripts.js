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
  const rightItem = document.querySelector(".images__body-right")
  const bottomItem = document.querySelector(".images__footer-img")

  function itemsAnimation() {
    items.forEach((item) => {
      let windowCenter = window.innerHeight + window.scrollY
      let itemOffset = item.offsetTop + item.offsetHeight / 2
      if (windowCenter >= itemOffset) {
        item.classList.add("item__animation")
      } else {
        item.classList.remove("item__animation")
      }
    })
  }

  function rightItemAnimation() {
    let windowCenter = window.innerHeight + window.scrollY
    let rightItemOffset = rightItem.offsetTop + rightItem.offsetHeight / 2

    if (windowCenter >= rightItemOffset) {
      rightItem.classList.add("itemRight__animation")
    } else {
      rightItem.classList.remove("itemRight__animation")
    }
  }

  function bottomItemAnimation() {
    let windowCenter = window.innerHeight + window.scrollY
    let bottomItemOffset = bottomItem.offsetTop + bottomItem.offsetHeight / 2

    if (windowCenter >= bottomItemOffset) {
      bottomItem.classList.add("bottomItem__animation")
    } else {
      bottomItem.classList.remove("bottomItem__animation")
    }
  }

  itemsAnimation()
  rightItemAnimation()
  bottomItemAnimation()
  window.addEventListener("scroll", () => {
    itemsAnimation()
    rightItemAnimation()
    bottomItemAnimation()
  })
})

// BURGER
let body = document.body
let wrapper = document.querySelector(".wrapper")
let hamb = wrapper.querySelector(".header__hamb")
let popup = wrapper.querySelector(".mobile__nav")
let mobileItems = wrapper.querySelectorAll(".mobile__nav-menu__item")

hamb.addEventListener("click", openMenuMobile)

function openMenuMobile(e) {
  e.preventDefault()
  popup.classList.toggle("open")
  hamb.classList.toggle("active")
  mobileItems.forEach((item) => {
    item.addEventListener("click", function () {
      popup.classList.remove("open")
      hamb.classList.remove("active")
      body.classList.remove("noscroll")
    })
  })
  body.classList.toggle("noscroll")
}
