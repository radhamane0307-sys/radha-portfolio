// DARK MODE TOGGLE
document.getElementById("modeToggle").onclick = () => {
  document.body.classList.toggle("dark");
};

// CONTACT FORM
document.getElementById("contactForm").onsubmit = (e) => {
  e.preventDefault();
  alert("Message sent successfully 😊");
};

// SCROLL ANIMATION WOW EFFECT
function reveal() {
  let reveals = document.querySelectorAll(".reveal");

  reveals.forEach((el) => {
    let windowHeight = window.innerHeight;
    let elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", reveal);