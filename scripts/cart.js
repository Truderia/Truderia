const Cart = {
    init(oldCart) {
        if(oldCart){
            this.items = oldCart.items
            this.total = oldCart.total
        } else {
            this.items = []
            this.total = {
                quantity: 0,
                totalPrice: 0,
            }
        }

        return this
    },
    addOne(product){
        let cartHasProduct = this.findItem(product)

        if (!cartHasProduct) {
            cartHasProduct = {
                product : {...product},
                quantity: 0,
                totalPrice: 0
            },
            this.items.push(cartHasProduct)
        }

        let additionalsPrice = 0
        if(cartHasProduct.product.additional) cartHasProduct.product.additional.forEach(additional => {
            additionalsPrice += additional.price * additional.quantity
        }) 

        cartHasProduct.quantity++
        cartHasProduct.totalPrice = cartHasProduct.quantity * cartHasProduct.product.price + additionalsPrice

        this.total.quantity++
        this.total.totalPrice += cartHasProduct.totalPrice

        return this
    },
    removeOne(product){
        const item = this.findItem(product)

        item.quantity--
        item.totalPrice -= product.price

        this.total.quantity--
        this.total.totalPrice -= product.price

        if(item.quantity == 0) this.deleteProduct(product)

        return this
    },
    deleteItem(product){
        const item = this.findItem(product)
        
        this.total.quantity -= item.quantity
        this.total.totalPrice -= item.totalPrice

        this.items = this.items.filter(item => product.flavour != item.product.flavour || product.category != item.product.category || item.product.additional != product.additional )
    
        return this
    },
    findItem(product){
        return  this.items.find(item =>item.product.flavour == product.flavour && product.category == item.product.category && item.product.additional == product.additional)
    }

}

// Views

function openView(content, contentClass) {
    const view = document.querySelector('#view')
    const menu = document.querySelector('#menu')
    menu.classList.add('hideMenu')
    view.classList.add('active')
    view.classList.add(contentClass)
    view.innerHTML = content
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

// Select Item

function selectItemHtml(itemChosed,categoryChosed) {
    const isTrudel = categoryChosed.category == 'trudel' || categoryChosed.category == 'miniTrudel'
    const isMini = categoryChosed.category == 'miniTrudel'? true: false
    const additionalData = menu.find(category=>category.category == 'additional')
    const miniadditionalData = menu.find(category=>category.category == 'miniAdditional')
    const icecreamData = menu.find(category=>category.category == 'icecream')

    function fillOptionals(data) {
        data.items.forEach(additional => {
            html +=`
                <div class="input">
                    
                    <div class="quantity">
                        <i class="fas fa-minus" onclick="minusOneAdd(this)"></i>
                        <span>0</span> 
                        <i class="fas fa-plus" onclick="plusOneAdd(this)"></i>
                    </div>

                    <div class="image">
                        <img src="${additional.image}" alt="">
                    </div>

                    <div class="flavour">
                        <p>${additional.flavour}</p>
                    </div>
                    <div class="price">
                        <p>+${additional.price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
                    </div>                          
                </div><!--input-->
            `
        })
    }

    let html = `
        <div class="image">
            <img src="${itemChosed.image}" alt="">
        </div><!--image-->

        <div class="description container">
            <h1>${categoryChosed.name.slice(0, -1)} ${itemChosed.flavour}</h1>
            <p>${itemChosed.description}</p>
        </div><!--description-->   
    `

    if(isTrudel && itemChosed.flavour != 'KIT MINI TRUDEL'){
        html += `
            <div class="addToOrder">
        `
        if (isMini){
            html += `
                <div class="title">${miniadditionalData.name}</div>
                <div class="options">
            `   
            fillOptionals(miniadditionalData)
            
        } else {
            html += `
                <div class="title">${additionalData.name}</div>
                <div class="options">
            `   
            fillOptionals(additionalData)
            
        }

        html += `
                </div><!--options-->
            </div><!--addToOrder-->

            <div class="addToOrder">
                <div class="title">${icecreamData.name}</div>
                <div class="options">
        `
        fillOptionals(icecreamData)

        html += `
            </div><!--options-->
        </div><!--addToOrder-->
        `
    }       
    html += ` 
        <div class="total">
            <div class="quantity">
                <i class="fas fa-minus" onclick="minusOneProduct()"></i>
                <span>1</span> 
                <i class="fas fa-plus" onclick="plusOneProduct()"></i>
            </div>
            <div class="value" onclick="addToCart()">
                <span>Adicionar ao carrinho</span>
                <span>${itemChosed.price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</span>
            </div>
        </div>
        <div class="closeView">
                <span onclick="closeView()">Cancelar</span>
        </div>
        
    `
    return html
}

function choose(item) {
    // Extract selected category value from HTML
    let category = item.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector('.categoryName h3').innerHTML
    // Get category on data info
    category = menu.find(menuCategory => menuCategory.name == category)
    localStorage.setItem('categoryChosed', JSON.stringify(category))
    //Get item from data.js
    let itemChosed = category.items.find(product => item.parentNode.parentNode.parentNode.parentNode.querySelector('.itemName p').innerText == product.flavour)
    itemChosed = {
        ...itemChosed,
        category: category.category,
        additional:[],
    }

    localStorage.setItem('itemChosed', JSON.stringify(itemChosed))

    const itemHasMini = itemChosed.miniPrice? true : false

    if (itemHasMini ){
        let modalHtml = `
            <h3>Qual tamanho você deseja?</h3>
            <div class="buttons">
                <button onclick="selectSize(this.innerText)">Normal</button>
                <button onclick="selectSize(this.innerText)">Mini</button>
            </div>
        `
        hideFixedCart()
        modalOpen(modalHtml, 'normalOrMini')

    } else {
        const itemHtml = selectItemHtml(itemChosed, category)

        openView(itemHtml, 'selectItem')
        window.scrollTo(0, 0)
    }
}

function selectSize(size){
    let itemChosed = JSON.parse(localStorage.getItem('itemChosed'))
    let categoryChosed = JSON.parse(localStorage.getItem('categoryChosed'))

    let itemHtml = selectItemHtml(itemChosed, categoryChosed)

    if(size.toLowerCase() == 'mini') {
        categoryChosed = `mini${categoryChosed.category}`
        let category = menu.find(menuCategory => menuCategory.category.toLowerCase() == categoryChosed)
        localStorage.setItem('categoryChosed', JSON.stringify(category))
        itemChosed.category = category.category
        itemChosed.price = category.items.find(flavour => itemChosed.flavour == flavour.flavour).price
        localStorage.setItem('itemChosed', JSON.stringify(itemChosed))
        
        itemHtml = selectItemHtml(itemChosed, category)
    } 
    modalClose()
    openView(itemHtml, 'selectItem')
    window.scrollTo(0, 0)
}


// localStorage.setItem('cart', JSON.stringify(Cart.init(cart).addOne(itemChosed)))
// localStorage.setItem('cart', JSON.stringify(cart))
// JSON.parse(localStorage.getItem('cart')) 

  //Cart example 
let cartExample = {
    items : [ 
        {
            product: {
                category: 'trudel',
                flavour: 'tradicional',
                price: 10,
                img: './assets/example.jpg',
                additional: [
                    {
                        category: 'additional',
                        flavour: 'morango',
                        quantity: 1,
                        price: 4
                    },
                    {
                        category: 'icecream',
                        flavour: 'creme',
                        quantity: 1,
                        price: 4
                    }
                ],
            },
            quantity: 1,
            totalPrice:18
        }
    ],
    total: {
        quantity: 0,
        totalPrice: 0
    }
}

function minusOneAdd(target) {
    const totalQuantity = document.querySelector('.total .quantity span').innerHTML
    let itemChosed = JSON.parse(localStorage.getItem('itemChosed'))
    const categoryName = target.parentNode.parentNode.parentNode.parentNode.querySelector('.title').innerText
    const addCategory = menu.find(category=> category.name == categoryName)
    const addTarget = addCategory.items.find(item=>item.flavour == target.parentNode.parentNode.querySelector('.flavour p').innerText)
    const totalPrice = () => {
        let total = itemChosed.price 
        if(itemChosed.additional) itemChosed.additional.forEach(additional => {
            total += additional.price * additional.quantity
        })
        total *= totalQuantity  
        return total     
    }
    

    if (target.parentNode.querySelector('span').innerHTML > 0) {
        target.parentNode.querySelector('span').innerHTML-- 

        itemChosed.additional.find(add => add.flavour == addTarget.flavour).quantity--
        localStorage.setItem('itemChosed', JSON.stringify(itemChosed))

        document.querySelector('.total .value span:nth-child(2)').innerHTML = totalPrice().toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
        
    }
}

function plusOneAdd(target) {
    const totalQuantity = document.querySelector('.total .quantity span').innerHTML
    let itemChosed = JSON.parse(localStorage.getItem('itemChosed'))
    const categoryName = target.parentNode.parentNode.parentNode.parentNode.querySelector('.title').innerText
    const addCategory = menu.find(category=> category.name == categoryName)
    let addTarget = addCategory.items.find(item=>item.flavour == target.parentNode.parentNode.querySelector('.flavour p').innerText)
    const totalPrice = () => {
        let total = itemChosed.price 
        if(itemChosed.additional) itemChosed.additional.forEach(additional => {
            total += additional.price * additional.quantity
        })
        total *= totalQuantity  
        return total     
    }
    
    target.parentNode.querySelector('span').innerHTML++ 

    if (!itemChosed.additional.find(add => add.flavour == addTarget.flavour)) {
        addTarget = {
            ...addTarget,
            quantity: 1,
            category: addCategory.name
        }
        itemChosed.additional.push(addTarget)
    } else {
        itemChosed.additional.find(add => add.flavour == addTarget.flavour).quantity++
    }

    
    localStorage.setItem('itemChosed', JSON.stringify(itemChosed))

    document.querySelector('.total .value span:nth-child(2)').innerHTML = totalPrice().toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
    
    
}

function minusOneProduct(){
    let itemChosed = JSON.parse(localStorage.getItem('itemChosed'))
    const totalPrice = (totalQuantity) => {
        let total = itemChosed.price 
        if(itemChosed.additional) itemChosed.additional.forEach(additional => {
            total += additional.price * additional.quantity
        })
        total *= totalQuantity  
        return total     
    }

    if(document.querySelector('.total .quantity span').innerHTML > 0) {
        document.querySelector('.total .quantity span').innerHTML--
        const totalQuantity = document.querySelector('.total .quantity span').innerHTML
        document.querySelector('.total .value span:nth-child(2)').innerHTML = totalPrice(totalQuantity).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
    }
}

function plusOneProduct(){
    let itemChosed = JSON.parse(localStorage.getItem('itemChosed'))
    const totalPrice = (totalQuantity) => {
        let total = itemChosed.price 
        if(itemChosed.additional) itemChosed.additional.forEach(additional => {
            total += additional.price * additional.quantity
        })
        total *= totalQuantity  
        return total     
    }

    document.querySelector('.total .quantity span').innerHTML++
    const totalQuantity = document.querySelector('.total .quantity span').innerHTML
    document.querySelector('.total .value span:nth-child(2)').innerHTML = totalPrice(totalQuantity).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
}

function addToCart() {
    const itemChosed = JSON.parse(localStorage.getItem('itemChosed'))
    const totalQuantity = document.querySelector('.total .quantity span').innerHTML
    const cart = JSON.parse(localStorage.getItem('cart'))

    for (let i = 0; i < totalQuantity; i++) {
        localStorage.setItem('cart', JSON.stringify(Cart.init(cart).addOne(itemChosed))) 

   }

   closeView()

   const cartHml = showCartHtml(JSON.parse(localStorage.getItem('cart')))

   openView(cartHml, 'showCart')
   window.scrollTo(0, 0)
   
}

// Show Cart

function showCartHtml(cart){
    const client = JSON.parse(localStorage.getItem('client'))
    
    
    
    let html = `
    <div class="cartResume">
        <h2>Resumo do Pedido</h2>
    </div>

    <div class="container cartSections">
        <div class="section">
            <h3>Itens no carrinho</h3>
        </div>
        
        <div class="cartItems">
    `
    cart.items.forEach(item=> {
        html += `
            <div class="item">
                <div class="quantity">${item.quantity}x</div>
                <div class="category">${menu.find(category => item.product.category == category.category).name.toLowerCase().replace(/(?:^|\s)\S/g, function(a) {
                    return a.toUpperCase();
                  }).slice(0, -1)}</div>
                <div class="flavourAndAdd">
                    <div class="flavour">${item.product.flavour.toLowerCase().replace(/(?:^|\s)\S/g, function(a) {
                        return a.toUpperCase();
                      })}</div>`

        if(item.product.additional.length > 0){
            item.product.additional.forEach(additional => {
                html += `
                <div class="add">+${additional.flavour.toLowerCase().replace(/(?:^|\s)\S/g, function(a) {
                    return a.toUpperCase();
                  })}</div>
                `
            })
        }

        html +=`
                </div>
                <div class="price">${item.totalPrice.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</div>
                <i class="far fa-trash-alt" onclick="deleteFromCart(this)"></i>
            </div><!--ITEM-->
        `
    })

    html += `
        </div> <!--CART ITEMS-->

        <div class="buyMore" onclick="closeView()"> Adicionar mais itens...</div>

    </div> <!--CART SECTION-->
    `

    html += `
    <div class="container cartSections">
            <div class="section">
                <h3>Dados</h3>
            </div>
            <div class="buyerData">
                <div class="input">
                    <div class="field">Nome</div>
                    <input 
                        type="text" 
                        name="name" 
                        value="${client? client.data.name : ''}" 
                        placeholder="Nome completo" 
                        onblur="localStorage.setItem('client', JSON.stringify(Client.init().updateName(this.value)))"
                    >
                </div>
                <div class="input">
                    <div class="field">Telefone</div>
                    <input 
                        type="text" 
                        name="phone" 
                        value="${client? client.data.telephone : ''}" 
                        placeholder="(XX)XXXXX-XXXX" 
                        onblur="localStorage.setItem('client', JSON.stringify(Client.init().updateTelephone(this.value)))"
                    >
                </div>
                
            </div>
        </div>
    `

    html += `
    <div class="container cartSections">

            <div class="section">
                <h3>Forma de recebimento</h3>
            </div>

            <div class="deliveryMethod">
                <div class="deliveryOptions">
                    <div class="takeAway" onclick="selectTakeAway()">
                        <p>Retirada</p>
                        <div class="image" >
                            <img src="./assets/Menu/Delivery/food-withdraw.png" alt="">
                        </div>
                    </div>
                    <div class="delivery" onclick="selectDelivery()">
                        <p>Entrega</p>
                        <div class="image" >
                            <img src="./assets/Menu/Delivery/food-delivery.png" alt="">
                        </div>
                    </div>
                </div>

                <div class="takeAwaySelected hide ">
                    <h4>Retirar em </h4>
                    <p>Rua Cândida Lacerda, 470, Centro - Araras/SP</p>
                    <span>Próximo a escadaria da rodoviaria e a Av. do Café</span>
                </div>

                <div class="deliverySelected hide ">
                    <h4>Endereço para entrega</h4>
                    <div class="grid2">
                        <div class="input">
                            <div class="field">CEP </div>
                            <input 
                                type="text" 
                                name="cep" 
                                value="${client? client.data.address.zipCode : ''}" 
                                placeholder="XXXXX-XXX" 
                                onblur="getAddress(this.value)"
                            >
                        </div>
                        <div class="input">
                            <div class="field">Numero </div>
                            <input 
                                type="text" 
                                name="houseNumber" 
                                value="${client? client.data.address.number : ''}" 
                                placeholder="" 
                                onblur="localStorage.setItem('client', JSON.stringify(Client.init().updateNumber(this.value)))"
                            >
                        </div>
                    </div>

                    <div class="input">
                        <div class="field">Rua</div>
                        <input 
                            type="text" 
                            name="street" 
                            value="${client? client.data.address.street : ''}" 
                            placeholder="" 
                            onblur="localStorage.setItem('client', JSON.stringify(Client.init().updateStreet(this.value)))"
                        >
                    </div>
                    <div class="input">
                        <div class="field">Bairro</div>
                        <input 
                            type="text" 
                            name="district" 
                            value="${client? client.data.address.district : ''}" 
                            placeholder="" 
                            onblur="localStorage.setItem('client', JSON.stringify(Client.init().updateDistrict(this.value)))"
                            onchange="getDeliveryTax()"
                        >
                    </div>
                    <div class="input">
                        <div class="field">Complemento <span>(apartamento, condominio, etc...)</span></div>
                        <input 
                            type="text" 
                            name="complement" 
                            value="${client? client.data.address.complement : ''}" 
                            placeholder="" 
                            onblur="localStorage.setItem('client', JSON.stringify(Client.init().updateComplement(this.value)))"
                        >
                    </div>  

                </div>

            </div>
        </div>
    `

    html += `
    <div class="container cartSections">
            <div class="section">
                <h3>Pagamento</h3>
            </div>
            <div class="payment">
                <div class="select">
                    <div class="field">Meio de Pagamento </div>
                    <select name="select" onchange="selectPayment(this.value)">
                        <option value="default" selected disabled>-- Escolha -- </option>
                        <option value="money">Dinheiro</option>
                        <option value="pix">Pix</option>
                        <option value="creditCard">Cartão de crédito</option>
                        <option value="debitCard">Cartão de débito</option>
                    </select>
                </div>
                <div class="input hide">
                    <div class="field">Troco para </div>
                    <input 
                        type="text" 
                        name="change" 
                        value="" 
                        placeholder="R$" 
                        onchange="setChangeValue(this.value)"
                    >
                </div>
            </div>
        </div>
    `
    html += `
    <div class="container cartSections">
            <div class="section">
                <h3>Total</h3>
            </div>
            
            <div class="totalItems">
                <div class="item">
                    <div class="subValue">
                        <div>Subtotal</div>
                        <div id="subTotalValue">${cart.total.totalPrice.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</div>
                    </div>
                    <div class="deliveryTax">
                        <div>Taxa de entrega</div>
                        <div id="deliveryTaxValue">${ ''}</div>
                    </div>
                </div>
                        

                <div class="item total">
                    <div>Total</div>
                    <div id="totalValue">${ cart.total.totalPrice.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</div>
                </div><!--total-->

            </div> <!--TOTAL ITEMS-->

        </div>
    `

    html += `
        <div id="cartSendWhats">
                <h2>Enviar pedido para Whatsapp</h2>
            </div>

            <div class="closeView">
                <span onclick="closeView()">Voltar</span>
            </div>
        </div>`


return html
}

function deleteFromCart(target){
    let cart = JSON.parse(localStorage.getItem('cart'))
    const elementToDelete = target.parentNode
    const cartItemsNodes = target.parentNode.parentNode.children
    const indexOfItem = Array.from(cartItemsNodes)
                        .map((element, index) => ({element, index}))
                        .find(({element}) => element == elementToDelete).index
    const productToDelete = cart.items[indexOfItem]

    cart = Cart.init(cart).deleteItem(productToDelete.product)
    localStorage.setItem('cart', JSON.stringify(cart))
    elementToDelete.remove()
    if (cart.total.quantity < 1) {
        localStorage.removeItem('cart')
        closeView()
    }
}

function selectTakeAway() {
    const takeAwayElement = document.querySelector('.takeAwaySelected')
    const deliveryElement = document.querySelector('.deliverySelected')
    takeAwayElement.classList.remove('hide')
    deliveryElement.classList.add('hide')
    localStorage.setItem('receiveMethod', JSON.stringify('takeAway'))
}
function selectDelivery() {
    const takeAwayElement = document.querySelector('.takeAwaySelected')
    const deliveryElement = document.querySelector('.deliverySelected')
    const deliveryTax = Number(JSON.parse(localStorage.getItem('deliveryTax')))
    takeAwayElement.classList.add('hide')
    deliveryElement.classList.remove('hide')
    localStorage.setItem('receiveMethod', JSON.stringify('delivery'))
    if(deliveryTax)getDeliveryTax()
}

const Client = {
    init() {
        const oldClient = JSON.parse(localStorage.getItem('client'))
        if(oldClient){
            this.data = oldClient.data 
        } else {
            this.data = {
                    name: '',
                    telephone: '',
                    address: {
                        zipCode: '',
                        street: '',
                        district: '',
                        number: '',
                        complement: ''
                    }
            }
        }
        return this
    },
    updateVIACEP(newData){
        let clientExists = JSON.parse(localStorage.getItem('client'))
        // if(clientExists) this.data = this.data.data

        if (!clientExists) {
            clientExists =  {
                data:{
                    name: '',
                    telephone: '',
                    address: {
                        zipCode: '',
                        street: '',
                        district: '',
                        number: '',
                        complement: ''
                    }
                }
            },
            
            this.data = clientExists.data
        }
        this.data.address.street = newData.address.street
        this.data.address.district = newData.address.district
        this.data.address.zipCode = newData.address.zipCode


        return this
    },
    updateName(name){
        let clientExists = JSON.parse(localStorage.getItem('client'))

        if (!clientExists) {
            clientExists = {
                    name: '',
                    telephone: '',
                    address: {
                        zipCode: '',
                        street: '',
                        district: '',
                        number: '',
                        complement: ''
                    }
                
            },
            this.data = clientExists
        }
        this.data.name = name

        
        return this
    },
    updateTelephone(telephone){
        let clientExists = JSON.parse(localStorage.getItem('client'))

        if (!clientExists) {
            clientExists = {
                    name: '',
                    telephone: '',
                    address: {
                        zipCode: '',
                        street: '',
                        district: '',
                        number: '',
                        complement: ''
                    }
                
            },
            this.data = clientExists
        }
        this.data.telephone = telephone
        return this
    },
    updateZipCode(zipCode){
        let clientExists = JSON.parse(localStorage.getItem('client'))

        if (!clientExists) {
            clientExists = {
                    name: '',
                    telephone: '',
                    address: {
                        zipCode: '',
                        street: '',
                        district: '',
                        number: '',
                        complement: ''
                    }
                
            },
            this.data = clientExists
        }
        this.data.address.zipCode = zipCode
        return this
    },
    updateStreet(street){
        let clientExists = JSON.parse(localStorage.getItem('client'))

        if (!clientExists) {
            clientExists = {
                    name: '',
                    telephone: '',
                    address: {
                        zipCode: '',
                        street: '',
                        district: '',
                        number: '',
                        complement: ''
                    }
                
            },
            this.data = clientExists
        }
        this.data.address.street = street
        return this
    },
    updateDistrict(district){
        let clientExists = JSON.parse(localStorage.getItem('client'))

        if (!clientExists) {
            clientExists = {
                    name: '',
                    telephone: '',
                    address: {
                        zipCode: '',
                        street: '',
                        district: '',
                        number: '',
                        complement: ''
                    }
                
            },
            this.data = clientExists
        }
        this.data.address.district = district
        return this
    },
    updateNumber(number){
        let clientExists = JSON.parse(localStorage.getItem('client'))

        if (!clientExists) {
            clientExists = {
                    name: '',
                    telephone: '',
                    address: {
                        zipCode: '',
                        street: '',
                        district: '',
                        number: '',
                        complement: ''
                    }
                
            },
            this.data = clientExists
        }
        this.data.address.number = number
        return this
    },
    updateComplement(complement){
        let clientExists = JSON.parse(localStorage.getItem('client'))

        if (!clientExists) {
            clientExists = {
                    name: '',
                    telephone: '',
                    address: {
                        zipCode: '',
                        street: '',
                        district: '',
                        number: '',
                        complement: ''
                    }
                
            },
            this.data = clientExists
        }
        this.data.address.complement = complement
        return this
    },
}
    


const getAddress = async(zipCode) => {
    const zipCodeNumbers = zipCode.replace(/\D/g, '')
    const validacep = /^[0-9]{8}$/.test(zipCodeNumbers)
    if(!validacep) return alert("CEP Incorreto")

    const url = `https://viacep.com.br/ws/${zipCodeNumbers}/json/`
    const API = await fetch(url)
    const dados = await API.json()
    if(dados.erro) return alert("CEP não encontrado para calcular a taxa de entrega. \n Sem problemas pode seguir com o pedido e resolveremos essa questão através do Whatsapp. =)")

    document.querySelector('input[name="street"]').value = dados.logradouro
    document.querySelector('input[name="district"]').value = dados.bairro
    const client = {
        address: {
            street: dados.logradouro,
            district: dados.bairro,
            zipCode: dados.cep
        }
    }

    localStorage.setItem('client', JSON.stringify(Client.init().updateVIACEP(client)))
    getDeliveryTax()
}

function getDeliveryTax() {
    const district = document.querySelector('.deliveryMethod input[name="district"]').value
    function removeAcento (text){                                                               
    text = text.replace(new RegExp('[ÁÀÂÃ]','gi'), 'a');
    text = text.replace(new RegExp('[ÉÈÊ]','gi'), 'e');
    text = text.replace(new RegExp('[ÍÌÎ]','gi'), 'i');
    text = text.replace(new RegExp('[ÓÒÔÕ]','gi'), 'o');
    text = text.replace(new RegExp('[ÚÙÛÜ]','gi'), 'u');
    text = text.replace(new RegExp('[Ç]','gi'), 'c');
    return text;                 
    }
    try {
        const price = districts.find(districtData => {
            return (removeAcento(districtData.name).toLowerCase()  == removeAcento(district).toLowerCase())
        }).price
        document.querySelector('#deliveryTaxValue').innerHTML = price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
        localStorage.setItem('deliveryTax', JSON.stringify(price))
        getTotal()
    } catch (error) {
        console.log(error)
        localStorage.removeItem('deliveryTax')
        alert("Não encontramos a taxa de entrega para este bairro. \n Sem problemas !! Pode seguir com o pedido e resolveremos essa questão através do Whatsapp. =)")
    }
    
}
    
function selectPayment(paymentMethod) {
    const changeInput = document.querySelector('.showCart .payment .input')

    paymentMethod == 'money'? changeInput.classList.remove('hide') : changeInput.classList.add('hide')
    localStorage.setItem('paymentMethod', JSON.stringify(paymentMethod))
}
function setChangeValue(value){
    localStorage.setItem('changeNeeded', JSON.stringify(value))
    if(!value) localStorage.removeItem('changeNeeded', JSON.stringify(value))
}

function getTotal() {
    const totalValueElement = document.querySelector('#totalValue')
    const cart = JSON.parse(localStorage.getItem('cart')) 
    const deliveryTax = Number(JSON.parse(localStorage.getItem('deliveryTax')))

    if(deliveryTax) totalValueElement.innerHTML = (cart.total.totalPrice + deliveryTax).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
}


loadFixedCart()
