// quote-form.js

(function () {
    // Initialize EmailJS with your public key
    emailjs.init("oVlx1-gsRSF9DvnrH"); // Replace with your actual public key
  })();
  
  document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
  
      // Optionally disable the button to prevent multiple submits
      const submitButton = form.querySelector("button[type='submit']");
      submitButton.disabled = true;
      submitButton.textContent = "Sending...";
  
      // Send form via EmailJS
      emailjs.sendForm("service_iibjhbl", "template_74fd2on", form).then(
        function () {
          alert("Quote request sent successfully!");
          form.reset();
          submitButton.disabled = false;
          submitButton.textContent = "Submit";
        },
        function (error) {
          console.error("EmailJS error:", error);
          alert("Failed to send quote request. Please try again.");
          submitButton.disabled = false;
          submitButton.textContent = "Submit";
        }
      );
    });
  });
  