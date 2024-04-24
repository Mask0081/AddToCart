const cont = document.querySelector('.container');

let listOfItem = [
    { Name: "Mushroom Chicken Delight", type: "Burger", Price: 390 }, 
    { Name: "Mushroom Beef Delight", type: "Burger", Price: 410 }, 
    { Name: "Mushroom Mutton Delight", type: "Burger", Price: 460 }
];

listOfItem.forEach(item => {
    let newDiv = document.createElement('div');
    newDiv.style.backgroundColor = 'rgb(234, 250, 115)'
    newDiv.style.width = '250px'
    cont.style.display = 'grid'
    cont.style.gridTemplateColumns = '1fr 1fr 1fr'
    newDiv.innerHTML = `<h1 class="text-red-600 text-xl">${item.Name}</h1>
                        <p>Type: ${item.type}</p>
                        <p>Price: ${item.Price}</p>`;
    cont.appendChild(newDiv);
});
