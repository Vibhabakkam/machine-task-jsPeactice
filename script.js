function register(event) {
  event.preventDefault();

  var T_userName = document.getElementById("userName").value;
  var T_userEmail = document.getElementById("userEmail").value;
  var T_userpassword = document.getElementById("userPassword").value;

  var T_userData = {
    userName: T_userName,
    userEmail: T_userEmail,
    userpassword: T_userpassword,
  };

  var T_userStorage = JSON.parse(localStorage.getItem("T_userData")) || [];

  var flag = false;

  for (var i = 0; i < T_userStorage.lenght; i++) {
    if (T_userStorage[i].userEmail === T_userEmail) {
      flag = true;
    }
  }

  if (flag) {
    alert("email alrady present");
  } else {
    T_userStorage.push(T_userData);
    localStorage.setItem("T_userData", JSON.stringify(T_userStorage));
    document.getElementById("userName").value = "";
    document.getElementById("userEmail").value = "";
    document.getElementById("userPassword").value = "";
    alert("register sucessfull");
    window.location.href= "./login2.html";
  }
}

function login(event) {
  event.preventDefault();
  var T_userStorage = JSON.parse(localStorage.getItem("T_userData"));
  var L_userEmail = document.getElementById("L_userEmail").value;
  var L_userPassword = document.getElementById("L_userPassword").value;
  var T_currentUser;
  var flag = false;
  for (var i = 0; i < T_userStorage.length; i++) {
    if (
      T_userStorage[i].userEmail === L_userEmail &&
      T_userStorage[i].userpassword === L_userPassword
    ) {
      flag = true;
      T_currentUser = T_userStorage[i];
    }
  }
  if (flag) {
    localStorage.setItem("T_currentUser", JSON.stringify(T_currentUser));
    document.getElementById("L_userEmail").value = "";
    document.getElementById("L_userPassword").value = "";
    alert("login sucessfull");
    window.location.href= "./home2.html";
  } else {
    alert("enter valid inputs");
  }
}

function logout(event) {
  event.preventDefault();
//   var L_currentUser = JSON.parse(localStorage.getItem("T_currentUser"));
  localStorage.removeItem("T_currentUser");
  alert("logout sucessfull");
  window.location.href= "./login2.html";
}

function AddToCart(event){
   event.preventDefault();
    var T_productName = document.getElementById("productName").value;
    var T_productImage = document.getElementById("productImage").value;
    var T_productDiscription = document.getElementById("productDiscription").value;
    var T_productPrice = document.getElementById("productPrice").value;

    var ProductData = {productName: T_productName, productImage:T_productImage, productDiscription:T_productDiscription,  productPrice:T_productPrice};

    var storeProduct = JSON.parse(localStorage.getItem("ProductData")) || [];  

    storeProduct.push(ProductData);
    localStorage.setItem( "ProductData",JSON.stringify(storeProduct));
    alert("product add succesfull")
    document.getElementById("productName").value = "";
    document.getElementById("productImage").value = "";
    document.getElementById("productDiscription").value = "";
    document.getElementById("productPrice").value = "";
} 
