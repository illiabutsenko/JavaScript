let container = document.getElementById("products");
let xhr = new XMLHttpRequest();
xhr.open("GET", "https://dummyjson.com/products");
xhr.send();

xhr.onload = function () {
  if (xhr.status === 200) {
    const data = JSON.parse(xhr.responseText);
    console.log(data);
    const products = data.products;
    for (i = 0; i < products.length; i++) {
      let product = products[i];
      let element = document.createElement("div");
      element.className = "product";
      element.innerHTML = `
        <h3>${product.title}</h3>
        <p>${product.price}</p>
        <p>${product.rating}</p>
        <img src="${product.images[0]}"></p>
        `;

      container.appendChild(element);
    }
  } else {
    console.log("Error fetching data");
  }
};
