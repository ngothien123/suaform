// TẠO TOKEN
function createToken(data) {
  let dataJasonStr = JSON.stringify({ data, privateKey: "thien" });
  let hashStr = "";
  for (let i in dataJasonStr) {
    hashStr += dataJasonStr[i].charCodeAt(0) * 2 + "|";
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

//Kiểm tra người dùng hiện tại có đăng nhập không
function checkLogin() {
  const headerNotLogin = document.querySelector("#header-notlogin");
  const headerLogin = document.querySelector("#header-login");
  if (!localStorage.getItem("currentUser")) {
    headerNotLogin.style.display = "flex";
    headerLogin.style.display = "none";
    return;
  }
  const currentUser = decodeToken(localStorage.getItem("currentUser"));
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

function logout() {
  localStorage.removeItem("currentUser");
  window.location.reload();
}

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
                   <div class="cart"></div>
                  <li>
                  <i id="cartNo"  class="fa-sharp fa-solid fa-cart-shopping" onclick="toggleCart()"></i>
                  <span id="countCart">0</span>
                  </li>
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
