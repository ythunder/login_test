function login() {
    var username = document.getElementById("username");
    var password = document.getElementById("password");

    if(username == "")
    {
        alert("请输入用户名!\n");
    }
    else if(password == "")
    {
        alert("请输入密码!\n");
    }

    if(username == "04141114" && password == "yuntingxxyd.13")
    {
        window.location.href("welcome.html");
    }
    else
    {
        alert("用户名或密码错误!\n");
    }
}