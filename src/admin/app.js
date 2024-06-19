import logo from "./extensions/logo.svg";
import favicon from "./extensions/favicon.ico";

const config = {
  // Replace the Strapi logo in auth (login) views
  auth: {
    logo,
  },
  menu: {
    logo,
  },
  locales: ["ru"],
  // Extend the translations
  translations: {
    ru: {
      "app.components.LeftMenu.navbrand.title": "KBHMB.RU",

      "app.components.LeftMenu.navbrand.workplace": "рабочее место",

      "Auth.form.welcome.title": "Добро пожаловать!",

      "Auth.form.welcome.subtitle": "Войдите в свою учётную запись",
    },
    en: {
      "app.components.LeftMenu.navbrand.title": "KBHMB.RU",

      "Auth.form.welcome.title": "Welcome!",

      "Auth.form.welcome.subtitle": "Log in to your account",
    },
  },
  // Disable video tutorials
  tutorials: false,
  // Disable notifications about new Strapi releases
  notifications: { releases: false },
};

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};
