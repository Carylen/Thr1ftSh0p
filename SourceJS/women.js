const container = document.querySelector(".women-container")
const menContainer = document.querySelector(".men-container")

function fill(destination) {
    const card = document.createElement('div')
    card.className = "card test"
    
    card.innerHTML = `
    <div class="caption addOn">pinky ladies</div>
    <img class="catalog" src = "/SourceIMG/AirForce1-2.png" >
    <div class="caption price ">Rp. 1.xxx.xxx</div>
    `;

    destination.appendChild(card)
}

for (let i = 0; i < 10; i++) {
    fill(container)
}

for (let i = 0; i < 10; i++) {
    fill(menContainer)
}