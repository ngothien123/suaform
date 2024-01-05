let products = [
  {
    id: 1,
    title: "Sunstar Fresh Melon Juice",
    img: "foodmart/img/thumb-bananas.png",
  },
  { id: 2, title: "Sunstar ", img: "foodmart/img/thumb-bananas.png" },
  { id: 3, title: "Sunstar ", img: "foodmart/img/thumb-avocado.png" },
  { id: 4, title: "Sunstar ", img: "foodmart/img/thumb-biscuits.png" },
  { id: 5, title: "Sunstar ", img: "foodmart/img/thumb-cucumber.png" },
  { id: 6, title: "Sunstar ", img: "foodmart/img/thumb-raspberries.png" },
  { id: 7, title: "Sunstar ", img: "foodmart/img/thumb-tomatoes.png" },
  { id: 8, title: "Sunstar ", img: "foodmart/img/thumb-tomatoketchup.png" },
  { id: 9, title: "Sunstar ", img: "foodmart/img/thumb-bananas.png" },
  { id: 10, title: "Sunstar ", img: "foodmart/img/thumb-avocado.png" },
];
function renderProducts(array) {
  const containerEl = document.querySelector(".grid-container");
  let productHTML = ``;
  array.forEach((product) => {
    productHTML += ` <div class="grid-item">
      <img src="${product.img}" alt="Product 1">
      <div><p>${product.title}</p></div>
      <div class="price">$100</div>
      <div class="rating">⭐⭐⭐⭐</div>
      <div class="quantity">
          <button class="quantity-button">-</button>
          <span>1</span>
          <button class="quantity-button" onclick=addProduct("${product.id}")>+</button>
        </div>
    </div>`;
  });
  containerEl.innerHTML = productHTML;
}
renderProducts(products);
