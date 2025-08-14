// Mobile menu toggle
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
        
menuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

// Language selector toggle
const langToggle = document.getElementById('lang-toggle');
const langSelector = document.getElementById('lang-selector');
const langClose = document.getElementById('lang-close');

langToggle.addEventListener('click', () => {
  langSelector.classList.toggle('hidden');
});

langClose.addEventListener('click', () => {
  langSelector.classList.add('hidden');
});

// Language translations
const translations = {
  ca: {
    // Nav
    "nav.home": "Inici",
    "nav.about": "Sobre mi",
    "nav.skills": "Habilitats",
    "nav.experience": "Experiència",
    "nav.projects": "Projectes",
    "nav.contact": "Contacte",
    
    // Hero
    "hero.title": "Hola, sóc Joel",
    "hero.subtitle": "Desenvolupador FullStack",
    "hero.description": "Capaç de dissenyar i implementar solucions integrals, tant en backend com en frontend, amb un enfocament en la qualitat del codi i l'optimització de processos.",
    "hero.contactBtn": "Contacta'm",
    "hero.projectsBtn": "Els meus projectes",
    
    // About
    "about.title": "Sobre mi",
    "about.personalInfo": "Informació personal",
    "about.birthdateLabel": "Data de naixement:",
    "about.birthdate": "07/11/2003 (21 anys)",
    "about.phoneLabel": "Telèfon:",
    "about.personalSkills": "Habilitats personals",
    "about.education": "Educació",
    "education.degree1": "Cicle Formatiu de Grau Superior, DAM",
    "education.degree1Status": "Finalitzat (2025)",
    "education.present": "Actualitat",
    "education.school1": "Institut de l'Ebre",
    "education.degree2": "Cicle Formatiu de Grau Mitjà, SMX",
    "education.degree2Status": "Finalitzat",
    "education.school2": "Institut de l'Ebre",
    "education.certificate": "Certificat KET (Key English Test)",
    "education.certificateStatus": "Finalitzat",
    "education.school3": "Irish School",
    
    // Skills
    "skills.title": "Habilitats tècniques",
    "skills.teamwork": "Treball en equip",
    "skills.problemSolving": "Resolució de problemes",
    "skills.proactive": "Proactiu",
    "skills.adaptability": "Adaptabilitat",
    "skills.programming": "Llenguatges de programació",
    "skills.backend": "Backend",
    "skills.frontend": "Frontend",
    "skills.databases": "Bases de dades",
    "skills.other": "Altres habilitats",
    "skills.itMaintenance": "Manteniment informàtic",
    "skills.networkConfig": "Configuració de xarxes",
    "skills.troubleshooting": "Resolució de problemes",
    
    // Experience
    "experience.title": "Experiència laboral",
    "experience.job1Title": "Desenvolupador Full Stack Junior (Pràctiques Duals)",
    "experience.job1Desc1": "Desenvolupament i manteniment d'aplicacions amb C# i .NET, projectes d'escriptori i web.",
    "experience.job1Desc2": "Gestió de bases de dades amb SQL per a l'optimització i consulta de dades.",
    "experience.job1Desc3": "Creació i personalització de llocs web amb WordPress, aplicant HTML i CSS per a dissenys responsius i funcionals.",
    "experience.job2Title": "Desenvolupador Freelance",
    "experience.job2Duration": "2 mesos",
    "experience.job2Company": "Projectes independents",
    "experience.job2Desc1": "Desenvolupament de llocs web personalitzats per a clients.",
    "experience.job2Desc2": "Implementació de sistemes de gestió de continguts.",
    "experience.job2Desc3": "Creació d'interfícies d'usuari atractives i funcionals.",
    "experience.job3Title": "Tècnic de Manteniment Informàtic (Pràctiques)",
    "experience.job3Company": "Consell Comarcal del Baix Ebre",
    "experience.job3Desc1": "Resolució de problemes tècnics en equips informàtics, incloent-hi manteniment de hardware i software.",
    "experience.job3Desc2": "Suport a usuaris en l'ús de sistemes i aplicacions, garantint la continuitat del servei.",
    "experience.job3Desc3": "Documentació de processos tècnics per facilitar la gestió interna.",
    
    // Projects
    "projects.title": "Els meus projectes",
    "projects.project1Desc": "Pàgina web per a una associació de rescat de gats a Jesús, desenvolupada amb Tailwind CSS i desplegada a Vercel.",
    "projects.responsive": "Responsive",
    "projects.project2Desc": "Pàgina web per a una pizzería amb gestió d'administrador per canviar menús, desenvolupada amb Laravel.",
    "projects.adminSystem": "Sistema d'admin",
    "projects.visitProject": "Visitar projecte",
    
    // Contact
    "contact.title": "Contacta amb mi",
    "contact.sendMessage": "Envia'm un missatge",
    "contact.name": "Nom",
    "contact.email": "Correu electrònic",
    "contact.message": "Missatge",
    "contact.sendBtn": "Enviar missatge",
    "contact.contactInfo": "Informació de contacte",
    "contact.phone": "Telèfon",
    "contact.location": "Ubicació",
    "contact.locationValue": "Baix Ebre, Catalunya",
    "contact.findMe": "També em pots trobar a:",
    
    // Footer
    "footer.subtitle": "Desenvolupador FullStack",
    "footer.copyright": "© 2023 JoelCMDev. Tots els drets reservats."
  },
  es: {
    // Nav
    "nav.home": "Inicio",
    "nav.about": "Sobre mí",
    "nav.skills": "Habilidades",
    "nav.experience": "Experiencia",
    "nav.projects": "Proyectos",
    "nav.contact": "Contacto",
    
    // Hero
    "hero.title": "Hola, soy Joel",
    "hero.subtitle": "Desarrollador FullStack",
    "hero.description": "Capaz de diseñar e implementar soluciones integrales, tanto en backend como en frontend, con un enfoque en la calidad del código y la optimización de procesos.",
    "hero.contactBtn": "Contáctame",
    "hero.projectsBtn": "Mis proyectos",
    
    // About
    "about.title": "Sobre mí",
    "about.personalInfo": "Información personal",
    "about.birthdateLabel": "Fecha de nacimiento:",
    "about.birthdate": "07/11/2003 (21 años)",
    "about.phoneLabel": "Teléfono:",
    "about.personalSkills": "Habilidades personales",
    "about.education": "Educación",
    "education.degree1": "Ciclo Formativo de Grado Superior, DAM",
    "education.degree1Status": "Finalizado (2025)",
    "education.present": "Actualidad",
    "education.school1": "Institut de l'Ebre",
    "education.degree2": "Ciclo Formativo de Grado Medio, SMX",
    "education.degree2Status": "Finalizado",
    "education.school2": "Institut de l'Ebre",
    "education.certificate": "Certificado KET (Key English Test)",
    "education.certificateStatus": "Finalizado",
    "education.school3": "Irish School",
    
    // Skills
    "skills.title": "Habilidades técnicas",
    "skills.teamwork": "Trabajo en equipo",
    "skills.problemSolving": "Resolución de problemas",
    "skills.proactive": "Proactivo",
    "skills.adaptability": "Adaptabilidad",
    "skills.programming": "Lenguajes de programación",
    "skills.backend": "Backend",
    "skills.frontend": "Frontend",
    "skills.databases": "Bases de datos",
    "skills.other": "Otras habilidades",
    "skills.itMaintenance": "Mantenimiento informático",
    "skills.networkConfig": "Configuración de redes",
    "skills.troubleshooting": "Resolución de problemas",
    
    // Experience
    "experience.title": "Experiencia laboral",
    "experience.job1Title": "Desarrollador Full Stack Junior (Prácticas Duales)",
    "experience.job1Desc1": "Desarrollo y mantenimiento de aplicaciones con C# y .NET, proyectos de escritorio y web.",
    "experience.job1Desc2": "Gestión de bases de datos con SQL para la optimización y consulta de datos.",
    "experience.job1Desc3": "Creación y personalización de sitios web con WordPress, aplicando HTML y CSS para diseños responsivos y funcionales.",
    "experience.job2Title": "Desarrollador Freelance",
    "experience.job2Duration": "2 meses",
    "experience.job2Company": "Proyectos independientes",
    "experience.job2Desc1": "Desarrollo de sitios web personalizados para clientes.",
    "experience.job2Desc2": "Implementación de sistemas de gestión de contenidos.",
    "experience.job2Desc3": "Creación de interfaces de usuario atractivas y funcionales.",
    "experience.job3Title": "Técnico de Mantenimiento Informático (Prácticas)",
    "experience.job3Company": "Consell Comarcal del Baix Ebre",
    "experience.job3Desc1": "Resolución de problemas técnicos en equipos informáticos, incluyendo mantenimiento de hardware y software.",
    "experience.job3Desc2": "Soporte a usuarios en el uso de sistemas y aplicaciones, garantizando la continuidad del servicio.",
    "experience.job3Desc3": "Documentación de procesos técnicos para facilitar la gestión interna.",
    
    // Projects
    "projects.title": "Mis proyectos",
    "projects.project1Desc": "Página web para una asociación de rescate de gatos en Jesús, desarrollada con Tailwind CSS y desplegada en Vercel.",
    "projects.responsive": "Responsive",
    "projects.project2Desc": "Página web para una pizzería con gestión de administrador para cambiar menús, desarrollada con Laravel.",
    "projects.adminSystem": "Sistema de admin",
    "projects.visitProject": "Visitar proyecto",
    
    // Contact
    "contact.title": "Contacta conmigo",
    "contact.sendMessage": "Envíame un mensaje",
    "contact.name": "Nombre",
    "contact.email": "Correo electrónico",
    "contact.message": "Mensaje",
    "contact.sendBtn": "Enviar mensaje",
    "contact.contactInfo": "Información de contacto",
    "contact.phone": "Teléfono",
    "contact.location": "Ubicación",
    "contact.locationValue": "Baix Ebre, Cataluña",
    "contact.findMe": "También me puedes encontrar en:",
    
    // Footer
    "footer.subtitle": "Desarrollador FullStack",
    "footer.copyright": "© 2023 JoelCMDev. Todos los derechos reservados."
  },
  en: {
    // Nav
    "nav.home": "Home",
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.experience": "Experience",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    
    // Hero
    "hero.title": "Hello, I'm Joel",
    "hero.subtitle": "FullStack Developer",
    "hero.description": "Capable of designing and implementing comprehensive solutions, both in backend and frontend, with a focus on code quality and process optimization.",
    "hero.contactBtn": "Contact me",
    "hero.projectsBtn": "My projects",
    
    // About
    "about.title": "About me",
    "about.personalInfo": "Personal information",
    "about.birthdateLabel": "Date of birth:",
    "about.birthdate": "11/07/2003 (21 years old)",
    "about.phoneLabel": "Phone:",
    "about.personalSkills": "Personal skills",
    "about.education": "Education",
    "education.degree1": "Higher Degree Vocational Training, DAM",
    "education.degree1Status": "Completed (2025)",
    "education.present": "Present",
    "education.school1": "Institut de l'Ebre",
    "education.degree2": "Intermediate Degree Vocational Training, SMX",
    "education.degree2Status": "Completed",
    "education.school2": "Institut de l'Ebre",
    "education.certificate": "KET Certificate (Key English Test)",
    "education.certificateStatus": "Completed",
    "education.school3": "Irish School",
    
    // Skills
    "skills.title": "Technical skills",
    "skills.teamwork": "Teamwork",
    "skills.problemSolving": "Problem solving",
    "skills.proactive": "Proactive",
    "skills.adaptability": "Adaptability",
    "skills.programming": "Programming languages",
    "skills.backend": "Backend",
    "skills.frontend": "Frontend",
    "skills.databases": "Databases",
    "skills.other": "Other skills",
    "skills.itMaintenance": "IT maintenance",
    "skills.networkConfig": "Network configuration",
    "skills.troubleshooting": "Troubleshooting",
    
    // Experience
    "experience.title": "Work experience",
    "experience.job1Title": "Junior Full Stack Developer (Dual Internship)",
    "experience.job1Desc1": "Development and maintenance of applications with C# and .NET, desktop and web projects.",
    "experience.job1Desc2": "Database management with SQL for data optimization and querying.",
    "experience.job1Desc3": "Creation and customization of websites with WordPress, applying HTML and CSS for responsive and functional designs.",
    "experience.job2Title": "Freelance Developer",
    "experience.job2Duration": "2 months",
    "experience.job2Company": "Independent projects",
    "experience.job2Desc1": "Development of customized websites for clients.",
    "experience.job2Desc2": "Implementation of content management systems.",
    "experience.job2Desc3": "Creation of attractive and functional user interfaces.",
    "experience.job3Title": "IT Maintenance Technician (Internship)",
    "experience.job3Company": "Consell Comarcal del Baix Ebre",
    "experience.job3Desc1": "Resolution of technical problems in computer equipment, including hardware and software maintenance.",
    "experience.job3Desc2": "User support in the use of systems and applications, ensuring service continuity.",
    "experience.job3Desc3": "Documentation of technical processes to facilitate internal management.",
    
    // Projects
    "projects.title": "My projects",
    "projects.project1Desc": "Website for a cat rescue association in Jesús, developed with Tailwind CSS and deployed on Vercel.",
    "projects.responsive": "Responsive",
    "projects.project2Desc": "Website for a pizzeria with admin management to change menus, developed with Laravel.",
    "projects.adminSystem": "Admin system",
    "projects.visitProject": "Visit project",
    
    // Contact
    "contact.title": "Contact me",
    "contact.sendMessage": "Send me a message",
    "contact.name": "Name",
    "contact.email": "Email",
    "contact.message": "Message",
    "contact.sendBtn": "Send message",
    "contact.contactInfo": "Contact information",
    "contact.phone": "Phone",
    "contact.location": "Location",
    "contact.locationValue": "Baix Ebre, Catalonia",
    "contact.findMe": "You can also find me on:",
    
    // Footer
    "footer.subtitle": "FullStack Developer",
    "footer.copyright": "© 2023 JoelCMDev. All rights reserved."
  }
};

// Change language function
function changeLanguage(lang) {
  // Update active language button
  document.querySelectorAll('.language-selector').forEach(btn => {
    btn.classList.remove('bg-primary', 'text-white');
    btn.classList.add('bg-gray-200');
  });
  document.getElementById(`lang-${lang}`).classList.remove('bg-gray-200');
  document.getElementById(`lang-${lang}`).classList.add('bg-primary', 'text-white');

  // Update all elements with data-i18n attribute
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      element.textContent = translations[lang][key];
    }
  });
}

// Initialize with Catalan
changeLanguage('ca');

// Add event listeners to language buttons
document.getElementById('lang-ca').addEventListener('click', () => changeLanguage('ca'));
document.getElementById('lang-es').addEventListener('click', () => changeLanguage('es'));
document.getElementById('lang-en').addEventListener('click', () => changeLanguage('en'));

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: 'smooth'
      });
      
      // Close mobile menu if open
      if (!mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.add('hidden');
      }
    }
  });
});

// Animation on scroll
const observerOptions = {
  threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-fade-in');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
  observer.observe(section);
});