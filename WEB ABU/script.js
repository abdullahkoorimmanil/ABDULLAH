const menuIcon = document.getElementById("menuIcon");
const navLinks = document.getElementById("navLinks");

menuIcon.onclick = () => {
  navLinks.style.display =
    navLinks.style.display === "flex" ? "none" : "flex";
};
function openImage(src) {
  document.getElementById("lightboxImg").src = src;
  document.getElementById("imageLightbox").style.display = "flex";
}

function closeImage() {
  document.getElementById("imageLightbox").style.display = "none";
}
// contact us
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  emailjs.send("service_2pidet6", "template_nio3vel", {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  })
  .then(() => {
    alert("Message sent successfully!");
    this.reset();
  });
});

