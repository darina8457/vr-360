document.addEventListener("DOMContentLoaded", function () {

  const form = document.getElementById("contact-form");
  const status = document.getElementById("form-status");

  if (form) {
    form.addEventListener("submit", async function (e) {
      e.preventDefault();

      const data = new FormData(form);

      try {
        const response = await fetch(form.action, {
          method: form.method,
          body: data,
          headers: {
            'Accept': 'application/json'
          }
        });

        if (response.ok) {
          status.textContent = "✅ Успешно изпратено!";
          status.style.color = "green";
          form.reset();
        } else {
          status.textContent = "❌ Възникна грешка. Опитайте отново.";
          status.style.color = "red";
        }

      } catch (error) {
        status.textContent = "❌ Грешка при изпращане.";
        status.style.color = "red";
      }
    });
  }

});
