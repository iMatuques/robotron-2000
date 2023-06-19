const control = document.querySelectorAll("[data-control]")
const statistics = document.querySelectorAll("[data-statistic]")
const parts = {
    "arms": {
        "strong": 29,
        "power": 35,
        "energy": -21,
        "speed": -5,
    },

    "shield": {
        "strong": 41,
        "power": 20,
        "energy": 0,
        "speed": -20,
    },
    "nuclei":{
        "strong": 0,
        "power": 7,
        "energy": 48,
        "speed": -24,
    },

    "legs":{
        "strong": 27,
        "power": 21,
        "energy": -32,
        "speed": 42,
    },
    "rockets":{
        "strong": 0,
        "power": 28,
        "energy": 0,
        "speed": -2,
    }
} 

control.forEach ( (elemento) => {
    elemento.addEventListener("click", (evento) => {
        manipulateDados(evento.target.dataset.control, evento.target.parentNode)
        updateStatistics(evento.target.dataset.piece)
    })
})

function manipulateDados(operation, controle) {
    const piece = controle.querySelector("[counter]");

    if (operation === "-") {
        piece.value = parseInt(piece.value) -1
    } else {
        piece.value = parseInt(piece.value) +1
    }
}

function updateStatistics(piece) {
    statistics.forEach( (elemento) => {
        elemento.textContent = parseInt(elemento.textContent) + parts[piece][elemento.dataset.statistic]
    })
}