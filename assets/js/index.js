document.addEventListener("DOMContentLoaded", () => {
  const hearts = document.querySelectorAll(".heart");
  hearts.forEach((singleHeart) => {
    singleHeart.addEventListener("click", () => {
      if (singleHeart.classList.contains("red")) {
        singleHeart.classList.remove("red");
      } else {
        singleHeart.classList.add("red");
      }
    });
  });
});
