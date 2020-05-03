let url = "http://localhost:5000/api/users";

let user = {
    id: 21,
    username: "xx",
    password: "yy",
    firstname: "xx",
    lastname: "xx",
    phone: "xx",
    email: "xx",
    isReviewer: false,
    isAdmin: false,
    active: true,
    created: "2020-05-03"
}

$().ready(()=>{

    $("#get").click(()=>{ get(); });

    $("#post").click(()=>{ post(user); });

    $("#put").click(()=>{ put(user); });
});

const get = () => {
    $.getJSON(url).done((res)=>{
        console.log(res);
    });
}

const post = (user) => {
    $.ajax({
        method: "POST",
        url: `${url}`, 
        data: JSON.stringify(user),
        contentType: "application/json"
    })
        .done((res)=>{
            console.log(res);
        })
        .fail((err) =>{
            console.error("Failed!:", err);
        });
}
const put = (user) => {
    $.ajax({
        method: "PUT",
        url: `${url}/${user.id}`, 
        data: JSON.stringify(user),
        contentType: "application/json"
    })
        .done((res)=>{
            console.log(res);
        })
        .fail((err) =>{
            console.error("Failed!:", err);
        });
}