document.body.addEventListener("click", (e) => {
  console.log("e.target:>>", e.target);
  if (e.target.id) {
    e.target.classList.toggle("opened");
  } else {
    const opened = document.body.querySelectorAll(".opened");
    opened.forEach((o) => o.classList.toggle("opened"));
  }
});
