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


const trashcan = document.querySelector(".delete");

trashcan.addEventListener("click", (e) => {
  const endpoint = `/tasks/${trashcan.dataset.doc}`;

  fetch(endpoint, {
    method: "DELETE",
  })
    .then(() => {})
    .catch((err) => console.log(err));
});
