export let products = [
    {
        id: "10",
        name: "Phanton",
        stock: true,
        brand: "PACO RABANNE",
        price:17.500,
        quantity: 10,
        img: "/img/imagen1.png",
        category: "perfumesimportados",
        product: "1"

    },
    {
        id: "2",
        name: "Smiling Men",
        stock: true,
        brand: "YSV",
        price:17.500,
        quantity: 10,
        img: "/img/imagen2.png",
        category: "perfumesimportados",
        product: "2"
    },
    {
        id: "3",
        name: "Smiling Women",
        stock: true,
        brand: "YSV",
        price:17.500,
        quantity: 10,
        img: "/img/imagen3.png",
        category: "perfumesnacionales",
        product: "3"
    },
    {
        id: "4",
        name: "Memori Cédre Secret",
        stock: true,
        brand: "KENZO",
        price:17.500,
        quantity: 10,
        img: "/img/imagen4.png",
        category: "perfumesnacionales",
        product: "4"
    },
    {
        id: "5",
        name: "My Way",
        stock: true,
        brand: "GIORGIO ARMANI",
        price:17.500,
        quantity: 10,
        img: "/img/imagen5.png",
        category: "perfumesimportados",
        product: "5"
    },
    {
        id: "6",
        name: "Kenzo Flower",
        stock: true,
        brand: "KENZO",
        price:17.500,
        quantity: 10,
        img: "/img/imagen6.png",
        category: "perfumesnacionales",
        product: "6"
    }
    ]



export let mockFetch = (id) => {
return new Promise ((res,rej) => {
    setTimeout(() =>{
        res(id ? products.find (prod => prod.id == id) : products)
    }, 1000)

} )
}