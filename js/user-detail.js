let url = "http://localhost:8080";

$().ready(()=>{

    $("#get").click(()=>{
        let userId = $("#userid").val();
        $.getJSON(`${url}/users/${userId}`)
            .done((res)=>{
                let jsonresp = res;
                //jsonresp = res; for students
                display(jsonresp);
            })
    });

});

const display = (jsonresp) => {
    let user = jsonresp.data;
    $("#eid").text(user.id);
    $("#eusername").text(user.username);
    $("#efullname").text(user.firstname + " " + user.lastname);
    $("#ephone").text(user.phoneNumber);
    $("#eemail").text(user.email);
    $("#eisreviewer").text(user.isReviewer ? "Yes" : "No");
    $("#eisadmin").text(user.isAdmin ? "Yes" : "No");
}