const inputBox = document.getElementById("input-box");
const list = document.getElementById("list");
const message = document.getElementById("message");


function addTask() {
    if (inputBox.value === "") {
        message.style.display="block"
        setTimeout(() => {
        message.style.display="none"
        }, 1500);
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        list.appendChild(li);
        inputBox.value="";
        let span = document.createElement("span");
        span.innerHTML = "&times";
        li.appendChild(span)
    }
};

list.addEventListener("click", function(e) {
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked")
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove()
    }
})