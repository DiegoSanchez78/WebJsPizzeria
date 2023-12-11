// document.write("<"+"script type='text/javascript' src='dom.js'><"+"/script>")
// $('#btnvaciar').hide();

// PrecioTotal = []

// $("#btnCarrito").click(() => {
//     if(todo != 0){
       
//         $('#total').show();
//         $('h2').show();
//         $('div').show();
//         let listado = document.querySelector("#producto")
//         let prodUnidadDiv = document.createElement('div');
//         let prodUnidad = document.createElement('h2');
//         let botonAgregar = document.createElement('button');
        
//         prodUnidad.textContent =  "$ " + productosUnidad  
//         botonAgregar.textContent = "Eliminar"
//         listado.appendChild(prodUnidadDiv)
//         prodUnidadDiv.appendChild(prodUnidad)
//         $("#producto").html(`<li class="list"> ${productosUnidad }  </li>  `)
        
        
        
        // botonAgregar.addEventListener('click',()=> {
        //     boton.textContent = "Agregaste " +  ++ product.cantidad 
        //     boton.className ="estiloBotonClickeado"
        //     productosUnidad( product.precio  )  
        
        //     return todo + productosUnidad
        // })
          //   })

          //   const existe = todo.some(producto =>producto.id === todo.id)

          //   if(existe)
          //   {  
          //     const prodRepetido = todo.map(product => {
          //       if(producto.id === todo.id){
          //       product.cantidad++;
          //       return producto;
          //     }else{
          //       return producto
          //     }
          //   })
          //   todo = [...prodRepetido]
          
          // }else{
          //   todo = [...miCarrito, todo.id]
          // }



        
        // function Agregar(producto)
        // {
        //   let repetido=false;
      
        //   for(let i=0; i< prodUnidad.lenght; i++)
        //   {
        //     if(miCarrito[i].id==producto.id)
        //     {
        //       miCarrito[i].cantidad++
        //       repetido=true;
        //     }
        //   }
        //   if(repetido == false)
        //   {
        //     miCarrito.push(producto);
        //   }
        // }
//         let totalp = PrecioTotal.reduce((sum, current) => sum + current, 0)
//         console.log()
   
//        $("#total").html(`<p> total a abonar: $  ${ totalp} </p>`)
//        $('#btnvaciar').show();
//        $('.btn2').hide();

//        function Agregar(producto)
//   {
  
    

//   }
      
//        $("#btnvaciar").click(() => {
        
//         let totalp = todo.splice(0,todo.length)
//         let totlalnp = productosUnidad.splice(0,productosUnidad.length)

        
      
        
//         $("#producto").html("")
//         $("#total").html(`<p> vaciando carrito ...</p>`)
//         $('#btnvaciar').hide();
//         setTimeout(function() { 
//             $('#total').fadeOut();
//         }, 1000);
//         $('#btnCarrito').show();
       
//    Agregar()
   
// })}})



// $(".btn2").hide()
// $(".btn1").show()

// $(".btn").prepend('<button id="btn1">Listado de Productos</button>');
// $("#btn1").click(() => {
// console.log("funciona btn")
// $.getJSON(URLJSON, function (respuesta, estado){
// if(estado === "success"){
   
//     let misDatos = respuesta;
//     for(const dato of misDatos){
    
//         $(".btn").prepend(`<div>
//                 <h3>${dato.producto}  = $   ${dato.precio}</h3>
//                 </div>`)
       

//                 $(".btn2").show()
//                 $("#btn1").hide()
//               if(btnCarrito){
              

//               }
//     }
// }           
// })

// });

// function borrarItemCarrito(evento) {
//     // Obtenemos el producto ID que hay en el boton pulsado
//     const id = evento.target.dataset.item;
//     // Borramos todos los productos
//     carrito = carrito.filter((carritoId) => {
//         return carritoId !== id;
//     });
//     // volvemos a renderizar
//     renderizarCarrito();
// }


// $(".btn2").prepend('<button id="btn2">salir de listado de poroductos</button>');
// $("#btn2").click(() => {
// $(".btn2").hide()
// $("div h3").hide()
// $(".btn").prepend('<button id="btn1">Listado de Productos</button>');
// $("#btn1").click(() => {
//     console.log("funciona btn")
//     $.getJSON(URLJSON, function (respuesta, estado){
//     if(estado === "success"){
       
//         let misDatos = respuesta;
//         for(const dato of misDatos){
        
//             $(".btn").prepend(`<div>
//                     <h3>${dato.producto}  = $   ${dato.precio}</h3>
//                     </div>`)
           

//                     $(".btn2").show()
//                     $("#btn1").hide()
//         }
//     }           
//     })
       
//     }

// )

// });