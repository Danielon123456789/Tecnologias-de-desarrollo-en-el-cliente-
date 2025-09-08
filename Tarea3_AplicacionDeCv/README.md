# 📄 Tarea 1 – CV en línea con HTML, Sass y Gulp

## 🎯 Objetivo
Desarrollar una aplicación web para un currículum en línea utilizando **HTML**, **Sass** y opcionalmente **TypeScript**, con un flujo de construcción automatizado mediante **Gulp**.

---

## 📌 Descripción del proyecto
Este proyecto consiste en un **CV en línea dinámico**, cuyo contenido se carga de forma asíncrona desde un archivo JSON.  
De esta manera, al realizar cambios en el archivo `cv.json` (por ejemplo: agregar un nuevo proyecto, skill o modificar el correo de contacto), estos se verán reflejados automáticamente en el HTML.

La aplicación incluye:
- Transformación de **Sass** → CSS.
- Copia de archivos estáticos (HTML, imágenes, JSON).
- Formulario de contacto con validación y envío de correos mediante un servicio externo.
- Diseño responsivo mediante **media queries**.
- Uso de **parciales, variables, mixins, y extend** en Sass.

---

## 🛠️ Tecnologías usadas
- **HTML5**
- **Sass**
- **JavaScript**
- **Gulp** como task runner
- **Servicios externos para formularios**:  
  - [FormSubmit](https://formsubmit.co)  

---

## 📂 Estructura del proyecto
Tarea3_AplicacionDeCv/
│── src/
│ ├── data/ # Archivos JSON e imágenes
│ │ ├── cv.json
│ │ └── homero.jpg
│ ├── js/ # Código JS 
│ ├── styles/ # Archivos SCSS
│ └── views/ # Archivos HTML
│
│── dist/ # Carpeta de salida (generada con npm run build)
│── gulpfile.js # Configuración de Gulp
│── package.json
│── README.md


## 📂 Ejecucion del proyecto:
npm run build