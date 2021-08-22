
const menuHtml = document.querySelector('#menu')
menu.forEach(category => {
    let html = ''
    html +=`
        <div class="category flex-column">
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
                    <div class="item flex-column">
                        <div class="itemName">
                        ${item.span? `<p>${item.flavour}<br><span>${item.span}</span></p>` : `<p>${item.flavour} </p>`}
                        </div>
                        ${item.description? `<div class="description flex-column"><p>${item.description}</p></div>`:''}
                        
                    </div>
                    <div class="price flex-column">R$${item.price}</div>
                </div> <!-- menuItem -->
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
        console.log('aqui')
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

// Destaque de novidade com Lightbox e SetTimeout

// lightbox.open(false)
// setTimeout(lightbox.close, 5000);
