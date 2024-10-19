// MODAL
const modal = document.querySelector('.modal')
const modalTrigger = document.querySelector('#btn-get')
const closeIcon = document.querySelector('.modal_close')

const openModal = () => {
    modal.style.display = 'block'
    document.body.style.overflow = 'hidden'
}
setTimeout(openModal , 10000)

const closeModal = () => {
    modal.style.display = 'none'
    document.body.style.overflow = ''
}
modalTrigger.onclick = () => openModal()
closeIcon.onclick = () => closeModal()
modal.onclick = (event) => {
    if (event.target === modal)
    closeModal()
}
const myScroll = () => {
    if (window.innerHeight + window.scrollY > window.innerWidth) {
        openModal()
        window.removeEventListener('scroll', myScroll)
    }
}

window.addEventListener('scroll', myScroll)
