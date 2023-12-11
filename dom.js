
document.write("<"+"script type='text/javascript' src='botonesCarrito.js'><"+"/script>")

const PEDIDOS = 'pedidos'
 
let todo = []
PrecioTotal = []

const botonCarrito = document.getElementById("#carrito");
const botonTotal = document.getElementById("#total");



class Pedido {
    constructor(){
        this.productos = []
        this.cantidades = []
        this.preciosTotales = 0
    }
   
    
    agregarProducto(ingresoProducto){
        this.productos.push(ingresoProducto)
    }
    calcularTotal(){
        this.productos.map((v) =>{
            this.preciosTotales = v.precio + this.preciosTotales
        })
        return this.preciosTotales;
    }
    cantidad(ingresoCantidad){
        this.cantidades.push(ingresoCantidad)
    }
}

class Productos{
    constructor(id,producto, precio, imagen , cantidad){
        this.id = id;
        this.producto = producto;
        this.precio = precio;
        this.imagen = imagen;
        this.cantidad = cantidad;
    }
 
}


let miPedido = new Pedido()
const producto1 = new Productos(1,'Muzzarella', 800 ,"./multimedia/muzzarella.jpg" ,0)
const producto2 = new Productos(2,'Napolitana', 1000,"./multimedia/napolitana.jpg",0)
const producto3 = new Productos(3,'Calabresa', 1000 ,"./multimedia/calabresa.jpg",0)
const producto4 = new Productos(4,'Fugazetta', 900 ,"./multimedia/Fugazzeta.jpg",0)
const producto5 = new Productos(5,'JamonyMorron', 1000,"./multimedia/JamonyMorron.jpg",0)
const producto6 = new Productos(6,'Rucula', 1000 ,"./multimedia/rucula.jpg",0)


const producto7 = new Productos(7,'Empanada de carne', 150 ,"./multimedia/empanada de carne.jpg",0)
const producto8 = new Productos(8,'Emp jamon y queso', 150 , "./multimedia/empanada de jamon y queso.jpg",0)
const producto9 = new Productos(9,'Empanada de verdura', 150 , "./multimedia/empanada de verdura.jpg",0)
const producto10 = new Productos(10,'Empanada de humita', 150 ,"./multimedia/humita.jpg",0)
const producto11 = new Productos(11,'Empanada depollo', 150 , "./multimedia/pollo.jpg",0)
const producto12 = new Productos(12,'Emp carne picante', 150 , "./multimedia/carnePicante.jpg",0)


const producto13 = new Productos(13,'agua', 120 ,"./multimedia/agua.jpg",0)
const producto14 = new Productos(14,'coca', 140 , "./multimedia/coca.jpg",0)
const producto15 = new Productos(15,'sprite', 140 , "./multimedia/sprite.jpg",0)
const producto16 = new Productos(16,'quilmes', 200 ,"./multimedia/quilmes.jpg",0)
const producto17 = new Productos(17,'brahma', 190 , "./multimedia/brahma.jpg",0)
const producto18 = new Productos(18,'andes rubia', 220 , "./multimedia/andes.jpg",0)


miPedido.agregarProducto(producto1)
miPedido.agregarProducto(producto2)
miPedido.agregarProducto(producto3)
miPedido.agregarProducto(producto4)
miPedido.agregarProducto(producto5)
miPedido.agregarProducto(producto6)
miPedido.agregarProducto(producto7)
miPedido.agregarProducto(producto8)
miPedido.agregarProducto(producto9)
miPedido.agregarProducto(producto10)
miPedido.agregarProducto(producto11)
miPedido.agregarProducto(producto12)
miPedido.agregarProducto(producto13)
miPedido.agregarProducto(producto14)
miPedido.agregarProducto(producto15)
miPedido.agregarProducto(producto16)
miPedido.agregarProducto(producto17)
miPedido.agregarProducto(producto18)



const productohtml = () => {
    const listaLocalStorage = JSON.parse(localStorage.getItem(PEDIDOS))
     
    if(!listaLocalStorage){
        localStorage.setItem(PEDIDOS, JSON.stringify(miPedido.productos))
         
    } else {
        miPedido.productos = listaLocalStorage;
    }
    


    const lista = document.querySelector(".card")
    miPedido.productos.map((product) => {
        const cardProducto = document.createElement('div');
        const nombreProducto = document.createElement("h6")
        const precioProducto = document.createElement("h4")
        const imagenProducto = document.createElement('img')
        const idNum = document.createElement('div')
        const pCantidad =document.createElement("h3")

        imagenProducto.setAttribute("class", product.producto);
        const botonMas = document.createElement('button')
        const botonMenos = document.createElement('button')
       
        cardProducto.className = "formato-card"
        cardProducto.id = product.id
        
        nombreProducto.className = "estiloNombre"
        precioProducto.className = "estiloPrecio"
        nombreProducto.textContent = product.producto + ":"
        precioProducto.textContent = "$ " + product.precio
        pCantidad.textContent = "Seleccion: " + product.cantidad
        pCantidad.className = "estiloNombre"
        imagenProducto.src = product.imagen
        imagenProducto.width = 170
        imagenProducto.height = 170
        botonMenos.className ="estiloBoton"
        botonMenos.textContent = "-" 
        botonMas.className ="estiloBoton"
        botonMas.textContent = "+" 

      
        botonMenos.addEventListener('click', () => {
            console.log(product.id)
            if (product.cantidad > 0 ) {
                product.cantidad--
                todo.pop( miPedido.productos[product.id-1] )    
                PrecioTotal.pop(product.precio.id)
            }
            let totalp = PrecioTotal.reduce((sum, current) => sum + current, 0)
            PrecioTotal.reduce((sum, current) => sum + current, 0)

            botonCarrito.textContent ="Total $ " + totalp + " Cantidad: " + (todo.length)
            botonTotal.textContent = "Total $ " + totalp
            pCantidad.textContent = product.cantidad
    
        })

        botonMas.addEventListener('click',()=> {
        product.cantidad ++
        
        pCantidad.textContent =  product.cantidad
        botonCarrito.textContent =" Cantidad: " + (todo.length+1) 
 
        todo.push( miPedido.productos[product.id-1] )    
        PrecioTotal.push(product.precio)
        let totalp = PrecioTotal.reduce((sum, current) => sum + current, 0)
        PrecioTotal.reduce((sum, current) => sum + current, 0)
        botonTotal.textContent = "$ " + totalp  
        botonCarrito.textContent ="Total $ " + totalp +" Cantidad: " + (todo.length)
       
        
        return todo + PrecioTotal
        
    
        })
    
        lista.appendChild( cardProducto)
        cardProducto.appendChild(imagenProducto)
        cardProducto.appendChild(nombreProducto)
        cardProducto.appendChild(precioProducto)
        cardProducto.appendChild(idNum)
        cardProducto.appendChild(botonMas)
        cardProducto.appendChild(botonMenos)
        cardProducto.appendChild(pCantidad)
        
    
    })
}




    





// function elimminarProducto() {
//     const lista = document.querySelector(".card");
//     const posicionProducto = prompt("ingrese nro de producto a eliminar");
//     $(".btnIput").prepend('<input id="btnInput"></input>');
//     const div = document.querySelector(`.formato-card:nth-child(${posicionProducto})`)
//     lista.removeChild(div);
//     miPedido.productos.splice(posicionProducto -1, 1)
//     console.log(miPedido);
//     localStorage.setItem(PEDIDOS, JSON.stringify(miPedido))    
// }
function calcularTotal(){}


productohtml()

////////////////////////////

