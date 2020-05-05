const url = "http://localhost:8080";

let user = null;

$().ready(() => {

    $("#get").click(() => {
        getUser();
    });

    $("#delete").click(() => {
        remove(user);
    });

});

const remove = (user) => {
    $.ajax({
        method: "DELETE",
        url: `${url}/users/${user.id}`,
        //data: JSON.stringify(newUser),
        contentType: "application/json"
    })
        .done((res)=> {
            console.log("User deleted!", res);
        })
        .fail((err)=> {
            console.error(err);
        });
}

const getUser = () => {
    let userId = $("#userid").val();
    getUserByPK(userId);
}
const getUserByPK = (id) => {
    $.getJSON(`${url}/users/${id}`)
        .done((jr) => {
            user = jr.data;
            console.log("User:", user);
            display(jr.data);
        })
        .fail((err)=> {
            console.error(err);
        });
}
const display = (user) => {
    $("#eid").text(user.id);
    $("#eusername").text(user.username);
    $("#efullname").text(`${user.firstname} ${user.lastname}`);
    $("#ephone").text(user.phoneNumber);
    $("#eemail").text(user.email);
    $("#eisreviewer").text(user.isReviewer ? "Yes" : "No");
    $("#eisadmin").text(user.isAdmin ? "Yes" : "No");
}