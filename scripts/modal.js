const modalOverlay = document.querySelector('.modalOverlay')
const modalContent = document.querySelector('#modalContent')

function modalOpen(content, contentClass) {
    modalOverlay.classList.add('active')
    modalContent.classList.add(contentClass)
    modalContent.innerHTML = content
}
function modalClose() {
    modalOverlay.classList.remove('active')
    modalContent.removeAttribute("class")
    modalContent.innerHTML = ""
    loadFixedCart()
}

