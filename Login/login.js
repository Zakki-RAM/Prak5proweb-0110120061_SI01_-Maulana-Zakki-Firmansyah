function masuk(){
    let username = document.forms["Form"]["username"].value;
    let password = document.forms["Form"]["password"].value;
    if( username == "admin" && password >= 8 ){
      return true;
    }
    else if(username =="" || password ==""){
      alert("Masukkan username dan password anda");
      return false;
    }
    else{
      alert("Username atau password yang anda masukan SALAH");
      return false;
    }
  }