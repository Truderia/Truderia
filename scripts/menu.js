//Loading MenuView data

const menuHtml = document.querySelector('#menu')

menuView.forEach(({ category, name: categoryName, items: categoryItems }) => {
    let html = ''
    html += `
        <div class='category flex-column' >
            <div class="categoryName" onclick="show_hide_items(this.parentNode)">
                <i class="fas fa-caret-down rotate"></i>
                <h3>${categoryName}</h3>
            </div>
    `

    categoryItems.forEach(({ image, flavour, span, miniPrice, price, description }) => {
        if (flavour == 'RECHEIO EXTRA') return

        html += `
        <div class="menuItem hide">
            <div class="image ${category}">
                <img src="${image}" alt="${flavour}" onclick="lightbox.open(event)">
            </div>
            <div class="item flex-column type${category} ${flavour == "KIT MINI TRUDEL" ? "kitmini" : ""}">
                <div class="itemName">
                    ${span ? `<p>${flavour}</p><span>${span}</span>` : `<p>${flavour} </p>`}
                </div>
                    ${description ? `<div class="description flex-column"><p>${description}</p></div>` : ''}
                <div class="priceAndAddCart">
                    <div class="price flex-column">
                            <p>R$ <span>${typeof (price) == 'number' ? price.toFixed(2).replace('.', ',') : price}</span></p>
                            ${miniPrice ? `<p class="mini"> Mini <span>${transformToRealBRL(miniPrice)}</span></p>` : ''} 
                    </div>
                    ${category != 'additional' && category != 'fingers' && category != 'savoryAdditional' ? `
                    <div class="addCart">
                        <button onclick="choose(this)">Escolher</button>
                    </div>`: ''}
                    ${category == 'fingers' ? `<div class="addCart">
                    <button onclick="order(event)">Encomendar</button>
                </div>`: ''}
                </div>    
            </div>
                
            </div> <!-- menuItem -->
            <hr class="hide">
        `
    })
    html += `
        </div> <!-- category -->
    `
    menuHtml.innerHTML += html
});

//Função Show Hide Category Items

function show_hide_items(category) {
    const arrow = category.querySelector('i')
    arrow.classList.toggle('rotate')
    const lines = category.querySelectorAll('hr')
    const items = category.querySelectorAll('.menuItem')

    items.forEach(item => {
        item.classList.toggle('hide')
    })

    lines.forEach(line => {
        line.classList.toggle('hide')
    })
}

// Loading/hiding Cart
function loadFixedCart() {
    const cart = JSON.parse(localStorage.getItem('cart'))

    if (cart) {
        const fixedCart = document.querySelector('.fixedCart')
        fixedCart.style.opacity = '1'
        fixedCart.style.visible = 'visible'
        fixedCart.style.transform = 'scale(1)'
        fixedCart.style.transition = '1000ms'

        fixedCart.innerHTML = `
            <h3>
                Carrinho 
                <i class="fas fa-shopping-cart"></i>
                <span>${cart.total.quantity}</span>
            </h3>
        `
    }
}

function hideFixedCart() {
    const fixedCart = document.querySelector('.fixedCart')
    fixedCart.style.opacity = '0'
    fixedCart.style.visible = 'hidden'
    fixedCart.style.transform = 'scale(0)'
    fixedCart.style.transition = '1000ms'
}


const currentDate = new Date()
const currentWeekday = currentDate.getDay()


// Lightbox 
const lightbox = {

    target: document.querySelector('.lightbox-target'),
    image: document.querySelector('.lightbox-target img'),
    closeButton: document.querySelector('.lightbox-close'),
    open(e) {
        const lightboxImage = currentWeekday === 4 ?
            './assets/Menu/lightboxThursdayCombination.webp' :
            './assets/Menu/lightboxWeekCombination.webp'
        lightbox.target.style.opacity = 1
        lightbox.target.style.top = 0
        lightbox.closeButton.style.top = 0
        let source = e ? e.target.src : lightboxImage
        lightbox.image.src = source
    },
    close() {
        lightbox.target.style.opacity = 0
        lightbox.target.style.top = '-100%'
        lightbox.closeButton.style.top = '-80px'
    }
}


// Destaque de novidade/combinação com Lightbox e SetTimeout

lightbox.open(false)
setTimeout(lightbox.close, 7000);

// Views SPA

function openView(content, contentClass) {
    const view = document.querySelector('#view')
    const menu = document.querySelector('#menu')
    menu.classList.add('hideMenu')
    view.classList.add('active')
    view.classList.add(contentClass)
    view.innerHTML = content
    if (contentClass == "showCart") {
        localStorage.removeItem('paymentMethod')
        localStorage.removeItem('changeNeeded')
        localStorage.removeItem('receiveMethod')
        localStorage.removeItem('deliveryTax')
        getTotal()
    }
    hideFixedCart()
}
function closeView() {
    const view = document.querySelector('#view')
    const menu = document.querySelector('#menu')
    view.classList.remove('active')
    view.removeAttribute("class")
    view.innerHTML = ''
    menu.classList.remove('hideMenu')
    loadFixedCart()
}

function checkIfCartIsFromToday() {
    const cart = JSON.parse(localStorage.getItem('cart'))
    const cartDate = new Date(cart.date)
    const today = new Date()

    if (cartDate.getDate() != today.getDate() ||
        cartDate.getMonth() != today.getMonth() ||
        cartDate.getFullYear() != today.getFullYear()) {
        localStorage.removeItem('cart')
    }
}

function order(event) {
    const item = event.target.parentNode.parentNode.parentNode.querySelector('.itemName p').innerText
    let texto = `Olá, eu gostaria de informações sobre a encomenda do item: ${item}.`
    texto = window.encodeURIComponent(texto);

    window.open("https://api.whatsapp.com/send?phone=5519996929909&text=" + texto, "_blank");
}
checkIfCartIsFromToday()
loadFixedCart()