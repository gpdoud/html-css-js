
const addLiTag = (idx) => {
    let li = `<li>Number: ${idx} <= letter</li>`;
    document.getElementById("nbrs").innerHTML += li;
}

const calc = () => {
    let total = 0;
    let count = 0;
    for(let idx = 1; idx <= 50; idx++) {
        if(idx % 3 == 0 || idx % 5 == 0) {
            addLiTag(idx);
            total += idx;
            count++;
        }
    }
    let avg = total / count;
    // display the data
    document.getElementById("sum").value = total;
    document.getElementById("avg").value = avg;
}