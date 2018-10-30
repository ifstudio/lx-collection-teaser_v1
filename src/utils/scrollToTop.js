export const scrollToTop = (e, reload = false) => {
  e.preventDefault()
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
  if (reload) {
    setTimeout(() => {
      window.location.reload()
    }, 1500)
  }
}
