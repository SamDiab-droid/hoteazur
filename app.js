const translations = {
    en: {
        navRooms: "Rooms", navAbout: "About Us", navContact: "Contact",
        heroTitle: "Welcome to Hote Azur", heroSubtitle: "Your Comfort, Our Priority",
        heroText: "Experience a charming stay in our hotel with modern amenities in the heart of the city.",
        bookBtn: "Book Now", roomsTitle: "Our Rooms",
        room1Title: "Deluxe Double Room with bath", room1Desc: "Spacious and elegant, featuring a private bathtub for ultimate relaxation.",
        room2Title: "Comfort Triple Room with Shower", room2Desc: "Perfect for families or groups, equipped with a modern walk-in shower.",
        aboutTitle: "About Hote Azur", aboutText: "We pride ourselves on a welcoming atmosphere and exceptional service. Your satisfaction is our top priority.",
        contactTitle: "Contact Us", formName: "Your Name", formEmail: "Your Email", formMsg: "Your Message", formSubmit: "Send Message", langBtn: "FR"
    },
    fr: {
        navRooms: "Chambres", navAbout: "À Propos", navContact: "Contact",
        heroTitle: "Bienvenue à l'Hote Azur", heroSubtitle: "Votre Confort, Notre Priorité",
        heroText: "Vivez un séjour charmant dans notre hôtel avec des équipements modernes au cœur de la ville.",
        bookBtn: "Réserver", roomsTitle: "Nos Chambres",
        room1Title: "Chambre Double Deluxe avec baignoire", room1Desc: "Spacieuse et élégante, disposant d'une baignoire privée pour une détente ultime.",
        room2Title: "Chambre Triple Confort avec douche", room2Desc: "Parfaite pour les familles ou les groupes, équipée d'une douche à l'italienne moderne.",
        aboutTitle: "À Propos de l'Hote Azur", aboutText: "Nous sommes fiers de notre atmosphère accueillante et de notre service exceptionnel. Votre satisfaction est notre priorité absolue.",
        contactTitle: "Contactez-nous", formName: "Votre Nom", formEmail: "Votre Email", formMsg: "Votre Message", formSubmit: "Envoyer", langBtn: "EN"
    }
};

let currentLang = 'en';

function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'fr' : 'en';
    const t = translations[currentLang];

    // Navigation & Buttons
    document.getElementById('nav-rooms').innerText = t.navRooms;
    document.getElementById('nav-about').innerText = t.navAbout;
    document.getElementById('nav-contact').innerText = t.navContact;
    document.getElementById('lang-toggle').innerText = t.langBtn;

    // Hero Section
    document.getElementById('hero-title').innerText = t.heroTitle;
    document.getElementById('hero-subtitle').innerText = t.heroSubtitle;
    document.getElementById('hero-text').innerText = t.heroText;
    document.getElementById('book-btn').innerText = t.bookBtn;

    // Rooms
    document.getElementById('rooms-title').innerText = t.roomsTitle;
    document.getElementById('room1-title').innerText = t.room1Title;
    document.getElementById('room1-desc').innerText = t.room1Desc;
    document.getElementById('room2-title').innerText = t.room2Title;
    document.getElementById('room2-desc').innerText = t.room2Desc;

    // About & Contact Form
    document.getElementById('about-title').innerText = t.aboutTitle;
    document.getElementById('about-text').innerText = t.aboutText;
    document.getElementById('contact-title').innerText = t.contactTitle;
    document.getElementById('form-name').placeholder = t.formName;
    document.getElementById('form-email').placeholder = t.formEmail;
    document.getElementById('form-message').placeholder = t.formMsg;
    document.getElementById('form-submit').innerText = t.formSubmit;
}

function bookNow() {
    window.location.href = "https://www.booking.com/hotel/fr/cozy-downtown-room-near-the-beach-with-private-bath.html?chal_t=1766291207941&force_referer=";
}

// Fade-in animation on scroll
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
    });
}, { threshold: 0.1 });

document.querySelectorAll('section').forEach(section => observer.observe(section));