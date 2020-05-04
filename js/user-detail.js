let url = "http://localhost:5000/api";

$().ready(()=>{

    $("#get").click(()=>{
        let userId = $("#userid").val();
        $.getJSON(`${url}/users/${userId}`)
            .done((res)=>{
                let jsonresp = {};
                jsonresp.data = res;
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
}