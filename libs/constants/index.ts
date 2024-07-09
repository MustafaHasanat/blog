import { Locale } from "../configs/i18n.config";

const constants = {
    links: {
        bmcLink: "https://www.buymeacoffee.com/mustafahasanat",
    },
    avatarIons: [
        {
            color: "red",
            logo: "https://cdn.sanity.io/images/mhuj7snm/production/e5fc9de77d06ace427f0310d25ef62e2ced56d3a-1024x1024.png",
            position: { rotateZ: -60, rotateY: 80, delay: 3.5 },
        },
        {
            color: "lightblue",
            logo: "https://cdn.sanity.io/images/mhuj7snm/production/c65e1176f68498147df5ca749f1b6758a9e0e6bd-720x720.png",
            position: { rotateZ: 0, rotateY: 80, delay: 2.5 },
        },
        {
            color: "red",
            logo: "https://cdn.sanity.io/images/mhuj7snm/production/9398dc3bb6f83067b7864376994159150c598ca8-512x512.png",
            position: { rotateZ: 60, rotateY: 80, delay: 1.5 },
        },
        {
            color: "green",
            logo: "https://cdn.sanity.io/images/mhuj7snm/production/c4fc18fff855cd2498eb32308d3eea394c59ae07-437x437.png",
            position: { rotateZ: -60, rotateY: 80, delay: 0.5 },
        },
        {
            color: "white",
            logo: "https://cdn.sanity.io/images/mhuj7snm/production/b6035098e54e39c805108e09f5cb9bded9258301-224x224.png",
            position: { rotateZ: -60, rotateY: 80, delay: 5 },
        },
        {
            color: "cyan",
            logo: "https://cdn.sanity.io/images/mhuj7snm/production/41fc60f7684314c6318bc0cda6a8109f27ed6208-1296x1296.png",
            position: { rotateZ: 60, rotateY: 80, delay: 3 },
        },
        {
            color: "yellow",
            logo: "https://cdn.sanity.io/images/mhuj7snm/production/6c6cd70c6ad00d1f16fde44cd30fbcb2f263869d-2048x2048.png",
            position: { rotateZ: 0, rotateY: 80, delay: 4 },
        },
        {
            color: "orange",
            logo: "https://cdn.sanity.io/images/mhuj7snm/production/5d9dada164d6e4f79e8b73aa1283d50c06981c45-420x420.png",
            position: { rotateZ: 0, rotateY: 80, delay: 1 },
        },
        {
            color: "black",
            logo: "https://cdn.sanity.io/images/mhuj7snm/production/91d83b85eebc61025b23040c973588d7b89dc9e8-1347x1347.png",
            position: { rotateZ: 60, rotateY: 80, delay: 4.5 },
        },
        {
            color: "cyan",
            logo: "https://cdn.sanity.io/images/mhuj7snm/production/a7c2b1ab35dd02825dcb5c53a02a0a43d98f8f7a-441x441.png",
            position: { rotateZ: 60, rotateY: 80, delay: 0 },
        },
        {
            color: "blue",
            logo: "https://cdn.sanity.io/images/mhuj7snm/production/6bbb64055a5539acf7795fd664e9e52f3f90da9b-768x768.png",
            position: { rotateZ: 0, rotateY: 78, delay: 5.5 },
        },
        {
            color: "cyan",
            logo: "https://cdn.sanity.io/images/mhuj7snm/production/a41cc1be549f3e29d3d8cf988e2633ffb8d02279-152x152.png",
            position: { rotateZ: -60, rotateY: 80, delay: 2 },
        },
    ],
    profiles: [
        {
            title: "linkedin",
            url: "https://www.linkedin.com/in/mustafa-alhasanat",
            imagePath: "/icons/linkedin-logo.png",
        },
        {
            title: "calendly",
            url: "https://calendly.com/mustafa-hasanat/long-interview",
            imagePath: "/icons/calendly-logo.png",
        },
        {
            title: "coursera",
            url: "https://www.coursera.org/user/6a1a09a353774aa843c9328e7053d5f9",
            imagePath: "/icons/coursera-logo.png",
        },
        {
            title: "github",
            url: "https://github.com/MustafaHasanat",
            imagePath: "/icons/github-logo.png",
        },
        {
            title: "leetcode",
            url: "https://leetcode.com/Mustafa1999",
            imagePath: "/icons/leetcode-logo.png",
        },
        {
            title: "npm",
            url: "https://www.npmjs.com/~mustafa-alhasanat",
            imagePath: "/icons/npm-logo.png",
        },
        {
            title: "udemy",
            url: "https://www.udemy.com/user/mustfa-alhasana",
            imagePath: "/icons/udemy-logo.png",
        },
    ],
    footerQuickLinks: [
        {
            title: "testimonials",
            url: "about",
        },
        {
            title: "emailMe",
            url: "about",
        },
        {
            title: "courses",
            url: "about",
        },
        {
            title: "projects",
            url: "about",
        },
    ],
    navItems: (locale: Locale) => [
        {
            phrase: "blog",
            path: `/${locale}`,
        },
        {
            phrase: "portfolio",
            path: `/${locale}/portfolio`,
        },
        {
            phrase: "about",
            path: `/${locale}/about`,
        },
        {
            phrase: "contact",
            path: `/${locale}/contact`,
        },
    ],
};

export default constants;
