export let productos = [
    {
        id: "10",
        nombre: "Phanton",
        stock: true,
        marca: "PACO RABANNE",
        precio:"17.500",
        cantidad: "10",
        img: "/img/imagen1.png",
        categoria: "perfumesimportados",
        producto: "10"

    },
    {
        id: "2",
        nombre: "Smiling Men",
        stock: true,
        marca: "YSV",
        precio:"17.500",
        cantidad: "10",
        img: "/img/imagen2.png",
        categoria: "perfumesimportados",
        producto: "2"
    },
    {
        id: "3",
        nombre: "Smiling Women",
        stock: true,
        marca: "YSV",
        precio:"17.500",
        cantidad: "10",
        img: "/img/imagen3.png",
        categoria: "perfumesnacionales",
        producto: "3"
    },
    {
        id: "4",
        nombre: "Memori Cédre Secret",
        stock: true,
        marca: "KENZO",
        precio:"17.500",
        cantidad: "10",
        img: "/img/imagen4.png",
        categoria: "perfumesnacionales",
        producto: "4"
    },
    {
        id: "5",
        nombre: "My Way",
        stock: true,
        marca: "GIORGIO ARMANI",
        precio:"17.500",
        cantidad: "10",
        img: "/img/imagen5.png",
        categoria: "perfumesimportados",
        producto: "5"
    },
    {
        id: "6",
        nombre: "Kenzo Flower",
        stock: true,
        marca: "KENZO",
        precio:"17.500",
        cantidad: "10",
        img: "/img/imagen6.png",
        categoria: "perfumesnacionales",
        producto: "6"
    }
    ]



export let mockFetch = (id) => {
return new Promise ((res,rej) => {
    setTimeout(() =>{
        res(id ? productos.find (prod => prod.id == id) : productos)
    }, 1000)

} )
}