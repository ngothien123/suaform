document
  .getElementById("root")
  .insertAdjacentHTML("beforebegin", renderHeader());
document.getElementById("root").insertAdjacentHTML("afterend", renderFooter());
countCart();

let products = [
  {
    id: 1,
    title: "Bananas",
    img: "foodmart/img/thumb-bananas.png",
    price: "10.000",
    category: "juices",
  },
  {
    id: 2,
    title: "Grapes",
    img: "foodmart/img/pngtree-bunch-of-green-grapes-isolated-on-white-background-clipping-path-png-image_11371872.png",
    price: "9.000",
    category: "fruits",
  },
  {
    id: 3,
    title: "Avocado",
    img: "foodmart/img/thumb-avocado.png",
    price: "13.000",
    category: "fruits",
  },
  {
    id: 4,
    title: "Biscuits",
    img: "foodmart/img/thumb-biscuits.png",
    price: "17.000",
    category: "other",
  },
  {
    id: 5,
    title: "Cucumber",
    img: "foodmart/img/thumb-cucumber.png",
    price: "15.000",
    category: "fruits",
  },
  {
    id: 6,
    title: "Raspberries",
    img: "foodmart/img/thumb-raspberries.png",
    price: "12.000",
    category: "fruits",
  },
  {
    id: 7,
    title: "Tomatoes",
    img: "foodmart/img/thumb-tomatoes.png",
    price: "19.000",
    category: "fruits",
  },
  {
    id: 8,
    title: "Sunstar",
    img: "foodmart/img/thumb-tomatoketchup.png",
    price: "21.000",
    category: "other",
  },
  {
    id: 9,
    title: "Bananas",
    img: "foodmart/img/thumb-bananas.png",
    price: "20.000",
    category: "fruits",
  },
  {
    id: 10,
    title: "Sunstar",
    img: "foodmart/img/thumb-avocado.png",
    price: "16.000",
    category: "fruits",
  },
];

if (!localStorage.getItem("products"))
  localStorage.setItem("products", JSON.stringify(products));

function renderProducts(array) {
  const containerEl = document.querySelector(".grid-container");
  let productHTML = ``;
  array.forEach((product) => {
    productHTML += ` <div class="grid-item ${product.category}">
      
          <img  src="${product.img}" alt="#">
          <div><p>${product.title}</p></div>
          <div class="price"><span>${product.price}</span><sup>đ</sup></div>
          <div class="rating">⭐⭐⭐⭐</div>
          <div class="quantity">
            <span></span>
            <button  class="quantity-button" onclick="addToCart('${product.id}','${product.title}','${product.price}','${product.img}')">ADD CART</button>
          </div>
          <div class="product">
      </div>
        </div>`;
  });
  containerEl.innerHTML = productHTML;
}
function filterProducts(category) {
  const items = document.querySelectorAll(".grid-item");
  items.forEach((item) => {
    const categories = item.className.split(" ");
    if (categories.includes(category) || category === "all") {
      item.classList.remove("hidden");
    } else {
      item.classList.add("hidden");
    }
  });
  // (Tùy chọn) Tránh việc hiển thị tất cả các items ngay lập tức khi chuyển đổi giữa các danh mục
  setTimeout(() => {
    items.forEach((item) => {
      if (item.classList.contains("hidden")) {
        item.style.display = "none";
      } else {
        item.style.display = "block";
      }
    });
  }, 100); // Đặt giá trị thời gian delay phù hợp
}

// Hiển thị sản phẩm ban đầu
renderProducts(JSON.parse(localStorage.getItem("products") || "[]"));

// function confirmOrder() {
//   const tokenData = decodeToken(localStorage.getItem("currentUser"));
//   const users = JSON.parse(localStorage.getItem("users"));
//   const user = users.find(
//     (user) => user.username == decodedCurrentUser.data.username
//   );
//   // Tìm bảng giỏ hàng và bảng xác nhận
//   const cartTable = document.querySelector("tbody");
//   const confirmationTable = document.querySelector("#confirmationTable");
//   const overlay = document.querySelector(".overlay");
//   // Tạo chuỗi HTML cho bảng xác nhận
//   let confirmationHTML = `
//     <tr>
//       <th>Sản phẩm</th>
//       <th>Giá</th>
//       <th>Số lượng</th>
//       <th>Tổng tiền</th>
//     </tr>
//   `;
//   // Tính tổng tiền trong giỏ hàng
//   let totalAmount = 0;
//   // Lặp qua mỗi sản phẩm trong giỏ hàng
//   userCSDL.cart.forEach((product) => {
//     const totalPrice = product.price * product.quantity;
//     totalAmount += totalPrice;
//     // Thêm thông tin sản phẩm vào bảng xác nhận
//     confirmationHTML += `
//       <tr>
//         <td>
//           <h3>${product.title}</h3>
//         </td>
//         <td>${product.price}<sup>đ</sup></td>
//         <td>${product.quantity}</td>
//         <td>${totalPrice}<sup>đ</sup></td>
//       </tr>
//       <button onclick="closeConfirmCart()">Đóng</button>
//     `;
//   });

//   // Hiển thị tổng tiền
//   confirmationHTML += `
//     <tr>
//       <td colspan="3"><strong>Tổng cộng</strong></td>
//       <td><strong>${totalAmount}<sup>đ</sup></strong></td>
//     </tr>
//   `;
//   renderTotal(totalAmount);
//   userCSDL.cart = [];
//   localStorage.setItem("users", JSON.stringify(usersCSDL));
//   // Hiển thị bảng xác nhận và ẩn giỏ hàng
//   confirmationTable.innerHTML = confirmationHTML;
//   cartTable.style.display = "none";
//   confirmationTable.style.display = "block";
//   overlay.style.display = "block";
// }

// function closeConfirmCart() {
//   // Ẩn bảng xác nhận và overlay
//   const confirmationTable = document.querySelector("#confirmationTable");
//   const overlay = document.querySelector(".overlay");
//   const cartTable = document.querySelector("tbody");

//   confirmationTable.style.display = "none";
//   overlay.style.display = "none";
//   cartTable.style.display = "block"; // Hiển thị lại giỏ hàng
//   // Cập nhật lại giỏ hàng và tổng tiền
//   renderCart();
//   // Lấy thông tin user và cập nhật lại tổng tiền
//   const currentUser = localStorage.getItem("currentUser");
//   const decodedCurrentUser = decodeToken(currentUser);
//   const usersCSDL = JSON.parse(localStorage.getItem("users"));
//   const userCSDL = usersCSDL.find(
//     (user) => user.username == decodedCurrentUser.data.username
//   );
//   renderTotal(userCSDL.total);
// }

// Thêm sự kiện click cho nút đóng trong phần xác nhận giỏ hàng
const closeButton = document.getElementById("closeButton"); // Thêm ID cho nút đóng trong HTML
if (closeButton) {
  closeButton.addEventListener("click", closeConfirmCart);
}

function handleSearch() {
  const searchInput = document.getElementById("searchInput");
  const searchTerm = searchInput.value.toLowerCase();

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().startsWith(searchTerm)
  );
  renderProducts(filteredProducts);
}
handleSearch();
checkLogin();
/* hiển thị cart */
function showCart() {
  const cartContainer = document.getElementById("cart-container");
  cartContainer.style.display = "block";
}
function hideCart() {
  const cartContainer = document.getElementById("cart-container");
  cartContainer.style.display = "none";
}
function renderTotal() {
  if (!localStorage.getItem("currentUser")) return;
  let data = decodeToken(localStorage.getItem("currentUser"));
  if (!data) return;
  let users = JSON.parse(localStorage.getItem("users"));
  let user = users.find((item) => item.id == data.id);
  document.getElementById("total").innerText = user.cart.reduce(
    (result, cur) => {
      return (result += cur.quantity * cur.price);
    },
    0
  );
}
function countCart() {
  if (!localStorage.getItem("currentUser")) return;
  /*
    - Lấy dữ liệu người đang đăng nhập dựa vào token.
    - Căn cứ vào id của bước trên tìm ra người dùng đó trong danh sách users. 
    - Trích cart từ trong bước trên để tính số lượng.
    - Cuối cùng in số lượng ra web.
    - Func này sẽ gọi 2 lần:
    + Khi vừa vào trang.
    + Sau mỗi lần mua.
    + ... 
  */
  let data = decodeToken(localStorage.getItem("currentUser"));
  if (!data) return;
  let users = JSON.parse(localStorage.getItem("users"));
  let user = users.find((item) => item.id == data.id);
  document.getElementById("countCart").innerText = user.cart.reduce(
    (result, cur) => {
      return (result += cur.quantity);
    },
    0
  );

  renderCart();
  renderTotal();
}
function toggleCart() {
  const cartContainer = document.getElementById("cart-container");
  if (
    cartContainer.style.display === "none" ||
    cartContainer.style.display === ""
  ) {
    showCart();
    const closeButton = document.createElement("button");
    closeButton.textContent = "Thoát";
    closeButton.onclick = hideCart;
  } else {
    hideCart();
  }
}
function renderCart() {
  if (!localStorage.getItem("currentUser")) return;
  const dataToken = decodeToken(localStorage.getItem("currentUser"));
  const users = JSON.parse(localStorage.getItem("users"));

  const user = users.find((user) => user.id === dataToken.data.id);
  const cartTable = document.querySelector("tbody");
  let cartproduct = ``;

  user.cart.forEach((product, index) => {
    cartproduct += `
      <tr>
        <td><h3>${product.title}</h3> <img src="${product.img}" alt="#" /></td>
        <td><span>${product.price}</span><sup>đ</sup></td>
        <td>
          <span>${product.quantity}</span>
        </td>
        <td>
          <button onclick="removeProductInCart('${product.productId}')" type="button">Xoá</button>
      
        </td>
      </tr>
    `;
  });
  cartTable.innerHTML = cartproduct;
}
/* add to cart */
function addToCart(productId, title, price, img) {
  if (!checkLogin()) {
    alert("Bạn cần đăng nhập");
    return;
  }
  const tokenData = decodeToken(localStorage.getItem("currentUser"));
  let users = JSON.parse(localStorage.getItem("users"));
  const user = users.find((user) => user.id == tokenData.data.id);

  // Thêm sản phẩm vào giỏ hàng của user
  const checkProduct = user.cart.find(
    (product) => product.productId === productId
  );

  if (checkProduct) {
    checkProduct.quantity += 1;
  } else {
    user.cart.push({ productId, price, title, quantity: 1, img });
  }

  localStorage.setItem("users", JSON.stringify(users));
  countCart();
}

/* remove item in cart */
function removeProductInCart(productId) {
  let data = decodeToken(localStorage.getItem("currentUser"));
  if (!data) return;
  let users = JSON.parse(localStorage.getItem("users"));
  let user = users.find((item) => item.id == data.id);

  user.cart = user.cart.filter((item) => item.productId != productId);
  localStorage.setItem("users", JSON.stringify(users));

  countCart();
  renderTotal();
  renderCart();
}
