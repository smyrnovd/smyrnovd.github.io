document.addEventListener(
  "DOMContentLoaded",
  (event) => {
    particlesJS.load(
      "particles-js",
      "/assets/json/particles.json",
      function () {
        console.log("particles.js loaded - callback");
      }
    );
  },
  false
);

var email_link = document.getElementById("emailLink");
var email_box = document.getElementById("emailBox");
var show = false;

email_link.addEventListener("click", function () {
  show = !show;
  if (show) {
    email_box.style.opacity = "1";
    email_box.classList.add("particles-icon");
  } else {
    email_box.style.opacity = "0";
    email_box.classList.remove("particles-icon");
    email_link.blur();
  }
});
email_box.addEventListener("click", function () {
  var range = document.createRange();
  range.selectNode(email_box);
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);

  // Execute the copy command
  document.execCommand("copy");

  // Deselect the text
  window.getSelection().removeAllRanges();

  // Optionally, you can provide user feedback
  email_box.ariaLabel = "Copied!";
  setTimeout(function () {
    email_box.blur();
  }, 2000);
  setTimeout(function () {
    email_box.ariaLabel = "Click to copy!";
  }, 3000);
});
