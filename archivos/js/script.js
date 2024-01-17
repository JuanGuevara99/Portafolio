const header = document.querySelector(".header"),
    sections = document.querySelectorAll("section[id]"),
    skillsContainer = document.querySelector(".skills__items"),
    eduContainer = document.querySelector("#edu.timeline__items"),
    expContainer = document.querySelector("#exp.timeline__items"),
    services = document.querySelectorAll(".service"),
    formInputs = document.querySelectorAll(".form__input"),
    scrollUpBtn = document.querySelector(".scroll-up"),
    colorThemeBtn = document.querySelector(".color-theme"),
    mobileLinksContainer = document.querySelector(".header__links-mobile"),
    mobileLinks = document.querySelectorAll(".header__link-mobile a"),
    contactForm = document.getElementById("contact-form"),
    statusBox = document.querySelector(".form__status-box p");

/* ============== Header ============== */

/* ============== Skills Section ============== */
// Skills & Tools
let skills = [
    {
        skillTitle: "Fronted",
        //skillText: "Text",
        icon: "ri-code-s-slash-fill",
        tools: [
            { toolName: "HTML", toolValue: 80 },
            { toolName: "CSS", toolValue: 70 },
            { toolName: "JavaScript", toolValue: 60 },
        ],
    },

    {
        skillTitle: "Backend",
        //skillText: "Text",
        icon: "ri-server-line",
        tools: [
            { toolName: "MySQL", toolValue: 80 },
        ],
    },

    {
        skillTitle: "Desarrollo de software",
        //skillText: "Text",
        icon: "ri-settings-4-line",
        tools: [
            { toolName: "JAVA", toolValue: 80 },
            { toolName: "Kotlin", toolValue: 80 },
            { toolName: ".Net", toolValue: 80 },
        ],
    },

    {
        skillTitle: "Marketing Digital",
        //skillText: "Text",
        icon: "ri-line-chart-line",
        tools: [
            { toolName: "SEO", toolValue: 80 },
            { toolName: "Redes sociales", toolValue: 80 },
            { toolName: "Diseño", toolValue: 80 },
        ],
    },
];

function skillComponent({ skillTitle, skillText, icon, tools }) {
    return ``;
}

function renderSkills() { }
// Education & Experience
let educations = [
    {
        type: "education",
        title: "Especialización en desarrollo de software (candidato)",
        position: "Uniminuto",
        date: {
            startDate: "Enero, 2024",
            endDate: "Cursando",
        },
        desc: "Desarrollar soluciones de calidad y seguridad del Software de acuerdo con las necesidades empresariales tecnológicas de software existentes para un óptimo acceso a la información.",
    },

    {
        type: "education",
        title: "Ingeniero de sistemas",
        position: "Fundación Universitaria Juan De Castellanos",
        date: {
            startDate: "Febrero, 2019",
            endDate: "Diciembre, 2023",
        },
        desc: "analizar, diseñar e implementar soluciones informáticas o analizar soluciones ya creadas y actualizar diseños e implementaciones a nuevas tecnologías.",
    },

    {
        type: "education",
        title: "Bachiller Académico",
        position: "Escuela Normal Superior Santiago de Tunja",
        date: {
            startDate: "Febrero, 2005",
            endDate: "Diciembre, 2018",
        },
        desc: "Énfasis en pedagogía",
    },


    {
        type: "certificates",
        title: "Curso Básico de JavaScript",
        position: "Platzi",
        date: {
            startDate: "Junio, 2023",
            endDate: "",
        },
        desc: "Lenguaje de programación",
    },

    {
        type: "certificates",
        title: "Curso de Kotlin desde cero",
        position: "Platzi",
        date: {
            startDate: "Abril, 2023",
            endDate: "",
        },
        desc: "Lenguaje de programación",
    },

    {
        type: "certificates",
        title: "Curso de Introducción a SEO: Posicionamiento en Buscadores",
        position: "Platzi",
        date: {
            startDate: "Septiembre, 2022",
            endDate: "",
        },
        desc: "Marketing Digital",
    },

    {
        type: "certificates",
        title: "Especialización en Marketing Digital",
        position: "Platzi",
        date: {
            startDate: "Septiembre, 2022",
            endDate: "",
        },
        desc: "Marketing Digital",
    },

    {
        type: "certificates",
        title: "Curso de Facebook Ads Básico",
        position: "Platzi",
        date: {
            startDate: "Septiembre, 2022",
            endDate: "",
        },
        desc: "Marketing Digital",
    },

    {
        type: "experience",
        title: "Title",
        position: "Position",
        date: {
            startDate: "Mar 10, 2018",
            endDate: "2021",
        },
        desc: "Lorem Ipsum Commodo Dolor Sit Amet, Consectetur Adipisicing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. Ut Enim Ad Minim Veniam",
    },
];


function timelineComponent({ title, position, date, desc }) {
    return ``;
}

function renderEducations() { }

/* ============== Services Section ============== */

/* ============== Testimonials Section ============== */

/* ============== Contact Section ============== */

/* ============== Active Scroll ============== */

/* ============== ScrollUp Button ============== */

/* ============== Dark / Light Theme ============== */

/* ============== Send Email By EmailJS ============== */

/* ============== scrollRevealJS ============== */

window.addEventListener("scroll", () => { });

window.addEventListener("load", () => { });