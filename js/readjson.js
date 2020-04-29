let colors = [ "red", "white", "blue" ];
let students = [
    { name: "Andrew", favNumber: 27 },
    { name: "Jeff", favNumber: 5 },
    { name: "Trevor", favNumber: 11 },
    { name: "Tyler", favNumber: 24 },
    { name: "Dennis", favNumber: 6 }
];


const loaded = () => {
    let ulCtrl = document.getElementById("students");
    for(let student of students) {
        let liTag = `<li>${student.name} whose favorite number is ${student.favNumber}`;
        ulCtrl.innerHTML += liTag;
    }

    let divCtrl = document.getElementById("colors");
    for(let color of colors) {
        let para = "<p>" + color + "</p>";
        divCtrl.innerHTML += para;
    }
}