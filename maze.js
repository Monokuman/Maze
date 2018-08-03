console.log("loaded!")

const player = document.querySelector('#player')
const Dog = document.querySelector('#Dog')
const Cat = document.querySelector('#Cat')

Dog.addEventListener('click', function(e) {
        alert("Dead End!")
})

Dog2.addEventListener('click', function(e) {
        alert("Dead End!")
})

Dog3.addEventListener('click', function(e) {
        alert("Dead End!")
})

Dog4.addEventListener('click', function(e) {
        alert("Dead End!")
})

Cat.addEventListener('click', function(e) {
        alert("You Did It!")
})
console.log(Dog)

let key = document.querySelector("#key")
let keycontainer = document.querySelector("#keycontainer")
let goaway = document.querySelector("#goaway")
key.addEventListener('collide', function(e) {
        console.log("hitting key")
        keycontainer.setAttribute("position","0 -100 0")
        goaway.setAttribute("position","4.823 -100 0.457")
})
console.log("key picked up")
