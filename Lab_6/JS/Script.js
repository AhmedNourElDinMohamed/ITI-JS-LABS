// *************************** Start Task 1 **************************
var xhr = new XMLHttpRequest();
xhr.open("GET", "https://jsonplaceholder.typicode.com/todos");

var mainTable = document.getElementById("table");
var tableBody = document.getElementById("table-body");
var filterData = document.getElementById("filter");
var filterById = document.getElementById("filterById");
var flag = true; // To Check On Compeleted Value True/False

xhr.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    // Typical action to be performed when the document is ready:
    var data = JSON.parse(xhr.responseText);
    appendToTable(data);

    //console.log(filterData.children.value)
  }
};

function appendToTable(data) {
  for (i = 0; i < data.length; i++) {
    // Create Row And Cells
    var row = document.createElement("tr");
    var useridCell = document.createElement("td");
    var idCell = document.createElement("td");
    var titleCell = document.createElement("td");
    var completedCell = document.createElement("td");
    var flagCell = document.createElement("td");

    // Assign Cells To Values
    useridCell.textContent = data[i].userId;
    useridCell.className = "searchId";
    idCell.textContent = data[i].id;
    titleCell.textContent = data[i].title;
    completedCell.textContent = data[i].completed;

    // Append Row And Cells Into Table-Body
    row.append(useridCell);
    row.append(idCell);
    row.append(titleCell);
    row.append(completedCell);
    row.append(flagCell);
    tableBody.append(row);

    //Check if Flag True Or False
    if (flag == data[i].completed) {
      flagCell.style.backgroundColor = "Green";
      flagCell.parentElement.className = "true";
    } else {
      flagCell.style.backgroundColor = "Red";
      flagCell.parentElement.className = "false";
    }
  }
}

// Function To Select False And True
function filter() {
  var allRows = Array.from(tableBody.children);
  // Get All Rows And Change It To Array
  allRows.forEach(function (e) {
    // Value Of Select Is True
    if (filterData.value == "true") {
      if (e.classList.contains("false")) {
        e.style.display = "none";
      } else {
        e.style.display = "";
      }
    }
    // Value Of Select Is False
    if (filterData.value == "false") {
      if (e.classList.contains("true")) {
        e.style.display = "none";
      } else {
        e.style.display = "";
      }
    }
  });
}
// Function To Select by Id
function filterId() {
  var allUserId = Array.from(document.getElementsByClassName("searchId"));
  // Get All UserId Cell
  allUserId.forEach(function (e) {
    // Value Of Select Is True
    if (filterById.value != e.textContent) {
      e.parentElement.style.display = "none";
    } else {
      e.parentElement.style.display = "";
    }
    // Value Of Select Is False
  });
}

filterData.addEventListener("change", filter);
filterById.addEventListener("change", filterId);
xhr.send();
// *************************** End Task 1 **************************
