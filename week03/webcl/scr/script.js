let selectedRow = null;

document.getElementById("addBtn").addEventListener("click", () => {
    const table = document.getElementById("masterTable").getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();
    for (let i = 0; i < 6; i++) {
        newRow.insertCell(i).innerHTML = "";
    }
    const deleteCell = newRow.insertCell(6);
    deleteCell.innerHTML = '<button onclick="deleteRow(this)">Delete</button>';
    newRow.addEventListener("click", () => selectRow(newRow));
    selectRow(newRow);
});

