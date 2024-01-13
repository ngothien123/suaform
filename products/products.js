// HEARDER
function renderHeader(data = null) {
  return `
   <header>
        <div class="header">
           <div class="header-item">
             <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="#"><img src="foodmart/img/logo.png" alt=""></a>
                </div>    
            </div>
            <div  class="header-item">
                <ul class="header-icon" id="header-notlogin" style=" list-style-type: none;">
                 
                  <a href="./authen/login.html">Sign In</a>
                  <a href="./authen/signup.html">Sign Up</a>
                </ul>
                 <ul class="header-icon" id="header-login" style=" list-style-type: none">
                   <div class="cart">
     
     
    </div>
                  <li><i id="cartNo"  class="fa-sharp fa-solid fa-cart-shopping" onclick="toggleCart()"></i></li>
                   <ul class="cart-items"></ul>
                  <li><a href="#"> <i class="fa-solid fa-user"></i></a></li>
                  <li><a href="#"><i class="fa-solid fa-bars"></i></a></li>
                  <button onclick="logout()">Log Out</button>
                </ul>
            </div>
        </nav>
           </div>     
    </header>
  `;
}
//MAIN-IMAGE

// FOOTER
function renderFooter(data = null) {
  return `
   <footer class="text-center text-lg-start bg-body-tertiary text-muted">
        <!-- Section: Social media -->
        <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
            <!-- Left -->

            <!-- Right -->
            <div>
                <a href="" class="me-4 text-reset">
                    <i class="fab fa-facebook-f"></i>
                </a>
                <a href="" class="me-4 text-reset">
                    <i class="fab fa-twitter"></i>
                </a>
                <a href="" class="me-4 text-reset">
                    <i class="fab fa-google"></i>
                </a>
                <a href="" class="me-4 text-reset">
                    <i class="fab fa-instagram"></i>
                </a>
                <a href="" class="me-4 text-reset">
                    <i class="fab fa-linkedin"></i>
                </a>
                <a href="" class="me-4 text-reset">
                    <i class="fab fa-github"></i>
                </a>
            </div>
            <!-- Right -->
        </section>
        <!-- Section: Social media -->

        <!-- Section: Links  -->
        <section class="">
            <div class="container text-center text-md-start mt-5">
                <!-- Grid row -->
                <div class="row mt-3">
                    <!-- Grid column -->
                    <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                        <!-- Content -->
                        <h6 class="text-uppercase fw-bold mb-4">
                            <i class="fas fa-gem me-3"></i>Company name
                        </h6>
                        <p>
                            Here you can use rows and columns to organize your footer content. Lorem ipsum
                            dolor sit amet, consectetur adipisicing elit.
                        </p>
                    </div>
                    <!-- Grid column -->

                    <!-- Grid column -->
                    <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                        <!-- Links -->
                        <h6 class="text-uppercase fw-bold mb-4">
                            Products
                        </h6>
                        <p>
                            <a href="#!" class="text-reset">Angular</a>
                        </p>
                        <p>
                            <a href="#!" class="text-reset">React</a>
                        </p>
                        <p>
                            <a href="#!" class="text-reset">Vue</a>
                        </p>
                        <p>
                            <a href="#!" class="text-reset">Laravel</a>
                        </p>
                    </div>
                    <!-- Grid column -->

                    <!-- Grid column -->
                    <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                        <!-- Links -->
                        <h6 class="text-uppercase fw-bold mb-4">
                            Useful links
                        </h6>
                        <p>
                            <a href="#!" class="text-reset">Pricing</a>
                        </p>
                        <p>
                            <a href="#!" class="text-reset">Settings</a>
                        </p>
                        <p>
                            <a href="#!" class="text-reset">Orders</a>
                        </p>
                        <p>
                            <a href="#!" class="text-reset">Help</a>
                        </p>
                    </div>
                    <!-- Grid column -->

                    <!-- Grid column -->
                    <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                        <!-- Links -->
                        <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
                        <p><i class="fas fa-home me-3"></i> New York, NY 10012, US</p>
                        <p>
                            <i class="fas fa-envelope me-3"></i>
                            info@example.com
                        </p>
                        <p><i class="fas fa-phone me-3"></i> + 01 234 567 88</p>
                        <p><i class="fas fa-print me-3"></i> + 01 234 567 89</p>
                    </div>
                    <!-- Grid column -->
                </div>
                <!-- Grid row -->
            </div>
        </section>
        <!-- Section: Links  -->

        <!-- Copyright -->
        <div class="text-center p-4" style="background-color: rgba(0, 0, 0, 0.05);">
            © 2021 Copyright:
            <a class="text-reset fw-bold" href="https://mdbootstrap.com/">MDBootstrap.com</a>
        </div>
        <!-- Copyright -->
    </footer>
  `;
}
// TẠO TOKEN
function createToken(data) {
  let dataJsonStr = JSON.stringify({
    data,
    privateKey: "NTBPhuoc",
  });
  let hashStr = ``;
  for (let i in dataJsonStr) {
    hashStr += dataJsonStr[i].charCodeAt(0) * 2 + "|";
  }
  return hashStr;
}
function decodeToken(token) {
  let baseStr = ``;
  for (let i in token.split("|")) {
    if (token.split("|")[i] == "") break;
    baseStr += String.fromCharCode(token.split("|")[i] / 2);
  }
  try {
    return JSON.parse(baseStr);
  } catch (err) {
    return false;
  }
}

function hash(str) {
  str = `asasd**_${str}_32423asdsa`;
  let hashStr = "";
  for (let i in str) {
    hashStr += str[i].charCodeAt(0);
  }
  return hashStr * 2 + "yamieu";
}
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

function renderProducts(array) {
  const containerEl = document.querySelector(".grid-container");
  let productHTML = ``;
  array.forEach((product) => {
    productHTML += ` <div class="grid-item ${product.category}">
      
          <img  src="${product.img}" alt="#">
          <div><p>${product.title}</p></div>
          <div class="price"><span>${product.price}</span><sup>đ</sup></div>
          <div class="rating">⭐⭐⭐⭐</div>
          <button class="add-to-cart">FLY</button>
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
renderProducts(products);

function renderCart() {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const decodedCurrentUser = decodeToken(currentUser);
  const usersCSDL = JSON.parse(localStorage.getItem("users"));

  const userCSDL = usersCSDL.find(
    (user) => user.username === decodedCurrentUser.data.username
  );
  const cartTable = document.querySelector("tbody");
  let cartproduct = ``;

  userCSDL.cart.forEach((product, index) => {
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
function confirmOrder() {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const decodedCurrentUser = decodeToken(currentUser);
  const usersCSDL = JSON.parse(localStorage.getItem("users"));
  const userCSDL = usersCSDL.find(
    (user) => user.username == decodedCurrentUser.data.username
  );
  // Tìm bảng giỏ hàng và bảng xác nhận
  const cartTable = document.querySelector("tbody");
  const confirmationTable = document.querySelector("#confirmationTable");
  const overlay = document.querySelector(".overlay");
  // Tạo chuỗi HTML cho bảng xác nhận
  let confirmationHTML = `
    <tr>
      <th>Sản phẩm</th>
      <th>Giá</th>
      <th>Số lượng</th>
      <th>Tổng tiền</th>
    </tr> 
  `;
  // Tính tổng tiền trong giỏ hàng
  let totalAmount = 0;
  // Lặp qua mỗi sản phẩm trong giỏ hàng
  userCSDL.cart.forEach((product) => {
    const totalPrice = product.price * product.quantity;
    totalAmount += totalPrice;
    // Thêm thông tin sản phẩm vào bảng xác nhận
    confirmationHTML += `
      <tr>
        <td>
          <h3>${product.title}</h3>
        </td>
        <td>${product.price}<sup>đ</sup></td>
        <td>${product.quantity}</td>
        <td>${totalPrice}<sup>đ</sup></td>
      </tr>
      <button onclick="closeConfirmCart()">Đóng</button>
    `;
  });

  // Hiển thị tổng tiền
  confirmationHTML += `
    <tr>
      <td colspan="3"><strong>Tổng cộng</strong></td>
      <td><strong>${totalAmount}<sup>đ</sup></strong></td>
    </tr>
  `;
  renderTotal(totalAmount);
  userCSDL.cart = [];
  localStorage.setItem("users", JSON.stringify(usersCSDL));
  // Hiển thị bảng xác nhận và ẩn giỏ hàng
  confirmationTable.innerHTML = confirmationHTML;
  cartTable.style.display = "none";
  confirmationTable.style.display = "block";
  overlay.style.display = "block";
}

function closeConfirmCart() {
  // Ẩn bảng xác nhận và overlay
  const confirmationTable = document.querySelector("#confirmationTable");
  const overlay = document.querySelector(".overlay");
  const cartTable = document.querySelector("tbody");

  confirmationTable.style.display = "none";
  overlay.style.display = "none";
  cartTable.style.display = "block"; // Hiển thị lại giỏ hàng
  // Cập nhật lại giỏ hàng và tổng tiền
  renderCart();
  // Lấy thông tin user và cập nhật lại tổng tiền
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const decodedCurrentUser = decodeToken(currentUser);
  const usersCSDL = JSON.parse(localStorage.getItem("users"));
  const userCSDL = usersCSDL.find(
    (user) => user.username == decodedCurrentUser.data.username
  );
  renderTotal(userCSDL.total);
}

// Thêm sự kiện click cho nút đóng trong phần xác nhận giỏ hàng
const closeButton = document.getElementById("closeButton"); // Thêm ID cho nút đóng trong HTML
if (closeButton) {
  closeButton.addEventListener("click", closeConfirmCart);
}

// SEARCH PRODUCT
function handleSearch() {
  const searchInput = document.getElementById("searchInput");
  const searchTerm = searchInput.value.toLowerCase();

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().startsWith(searchTerm)
  );

  renderProducts(filteredProducts);
}

// Gọi hàm handleSearch lúc đầu để hiển thị tất cả sản phẩm
handleSearch();
// REMOVE PRODUCT IN CART
function removeProductInCart(productId) {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const decodedCurrentUser = decodeToken(currentUser);
  const usersCSDL = JSON.parse(localStorage.getItem("users"));

  const userCSDL = usersCSDL.find(
    (user) => user.username === decodedCurrentUser.data.username
  );

  const removedProduct = userCSDL.cart.find(
    (product) => product.productId.toString() === productId.toString()
  );

  if (removedProduct) {
    userCSDL.total -= parseInt(removedProduct.price) * removedProduct.quantity;

    const index = userCSDL.cart.findIndex(
      (product) => product.productId.toString() === productId.toString()
    );

    if (index !== -1) {
      userCSDL.cart.splice(index, 1);
      localStorage.setItem("users", JSON.stringify(usersCSDL));
      alert("Đã xoá sản phẩm");
      renderCart();
      renderTotal(userCSDL.total);
    } else {
      alert("Không tìm thấy sản phẩm trong giỏ hàng");
    }
  } else {
    alert("Không tìm thấy sản phẩm trong giỏ hàng");
  }
}
function showCart() {
  const cartContainer = document.getElementById("cart-container");
  cartContainer.style.display = "block";
}
function hideCart() {
  const cartContainer = document.getElementById("cart-container");
  cartContainer.style.display = "none";
}
function addToCart(productId, title, price, img) {
  if (!checkLogin()) {
    alert("Bạn cần đăng nhập");
    return;
  }
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const decodedCurrentUser = decodeToken(currentUser);
  let usersCSDL = JSON.parse(localStorage.getItem("users"));
  // Kiểm tra nếu usersCSDL không phải là mảng hoặc không tồn tại
  if (!Array.isArray(usersCSDL) || !usersCSDL) {
    console.error("Invalid usersCSDL");
    usersCSDL = [];
  }
  const userIndex = usersCSDL.findIndex(
    (user) => user.username == decodedCurrentUser.data.username
  );

  // Nếu không tìm thấy user, thêm mới một user
  if (userIndex === -1) {
    const newUser = {
      username: decodedCurrentUser.data.username,
      cart: [],
      total: 0,
    };
    usersCSDL.push(newUser);
  }

  const user = usersCSDL.find(
    (user) => user.username == decodedCurrentUser.data.username
  );

  // Thêm sản phẩm vào giỏ hàng của user
  const checkProduct = user.cart.find(
    (product) => product.productId === productId
  );

  if (checkProduct) {
    checkProduct.quantity += 1;
  } else {
    user.cart.push({ productId, price, title, quantity: 1, img });
  }

  user.total += parseInt(price);
  localStorage.setItem("users", JSON.stringify(usersCSDL));
  alert("Thêm giỏ hàng thành công");
  renderCart();
  renderTotal(user.total);
}
function renderTotal(total) {
  const totalElement = document.getElementById("total");
  if (totalElement) {
    totalElement.textContent = ` ${total}.000 `;
  }
}
// Thêm sự kiện click cho icon giỏ hàng
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
document
  .getElementById("root")
  .insertAdjacentHTML("beforebegin", renderHeader());
document.getElementById("root").insertAdjacentHTML("afterend", renderFooter());
checkLogin();

// ------------------
document.querySelectorAll(".add-to-cart").forEach((button) => {
  button.addEventListener("click", (event) => {
    // Create a copy of the item image
    let item = event.target.parentElement;
    let image = item.querySelector("img");
    let copy = image.cloneNode(true);
    copy.style.position = "fixed";
    copy.style.top = `${image.getBoundingClientRect().top}px`;
    copy.style.left = `${image.getBoundingClientRect().left}px`;
    copy.style.transition = "all 0.5s ease-in-out";
    document.body.appendChild(copy);

    // Get the position of the cart
    let cart = document.querySelector(".cart");
    let cartRect = cart.getBoundingClientRect();

    // Animate the copy to the cart
    copy.style.transform = `translate(${
      cartRect.left - image.getBoundingClientRect().left
    }px, ${cartRect.top - image.getBoundingClientRect().top}px) scale(0.1)`;

    // After the animation, remove the copy and increase the cart count
    copy.addEventListener("transitionend", () => {
      document.body.removeChild(copy);
      let count = cart.querySelector(".cart-count");
      if (!count) {
        count = document.createElement("span");
        count.className = "cart-count";
        count.textContent = "0";
        cart.appendChild(count);
      }
      count.textContent = parseInt(count.textContent) + 1;
    });
  });
});
