const addBtn = document.getElementById("AddCategoryButton");

const contentDiv = document.getElementById("container");

const categoryForm = document.getElementById("CategoryForm");


categoryForm.style.display = "none";
categoryForm.className += "requiredMargin";


addBtn.addEventListener('click', () => {
  contentDiv.style.display = "none";
  addBtn.style.display = "none";
  categoryForm.style.display = "";
})


categoryForm.addEventListener('submit', (e) => {
  e.preventDefault();
  categoryForm.style.display = "none";
  contentDiv.style.display = "";
  addBtn.style.display = "";
})



