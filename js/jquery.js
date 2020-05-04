let url = "http://localhost:5000/api";

let jsonresp = {};

$().ready( ()=>{
    
    $.getJSON(`${url}/users/`)
        .done( (res)=>{
            jsonresp.data = res;
            display();
            console.log(res);
        })
        .fail( (err)=>{
            console.error(err);
        });

} );

const display = () => {
    let tbody = $("tbody");
    for(let user of jsonresp.data) {
        let tr = $("<tr></tr>");
        let tdId = $(`<td>${user.id}</td>`);
        tr.append(tdId);
        let tdUsername = $(`<td class='text-danger'>${user.username}</td>`);
        tr.append(tdUsername);
        let tdFullname = $(`<td>${user.firstname} ${user.lastname}</td>`);
        tr.append(tdFullname);
        tr.append($(`<td>${user.phone}</td>`));
        tr.append($(`<td>${user.email}</td>`));
        let tdReviewer = $(`<td>${user.isReviewer}</td>`);
        tr.append(tdReviewer);
        let tdAdmin = $(`<td>${user.isAdmin ? "Yes" : "No"}</td>`);
        tr.append(tdAdmin);
        tbody.append(tr);
    }
}
