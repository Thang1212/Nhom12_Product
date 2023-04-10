
function signin(){
  var n = document.getElementById('username').value;
  var e = document.getElementById('email').value;
  var p = document.getElementById('password').value;
  var p2 = document.getElementById('password2').value;
  var letters = /^[A-Za-z0-9]+$/;  
  var email_val = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/; 
  if (n == ""||e == ""||p == ""|| p2 == "")
  {
    alert("Please fill out all field");

  }
  else if(!letters.test(n))  
  {  
      alert('Tên đăng nhập chỉ chứa số và chữ cái');  
  }  
  else if (!email_val.test(e))  
  {  
      alert('Email không hợp lệ');  
  }  
  else if(p!=p2)  
 {  
    alert("Mật khẩu không khớp");  
  }  
   else if(document.getElementById("password").value.length > 20)  
  {  
alert("Độ dài tối đa của mật khẩu là 20 ");  
}  
else if(document.getElementById("password").value.length < 6)  
{  
alert("Độ dài tối thiểu của mật khẩu là 6");  
 }  
else{  
alert("Tài khoản của bạn đã được đăng kí thành công");
window.open('./login.html');
  
}
}  


function logon()
{
  var n = document.getElementById('username').value;
  var p = document.getElementById('password').value;
  var letters = /^[A-Za-z0-9]+$/;  
  var email_val = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/; 
  if (n == "")
  {
    alert("Chưa nhập tài khoản");

  }
  else if(!letters.test(n))  
  {  
      alert('Tên đăng nhập chỉ chứa số và chữ cái');  
  }  
  else if (p =="")  
  {  
      alert('vui lòng nhập mật khẩu');  
  }  
 
else{  
alert("Đăng nhập thành công");

}  
}  