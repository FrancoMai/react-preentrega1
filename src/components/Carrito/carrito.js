// export function Carrito(){
// const StockProductos = [
//     {
//       id: 1,
//       nombre: "Phanton",
//       stock: true,
//       marca: "PACO RABANNE",
//       precio:"17500",
//       cantidad: 1,
//       img: "./img/imagen1.png"
//   },
//   {
//       id: 2,
//       nombre: "Smiling Men",
//       stock: false,
//       marca: "YSV",
//       precio:"17500",
//       cantidad: 1,
//       img: "./img/imagen2.png"
//   },
//   {
//       id: 3,
//       nombre: "Smiling Women",
//       stock: true,
//       marca: "YSV",
//       precio:"17500",
//       cantidad: 1,
//       img: "./img/imagen3.png"
//   },
//   {
//       id: 4,
//       nombre: "Memori Cédre Secret",
//       stock: true,
//       marca: "KENZO",
//       precio:"17500",
//       cantidad: 1,
//       img: "./img/imagen4.png"
//   },
//   {
//       id: 5,
//       nombre: "My Way",
//       stock: false,
//       marca: "GIORGIO ARMANI",
//       precio:"17500",
//       cantidad: 1,
//       img: "./img/imagen5.png"
//   },
//   {
//       id: 6,
//       nombre: "Kenzo Flower",
//       stock: true,
//       marca: "KENZO",
//       precio:"17500",
//       cantidad: 1,
//       img: "./img/imagen6.png"
//   }
//   ];
//   let carrito = [];
  
//   const contenedor = document.querySelector("#contenedor");
//   const carritoContenedor = document.querySelector("#carritoContenedor");
//   const vaciarCarrito = document.querySelector("#vaciarCarrito");
//   const precioTotal = document.querySelector("#precioTotal");
//   const activarFuncion = document.querySelector("#activarFuncion");
//   const procesarCompra = document.querySelector("#procesarCompra");
//   const totalProceso = document.querySelector("#totalProceso");
//   const a = document.querySelector('#procesar-pago')
//   const listaCompra = document.querySelector("#lista-compra tbody");
  
  
//   if (activarFuncion) {
//     activarFuncion.addEventListener("click", procesarPedido);
//   }
  
//   document.addEventListener("DOMContentLoaded", () => {
//     carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  
//     mostrarCarrito();
//     document.querySelector("#activarFuncion")
//     .click(procesarPedido);
//   });
  
  
  
//   if (vaciarCarrito) {
//     vaciarCarrito.addEventListener("click", () => {
//       carrito.length = [];
//       mostrarCarrito();
//     });
//   }
  
//   if (procesarCompra) {
//     procesarCompra.addEventListener("click", () => {
//       if (carrito.length === 0) {
//         Swal.fire({
//           title: "¡Tu carrito está vacio!",
//           text: "Compra algo para continuar con la compra",
//           icon: "error",
//           confirmButtonText: "Aceptar",
//         });
//       } else {
//         location.href = "compra.html";
//       }
//     });
//   }
  
  
  
//   StockProductos.forEach((prod) => {
//     const { id, nombre, precio, img, marca, cantidad } = prod;
//     if (contenedor) {
//       contenedor.innerHTML += `
//       <div class="card mt-3" style="width: 18rem;">
//       <img class="card-img-top mt-2" src="${img}" alt="Card image cap">
//       <div class="card-body">
//         <h5 class="card-title">${nombre}</h5>
//         <p class="card-marca">${marca}</p>
//         <p class="card-text">Precio: ${precio}</p>
//         <p class="card-text">Cantidad: ${cantidad}</p>
//         <button class="btn btn-primary" id="btnComprar" onclick="agregarProducto(${id})">Comprar Producto</button>
//       </div>
//     </div>
//       `;
//     }
//   });
  
  
//   const agregarProducto = (id) => {
//     const existe = carrito.some(prod => prod.id === id)
  
//     if(existe){
//       const prod = carrito.map(prod => {
//         if(prod.id === id){
//           prod.cantidad++
//         }
//       })
//     } else {
//       const item = StockProductos.find((prod) => prod.id === id)
//       carrito.push(item)
//     }
//     mostrarCarrito()
  
//   };
  
//   const mostrarCarrito = () => {
//     const modalBody = document.querySelector(".modal .modal-body");
//     if (modalBody) {
//       modalBody.innerHTML = "";
//       carrito.forEach((prod) => {
//         const { id, nombre, precio, img, marca, cantidad } = prod;
//         console.log(modalBody);
//         modalBody.innerHTML += `
//       <div class="modal-contenedor">
//         <div>
//           <img class="img-fluid img-carrito" src="${img}"/>
//         </div>
//       <div>
//         <p>Producto: ${nombre}</p>
//         <p>Producto: ${marca}</p>
//         <p>Precio: ${precio}</p>
//         <p>Cantidad :${cantidad}</p>
//         <button class="btn btn-danger" onclick="eliminarProducto(${id})">Eliminar producto</button>
//       </div>
//     </div>  
  
//         `;
//       });
//     }
  
//     if (carrito.length === 0) {
//       console.log("Nada");
//       modalBody.innerHTML = `
//       <p class="text-center text-primary parrafo">¡Aun no agregaste nada!</p>
//       `;
//     } else {
//       console.log("Algo");
//     }
//     carritoContenedor.textContent = carrito.length;
  
//     if (precioTotal) {
//       precioTotal.innerText = carrito.reduce(
//         (acc, prod) => acc + prod.cantidad * prod.precio,
//         0
//       );
//     }
  
//     guardarStorage();
//   };
  
//   function guardarStorage() {
//     localStorage.setItem("carrito", JSON.stringify(carrito));
//   }
  
//   function eliminarProducto(id) {
//     const juegoId = id;
//     carrito = carrito.filter((juego) => juego.id !== juegoId);
//     mostrarCarrito();
//   }
//   function procesarPedido() {
//     carrito.forEach((prod) => {
      
//       const { id, nombre, precio, img, marca, cantidad } = prod;
//       if (listaCompra) {
//         const row = document.createElement("tr");
//         row.innerHTML += `
//                 <td>
//                 <img class="img-fluid img-carrito" src="${img}"/>
//                 </td>
//               <td>${nombre}</td>
//               <td>${marca}</td>
//               <td>${precio}</td>
//               <td>${cantidad}</td>
//               <td>${precio * cantidad}</td>
//               `;
//         listaCompra.appendChild(row);
//       }
//     });
//     totalProceso.innerText = carrito.reduce(
//       (acc, prod) => acc + prod.cantidad * prod.precio,
//       0
//     );
//   }
  
//     function enviarCompra(e){
//       e.preventDefault()
//     }
  
//      const btncompra = document.getElementById('button');
//      btncompra.addEventListener("click", alertExito);
//      btncompra.addEventListener("click", renderizarCarrito);
//      const btnCarrito = document.getElementById('btnComprar');
//      btnCarrito.addEventListener("click", alertCarrito);
     
  
//     function alertExito() {
//       Swal.fire({
//         title: "¡Compra exitosa!",
//         text: "Gracias por tu compra",
//         icon: "success",
//         confirmButtonText: "Aceptar",
//       });
//   };
  
//   function alertCarrito() {
//     Swal.fire({
//       title: "¡Producto agregado al carrito!",
//       text: "",
//       icon: "success",
//     });
//   };
  
//   function renderizarCarrito() {
//     carrito.splice(0, carrito.length);
//     carritoContenedor.textContent = carrito.length;
//     localStorage.setItem("carrito", JSON.stringify(carrito))
//     listaCompra.innerHTML = ""
//   }
  
//      document.getElementById('procesar-pago')
//       .addEventListener('submit', function(event) {
//         event.preventDefault();
         
  
//     })
    
// }