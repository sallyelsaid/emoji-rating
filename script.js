const starElement = document.querySelectorAll(".fa-star");
const emojiEl = document.querySelectorAll(".far");
const colorarray = ["red", "orange", "lightblue", "lightgreen", "green"];

updateRating(0);

starElement.forEach((starElement, index) => {
  starElement.addEventListener("click", () => {
    updateRating(index);
  });
});

function updateRating(index) {
  starElement.forEach((starElement, ind) => {
    if (ind < index + 1) {
      starElement.classList.add("active");
    } else {
      starElement.classList.remove("active");
    }
  });

  emojiEl.forEach((emojiEl) => {
    emojiEl.style.transform = `translateX(-${index * 50}px)`;
    emojiEl.style.background = colorarray[index];
  });
}
