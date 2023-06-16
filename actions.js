const newPassword = document.getElementsByClassName
    console.log(newPassword)
    document.getElementById("passwordForm").addEventListener("submit", function(event) {
      event.preventDefault();

      var email = document.getElementById("email").value;
      var newPassword = document.getElementById("newPassword").value;

      // Ejemplo para mostrar un mensaje de éxito en el mismo formulario
      var messageElement = document.getElementById("message");
      messageElement.textContent = "¡Contraseña recuperada con éxito!";
      messageElement.style.color = "#b40be7";
    });
    const form= document.getElementsByClassName
    console.log(form)
    document.getElementById("form").addEventListener("submit", function(event) {
      event.preventDefault();

      var email = document.getElementById("email").value;
      var newPassword = document.getElementById("form").value;

      // Ejemplo para mostrar un mensaje de éxito en el mismo formulario
      var messageElement = document.getElementById("message");
      messageElement.textContent = "¡Contraseña recuperada con éxito!";
      messageElement.style.color = "#b40be7";
    });