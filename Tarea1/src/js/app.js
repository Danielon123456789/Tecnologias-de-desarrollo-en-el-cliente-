async function loadCV() {
  const response = await fetch("../data/cv.json");
  const data = await response.json();

  // Introducción
  document.getElementById("introduccion").innerHTML = `
    <h2>Profile</h2>
    <h4>${data.introduccion.nombre}</h3>
    <p>${data.introduccion.descripcion}</p>
  `; 

  // Contacto
  document.getElementById("Contacto").innerHTML = `
    <h2>Contacto</h2>
    <p>Email: <a href="mailto:${data.contacto.email}">${data.contacto.email}</a></p>
    <p>Teléfono: ${data.contacto.telefono}</p>
    <p>LinkedIn: <a href="${data.contacto.linkedin}" target="_blank">${data.contacto.linkedin}</a></p>
  `;

  // Educación
  document.getElementById("Educacion").innerHTML = `
    <h2>Educación</h2>
    <ul>
      ${data.educacion.map(ed => `
        <li>
          <strong>${ed.institucion}</strong> - ${ed.grado} <br>
          <em>${ed.periodo}</em>
        </li>
      `).join("")}
    </ul>
  `;

  // Experiencia
  document.getElementById("Experiencia").innerHTML = `
    <h2>Experiencia</h2>
    <ul>
      ${data.experiencia.map(exp => `
        <li>
          <strong>${exp.puesto}</strong> en ${exp.empresa} <br>
          ${exp.descripcion} <br>
          <em>${exp.periodo}</em>
        </li>
      `).join("")}
    </ul>
  `;

  // Skills
  document.getElementById("Skills").innerHTML = `
    <h2>Skills</h2>
    <ul>
      ${data.skills.map(skill => `<li>${skill}</li>`).join("")}
    </ul>
  `;

  //imagen
  document.getElementById("imagen").innerHTML = `
      <img src="${data.imagen}"/>
  `;

  // Formulario de contacto dinámico
  const formSection = document.getElementById("Form");
  formSection.innerHTML = `
    <h2>Contacto</h2>
    <form id="contactForm" method="POST" action="https://formsubmit.co/${data.contactar}">
      <label for="nombre">Nombre:</label>
      <input type="text" id="nombre" name="nombre" required />

      <label for="email">Correo:</label>
      <input type="email" id="email" name="email" required />

      <label for="mensaje">Mensaje:</label>
      <textarea id="mensaje" name="mensaje" required></textarea>

      <button type="submit">Enviar</button>

      <p id="formMessage"></p>
    </form>
  `;

  const form = document.getElementById("contactForm");
  const formMessage = document.getElementById("formMessage");

  // Validación antes de enviar
  form.addEventListener("submit", function(e) {
    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    if (!nombre || !email || !mensaje) {
      e.preventDefault(); 
      formMessage.textContent = "Por favor completa todos los campos.";
      formMessage.style.color = "red";
      return;
    }

    });


}

loadCV();
