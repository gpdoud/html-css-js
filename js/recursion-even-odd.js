
/*
Returns true of the number is even; else false
*/
const isEven = (nbr) => {
    if(nbr == 0) return true;
    if(nbr == 1) return false; 
    return isEven(nbr - 2);
}
const getNbr = () => {
    return Number(document.getElementById("nbr").value);
}
const setMsg = (msg) => {
    document.getElementById("msg").innerText = msg;
}
const check = () => {
    let nbr = getNbr();
    if(isEven(nbr))
        setMsg("Even");
    else
        setMsg("Odd");

}