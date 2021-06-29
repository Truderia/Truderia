const entregas = {
    name: "ENTREGAS",
    category:"delivery",
    itens: [
        {
            value: '4 reais',
            price: 4
        },
        {
            value: '5 reais',
            price: 5
        },
        {
            value: '6 reais',
            price: 6
        },
        {
            value: '7 reais',
            price: 7
        },
]
}
menu.push(entregas)

const payments = ['DINHEIRO', 'DÉBITO', 'CRÉDITO', 'PIX']

function calculateTotal() {
    let hiddenTotal = document.querySelector('#totalValue strong')
    let visibleTotal = document.querySelector('.orderTotal p')
    let total = 0
    let values = document.querySelectorAll('tr .value')
    for (const price of values) {
        total += Number(price.innerHTML)
    }
    hiddenTotal.innerHTML = `R$ ${total.toFixed(2)}`
    visibleTotal.innerHTML = `${total.toFixed(2)}`
}
calculateTotal()

function openOptions(category) {
    let html = `<input type='hidden' value='${category.id}'>`
    let chosed = menu.filter(menuCategory => menuCategory.category == category.id)
    
    chosed[0].itens.forEach(element => {
        html += ` 
        <button class onclick="addItem(this)">${element.flavour || element.value}</button>
        `
    });

    document.querySelector('.choices').innerHTML = html
}

function addItem(item) {
    let tbody = document.querySelector('tbody')
    let category = document.querySelector('.choices input').value
    let categoryChosed = menu.filter(menuCategory => menuCategory.category == category)[0]
    let itemChosed = categoryChosed.itens.filter(product => item.innerHTML == product.flavour || item.innerHTML == product.value)[0]
    tbody.innerHTML += `
    <tr>
        <td class="quantity" style="text-align:center;">1</td>
        <td colspan="1" style="padding: 0 6px;">${categoryChosed.name}</td>
        <td colspan="3">${itemChosed.flavour || itemChosed.value}</td>
        <td class="value" style="text-align:center;">${itemChosed.price.toFixed(2)}</td>
        <td onclick="removeItem(this)" class="delete"><div>X</div></td>
    </tr>
    `
    calculateTotal()
}

function removeItem(item) {
    item.parentNode.remove()
    calculateTotal()
}

function paymentOptions() {
    let html = ``
    payments.forEach(element => {
        html += `
            <button class onclick="addPayment(this)">${element}</button>
        `
    })
    document.querySelector('.choices').innerHTML = html
}

function addPayment(choice) {
    let html = ``
    let paymentChosed = document.querySelector('#paymentChosed')
    html += `
        <p>Forma de pagamento:<span>${choice.innerHTML}</span></p>
    `
    if (choice.innerHTML == "DINHEIRO") {
        html += `
        <small>Troco para </small><input id="change" type="number">
        `
    }
    paymentChosed.innerHTML = html
}

function printOrder() {
    let name = document.querySelector('#name input')
    let phone = document.querySelector('#phone input')
    let address = document.querySelector('#address input')
    let note = document.querySelector('#note textarea')
    let order = document.querySelector('#orderTable')
    let payment = document.querySelector('#paymentChosed span')
    let change = document.querySelector('#change')
    
    let html = `
        <h1 style="margin-bottom: 2px;">TRUDERIA</h1>
        <span>CNPJ: 41.925.485/0001-01</span>
        <p style="margin: 4px 0;"><strong>NOME:</strong> ${name.value}</p>
        <p style="margin: 4px 0;line-heigth: 1rem;"><strong>TELEFONE:</strong> ${phone.value}</p>
        <p style="margin: 4px 0;"><strong>ENDEREÇO:</strong> ${address.value}</p>
        <p style="margin: 4px 0;"><strong>OBS.:</strong> ${note.value}</p>
        ${order.innerHTML}
    `
    if (payment) {
        html += `<p><strong>Forma de pagamento:</strong> ${payment.innerHTML}</p>`
    }

    if (change) {
        html = `<p>Troco para: ${change.value}</p>`
    }

    let printWindow = window.open('about:blank');

    printWindow.document.write(html);
    let deleteButtons = printWindow.document.querySelectorAll('.delete')
    printWindow.document.querySelector('.orderTotal').remove()
    for (const del of deleteButtons) {
        del.remove()
    }
    printWindow.window.print();
    printWindow.window.close();
}

function endOrder() {
    let inputs = document.querySelectorAll('input')
    for (const iterator of inputs) {
        iterator.value = ''
    }

    document.querySelector('textarea').value = ''
    document.querySelector('tbody').innerHTML = ''
    document.querySelector('#paymentChosed').innerHTML = ''

    calculateTotal()
}