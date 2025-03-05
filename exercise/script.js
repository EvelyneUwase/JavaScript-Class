let kglStore = {
    beans: 100,
    maize: 200,
    cowPeas: 150,
};

function updateStock(){
    let produce = document.getElementById("procuce").ariaValueMax; //get selected produce
    let newStock = document.getElementById("newStock").value; //get input value
    if (newStock !== "" && newStock > 0) {
        kglStore[produce] = parseInt(newStock); // Update stock in object
        document.getElementById(produce + "Stock").textContent = newStock;
        alert("✅ Stock updated successfully!");
        } else {
            alert("❌ Please enter a valid stock quantity!");
        }
}


documenet.getElementById()