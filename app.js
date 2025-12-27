const translations = {
    en: {
        navRooms: "Our Rooms", navContact: "Contact",
        heroTitle: "Welcome to Nice - Hotel Hôte D'Azur", heroSubtitle: "Your Comfort, Our Priority",
        heroText: "Charming stay with modern amenities in the heart of the city. Address : 73 Boulevard Francois Grosso.",
        bookBtn: "Book Now", roomsTitle: "Our Rooms",
        room1Title: "4x - Deluxe Double Room : 100€", room1Desc: "Spacious and elegant, featuring a private bathroom. No cancellations allowed.",
        room2Title: "3x - Comfort Triple Room : 105€", room2Desc: "Perfect for families, equipped with a private bathroom. No cancellations allowed.",
        mapTitle: "Our Location",
        contactTitle: "Contact Us", langBtn: "FR",
        emailPh: "Your Email",
        msgPh: "Your Message",
        sendBtn: "Send Message",
        successPage: "https://samdiab-droid.github.io/hoteazur/success.html"
    },
    fr: {
        navRooms: "Nos Chambres", navContact: "Contact",
        heroTitle: "Bienvenue à Nice - Hôtel Hôte D'Azur", heroSubtitle: "Votre Confort, Notre Priorité",
        heroText: "Séjour charmant avec équipements modernes au cœur de la ville. Adresse : 73 Boulevard François Grosso.",
        bookBtn: "Réserver", roomsTitle: "Nos Chambres",
        room1Title: "4x - Chambre double deluxe : 100€", room1Desc: "Spacieuse et élégante, avec une salle d'eau privée. Aucune annulation n'est acceptée.",
        room2Title: "3x - Chambre triple confort : 105€", room2Desc: "Parfaite pour les familles, équipée d’une salle d'eau privée. Aucune annulation n'est acceptée.",
        mapTitle: "Notre Emplacement",
        contactTitle: "Contactez-nous", langBtn: "EN",
        emailPh: "Votre Email",
        msgPh: "Votre Message",
        sendBtn: "Envoyer",
        successPage: "https://samdiab-droid.github.io/hoteazur/merci.html"
    }
};

let currentLang = 'en';

function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'fr' : 'en';
    const t = translations[currentLang];

    document.getElementById('nav-rooms').innerText = t.navRooms;
    document.getElementById('nav-contact').innerText = t.navContact;
    document.getElementById('hero-title').innerText = t.heroTitle;
    document.getElementById('hero-subtitle').innerText = t.heroSubtitle;
    document.getElementById('hero-text').innerText = t.heroText;
    document.getElementById('book-btn').innerText = t.bookBtn;
    document.getElementById('rooms-title').innerText = t.roomsTitle;
    document.getElementById('room1-title').innerText = t.room1Title;
    document.getElementById('room1-desc').innerText = t.room1Desc;
    document.getElementById('room2-title').innerText = t.room2Title;
    document.getElementById('room2-desc').innerText = t.room2Desc;
    document.getElementById('contact-title').innerText = t.contactTitle;
    document.getElementById('lang-toggle').innerText = t.langBtn;
    document.getElementById('map-title').innerText = t.mapTitle;

    // Form Updates
    document.getElementById('form-email').placeholder = t.emailPh;
    document.getElementById('form-msg').placeholder = t.msgPh;
    document.getElementById('form-btn').innerText = t.sendBtn;
    document.getElementById('form-next').value = t.successPage;

    // Font Logic
    const heroTitle = document.getElementById('hero-title');
    const heroContent = document.querySelector('.hero-content');
    if (currentLang === 'fr') {
        heroTitle.style.fontSize = "2.45rem";
        heroContent.style.fontSize = "0.92rem";
    } else {
        heroTitle.style.fontSize = "2.5rem";
        heroContent.style.fontSize = "0.85rem";
    }
}

function bookNow() {
    window.location.href = "https://www.booking.com/hotel/fr/cozy-downtown-room-near-the-beach-with-private-bath.html";
}