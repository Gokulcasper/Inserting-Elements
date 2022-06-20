const inputListEl = document.getElementById("input-list");

const li = document.createElement("li");
li.textContent = "Basket Ball";
li.className = "input-item";

inputListEl.append(li);
inputListEl.prepend(li);

inputListEl.before(li);
inputListEl.after(li);

// Old Way

inputListEl.parentNode.insertBefore(li, inputListEl);
inputListEl.parentNode.insertBefore(li, inputListEl.nextSibling);
