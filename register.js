function register(event) {
  event.preventDefault();
  var f_UserName = document.getElementById("flipkart_UserName").value;
  var f_UserEmail = document.getElementById("flipkart_UserEmail").value;
  var f_UserPassword = document.getElementById("flipkart_UserPassword").value;
  var f_UserConformPassword = document.getElementById(
    "flipkart_UserConformPassword"
  ).value;

  var flipkart_UserData = {
    userName: f_UserName,
    userEmail: f_UserEmail,
    userPassword: f_UserPassword,
    userName: f_UserConformPassword,
  };
  var flipkart_Storage =  JSON.parse(localStorage.getItem("flipkart_UserData")) || [];
  var flag = false;

  for (var i = 0; i < flipkart_Storage.length; i++) {
    if (flipkart_Storage[i].userEmail === f_UserEmail) {
      flag = true;
    }
  }
  if (flag) {
    alert("Email already prestent");
  } else if (f_UserPassword.length < 8) {
    alert("password must be 8  digit");
  } else if (f_UserPassword !== f_UserConformPassword) {
    alert("password Dont match");
  } else {
    flipkart_Storage.push(flipkart_UserData);
    localStorage.setItem("flipkart_UserData", JSON.stringify(flipkart_Storage));
    document.getElementById("flipkart_UserName").value = "";
    document.getElementById("flipkart_UserEmail").value = "";
    document.getElementById("flipkart_UserPassword").value = "";
    document.getElementById("flipkart_UserConformPassword").value = "";
    alert("registration Done");
    window.location.href = "./login.html";
  }
}

function Login(event) {
  event.preventDefault();
  var F_localData = JSON.parse(localStorage.getItem("flipkart_UserData"));
  var f_LUserEmail = document.getElementById("flipkart_LUserEmail").value;
  var f_LUserPassword = document.getElementById("flipkart_LUserPassword").value;
  var f_currentUser;
  var flag = false;
  for (var i = 0; i < F_localData.length; i++) {
    if (
      F_localData[i].userEmail === f_LUserEmail &&
      F_localData[i].userPassword === f_LUserPassword
    ) {
      flag = true;
      f_currentUser = F_localData[i];
    }
  }

  if (flag) {
    localStorage.setItem(
      "flipkart_current_user",
      JSON.stringify({ f_currentUser })
    );
    // document.getElementById("flipkart_LUserEmail").value = "";
    // document.getElementById("flipkart_LUserPassword").value = "";
    alert("login sucessfull");
    window.location.href = "./home.html";
  } else {
    alert("please enter correct email and password");
  }
}

function AddToCart(event) {
  event.preventDefault();
  var F_ProName = document.getElementById("flipkart_ProName").value;
  var F_ProImage = document.getElementById("flipkart_ProImage").value;
  var F_ProPrice = document.getElementById("flipkart_ProPrice").value;
  var F_ProDiscription = document.getElementById(
    "flipkart_ProDiscription"
  ).value;

  var Flipkart_product = {
    ProName: F_ProName,
    ProImage: F_ProImage,
    ProPrice: F_ProPrice,
    ProDiscription: F_ProDiscription,
  };
  
  var Flipkart_PStorage =
    JSON.parse(localStorage.getItem("Flipkart_product")) || [];
    Flipkart_PStorage.push(Flipkart_product);
  localStorage.setItem("Flipkart_product", JSON.stringify(Flipkart_PStorage));
  alert("product added sucessfully")
  document.getElementById("flipkart_ProName").value = "" ;
  document.getElementById("flipkart_ProImage").value = "" ;
  document.getElementById("flipkart_ProPrice").value = "" ;
  document.getElementById( "flipkart_ProDiscription").value = "" ;
}


