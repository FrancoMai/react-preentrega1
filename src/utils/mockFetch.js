export let productos = [
    {
        id: 1,
        nombre: "Phanton",
        stock: true,
        marca: "PACO RABANNE",
        precio:"17500",
        cantidad: 1,
        img: "./public/img/imagen1.png"
    },
    {
        id: 2,
        nombre: "Smiling Men",
        stock: false,
        marca: "YSV",
        precio:"17500",
        cantidad: 1,
        img: "./public/img/imagen2.png"
    },
    {
        id: 3,
        nombre: "Smiling Women",
        stock: true,
        marca: "YSV",
        precio:"17500",
        cantidad: 1,
        img: "./public/img/imagen3.png"
    },
    {
        id: 4,
        nombre: "Memori Cédre Secret",
        stock: true,
        marca: "KENZO",
        precio:"17500",
        cantidad: 1,
        img: "./public/img/imagen4.png"
    },
    {
        id: 5,
        nombre: "My Way",
        stock: false,
        marca: "GIORGIO ARMANI",
        precio:"17500",
        cantidad: 1,
        img: "./public/img/imagen5.png"
    },
    {
        id: 6,
        nombre: "Kenzo Flower",
        stock: true,
        marca: "KENZO",
        precio:"17500",
        cantidad: 1,
        img: "./public/img/imagen6.png"
    }
    ]



export let mockFetch = (id) => {
return new Promise ((res,rej) => {
    setTimeout(() =>{
        res(productos)
    }, 1000)

} )
}