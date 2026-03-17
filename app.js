const translations = {
    en: {
        navRooms: "Our Rooms", navLocation: "Our Location", navContact: "Contact Us",
        heroTitle: "Welcome to Nice - Hôte D'Azur Guesthouse ", heroSubtitle: "Your Comfort, Our Priority",
        heroText: "Charming stay with modern amenities in the heart of the city. <br>Address : 73 Boulevard Francois Grosso.",
        directBtn: "Book Direct & Save 10%", bookingComBtn: "Book on Booking.com", 
        roomsTitle: "Our Rooms",
        room1Title: "3x - Deluxe Double Room", room1Desc: "Spacious and elegant, featuring a private bathroom. No cancellations allowed.",
        room2Title: "2x - Superior Deluxe Double Room", room2Desc: "Perfect for families, equipped with a private bathroom. No cancellations allowed.",
        room3Title: "1x - Quadruple Room", room3Desc: "Perfect for a group of 4 friends, equipped with 4 single beds and a private bathroom. No cancellations allowed.",
        room4Title: "1x - Triple Room", room4Desc: "Perfect for a group of 3 friends, equipped with 3 single beds and a private bathroom. No cancellations allowed.",
        mapTitle: "Our Location",
        contactTitle: "Contact Us", langBtn: "FR",
        emailPh: "Your Email", msgPh: "Your Message", sendBtn: "Send Message",
        successPage: "https://samdiab-droid.github.io/hoteazur/success.html"
    },
    fr: {
        navRooms: "Nos Chambres", navLocation: "Notre Emplacement", navContact: "Contactez-nous",
        heroTitle: "Bienvenue à Nice - Hôte D'Azur Guesthouse", heroSubtitle: "Votre Confort, Notre Priorité",
        heroText: "Séjour charmant avec équipements modernes au cœur de la ville. <br>Adresse : 73 Boulevard François Grosso.",
        directBtn: "Réserver en Direct (-10%)", bookingComBtn: "Réserver sur Booking.com", 
        roomsTitle: "Nos Chambres",
        room1Title: "3x - Chambre double deluxe", room1Desc: "Spacieuse et élégante, avec une salle d'eau privée. Aucune annulation n'est acceptée.",
        room2Title: "2x - Chambre double supérieure deluxe", room2Desc: "Parfaite pour les familles, équipée d’une salle d'eau privée. Aucune annulation n'est acceptée.",
        room3Title: "1x - Chambre quadruple", room3Desc: "Idéal pour un groupe de 4 amis, avec 4 lits simples et une salle de bain privée. Aucune annulation n'est autorisée.",
        room4Title: "1x - Chambre triple", room4Desc: "Idéal pour un groupe de 3 amis, avec 3 lits simples et une salle de bain privée. Aucune annulation n'est autorisée.",
        mapTitle: "Notre Emplacement",
        contactTitle: "Contactez-nous", langBtn: "EN",
        emailPh: "Votre Email", msgPh: "Votre Message", sendBtn: "Envoyer",
        successPage: "https://samdiab-droid.github.io/hoteazur/merci.html"
    }
};

let currentLang = 'en';

function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'fr' : 'en';
    const t = translations[currentLang];

    // Navigation
    document.getElementById('nav-rooms').innerText = t.navRooms;
    document.getElementById('nav-location').innerText = t.navLocation;
    document.getElementById('nav-contact').innerText = t.navContact;

    // Hero Section
    document.getElementById('hero-title').innerText = t.heroTitle;
    document.getElementById('hero-subtitle').innerText = t.heroSubtitle;
    document.getElementById('hero-text').innerHTML = t.heroText;
    document.getElementById('direct-btn').innerText = t.directBtn;
    document.getElementById('booking-com-btn').innerText = t.bookingComBtn;

    // Rooms Section
    document.getElementById('rooms-title').innerText = t.roomsTitle;
    document.getElementById('room1-title').innerText = t.room1Title;
    document.getElementById('room1-desc').innerText = t.room1Desc;
    document.getElementById('room2-title').innerText = t.room2Title;
    document.getElementById('room2-desc').innerText = t.room2Desc;
    document.getElementById('room3-title').innerText = t.room1Title;
    document.getElementById('room3-desc').innerText = t.room1Desc;
    document.getElementById('room4-title').innerText = t.room2Title;
    document.getElementById('room4-desc').innerText = t.room2Desc;

    // Map & Contact Section
    document.getElementById('map-title').innerText = t.mapTitle;
    document.getElementById('contact-title').innerText = t.contactTitle;
    document.getElementById('lang-toggle').innerText = t.langBtn;

    // Form Redirection & Placeholders
    document.getElementById('form-email').placeholder = t.emailPh;
    document.getElementById('form-msg').placeholder = t.msgPh;
    document.getElementById('form-btn').innerText = t.sendBtn;
    document.getElementById('form-next').value = t.successPage;

    // Standardize Font Sizes
    const heroTitle = document.getElementById('hero-title');
    const heroContent = document.querySelector('.hero-content');
    heroTitle.style.fontSize = "2.0rem";
    heroContent.style.fontSize = "1rem";
}