const contactButton = document.getElementById("buttonElement");

contactButton.addEventListener("click", (event) => {
  _persona.Attribution.track("TestEvent", "TestProps");
});
