
const menuHtml = document.querySelector('#menu')
menu.forEach(category => {
    let html = ''
    html +=`
        <div class='category flex-column' onclick="show_hide(this)">
            <div class="categoryName">
                <i class="fas fa-caret-down"></i>
                <h3>${category.name}</h3>
            </div>
    `
    category.itens.forEach(item => {
            html += `
            <div class="menuItem">
            <div class="image ${category.category}">
                    <img src="${item.image}" alt="${item.flavour}" onclick="lightbox.open(event)">
                    </div>
                    <div class="item flex-column type${category.category} ${item.flavour == "KIT MINI TRUDEL" ? "kitmini" : ""}">
                        <div class="itemName">
                        ${item.span? `<p>${item.flavour}<br><span>${item.span}</span></p>` : `<p>${item.flavour} </p>`}
                        </div>
                        ${item.description? `<div class="description flex-column"><p>${item.description}</p></div>`:''}
                        <div class="price flex-column">
                            <p>R$ <span>${item.price},00</span></p>
                           <!-- ${item.miniPrice ? `<p class="mini"> Mini <span>${item.miniPrice.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</span></p>` : ''} -->
                        </div>
                    </div>
                    
                </div> <!-- menuItem -->
                <hr>
            `
    })
    html += `
        </div> <!-- category -->
    `
    menuHtml.innerHTML += html
});

const lightbox = {
    target: document.querySelector('.lightbox-target'),
    image: document.querySelector('.lightbox-target img'),
    closeButton: document.querySelector('.lightbox-close'),
    open(e){
        lightbox.target.style.opacity = 1
        lightbox.target.style.top = 0
        lightbox.closeButton.style.top = 0
        let source = e? e.target.src : './assets/Menu/LakaOreoGif.gif'
        lightbox.image.src = source
    },
    close(){
        lightbox.target.style.opacity = 0
        lightbox.target.style.top = '-100%'
        lightbox.closeButton.style.top = '-80px'
    }
}

// Destaque de novidade/combinação com Lightbox e SetTimeout

// lightbox.open(false)
// setTimeout(lightbox.close, 5000);

//Função Show Hide

// function show_hide(category) {
//     const arrow = category.querySelector('i')
//     arrow.classList.toggle('rotate')
//     const lines = category.querySelectorAll('hr')
//     const items = category.querySelectorAll('.menuItem')

//     items.forEach(item => {
//         item.classList.toggle('hide')
//     })
    
//     lines.forEach(line => {
//         line.classList.toggle('hide')
//     })
// }