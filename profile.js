let colorBtn = document.querySelector('#color')
let placeBtn = document.querySelector('#place')
let ritualBtn = document.querySelector('#ritual')

function colorChange() {
    alert('Favorite color is purple')
}

function placeChange() {
    alert('Favorite place is Hawaii')
}

function ritualChange() {
    alert('Favorite ritual is listening to LoFi when studying')
}

colorBtn.addEventListener('click',colorChange)

placeBtn.addEventListener('click',placeChange)

ritualBtn.addEventListener('click',ritualChange)