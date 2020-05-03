
let nbr = 0;

const inc = () => {
    nbr++;
    display(nbr);
}
const dec = () => {
    nbr--;
    display(nbr);
}
const display = (nbr) => {
    // document.getElementById("nbr").value = nbr;
    let nbrCtrl = document.getElementById("nbr");
    nbrCtrl.value = nbr;
    nbrCtrl.style.color = (nbr % 2 == 0) ? "red" : "black";
    nbrCtrl.style.fontStyle = (nbr % 3 == 0) ? "italic" : "normal";
    nbrCtrl.style.fontWeight = (nbr % 7 == 0) ? "bold" : "normal";
}
const loaded = () => {
    display(nbr);
}

