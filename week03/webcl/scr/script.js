let selectedRow = null;

document.getElementById("addBtn").addEventListener("click", () => {
    const table = document.getElementById("masterTable").getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    newRow.innerHTML = `
        <td><input type="text" value=""></td>
        <td><input type="text" value=""></td>
        <td>
            <select>
                <option value="Consultant">Consultant</option>
                <option value="Architect">Architect</option>
                <option value="Developer">Developer</option>
                <option value="DevOps">DevOps</option>
            </select>
        </td>
        <td><input type="checkbox"></td>
        <td><input type="checkbox"></td>
        <td><input type="number" min="0" max="100" value="0"></td>
        <td><button onclick="deleteRow(this)">Delete</button></td>
    `;

    newRow.addEventListener("click", () => selectRow(newRow));
    newRow.querySelectorAll('input, select').forEach(input => {
        input.addEventListener('blur', updateDetailView);
    });

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
    updateDetailView();
}

function updateDetailView() {
    if (selectedRow) {
        document.getElementById("firstName").value = selectedRow.cells[0].querySelector('input').value;
        document.getElementById("lastName").value = selectedRow.cells[1].querySelector('input').value;
        document.getElementById("function").value = selectedRow.cells[2].querySelector('select').value;
        document.querySelector(`input[name="available"][value="${selectedRow.cells[3].querySelector('input').checked}"]`).checked = true;
        document.getElementById("contractor").checked = selectedRow.cells[4].querySelector('input').checked;
        document.getElementById("workload").value = selectedRow.cells[5].querySelector('input').value;
    }
}

document.getElementById("saveBtn").addEventListener("click", () => {
    if (selectedRow) {
        selectedRow.cells[0].querySelector('input').value = document.getElementById("firstName").value;
        selectedRow.cells[1].querySelector('input').value = document.getElementById("lastName").value;
        selectedRow.cells[2].querySelector('select').value = document.getElementById("function").value;
        selectedRow.cells[3].querySelector('input').checked = document.querySelector('input[name="available"]:checked').value === "true";
        selectedRow.cells[4].querySelector('input').checked = document.getElementById("contractor").checked;
        selectedRow.cells[5].querySelector('input').value = document.getElementById("workload").value;
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
