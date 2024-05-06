let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', () => {
    body.classList.add('active');
})
closeShopping.addEventListener('click', () => {
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'Yorkshire Terrier',
        image: 'yorkshire.webp',
        description: 'These small dogs, usually weighing no more than seven pounds, make adorable and portable companions.',
        price: 20000,
    },
    {
        id: 2,
        name: 'French Bulldog',
        image: 'frenchbulldog.webp',
        description: 'Big-eyed and playful, French Bulldogs have huge personalities and lots of love for their owners.',
        price: 90000 
    },
    {
        id: 3,
        name: 'Golden Retriever',
        image: 'goldenretriever.webp',
        description: 'Golden Retrievers are beloved for their cute faces and charming personalities.',
        price: 25000 
    },
    {
        id: 4,
        name: 'Dachshund',
        image: 'dachshund.webp',
        description: 'Dachshunds stand out with their short legs and long bodies, making them irresistibly cute.',
        price: 10000
    },
    {
        id: 5,
        name: 'Samoyed',
        image: 'samoyed.webp',
        description: 'Samoyeds are on our cutest list for their signature smiley faces and super-fluffy white fur. ',
        price: 50000 
    },
    {
        id: 6,
        name: 'Cairn Terrier',
        image: 'Cairnterrier.webp',
        description: 'Cairn Terriers, Dorothys furry friend in The Wizard of Oz, are cheerful, endearing, and love to explore.',
        price: 20000 
    },
    {
        id: 8,
        name: 'Shiba Inu',
        image: 'shibainu.webp',
        description: 'The Shiba Inu, from Japan, arrived in the US in 1954, stealing hearts with their fox-like faces.',
        price: 50000 
    },
    {
        id: 9,
        name: 'Pomeranian',
        image: 'pomeranian.webp',
        description: 'Pomeranians are a must on the list of cutest breeds! With fluffy figures and sweet faces, theyre like real-life toys.',
        price: 12000 
    },
    {
        id: 10,
        name: 'Pomsky',
        image: 'pomsky.webp',
        description: 'This breed is a blend of Siberian Husky and Pomeranian, resulting in an irresistibly fluffy, toy-sized Husky!',
        price: 50000 
    },
    {
        id: 11,
        name: 'Australian Sheperd',
        image: 'australiansheperd.webp',
        description: 'Aussies are smart and pretty, a winning combo! Theyre super cute, with a penchant for pleasing their owners, often boasting blue eyes.',
        price: 20000 
    }
];
let listCards = [];
function initApp() {
    products.forEach((value, key) => {
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="image/${value.image}">
            <div class="details">
                <div class="title">${value.name}</div>
                <div class="description">${value.description}</div>
                <div class="price">₱${value.price.toLocaleString()}</div>
                <div class="button-container">
                    <button onclick="addToCard(${key})" class="add-to-cart-btn">ADD TO CART</button>
                    <button onclick="Toggle1(this, 'image/${value.image}', '${value.name}', '${value.description}')" id="btnh1" class="heart-btn btn"><i class="fas fa-heart fa-2x"></i></button>
                </div>
            </div>`;
        list.appendChild(newDiv);
    })
}

initApp();
function addToCard(key) {
    if (listCards[key] == null) {
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard() {
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key) => {
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if (value != null) {
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>₱${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
            listCard.appendChild(newDiv);
        }
    })
    total.innerText = '₱' + totalPrice.toLocaleString(); // Concatenating total price with peso sign
    quantity.innerText = count;
}
function changeQuantity(key, quantity) {
    if (quantity == 0) {
        delete listCards[key];
    } else {
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}
function searchDogs() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const filteredDogs = products.filter(dog => dog.name.toLowerCase().includes(searchInput));

    list.innerHTML = ''; // Clear the list
    filteredDogs.forEach((dog, index) => {
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="image/${dog.image}">
            <div class="details">
                <div class="title">${dog.name}</div>
                <div class="description">${dog.description}</div>
                <div class="price">₱${dog.price.toLocaleString()}</div>
                <button onclick="addToCard(${index})">ADD TO CART</button>
            </div>`;
        list.appendChild(newDiv);
    });
}

function Toggle1(button, imageSrc, breedName, description){
    if (button.style.color == "red") {
        button.style.color = "white";

        var favoriteSection = document.querySelector('.favorite-dogs');
        var favoriteCards = favoriteSection.querySelectorAll('.dog-card');
        
        favoriteCards.forEach(function(card) {
            if (card.querySelector('h2').textContent === breedName) {
                card.remove(); // Remove the card from the DOM
            }
        });
    } else {
        button.style.color = "red";

        var card = document.createElement('div');
        card.classList.add('dog-card');

        var img = document.createElement('img');
        img.src = imageSrc;
        img.alt = breedName;

        var h2 = document.createElement('h2');
        h2.textContent = breedName;

        var p = document.createElement('p');
        p.textContent = description;

        card.append(img);
        card.append(h2);
        card.append(p);

        var favoriteSection = document.querySelector('.favorite-dogs');
        favoriteSection.append(card);

        createRemoveButton(card);
    }
}