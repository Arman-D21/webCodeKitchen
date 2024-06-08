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

function deleteRow(button) {
    const row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
    clearDetailForm();
}

function selectRow(row) {
    if (selectedRow) {
        selectedRow.classList.remove("selected");
    }
    selectedRow = row;
    row.classList.add("selected");
    document.getElementById("firstName").value = row.cells[0].innerHTML;
    document.getElementById("lastName").value = row.cells[1].innerHTML;
    document.getElementById("function").value = row.cells[2].innerHTML;
    document.querySelector(`input[name="available"][value="${row.cells[3].innerHTML}"]`).checked = true;
    document.getElementById("contractor").checked = row.cells[4].innerHTML === "true";
    document.getElementById("workload").value = row.cells[5].innerHTML;
}

document.getElementById("saveBtn").addEventListener("click", () => {
    if (selectedRow) {
        selectedRow.cells[0].innerHTML = document.getElementById("firstName").value;
        selectedRow.cells[1].innerHTML = document.getElementById("lastName").value;
        selectedRow.cells[2].innerHTML = document.getElementById("function").value;
        selectedRow.cells[3].innerHTML = document.querySelector('input[name="available"]:checked').value;
        selectedRow.cells[4].innerHTML = document.getElementById("contractor").checked;
        selectedRow.cells[5].innerHTML = document.getElementById("workload").value;
    }
});

document.getElementById("resetBtn").addEventListener("click", clearDetailForm);

function clearDetailForm() {
    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("function").value = "Consultant";
    document.getElementById("availableYes").checked = true;
    document.getElementById("contractor").checked = false;
    document.getElementById("workload").value = 0;
}
