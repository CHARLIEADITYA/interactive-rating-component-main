function myFunction() {
  const p = document.querySelector(".component");
  p.classList.add("hide");
  document.querySelector(".content").classList.remove("hide");
}
window.addEventListener("load", () => {
  document.querySelectorAll(".rating").forEach((element) => {
    element.addEventListener("click", () => {
      document.querySelector(".rate").innerHTML = element.innerHTML;
    });
  });
});
