import { createContext, useState } from "react";

export const LanguageContext = createContext();

const translations = {
  fr: {
   nav: {
  home: "Accueil",
  vehicles: "Véhicules",
  reservation: "Réservation",
  myReservations: " Mes Réservations",
  login: "Se connecter",
  register: "Créer un compte",
  profile: "Profil",
},
    hero: {
      badge: "Rento Luxury",

      title1: "Bienvennue",

      title2: "chez Rento.",

      text:
        "Réservez le véhicule idéal pour chaque trajet, avec une expérience fluide, sécurisée et pensée pour votre confort.",

      reserve: "Réserver maintenant",

      explore: "Explorer",

      stat1: "Voitures premium",

      stat2: "Support client",

      stat3: "Réservation rapide",

      scroll: "Scroll to explore",

      cardSmall: "Luxury Experience",

      carName: "Aston Martin DBX",

      cardText: "Performance et élégance.",
    },
    login: {
  title: "Bon retour.",
  subtitle: "Connectez-vous à votre espace client et continuez votre réservation.",
  email: "Adresse e-mail",
  password: "Mot de passe",
  remember: "Se souvenir de moi",
  forgot: "Mot de passe oublié ?",
  button: "Se connecter",
  noAccount: "Pas encore de compte ?",
  createAccount: "Créer un compte",
},
register: {
  title: "Créer un compte.",
  subtitle: "Rejoignez Rento et commencez votre expérience premium.",
  fullname: "Nom complet",
  email: "Adresse e-mail",
  phone: "Téléphone",
  password: "Mot de passe",
  button: "Créer mon compte",
  haveAccount: "Déjà inscrit ?",
  login: "Se connecter",
},
steps: {
  badge: "Process",
  title1: "Réserver avec",
  title2: "élégance.",
  text: "Une expérience de réservation fluide et soignée, conçue pour vous guider naturellement à chaque étape.",

  step1Title: "Documents",
  step1Text: "Ajoutez votre CIN ou permis.",

  step2Title: "Scan OCR",
  step2Text: "Extraction automatique des informations.",

  step3Title: "Véhicule",
  step3Text: "Choisissez votre voiture et vos dates.",

  step4Title: "Validation",
  step4Text: "Confirmez votre demande de réservation.",
},
featured: {
  badge: "Premium Collection",
  title1: "Des véhicules pensés",
  title2: "pour vos trajets.",
  statCars: "Voitures",
  statSupport: "Support",
  statBooking: "Réserver",
  filter: "Filtrer",
  seeAll: "Voir tout le catalogue",
  categories: {
    all: "Tous",
    premium: "Premium",
    suv: "SUV",
    sedan: "Berline",
    sport: "Sport",
  },
},
card: {
  from: "À partir de",
},
footer: {
  description: "Plateforme premium de réservation de véhicules avec scan intelligent des documents.",
  navigation: "Navigation",
  services: "Services",
  contact: "Contact",
  home: "Accueil",
  vehicles: "Véhicules",
  reservation: "Réservation",
  service1: "Scan CIN / Permis",
  service2: "Réservation rapide",
  service3: "Gestion profil",
  service4: "Support client",
  support: "Support 24/7",
  supportText: "Notre équipe reste disponible pour vous accompagner à tout moment.",
  copy: "© 2026 Rentivo. Tous droits réservés.",
  privacy: "Confidentialité",
  terms: "Conditions",
  security: "Sécurité",
},

  },

  en: {
   nav: {
  home: "Home",
  vehicles: "Vehicles",
  reservation: "Reservation",
  myReservations: " my Reservation",
  login: "Sign in",
  register: "Register",
  profile: "Profile",
},
    hero: {
      badge: "Rento Luxury",

      title1: "Crafted",

      title2: "to move you.",

      text:
        "Book the ideal vehicle for every journey, with a smooth, secure experience designed around your comfort.",

      reserve: "Book now",

      explore: "Explore",

      stat1: "Premium cars",

      stat2: "Customer support",

      stat3: "Fast booking",

      scroll: "Scroll to explore",

      cardSmall: "Luxury Experience",

      carName: "Aston Martin DBX",

      cardText: "Performance and elegance.",
    },
    login: {
  title: "Welcome back.",
  subtitle: "Sign in to your client space and continue your reservation.",
  email: "Email address",
  password: "Password",
  remember: "Remember me",
  forgot: "Forgot password?",
  button: "Sign in",
  noAccount: "No account yet?",
  createAccount: "Create account",
},
register: {
  title: "Create an account.",
  subtitle: "Join Rentivo and start your premium experience.",
  fullname: "Full name",
  email: "Email address",
  phone: "Phone",
  password: "Password",
  button: "Create my account",
  haveAccount: "Already registered?",
  login: "Sign in",
},
steps: {
  badge: "Process",
  title1: "Book with",
  title2: "elegance.",
  text: "A simple, fast and premium process to reserve your vehicle with intelligent document scanning.",

  step1Title: "Documents",
  step1Text: "Upload your ID or driving license.",

  step2Title: "OCR Scan",
  step2Text: "Automatic information extraction.",

  step3Title: "Vehicle",
  step3Text: "Choose your vehicle and dates.",

  step4Title: "Validation",
  step4Text: "Confirm your reservation request.",
}, featured: {
  badge: "Premium Collection",
  title1: "Vehicles designed",
  title2: "for your journeys.",
  statCars: "Cars",
  statSupport: "Support",
  statBooking: "Book",
  filter: "Filter",
  seeAll: "View full catalogue",
  categories: {
    all: "All",
    premium: "Premium",
    suv: "SUV",
    sedan: "Sedan",
    sport: "Sport",
  },
},
card: {
  from: "Starting from",
},
footer: {
  description: "A premium vehicle reservation platform with intelligent document scanning.",
  navigation: "Navigation",
  services: "Services",
  contact: "Contact",
  home: "Home",
  vehicles: "Vehicles",
  reservation: "Reservation",
  service1: "ID / License scan",
  service2: "Fast booking",
  service3: "Profile management",
  service4: "Customer support",
  support: "24/7 Support",
  supportText: "Our team is always available to assist you.",
  copy: "© 2026 Rentivo. All rights reserved.",
  privacy: "Privacy",
  terms: "Terms",
  security: "Security",
},

  },

 ar: {
  nav: {
  home: "الرئيسية",
  vehicles: "السيارات",
  reservation: "الحجز",
  myReservations: "الحجوزات",
  login: "تسجيل الدخول",
  register: "إنشاء حساب",
  profile: "الملف الشخصي",
},

  hero: {
    badge: "رينتو الفاخرة",

    title1: "مصممة",

    title2: "لتمنحك التميز.",

    text:
      "اكتشف طريقة جديدة لحجز السيارات الفاخرة بتجربة أنيقة، سريعة وسهلة.",

    reserve: "احجز الآن",

    explore: "استكشف",

    stat1: "سيارات فاخرة",

    stat2: "دعم العملاء",

    stat3: "حجز سريع",

    scroll: "مرر للاستكشاف",

    cardSmall: "تجربة فاخرة",

    carName: "أستون مارتن DBX",

    cardText: "أداء وأناقة.",
  },

  login: {
    title: "مرحباً بعودتك.",
    subtitle: "سجل الدخول إلى حسابك وأكمل حجزك.",
    email: "البريد الإلكتروني",
    password: "كلمة المرور",
    remember: "تذكرني",
    forgot: "نسيت كلمة المرور؟",
    button: "تسجيل الدخول",
    noAccount: "ليس لديك حساب؟",
    createAccount: "إنشاء حساب",
  },
register: {
  title: "إنشاء حساب.",
  subtitle: "انضم إلى Rentivo وابدأ تجربتك الفاخرة.",
  fullname: "الاسم الكامل",
  email: "البريد الإلكتروني",
  phone: "الهاتف",
  password: "كلمة المرور",
  button: "إنشاء حسابي",
  haveAccount: "لديك حساب بالفعل؟",
  login: "تسجيل الدخول",
},
  steps: {
    badge: "العملية",
    title1: "احجز",
    title2: "بأناقة.",
    text:
      "خطوات بسيطة وسريعة وفاخرة لحجز سيارتك عبر المسح الذكي للوثائق.",

    step1Title: "الوثائق",
    step1Text: "قم برفع البطاقة الوطنية أو رخصة السياقة.",

    step2Title: "المسح الذكي",
    step2Text: "استخراج تلقائي للمعلومات.",

    step3Title: "السيارة",
    step3Text: "اختر السيارة والتواريخ المناسبة.",

    step4Title: "التأكيد",
    step4Text: "قم بتأكيد طلب الحجز.",
  },

  featured: {
    badge: "مجموعة فاخرة",
    title1: "سيارات مصممة",
    title2: "لرحلاتك.",
    statCars: "سيارات",
    statSupport: "دعم",
    statBooking: "حجز",
    filter: "تصفية",
    seeAll: "عرض كل السيارات",

    categories: {
      all: "الكل",
      premium: "فاخر",
      suv: "SUV",
      sedan: "سيدان",
      sport: "رياضية",
    },
  },

  card: {
    from: "ابتداءً من",
  },
  footer: {
  description: "منصة فاخرة لحجز السيارات مع مسح ذكي للوثائق.",
  navigation: "التنقل",
  services: "الخدمات",
  contact: "التواصل",
  home: "الرئيسية",
  vehicles: "السيارات",
  reservation: "الحجز",
  service1: "مسح البطاقة / الرخصة",
  service2: "حجز سريع",
  service3: "إدارة الملف الشخصي",
  service4: "دعم العملاء",
  support: "دعم 24/7",
  supportText: "فريقنا متوفر دائماً لمساعدتك في أي وقت.",
  copy: "© 2026 Rentivo. جميع الحقوق محفوظة.",
  privacy: "الخصوصية",
  terms: "الشروط",
  security: "الأمان",
},

},
};

function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("fr");

  const t = translations[language];

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export default LanguageProvider;