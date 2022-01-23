let stock= []

fetch('stock.json')
.then(res=> res.json())
.then(data=> {
    data.forEach(cake => {
        stock.push(cake)
    });
    mostrar(stock)})