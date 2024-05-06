//YORKSHIRE TERRIER BUTTON
var btnvar1 = document.getElementById('btnh1');

function Toggle1 (imageSrc, breedName, description){
    if (btnvar1.style.color =="red") {
        btnvar1.style.color = "grey"

        var favoriteSection = document.querySelector('.favorite-dogs');
        var favoriteCards = favoriteSection.querySelectorAll('.dog-card');
        
        favoriteCards.forEach(function(card) {
        if (card.querySelector('h2').textContent === breedName) {
            card.remove(); // Remove the card from the DOM
            }
        });
        }
        else{
            btnvar1.style.color = "red"
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
//FRENCH BULLDOG BUTTON
var btnvar2 = document.getElementById('btnh2');
function Toggle2(imageSrc, breedName, description){
    if (btnvar2.style.color =="red") {
        btnvar2.style.color = "grey"

        var favoriteSection = document.querySelector('.favorite-dogs');
        var favoriteCards = favoriteSection.querySelectorAll('.dog-card');
        
        favoriteCards.forEach(function(card) {
        if (card.querySelector('h2').textContent === breedName) {
            card.remove(); // Remove the card from the DOM
            }
        });
        }
        else{
            btnvar2.style.color = "red"
            var card = document.createElement('div');
            card.classList.add('dog-card');

            var img = document.createElement('img');
            img.src = imageSrc;
            img.alt = breedName;

            var h2 = document.createElement('h2');
            h2.textContent = breedName;

            var p = document.createElement('p');
            p.textContent = description;

            card.appendChild(img);
            card.appendChild(h2);
            card.appendChild(p);

            var favoriteSection = document.querySelector('.favorite-dogs');
            favoriteSection.appendChild(card);

            createRemoveButton(card);
            }
}


var btnvar3 = document.getElementById('btnh3');
function Toggle3(imageSrc, breedName, description){
    if (btnvar3.style.color =="red") {
        btnvar3.style.color = "grey"

        var favoriteSection = document.querySelector('.favorite-dogs');
        var favoriteCards = favoriteSection.querySelectorAll('.dog-card');
        
        favoriteCards.forEach(function(card) {
        if (card.querySelector('h2').textContent === breedName) {
            card.remove(); // Remove the card from the DOM
            }
        });
        }
        else{
            btnvar3.style.color = "red"
            var card = document.createElement('div');
            card.classList.add('dog-card');

            var img = document.createElement('img');
            img.src = imageSrc;
            img.alt = breedName;

            var h2 = document.createElement('h2');
            h2.textContent = breedName;

            var p = document.createElement('p');
            p.textContent = description;

            card.appendChild(img);
            card.appendChild(h2);
            card.appendChild(p);

            var favoriteSection = document.querySelector('.favorite-dogs');
            favoriteSection.appendChild(card);

            createRemoveButton(card);
            }
}

var btnvar4 = document.getElementById('btnh4');
function Toggle4(imageSrc, breedName, description){
    if (btnvar4.style.color =="red") {
        btnvar4.style.color = "grey"

        var favoriteSection = document.querySelector('.favorite-dogs');
        var favoriteCards = favoriteSection.querySelectorAll('.dog-card');
        
        favoriteCards.forEach(function(card) {
        if (card.querySelector('h2').textContent === breedName) {
            card.remove(); // Remove the card from the DOM
            }
        });
        }
        else{
            btnvar4.style.color = "red"
            var card = document.createElement('div');
            card.classList.add('dog-card');

            var img = document.createElement('img');
            img.src = imageSrc;
            img.alt = breedName;

            var h2 = document.createElement('h2');
            h2.textContent = breedName;

            var p = document.createElement('p');
            p.textContent = description;

            card.appendChild(img);
            card.appendChild(h2);
            card.appendChild(p);

            var favoriteSection = document.querySelector('.favorite-dogs');
            favoriteSection.appendChild(card);

            createRemoveButton(card);
            }
}

var btnvar5 = document.getElementById('btnh5');
function Toggle5(imageSrc, breedName, description){
    if (btnvar5.style.color =="red") {
        btnvar5.style.color = "grey"

        var favoriteSection = document.querySelector('.favorite-dogs');
        var favoriteCards = favoriteSection.querySelectorAll('.dog-card');
        
        favoriteCards.forEach(function(card) {
        if (card.querySelector('h2').textContent === breedName) {
            card.remove(); // Remove the card from the DOM
            }
        });
        }
        else{
            btnvar5.style.color = "red"
            var card = document.createElement('div');
            card.classList.add('dog-card');

            var img = document.createElement('img');
            img.src = imageSrc;
            img.alt = breedName;

            var h2 = document.createElement('h2');
            h2.textContent = breedName;

            var p = document.createElement('p');
            p.textContent = description;

            card.appendChild(img);
            card.appendChild(h2);
            card.appendChild(p);

            var favoriteSection = document.querySelector('.favorite-dogs');
            favoriteSection.appendChild(card);

            createRemoveButton(card);
            }
}

var btnvar6 = document.getElementById('btnh6');
function Toggle6(imageSrc, breedName, description){
    if (btnvar6.style.color =="red") {
        btnvar6.style.color = "grey"

        var favoriteSection = document.querySelector('.favorite-dogs');
        var favoriteCards = favoriteSection.querySelectorAll('.dog-card');
        
        favoriteCards.forEach(function(card) {
        if (card.querySelector('h2').textContent === breedName) {
            card.remove(); // Remove the card from the DOM
            }
        });
        }
        else{
            btnvar6.style.color = "red"
            var card = document.createElement('div');
            card.classList.add('dog-card');

            var img = document.createElement('img');
            img.src = imageSrc;
            img.alt = breedName;

            var h2 = document.createElement('h2');
            h2.textContent = breedName;

            var p = document.createElement('p');
            p.textContent = description;

            card.appendChild(img);
            card.appendChild(h2);
            card.appendChild(p);

            var favoriteSection = document.querySelector('.favorite-dogs');
            favoriteSection.appendChild(card);

            createRemoveButton(card);
            }
}

var btnvar7 = document.getElementById('btnh7');
function Toggle7(imageSrc, breedName, description){
    if (btnvar7.style.color =="red") {
        btnvar7.style.color = "grey"

        var favoriteSection = document.querySelector('.favorite-dogs');
        var favoriteCards = favoriteSection.querySelectorAll('.dog-card');
        
        favoriteCards.forEach(function(card) {
        if (card.querySelector('h2').textContent === breedName) {
            card.remove(); // Remove the card from the DOM
            }
        });
        }
        else{
            btnvar7.style.color = "red"
            var card = document.createElement('div');
            card.classList.add('dog-card');

            var img = document.createElement('img');
            img.src = imageSrc;
            img.alt = breedName;

            var h2 = document.createElement('h2');
            h2.textContent = breedName;

            var p = document.createElement('p');
            p.textContent = description;

            card.appendChild(img);
            card.appendChild(h2);
            card.appendChild(p);

            var favoriteSection = document.querySelector('.favorite-dogs');
            favoriteSection.appendChild(card);

            createRemoveButton(card);
            }
}

var btnvar8 = document.getElementById('btnh8');
function Toggle8(imageSrc, breedName, description){
    if (btnvar8.style.color =="red") {
        btnvar8.style.color = "grey"

        var favoriteSection = document.querySelector('.favorite-dogs');
        var favoriteCards = favoriteSection.querySelectorAll('.dog-card');
        
        favoriteCards.forEach(function(card) {
        if (card.querySelector('h2').textContent === breedName) {
            card.remove(); // Remove the card from the DOM
            }
        });
        }
        else{
            btnvar8.style.color = "red"
            var card = document.createElement('div');
            card.classList.add('dog-card');

            var img = document.createElement('img');
            img.src = imageSrc;
            img.alt = breedName;

            var h2 = document.createElement('h2');
            h2.textContent = breedName;

            var p = document.createElement('p');
            p.textContent = description;

            card.appendChild(img);
            card.appendChild(h2);
            card.appendChild(p);

            var favoriteSection = document.querySelector('.favorite-dogs');
            favoriteSection.appendChild(card);

            createRemoveButton(card);
            }
}

var btnvar9 = document.getElementById('btnh9');
function Toggle9(imageSrc, breedName, description){
    if (btnvar9.style.color =="red") {
        btnvar9.style.color = "grey"

        var favoriteSection = document.querySelector('.favorite-dogs');
        var favoriteCards = favoriteSection.querySelectorAll('.dog-card');
        
        favoriteCards.forEach(function(card) {
        if (card.querySelector('h2').textContent === breedName) {
            card.remove(); // Remove the card from the DOM
            }
        });
        }
        else{
            btnvar9.style.color = "red"
            var card = document.createElement('div');
            card.classList.add('dog-card');

            var img = document.createElement('img');
            img.src = imageSrc;
            img.alt = breedName;

            var h2 = document.createElement('h2');
            h2.textContent = breedName;

            var p = document.createElement('p');
            p.textContent = description;

            card.appendChild(img);
            card.appendChild(h2);
            card.appendChild(p);

            var favoriteSection = document.querySelector('.favorite-dogs');
            favoriteSection.appendChild(card);

            createRemoveButton(card);
            }
}

var btnvar10 = document.getElementById('btnh10');
function Toggle10(imageSrc, breedName, description){
    if (btnvar10.style.color =="red") {
        btnvar10.style.color = "grey"

        var favoriteSection = document.querySelector('.favorite-dogs');
        var favoriteCards = favoriteSection.querySelectorAll('.dog-card');
        
        favoriteCards.forEach(function(card) {
        if (card.querySelector('h2').textContent === breedName) {
            card.remove(); // Remove the card from the DOM
            }
        });
        }
        else{
            btnvar10.style.color = "red"
            var card = document.createElement('div');
            card.classList.add('dog-card');

            var img = document.createElement('img');
            img.src = imageSrc;
            img.alt = breedName;

            var h2 = document.createElement('h2');
            h2.textContent = breedName;

            var p = document.createElement('p');
            p.textContent = description;

            card.appendChild(img);
            card.appendChild(h2);
            card.appendChild(p);

            var favoriteSection = document.querySelector('.favorite-dogs');
            favoriteSection.appendChild(card);

            createRemoveButton(card);
            }
}