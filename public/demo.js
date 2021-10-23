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


