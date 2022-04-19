const shoppingCart = []
const goodbyeShoppingCart = []
var shirt = 0
var shoes = 0
var card = 0
var pen = 0
var pants = 0
var bat = 0

const shirtButton = document.getElementById("shirt-add")
const shoesButton = document.getElementById("shoes-add")
const cardButton = document.getElementById("card-add")
const penButton = document.getElementById("pen-add")
const pantsButton = document.getElementById("pants-add")
const batButton = document.getElementById("bat-add")
const checkOutButton = document.getElementById("checkout")
const shirtDelete = document.getElementById("Remove from Cart")

const easterEasterEgg = document.getElementById("imgSize")


function shirtClick() {
    if (shirt == 0) {
        shoppingCart.push([10, 'shirt-add', 'shirt'])
        document.getElementById("shirt-add").innerHTML = "Remove from Cart"
        shirt = 1
    }
    else {
        goodbyeShoppingCart.push([10, 'shirt-add', 'shirt'])
        document.getElementById("shirt-add").innerHTML = "Add to Cart"
        shirt = 0
    }
}

function shoesClick() {
    if (shoes == 0) {
        shoppingCart.push([23, 'shoes-add', 'shoes'])
        document.getElementById("shoes-add").innerHTML = "Remove from Cart"
        shoes = 1
    }
    else {
        goodbyeShoppingCart.push([23, 'shoes-add', 'shoes'])
        document.getElementById("shoes-add").innerHTML = "Add to Cart"
        shoes = 0
    }
}
function cardClick() {
    if (card == 0) {
        shoppingCart.push([5, 'card-add', 'Baseball card'])
        document.getElementById("card-add").innerHTML = "Remove from Cart"
        card = 1
    }
    else {
        goodbyeShoppingCart.push([5, 'card-add', 'Baseball card'])
        document.getElementById("card-add").innerHTML = "Add to Cart"
        card = 0
    }
}
function penClick() {
    if (pen == 0) {
        shoppingCart.push([1, 'pen-add', 'pen'])
        document.getElementById("pen-add").innerHTML = "Remove from Cart"
        pen = 1
    }
    else {
        goodbyeShoppingCart.push([1, 'pen-add', 'pen'])
        document.getElementById("pen-add").innerHTML = "Add to Cart"
        pen = 0
    }
}
function pantsClick() {
    if (pants == 0) {
        shoppingCart.push([15, 'pants-add', 'pants'])
        document.getElementById("pants-add").innerHTML = "Remove from Cart"
        pants = 1
    }
    else {
        goodbyeShoppingCart.push([15, 'pants-add', 'pants'])
        document.getElementById("pants-add").innerHTML = "Add to Cart"
        pants = 0
    }
}
function batClick() {
    if (bat == 0) {
        shoppingCart.push([25, 'bat-add', 'bat'])
        document.getElementById("bat-add").innerHTML = "Remove from Cart"
        bat = 1
    }
    else {
        goodbyeShoppingCart.push([25, 'bat-add', 'bat'])
        document.getElementById("bat-add").innerHTML = "Add to Cart"
        bat = 0
    }
}
function addToCartClick() {
    const totalCartPrice = shoppingCart.reduce((total, current) => total + current[0], 0)
    const totalRemovedCartPrice = goodbyeShoppingCart.reduce((total, current) => total + current[0], 0)
    const cartTotal = shoppingCart.length - goodbyeShoppingCart.length
    document.getElementById("items").innerHTML = `Items in cart: ${cartTotal}`
    document.getElementById("cart").innerHTML = `Current Total is $${totalCartPrice - totalRemovedCartPrice}`
}

function easterEggClick(){
    document.getElementById("surprise").innerHTML="You broke my shopping Cart"
}
shirtButton.addEventListener('click', shirtClick)
shoesButton.addEventListener('click', shoesClick)
cardButton.addEventListener('click', cardClick)
penButton.addEventListener('click', penClick)
pantsButton.addEventListener('click', pantsClick)
batButton.addEventListener('click', batClick)
checkOutButton.addEventListener('click', addToCartClick)

easterEasterEgg.addEventListener('click', easterEggClick)



