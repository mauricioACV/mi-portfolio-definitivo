export const projects = [
  {
    id: 1,
    title: "Proyecto SAC",
    shot_title:"SAC",
    intro_description:
      'Este es un proyecto que es utlizado por usuarios de todo el país (Chile) para gestionar la administración de contratos viales y consultorías licitados a contratistas externos. Existe un centro de gestión por Región y el desarrollo requiere de interoperabilidad entre sistemas involucrados en el ciclo de vida de contratos.',
    description:
      "en desarrollo...",
    languajes: ["css", "html", "js", "c-sharp"],
    libraries: {img: "", text:"MVC5 .Net"},
    extra: { title: "Data", text: "Oracle 11g", img: null },
    backend: "C# .Net Framework",
    link_app: {demo:"demo video", url:"#"},
    link_repo: "https://github.com/mauricioACV/SistemaSacMvc5Ver.2",
  },
  {
    id: 2,
    title: "Proyecto Dev_United",
    shot_title:"Dev_United",
    intro_description:
      "El proyecto consiste en construir una aplicación web full-stack que simula una Red Social estilo Twitter pero orientada a programadores. El objetivo es poder vincular la comunidad del desarrollo y reunirla en un lugar para discutir, ayudar y conectar con otras personas que compartan esta misma pasión.",
    description:
      "Para el  proyecto, se requiere una vista con un feed de mensajes. Las personas usuarias podrán también hacer social sign up/login con una cuenta de Google y publicar/borrar mensajes, así como también ver los publicados por las demás personas usuarias. La base de datos e integración con Google para el login/sign up será realizada por medio de Firebase. El proyecto deberá estar deployado y accesible en una URL pública, a través de servicios como Github, Netlify o Firebase Hosting. La aplicación cuenta con vista responsive basado a maqueta Figma con referencias gráficas de cómo se vería el proyecto en dispositivos portátiles.",
    languajes: ["css", "html", "js"],
    libraries: {img: ["react"], text:null},
    extra: { title: "Data", text: "Firestore", img: null },
    backend: "Firebase",
    link_app: {demo:"demo app", url:"https://dev-united-mcampusano.web.app/"},
    link_repo: "https://github.com/mauricioACV/React-JS-Proyecto-Dev_United-FireBase-Acamica-",
  },
  {
    id: 3,
    title: "Proyecto Portfolio",
    shot_title:"Mi portfolio",
    intro_description:
      'Mi portfolio fue construido en React, y tiene por objetivo ser mi carta de presentación profesional, permitiendo acceder a información sobre mí experiencia en el rubro y cargos que he desempeñado, proyectos relevantes que he desarrollado, habilidades y competencias, medios de contactos y mis redes sociales.',
    description:
      "en desarrollo...",
    languajes: ["css", "html", "js"],
    libraries: {img: ["react"], text:null},
    extra: { title: "Data", text: "Firestore", img: null },
    backend: "Firebase",
    link_app: {demo:"demo app", url:"https://mauricioacv.github.io/portfolio/"},
    link_repo: "https://github.com/mauricioACV/portfolio",
  },
  {
    id: 4,
    title: "Proyecto GifOS",
    shot_title:"GifOS",
    intro_description:
      'En este proyecto si implementa el manejo asíncrono en JavaScript, así como el uso de los hooks useState, useEffect y useContext. La aplicación, además de ofrecer la búsqueda de gifs, también dispone la opción de modo nocturno o “dark mode", y al iniciar muestra 15 trending gif.',
    description:
      "Se utilizó React Context como alternativa a prop drilling, con el objetivo de compartir datos y estados entre componentes, como por ejemplo, indicar a cada componente si el usuario alternó entre el modo claro y oscuro de la app. Context está diseñado para compartir datos que pueden considerarse “globales” para un árbol de componentes en React. También se implementa un custom hook para realizar las peticiones a la api de Giphy, y una implementación de un closure para ejecutar la técnica de memorización de estado.",
    languajes: ["css", "html", "js"],
    libraries: {img: ["react"], text:null},
    extra: { title: "Api", text: "Giphy Developers", img: null },
    backend: null,
    link_app: {demo:"demo app", url:"https://7mn1s.csb.app/"},
    link_repo: "https://github.com/mauricioACV/React-JS-Proyecto-GIFos-Acamica",
  },
  {
    id: 5,
    title: "Proyecto Reserva Hotel",
    shot_title:"Dev_United",
    intro_description:
      'Este proyecto simula realizar una aplicación en versión “beta”, y el modelo de negocio es la búsqueda y reserva de alojamientos según ciertos criterios de búsqueda: fechas disponibles, países, cantidad de camas del lugar y el precio del mismo. La interfaz gráfica fue construida en React.',
    description:
      "en desarrollo...",
    languajes: ["css", "html", "js"],
    libraries: {img: ["react"], text:null},
    extra: { title: null, text: null, img: null },
    backend: null,
    link_app: {demo:"demo app", url:"https://4th5k.csb.app/"},
    link_repo: "https://github.com/mauricioACV/React-JS-Proyecto-GIFos-Acamica",
  },
];
