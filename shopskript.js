let cart = []
//let priceTotal = 0;

function addToCart(title, price) {
    cart.push({productTitle: title, productPrice: price, productQuantity: 1})
    console.log(cart)
    //Etter å ha lagt inn et produkt; oppdater handlelistevisningen
    renderCart()
    //SÅ må vi oppdatere label mer antall prdukter
    document.querySelector("#cart .label").innerHTML = cart.length
    document.querySelector("#cartviuw").classList.remove("hidden")

    /*priceTotal = 0;
    //https://linuxhint.com/calculate-sum-of-array-of-objects-javascript/
    for (let i = 0; i< cart.length; i++){
        priceTotal += cart[i].productPrice
    }
    console.log(priceTotal)
    document.querySelector(".total").innerHTML = priceTotal + ",-"*/
}

function deleteProduct(product) {
    //cart.map()
    /*for(let i = 0; i < cart.length; i++){
        if(cart[i] === cart[product]) {

        }
    }*/
    document.getElementById("prod-"+product).classList.add("hidden")

    setTimeout(() => {
        cart.splice(product, 1)
        renderCart()
    }, 700) 
}

function calcPrice() {
    let priceTotal = 0;
    
    cart.map(prod => priceTotal += prod.productPrice)
    document.querySelector(".total").innerHTML = priceTotal + ",-"
}

function renderCart() {
    //Tom variabel for å bygge html for produkter
    let listHTML = ""
    
    //Gå gjennom cart arrayen, lag <li> for hvert produkt
    cart.map((prod, index) => listHTML +=`<li id="prod-${index}">
        <span class="titel">${prod.productTitle}</span>
        <span class="price">${prod.productPrice}</span>
        <span class="quantity">${prod.productQuantity}</span>
        <button onclick="deleteProduct(${index})" class="delete">X</button>
    </li>`)
    //Bruke en selector for å finne riktig <ul>, og skrive in listHTML: 
    
    document.querySelector("#cartviuw ul").innerHTML = listHTML
    calcPrice()
}

function toggleCart() {
    document.querySelector("#cartviuw").classList.toggle("hidden")
}


