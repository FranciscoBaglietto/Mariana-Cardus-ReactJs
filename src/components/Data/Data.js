const Data = [
    {
        id: 1,
        nombre: "Antiage",
        precio: 200,
        img: "/antiage.jpg",
        stock: 10
    },
    {
        id: 2,
        nombre: "Crema de Manos",
        precio: 300,
        img: "/crema-de-manos.jpg",
        stock: 10
    },
]

//promesa
const getFetch = new Promise((res, rej) => {
    let condition = true

    if (condition) {
        setTimeout(() => {
            res(Data)
        }, 2000);
    }
    else {
        rej(console.log("No hay datos de productos"))
    }

})

//exportamos solo la funcion de la promesa

export default getFetch;
