let url = "http://localhost:8080";

let user = null;

$().ready(()=>{

    $("#get").click(() => {
        getUser();
    });

    $("#save").click(() => {
        updateUser();
    });
    
});

const updateUser = () => {
    user.username = $("#eusername").val();
    user.password = $("#epassword").val();
    user.firstname = $("#efirstname").val();
    user.lastname = $("#elastname").val();
    user.phoneNumber = $("#ephone").val();
    user.email = $("#eemail").val();
    user.isReviewer = $("#eisreviewer").prop("checked");
    user.isAdmin= $("#eisadmin").prop("checked");
    console.debug("User before update:", user);
    putUser(user);
}

const putUser = (user) => {
    $.ajax({
        method: "PUT",
        url: `${url}/users/${user.id}`,
        data: JSON.stringify(user),
        contentType: "application/json"
    })
        .done((res) => {
            console.log("Update Successful! res is ", res);
        })
        .fail((err) => {
            console.error("ERROR:", err);
        });
}

const getUser = () => {
    let userId = $("#eid").val();
    userGetByPK(userId);
};
const userGetByPK = (id) => {
    $.getJSON(`${url}/users/${id}`)
    .done((res) => {
            user = res.data;
            display();
            console.debug("JR: ", res);
        })
        .fail((err) => {
            console.error(err);
        })
}
const display = () => {
    $("#eusername").val(user.username);
    $("#epassword").val(user.password);
    $("#efirstname").val(user.firstname);
    $("#elastname").val(user.lastname);
    $("#ephone").val(user.phoneNumber);
    $("#eemail").val(user.email);
    $("#eisreviewer").prop("checked", user.isReviewer);
    $("#eisadmin").prop("checked", user.isAdmin);
}