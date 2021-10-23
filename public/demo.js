let dropdownContent = document.querySelector(".dropdownContent");
let rightArrow = document.querySelector(".rightArrow"); //show-card
let authLink = document.querySelector(".authLink");

let classes = rightArrow.classList;

authLink.addEventListener("click", function () {
  let result = classes.toggle("downArrow");

  if (result) {
    dropdownContent.classList.add("show");
  } else {
    dropdownContent.classList.remove("show");
  }
});

// User Details Edit/Update
let userdetailsEdit = document.querySelector(".userdetailsEdit");
let edit = document.querySelector(".edit");
let editclass = userdetailsEdit.classList;

edit.addEventListener("click", function () {
  let input = userdetailsEdit.querySelectorAll("input");

  let result = editclass.toggle("edit");

  if (result) {
    input.forEach((inp) => {
      inp.disabled = false;
    });
    const btn = document.createElement('input');
    btn.type = 'submit';
    btn.value = 'Update';
    btn.classList.add('updateUser');
    console.log(btn);
    userdetailsEdit.appendChild(btn);
    edit.innerHTML = '<img scr="./images/left-arrow.png" alt="Back';
  } else {
    input.forEach((inp) => {
      inp.disabled = true;
    });
    let update = document.querySelector('.updateUser');
    update.parentElement.removeChild(update);
    edit.innerHTML = '<span class="edit" style="cursor: pointer; text-decoration: underline;">Edit</span>';
  }
});


// Delete single tasks
const trashcans = document.querySelectorAll(".delete");

trashcans.forEach((trashcan) => {
  trashcan.addEventListener("click", (e) => {
    const endpoint = `/tasks/${trashcan.dataset.doc}`;

    fetch(endpoint, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => (window.location.href = data.redirect))
      .catch((err) => console.log(err));
  });
});


