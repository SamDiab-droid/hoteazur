function bookNow() {
    // Replace this with your actual booking page URL:
    window.location.href = "https://www.booking.com/hotel/fr/cozy-downtown-room-near-the-beach-with-private-bath.html?chal_t=1766291207941&force_referer=";
}

let currentLang = 'en';

const translations = {
    en: {
        navRooms: "Rooms",
        navAbout: "About Us",
        navContact: "Contact",
        heroTitle: "Welcome to Hote D'Azur",
        heroSubtitle: "Your Comfort, Our Priority",
        heroText: "Experience a charming stay in our hotel with modern amenities in the heart of the city.",
        bookBtn: "Book Now",
        roomsTitle: "Our Rooms",
        room1Title: "Single Room with private bath",
        room1Desc: "Perfect for solo travellers or couples on a budget.",
        room2Title: "Double Room with private bath",
        room2Desc: "Spacious and elegant, featuring a private bathroom.",
        aboutTitle: "About Hote Azur",
        aboutText: "We pride ourselves on a welcoming atmosphere and exceptional service. Your satisfaction is our top priority.",
        contactTitle: "Contact Us",
        langBtn: "FR"
        formName: "Your Name",
        formEmail: "Your Email",
        formMsg: "Your Message",
        formSubmit: "Send Message"
    },
    fr: {
        navRooms: "Chambres",
        navAbout: "À Propos",
        navContact: "Contact",
        heroTitle: "Bienvenue à Hote D'Azur",
        heroSubtitle: "Votre Confort, Notre Priorité",
        heroText: "Vivez un séjour charmant dans notre hôtel avec des équipements modernes au cœur de la ville.",
        bookBtn: "Réserver",
        roomsTitle: "Nos Chambres",
        room1Title: "Chambre simple avec salle d'eau",
        room1Desc: "Idéal pour les voyageurs seuls ou les couples à petit budget.",
        room2Title: "Chambre double avec salle d'eau",
        room2Desc: "Spacieuse et élégante, disposant d'une salle d'eau privée.",
        aboutTitle: "À Propos de Hote D'Azur",
        aboutText: "Nous sommes fiers de notre atmosphère accueillante et de notre service exceptionnel. Votre satisfaction est notre priorité absolue.",
        contactTitle: "Contactez-nous",
        langBtn: "EN"
        formName: "Votre Nom",
        formEmail: "Votre Email",
        formMsg: "Votre Message",
        formSubmit: "Envoyer le Message"
    }
};

function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'fr' : 'en';
    const t = translations[currentLang];

    // Update Nav
    document.querySelector('a[href="#rooms"]').innerText = t.navRooms;
    document.querySelector('a[href="#about"]').innerText = t.navAbout;
    document.querySelector('a[href="#contact"]').innerText = t.navContact;
    
    // Update Hero
    document.getElementById('hero-title').innerText = t.heroTitle;
    document.getElementById('hero-subtitle').innerText = t.heroSubtitle;
    document.getElementById('hero-text').innerText = t.heroText;
    document.querySelector('.btn-primary').innerText = t.bookBtn;

    // Update Rooms
    document.getElementById('rooms-title').innerText = t.roomsTitle;
    document.querySelectorAll('.room-title')[0].innerText = t.room1Title;
    document.querySelectorAll('.room-description')[0].innerText = t.room1Desc;
    document.querySelectorAll('.room-title')[1].innerText = t.room2Title;
    document.querySelectorAll('.room-description')[1].innerText = t.room2Desc;

    // Update About & Contact
    document.querySelector('#about .section-title').innerText = t.aboutTitle;
    document.querySelector('#about p').innerText = t.aboutText;
    document.querySelector('#contact .section-title').innerText = t.contactTitle;

    // Update Button
    document.getElementById('lang-toggle').innerText = t.langBtn;

    document.getElementById('form-name').placeholder = t.formName;
    document.getElementById('form-email').placeholder = t.formEmail;
    document.getElementById('form-message').placeholder = t.formMsg;
    document.getElementById('form-submit').innerText = t.formSubmit;
}

// Smooth Scrolling and Observer logic remains the same...

// Smooth Scrolling for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Fade-in sections on scroll
const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1
});

sections.forEach(section => {
    observer.observe(section);
});