$().ready(()=>{
    $("#loginJquery").click(()=>{
        console.log("sldkj");
        let dataSend = `{"userName":"${$("#userName").val()}","password":"${$("#password").val()}"}`;
        $.ajax({
            url: 'loginJquery',
            type: 'POST',
            data: dataSend,
            success:function(res){
                console.log("success");
                console.log(res);
                $("#p").text(`name = ${res.userName} , password = ${res.password}`)
            },
            beforeSend:function(request){
                request.setRequestHeader('Content-Type','application/json')
            }
        })
    })
})