let url = "http://localhost:5000/api";

$().ready(()=>{

    $("#save").click(()=>{
        let newUser = {};
        newUser.id = Number($("#eid").val());
        newUser.username = $("#eusername").val();
        newUser.password = $("#epassword").val();
        newUser.firstname = $("#efirstname").val();
        newUser.lastname = $("#elastname").val();
        newUser.phone = $("#ephone").val();
        newUser.email = $("#eemail").val();
        newUser.isReviewer = $("#eisreviewer").prop("checked");
        newUser.isAdmin = $("#eisadmin").prop("checked");
        console.log("User:", newUser);
        $.ajax({
            method: "POST",
            url: `${url}/users/`,
            data: JSON.stringify(newUser),
            contentType: "application/json"
        })
            .done((res)=> {
                console.log("User added!", res);
            })
            .fail((err)=> {
                console.error(err);
            })
    });
    
});