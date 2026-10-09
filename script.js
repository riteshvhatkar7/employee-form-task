
function addEmployee() {

    let id = document.getElementById("id").value;
    let name = document.getElementById("name").value;
    let role = document.getElementById("role").value;
    let salary = document.getElementById("salary").value;

    let table = document.getElementById("employeeTable");

    let row = table.insertRow();

    row.insertCell(0).innerHTML = id;
    row.insertCell(1).innerHTML = name;
    row.insertCell(2).innerHTML = role;
    row.insertCell(3).innerHTML = salary;

}
