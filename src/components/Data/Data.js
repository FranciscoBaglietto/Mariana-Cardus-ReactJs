const Data =[{
    id:1,
    nombre: "Agua Micelar",
    precio: 100,
    img:"./../../asset/image/agua-micelar",
    stock:10
},
{
    id:2,
    nombre: "Antiage",
    precio: 200,
    img:"../../asset/image/antiage",
    stock:10
},
{
    id:3,
    nombre: "Crema de Manos",
    precio: 300,
    img:"../../asset/image/crema-de-manos",
    stock:10
},
]

//promesa
const getFetch = new Promise((res, rej) => {
    let condition = true

    if(condition){
        setTimeout(() => {
            res(Data)
        }, 2000);
    }
    else{
        rej(console.log("No hay datos de productos"))
    }

})

//exportamos solo la funcion de la promesa

export default getFetch;
