
class Customer {
    id;
    name;
    state;

    print() {
        console.log(this.id, this.name, this.state);
    }

    constructor(id, name, state) {
        this.id = id;
        this.name = name;
        this.state = state;
    }
}

let custs = [
    new Customer(1, "Amazon", "WA"),
    new Customer(2, "Target", "MN"),
    new Customer(3, "Warmart", "AR")
];

const loaded = () => {
    display();
}
const display = () => {
    let tbody = document.getElementById("tbody");
    tbody.innerHTML = ""; // clear old data
    for(let cust of custs) {
        let tr = `<tr>`;
        tr += `<td>${cust.id}</td>`;
        tr += `<td>${cust.name}</td>`;
        tr += `<td>${cust.state}</td>`;
        tr += `</tr>`;
        tbody.innerHTML += tr;
    }
}

const add = () => {
    let id = Number(document.getElementById("tid").value);
    let name = document.getElementById("tname").value;
    let state = document.getElementById("tstate").value;
    let cust = new Customer(id, name, state);
    custs.push(cust);
    display();
}