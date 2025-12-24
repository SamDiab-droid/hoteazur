const translations = {
    en: {
        "nav-home": "Home",
        "nav-services": "Services",
        "nav-contact": "Contact",
        "welcome-msg": "Welcome to our Website",
        "sub-text": "We provide the best services for you."
    },
    es: {
        "nav-home": "Inicio",
        "nav-services": "Servicios",
        "nav-contact": "Contacto",
        "welcome-msg": "Bienvenido a nuestro sitio web",
        "sub-text": "Ofrecemos los mejores servicios para usted."
    },
    fr: {
        "nav-home": "Accueil",
        "nav-services": "Services",
        "nav-contact": "Contact",
        "welcome-msg": "Bienvenue sur notre site",
        "sub-text": "Nous fournissons les meilleurs services pour vous."
    }
};

const languageSwitcher = document.getElementById('language-switcher');

// Function to update text based on selected language
function updateLanguage(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });

    // Update the document language attribute
    document.documentElement.lang = lang;
}

// Event listener for the dropdown
languageSwitcher.addEventListener('change', (e) => {
    updateLanguage(e.target.value);
});

// Run once when the page loads
document.addEventListener('DOMContentLoaded', () => {
    updateLanguage('en');
});