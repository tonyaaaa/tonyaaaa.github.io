window.onload=function() {
    document.getElementById("btn_showlogin").onclick = shogMinLogin;

    function shogMinLogin() {
        var mini_login = document.getElementsByClassName("mini_login")[0];
        var cover = document.getElementsByClassName("cover")[0];
        mini_login.style.display = "block";
        cover.style.display = "block";
        mini_login.style.alignItems="center";



    }
};