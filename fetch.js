
fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((data) => {
        let row = '';
        data.forEach(product => {
            row += `
                <tr>
                    <td>${product.id}</td>
                    <td>${product.title}</td>
                    <td>${product.price}</td>
                    <td>${product.description}</td>
                    <td>${product.category}</td>
                    <td><img src="${product.image}"title="${product.image}alt="${product.image}" 
                    style="width:50"style="height=50"></td>
                </tr>
            `;
        });
        document.getElementById("productTable").innerHTML = row;
    })
    .catch((error) => {
        console.error("Error fetching products:", error);
    });
