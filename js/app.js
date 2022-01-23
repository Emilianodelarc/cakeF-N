const contenedorProductos = document.getElementById('contenedor-productos')
const buscar = document.getElementById('buscar')
const inpSearch = document.getElementById('search')

buscar.addEventListener('click', (e)=>{
  e.preventDefault()
  let palabra = inpSearch.value.toLowerCase()
  let buscado = stock.filter(buscado => buscado.nombre.toLowerCase().includes(palabra))
  console.log(buscado);
  mostrar(buscado)
})


function mostrar(array){
  contenedorProductos.innerHTML = ''
    array.forEach(item => {
        let div = document.createElement('div')
        div.classList.add('col')
        div.innerHTML += `
            
        
        <div class="card border-secondary mb-3">
          <img src="img/${item.imagen}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${item.nombre}</h5>
            <p class="card-text">${item.descripcion}</p>
          </div>
          <button class="btn btn-secondary">Encargar</button>
        </div>
      </div>
        

        `
        contenedorProductos.appendChild(div)
    });
}