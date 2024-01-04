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
// HIỂN THỊ CÁC PHẦN TỬ PRODUCT RA GIAO DIỆN
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
function checkform() {
  const username = document.getElementById("username");
  const password = document.getElementById("password");
  const confirmpassword = document.getElementById("confirmpassword");

  if (username.value != "") {
    if (username.value.length < 8) {
      alert("Tên đăng nhập phải có trên 8 kí tự !!");
      username.focus();
      return;
    }
  } else {
    alert("Nhập tên đăng nhập !!");
    username.focus();
    return;
  }

  if (password.value != "") {
    if (password.value.length < 8) {
      alert("Mật khẩu phải có trên 8 kí tự !!");
      password.focus();
      return;
    }
  } else {
    alert("Nhập mật khẩu đăng nhập");
    password.focus();
    return;
  }

  if (confirmpassword.value != "") {
    if (confirmpassword.value != password.value) {
      alert("Mật khẩu không trùng nhau !!");
      return;
    }
  } else {
    alert("Nhập lại mật khẩu");
    confirmpassword.focus();
    return;
  }
}
function signup(e) {
  e.preventDefault();
  checkform();
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;

  const password = document.getElementById("password").value;

  const confirmpassword = document.getElementById("confirmpassword").value;
  const user = {
    username: username,
    email: email,
    password,
  };
  var json = JSON.stringify(user);
  localStorage.setItem(username, json);
  window.location.href = "lognin.html";
  alert("Đăng kí thành công ");
}

// TẠO 1 FUNCTION ĐỂ SO SÁNH LOCAR Ở SIGN UP VÀ LOGIN
function login(event) {
  event.preventDefault();
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const user = localStorage.getItem(username);
  var data = JSON.parse(user);
  if (user == null) {
    alert("Tên và email không tồn tại");
  } else if (
    username == data.username &&
    email == data.email &&
    password == data.password
  ) {
    alert("Đăng nhập thành công");
    window.location.href = "../index.html";
  } else {
    alert("Đăng nhập thất bại");
  }
}
