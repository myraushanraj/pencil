var server_url = "../common/api.php?endpoint=";


check_token();
function check_token() {
    var email = localStorage.getItem("email");
    var name = localStorage.getItem("name");
    var role = localStorage.getItem("role");


    if (email) {


        if (role == 'admin') {
            document.getElementById("user-name").innerHTML = name;
            //  window.location.assign("./");
        } else {

            window.location.assign("./login.html");
        }
    }
    else {
        window.location.assign("./login.html");
    }
}

function logout() {

    localStorage.removeItem("email");
    localStorage.removeItem("name");
    localStorage.removeItem("role");
    location.reload();
}
