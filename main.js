const inputBox = document.querySelector("#input-box");
const list = document.querySelector("#list");
const message = document.querySelector("#message");
const clearBtn = document.querySelector(".clear-btn");

function loadList() {
  const savedList = localStorage.getItem("taskList");
  if (savedList) {
    list.innerHTML = savedList;
  }
}

function saveList() {
  localStorage.setItem("taskList", list.innerHTML);
}

function addTask() {
  if (inputBox.value === "") {
    message.style.display = "block";
    setTimeout(() => {
      message.style.display = "none";
    }, 1500);
  } else {
    clearBtn.style.display = "flex";
    let li = document.createElement("li");
    li.innerHTML =
      inputBox.value.charAt(0).toUpperCase() + inputBox.value.slice(1);
    list.appendChild(li);
    inputBox.value = "";
    let span = document.createElement("span");
    span.innerHTML = "&times";
    li.appendChild(span);

    saveList();
  }
}

inputBox.addEventListener("keydown", function (e) {
  if (e.key == "Enter") {
    addTask();
  }
});

list.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveList();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveList();
  }
});

clearBtn.addEventListener("click", function () {
  const liElements = list.querySelectorAll("li");
  liElements.forEach((li) => {
    li.remove();
  });
  clearBtn.style.display = "none";
  saveList();
});

loadList();
