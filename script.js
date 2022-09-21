let totalPrice = 0;
function addToCart(suplies){
    // Number of vegetables
    let quantity = parseInt(suplies.previousElementSibling.value);

    // getting a price 
    let parent = suplies.parentNode;
    let sibling = parent.previousElementSibling;
    let price = sibling.lastElementChild.innerText;
    price = parseInt(price.substring(1,price.length));

    //getting a name of suplie
    let name = sibling.firstElementChild.innerText;
    //adding suplies to cart
    let cart = document.querySelector(".cart-items");
    cart.innerHTML += `<div class="cart-single-item">
            <h3>${name}</h3>
            <p> $${price} * ${quantity} = <span>${price * quantity}</span> </p>
            <button onclick="deleteSuplie(this)" class="remove-item">Delete</button>
            </div>
    `
    //total price

    totalPrice += price * quantity;
    let total = document.querySelector(".total");
    total.innerHTML = `TOTAL: $${totalPrice}`;

    // disable and enable buttons
    suplies.innerText = 'Added'
    suplies.setAttribute('disabled','true');
}

function deleteSuplie(suplie){
    let main = suplie.closest('.cart-single-item')
    let price = parseInt(main.querySelector('p span').innerText);
    let nameOfSuplie = main.firstElementChild.innerText;

    totalPrice -= price;
    let total = document.querySelector(".total");
    total.innerHTML = `TOTAL: $${totalPrice}`;
    
    main.remove();
    
    let vegetableName = document.querySelectorAll("h3");
    for (let i=0; i<vegetableName.length;i++){
        if(vegetableName[i].innerText == nameOfSuplie){
            let parent = vegetableName[i].parentNode.nextElementSibling;
            let btn = parent.lastElementChild;
            console.log(btn);
            btn.innerText = "Add";
            btn.removeAttribute('disabled');
        }
    }
}