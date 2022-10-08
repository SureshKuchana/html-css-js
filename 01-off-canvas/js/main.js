const btn = document.querySelector('button')
const body = document.body

btn.addEventListener("click", _ => {
    body.classList.toggle('offsite-is-open')
})
