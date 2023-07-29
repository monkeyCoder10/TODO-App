var listContainer = document.getElementById("list-container");
var listInput = document.getElementById("list-input");

function addTask() {
    if (listInput.value == "") {
        alert("You must write something!");
    } else {
        var li = document.createElement("li");
        li.textContent = listInput.value;
        listContainer.appendChild(li);
        var span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    listInput.value = '';
    saveData();
}

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function loadData() {
    listContainer.innerHTML = localStorage.getItem("data");
}

loadData();