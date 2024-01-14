import { signInWithGoogle } from "../firebase.js";
document
  .getElementById("signInWithGoogle")
  .addEventListener("click", async () => {
    try {
      let result = await signInWithGoogle();
      let users = JSON.parse(localStorage.getItem("users") || "[]");
      let checkUser = users.find((user) => user.email == result.user.email);
      if (checkUser) {
        // login
        let user = users.find((item) => item.email == result.user.email);
        let token = createToken(user);
        localStorage.setItem("token", token);
        window.location.href = "/";
      } else {
        // register + login
        let newUser = {
          id: Math.ceil(Date.now() * Math.random()),
          userName: Math.ceil(Date.now() * Math.random()),
          email: result.user.email,
          password: hash(Math.ceil(Date.now() * Math.random())),
          avatar: result.user.photoURL,
          cart: [],
        };
        localStorage.setItem("users", JSON.stringify([...users, newUser]));
        let token = createToken(newUser);
        localStorage.setItem("token", token);
        window.location.href = "/";
      }
    } catch (err) {
      console.log("err", err);
    }
  });

export function signup(e) {
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
    cart: [],
  };

  users = [...users, user];
  var json = JSON.stringify(users);
  localStorage.setItem("users", json);
  alert("Đăng kí thành công ");
  window.location.href = "http://127.0.0.1:5501/authen/login.html";
}
const sigupform = document.getElementById("signupform");
if (sigupform) {
  sigupform.addEventListener("submit", (event) => signup(event));
}
// TẠO 1 FUNCTION ĐỂ SO SÁNH LOCAR Ở SIGN UP VÀ LOGIN
export function login(event) {
  event.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const users = JSON.parse(localStorage.getItem("users"));
  const matchedUser = users.find((user) => user.username == username);

  //Khong tim thay user co cung usernam trong csdl
  if (!matchedUser) {
    alert("Username không tồn tại");
    return;
  }
  //Nếu có tồn tại thì sẽ kiểm tra password có trùng không
  if (password == matchedUser.password) {
    alert("Đăng nhập thành công");
    let token = createToken(matchedUser);
    // lưu vô csdl rằng đã đăng nhập
    localStorage.setItem("currentUser", token);
    location.assign("../index.html");
  } else {
    alert("mật khẩu không đúng");
  }
}
const loginForm = document.getElementById("login-form");
if (loginForm) {
  loginForm.addEventListener("submit", (event) => login(event));
}
