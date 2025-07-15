const form = document.querySelector("#form");
const addBtn = document.querySelector("#form> button");
const inputText = document.querySelector("#form> input");
const lists = document.querySelector(".lists");

addBtn.addEventListener("click", () => {
  const inputCheck = document.createElement("input");
  inputCheck.type = "checkbox";
  const listText = document.createElement("span");
  listText.innerText = inputText.value;
  const DeleteIcon = document.createElement("span");
  DeleteIcon.innerText = "🗑️";

  const div = document.createElement("div");
  div.appendChild(inputCheck);
  div.appendChild(listText);

  const ListItems = document.createElement("div");
  ListItems.classList.add("list-items");

  ListItems.appendChild(div);
  ListItems.appendChild(DeleteIcon);

  lists.appendChild(ListItems);

  inputCheck.addEventListener("change", () => {
    inputCheck.checked
      ? listText.classList.add("completed-check")
      : listText.classList.remove("completed-check");
  });

  DeleteIcon.addEventListener("click", () => {
    lists.removeChild(ListItems);
  });
});

form.addEventListener("click", (e) => {
  e.preventDefault();
});
