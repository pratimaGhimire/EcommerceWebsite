const modal = document.getElementById("modal");
const closeModal = document.getElementById("modalClose");
const button = document.getElementById("addComment");
button.onclick = function () {
  modal.style.display = "block";
};
closeModal.onclick = () => (modal.style.display = "none");
const commentForm = document.getElementById("commentForm");
commentForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const heading = document.createElement("h3");
  heading.classList.add("commentHeading");

  const commentBlock = document.createElement("div");
  commentBlock.classList.add("commentBlock");

  const comment = commentForm.elements["message"];
  const name = commentForm.elements["name"];
  heading.innerHTML = name.value;
  modal.style.display = "none";
  const commentSection = document.getElementById("commentMessage");
  const element = document.createElement("div");
  element.classList.add("commentThread");
  element.innerText = comment.value;
  commentBlock.appendChild(heading);
  commentBlock.appendChild(element);

  commentSection.appendChild(commentBlock);
  comment.value = "";
  name.value = "";
});
