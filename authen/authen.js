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
// TẠO RA 1 HÀM ĐỂ SUBMIT TRONG FORM
function signup(e) {
  console.log("da vao");
  e.preventDefault();
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmpassword = document.getElementById("confirmpassword").value;
  //   TẠO 1 MẢNG ĐỂ CÓ THỂ LƯU NHIỀU USER VÀO LOCAL
  let users = JSON.parse(localStorage.getItem("users") || "[]");
  if (username != "") {
    if (username.length < 8) {
      alert("Tên đăng nhập phải có trên 8 kí tự !!");
      username.focus();
      return;
    }
  } else {
    alert("Nhập tên đăng nhập !!");
    username.focus();
    return;
  }
  if (password != "") {
    if (password.length < 8) {
      alert("Mật khẩu phải có trên 8 kí tự !!");
      password.focus();
      return;
    }
  } else {
    alert("Nhập mật khẩu đăng nhập");
    password.focus();
    return;
  }

  if (confirmpassword != "") {
    if (confirmpassword != password) {
      alert("Mật khẩu không trùng nhau !!");
      return;
    }
  } else {
    alert("Nhập lại mật khẩu");
    confirmpassword.focus();
    return;
  }
  const user = {
    username: username,
    email: email,
    password,
  };
  users = [...users, user];
  var json = JSON.stringify(users);
  localStorage.setItem("users", json);
  alert("Đăng kí thành công ");
  window.location.href = "http://127.0.0.1:5501/authen/login.html";
}
// TẠO 1 FUNCTION ĐỂ SO SÁNH LOCAR Ở SIGN UP VÀ LOGIN
function login(event) {
  event.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const users = JSON.parse(localStorage.getItem("users"));
  const matchedUser = users.find((user) => user.username == username);
  console.log(matchedUser);

  //Khong tim thay user co cung usernam trong csdl
  if (!matchedUser) {
    alert("Username không tồn tại");
    return;
  }
  //Nếu có tồn tại thì sẽ kiểm tra password có trùng không
  if (password == matchedUser.password) {
    alert("Đăng nhập thành công");
    // lưu vô csdl rằng đã đăng nhập
    localStorage.setItem("currentUser", JSON.stringify(matchedUser));

    location.assign("http://127.0.0.1:5501/index.html");
  } else {
    alert("mật khẩu không đúng");
  }
}
//Kiểm tra người dùng hiện tại có đăng nhập không
function checkLogin() {
  const headerNotLogin = document.querySelector("#header-notlogin");
  const headerLogin = document.querySelector("#header-login");
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  if (currentUser) {
    headerNotLogin.style.display = "none";
    headerLogin.style.display = "flex";
    return true;
  } else {
    headerNotLogin.style.display = "flex";
    headerLogin.style.display = "none";
    return false;
  }
}
checkLogin();
function logout() {
  localStorage.removeItem("currentUser");
  window.location.reload();
}
