function login(){
    let data = `{"userName":"${document.getElementById("userName").value}", "password":"${document.getElementById("password").value}"}`;
    let http = new XMLHttpRequest();
    http.onload = ((res)=>{
        console.log(http.response);
        let obj = JSON.parse(http.response);
        document.getElementById("p").innerText = "user name = " + obj.userName + " password = " + obj.password;
    });
    http.open("POST","login");
    http.setRequestHeader("Content-Type", "application/json")
    http.send(data);
}