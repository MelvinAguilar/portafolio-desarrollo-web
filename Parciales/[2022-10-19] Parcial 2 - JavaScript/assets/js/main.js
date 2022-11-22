//Declaring logical variables

let boosterCards = [];
let deckCards = [];
let boosterUseCounter = 0;
let _boosterUseCounter = 0;
const numberCardsInset = 15;

//Declaring visual variables
let boosterContainer = null;
let deckContainer = null;
let heartBeatAnimation = null;
let spanControlNumber = null;
let cardsImagesBooster = null;
let cardImageBoster = null;


//buttons from booster container
let btnGetBooster = null;
let btnSaveBooster = null;
let btnClearBooster = null;

//buttons from deck container
let btnSaveDeck = null;
let btnLoadDeck = null;
let btnClearDeck = null;

//Binding views
const bindElements = ()=>{
    let allbuttons = document.querySelectorAll(".btn__secondary");
    boosterContainer = document.querySelector("#booster-cards");
    deckContainer = document.querySelector("#deck-cards");
    heartBeatAnimation = document.querySelector(".heartbeat");
    spanControlNumber = document.querySelector(".card-controls__number");

    btnGetBooster = allbuttons[0];
    btnSaveBooster = allbuttons[1];
    btnClearBooster = allbuttons[2];
    btnSaveDeck = allbuttons[3];
    btnLoadDeck = allbuttons[4];
    btnClearDeck = allbuttons[5];
}

//fetching cards from api
const fetchScryfall =  async (rarity) =>{
    let card = null;

    try{
        const responseCard = await fetch(`https://api.scryfall.com/cards/random?q=rarity%3A${rarity}`,{ 
            mode: "cors",
        });

        if(responseCard.ok){
            const _card = await responseCard.json();
            card = castResponse(_card);
        }
        else{
            console.log("notok");
        }
    }
    catch(error){
        const errorMesagge = "Ups! Error al obtener cartas";
        console.error(error);
        console.error(errorMesagge);
        alert(errorMesagge);
    }
    finally{
        return card;
    }
}   

//casting scryfall information
const castResponse = (card) => {
    let cardData = {
        id: card.id,
        name: card.name,
        colors: card.colors,
        image: card.image_uris["normal"],
        manacost: card.mana_cost,
        rarity: card.rarity,
        type: card.type_line,
        inDeck: false
    }
    cardData = card.power ? {power: card.power, ...cardData} : {...cardData};
    cardData = card.toughness ? {toughness: card.toughness, ...cardData} : {...cardData};
    return cardData;
}


//Helpers
const getRarityCodeFromRarity = (rarity) =>{
    let _rarity = {
        "common" : "c",
        "uncommon": "u",
        "rare": "r",
        "special": "s",
        "mythic": "m",
    }

    return _rarity[rarity];
}

// Header for each category
const createCategoryHeader = (type) => {
    const _header = `${type}`;
    const _container = document.createElement("h3");
    _container.innerHTML = _header;
    _container.classList.add("cards__title")
    return _container;
}

//Booster cards creation
const createCard = (card, container) =>{
    const _button = (container === boosterCards) ? 
        `<button class="card__button card__button--add">+</button>` :
        `<button class="card__button card__button--remove">-</button>`;

    const _image = 
    `    <div class="card cards_images">
            <div class="card__content">
                <div class="card__name">
                    <h3>${card.name}</h3>
                    <p>~/~</p>
                    <p>${card.rarity}</p>
                </div>
                ${_button}
                <p class="card__type">${card.type}</p>
            </div>
            <img src="${card.image}" alt="back card" class="card__image image_class" />
        </div>

    `;

    const _container = document.createElement("div");
    _container.innerHTML = _image;
    _container.dataset.index = card.id;{
    _container.classList.add("card")
    }
    return _container;
}

const changeFormCard = (card, container) =>{
    const _button = (container === boosterCards) ? 
        `<button class="card__button card__button--add">+</button>` :
        `<button class="card__button card__button--remove">-</button>`;

    const _image = 
     `
            <div class="card__content">
                <div class="card__name">
                    <h3>${card.name}</h3>
                    <p>~/~</p>
                    <p>${card.rarity}</p>
                </div>
                ${_button}
                <p class="card__type">${card.type}</p>
            </div>

    `;
    return _image;
}

const createBackCard = () =>{
    const _image = 
    `
    <div class="card cards_images">
        <img src="./assets/images/mtg_back.png" alt="back card" class="card__image image_class" />
    </div>
    `;
    const _container = document.createElement("div");
    _container.innerHTML = _image;
    _container.classList.add("card");

    return _container;
}
    

const renderCards = (container)=>{
    container.innerHTML = "";
    if(container === boosterContainer){
        boosterCards.forEach((card)=>{
            const _card = createCard(card, boosterCards);
            container.appendChild(_card);
        })
    } else if(container === deckContainer){
        // Agrupar por tipo de carta
        if (deckCards===undefined || deckCards.length === 0) {
            const _header = createCategoryHeader("Sorry :( You don't have cards in your deck");
            container.appendChild(_header); 
        } else {
            const dataGrouped = groupBy(deckCards, (c) => c.type);

            Object.keys(dataGrouped).forEach((key) => {
                const _header = createCategoryHeader(key);
                container.appendChild(_header);
                
                dataGrouped[key].forEach((card) => {
                    const _card = createCard(card, deckCards);
                    container.appendChild(_card);
                });
            });

            // Para los botones agregar el evento de eliminar una carta
            let allDeckButtons = document.querySelectorAll(".card__button--remove");
            allDeckButtons.forEach((button)=>{
                button.addEventListener("click", () => {
                    const cardId = button.parentElement.parentElement.parentElement.dataset.index;
                    const card = deckCards.find((card) => card.id === cardId);
                    deckCards.splice(deckCards.indexOf(card), 1);
                    renderCards(deckContainer);
                });
            });
        }       
    }
}
const _renderCards =()=>{
    cardsImagesBooster = document.querySelectorAll(".cards_images");
    cardImageBoster = document.querySelectorAll(".image_class");

    cardsImagesBooster.forEach((card, counter)=>{
        cardImageBoster[counter].src = boosterCards[counter].image;
        card.innerHTML += changeFormCard(boosterCards[counter], boosterCards);
        card.dataset.index = boosterCards[counter].id;
    });

}
const createCardSet = async ()=>{
    boosterCards = boosterUseCounter < 4 ? [...boosterCards, await fetchScryfall(getRarityCodeFromRarity("rare"))] : [...boosterCards, await fetchScryfall(getRarityCodeFromRarity("mythic"))];
    boosterUseCounter = boosterUseCounter === 4 ? 0 : boosterContainer;
    for(let i = 1; i < numberCardsInset; i++){
        if(i === 1)
            boosterCards = [...boosterCards, await fetchScryfall(getRarityCodeFromRarity("special"))];
        else if(i < 5)
            boosterCards = [...boosterCards, await fetchScryfall(getRarityCodeFromRarity("uncommon"))];
        else
            boosterCards = [...boosterCards, await fetchScryfall(getRarityCodeFromRarity("common"))];
    }

    _renderCards(boosterContainer);
    // Para los botones agregar el evento de agregar una carta al deck
    let allCardButtons = document.querySelectorAll(".card__button--add");
    allCardButtons.forEach((button)=>{
        button.addEventListener("click", () => {
            const cardId = button.parentElement.parentElement.dataset.index;
            const card = boosterCards.find((card) => card.id === cardId);
            deckCards.push(card);
            renderCards(deckContainer);
        });
    });
}

//booster listeners
const setListener = ()=>{
    btnGetBooster.addEventListener("click", ()=>{
        heartBeatAnimation.style.display = "flex";
        createCardSet().finally(() => {
            heartBeatAnimation.style.display = "none";
        });
        _boosterUseCounter++;
        boosterUseCounter++;
        spanControlNumber.innerHTML = String(_boosterUseCounter).padStart(3, "0");
    });

    btnSaveBooster.addEventListener("click", ()=>{
        deckCards = [...boosterCards , ...deckCards];
        renderCards(deckContainer);
    });
    
    btnClearBooster.addEventListener("click", ()=>{
        boosterCards = [];
        boosterContainer.innerHTML = "";
        for(let i = 0; i < numberCardsInset; i++){

            boosterContainer.appendChild(createBackCard());
        }

        
    })

    
    btnClearDeck.addEventListener("click", ()=>{
        deckCards = [];
        deckContainer.innerHTML = "";
    })

    btnSaveDeck.addEventListener("click", ()=>{
        if(deckCards.length > 0){
            saveJSON();

        }
    })

    btnLoadDeck.addEventListener("click", ()=>{
        readJSONfromFile();
    })
}


const addDataToLocalStorage = () =>{
    if(deckCards){
        localStorage.setItem("deckCardsHistory", JSON.stringify(deckCards));
        localStorage.setItem("boosterUseCounter", JSON.stringify(boosterUseCounter));
        localStorage.setItem("_boosterUseCounter", JSON.stringify(_boosterUseCounter));
    }
}

const getDataFromLocalStorage = ()=>{
    deckCards = JSON.parse(localStorage.getItem("deckCardsHistory")) || [];
    boosterUseCounter = parseInt(JSON.parse(localStorage.getItem("boosterUseCounter")) || 0);
    _boosterUseCounter = parseInt(JSON.parse(localStorage.getItem("_boosterUseCounter")) || 0);
    
    if(deckCards)
        return true;
    return false;
}

const saveJSON = ()=>{
    const data = JSON.stringify(deckCards);
    const blob = new Blob([data], {type: "application/json"});
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.download = "data.json";
    a.href = url;
    a.click();
}

const readJSONfromFile = ()=>{
    const input = document.createElement("input");
    input.type = "file";
    input.accept = ".json";
    input.onchange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.readAsText(file, "UTF-8");
        reader.onload = readerEvent => {
            const content = readerEvent.target.result;
            deckCards = JSON.parse(content);
            renderCards(deckContainer);
        }
    }
    input.click();
}
// Agrupar en un objeto por tipo de carta
function groupBy(array, callback) {
    let result = {};
    for (let i = 0; i < array.length; i++) {
        let key = callback(array[i]);
        if (result[key]) {
            result[key].push(array[i]);
        } else {
            result[key] = [array[i]];
        }
    }
    return result;
}

const renderCardsBack = () =>{
    for(let i = 0; i < numberCardsInset; i++){
        boosterContainer.appendChild(createBackCard());
    }
}

//main
const main = ()=>{
    //load local storage information 
    bindElements();
    renderCardsBack();
    if(getDataFromLocalStorage());
        renderCards(deckContainer);
    setListener();
}

window.onload = main;
window.onbeforeunload = addDataToLocalStorage;
window.onclose = addDataToLocalStorage;
