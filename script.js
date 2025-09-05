// Toggle mobile menu
const mobileMenuBtn = document.getElementById("mobile-menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

mobileMenuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// Portfolio filter buttons
const filterBtns = document.querySelectorAll(".filter-btn");

filterBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    filterBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const category = btn.textContent.toLowerCase();
    const projects = document.querySelectorAll("#portfolio .relative");

    projects.forEach(project => {
      if (category === "all" || project.textContent.toLowerCase().includes(category)) {
        project.style.display = "block";
      } else {
        project.style.display = "none";
      }
    });
  });
});
