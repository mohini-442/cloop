
// / navbar
function openNav() {
    document.getElementById("navbar").classList.toggle("end-0");
    document.body.classList.toggle("overflow_hidden");
    document.getElementById("menubtn-icon").classList.toggle("cross")
}


window.addEventListener('scroll', function () {
    let backtotop = document.getElementById("backtotop")
    if (window.scrollY > 300) {
        backtotop.style.display = 'block'
    }
    else {
        backtotop.style.display = 'none'
    }
})

setTimeout(() => {
    document.getElementById("preloader").classList.add("d-none");
    document.getElementById("preloader").classList.add("pointer_event_none")
    document.body.classList.remove("overflow-hidden")
}
    , 3000);




if (true) {
    let name = "mohini"
}
console.log(name)



const cashRegister = {
    itemsForSale: [
        { name: "Phone", price: 300 },
        { name: "Smart TV", price: 220 },
        { name: "Gaming Console", price: 150 },
    ],
    shoppingCart: [],
    addItem: function (name) {
        let foundItem = this.itemsForSale.find(function (item) {
            return item.name === name;
        });
        if (foundItem) {
            this.shoppingCart.push(foundItem);
            console.log(`Adding ${name} to your shopping cart`);
        } else {
            console.log(`Sorry, we don't sell ${name} here!`);
        }
    },
    calculateTotalPrice: function () {
        let totalPriceAmount = 0;
        this.shoppingCart.forEach(function (purchasedItem) {
            totalPriceAmount += purchasedItem.price;
        });
        return totalPriceAmount;
    },
    pay: function (amount) {
        let totalPriceAmount = this.calculateTotalPrice();
        if (totalPriceAmount > 500) {
            totalPriceAmount -= totalPriceAmount * 0.1;
            console.log(
                `You get a 10% discount and your total price is ${totalPriceAmount}`
            );
        }
        if (amount >= totalPriceAmount) {
            if (amount - totalPriceAmount > 0) {
                console.log(`Here's your ${amount - totalPriceAmount} change`);
            }
            console.log(`Thanks for your purchase! Hope you come again`);
        } else {
            console.log(
                "Sorry, but you don't have enough money to purchase your items"
            );
        }
    },
};