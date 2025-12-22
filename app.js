const translations = {
    en: {
        navRooms: "Rooms", navAbout: "About Us", navContact: "Contact",
        heroTitle: "Welcome to Hote D'Azur", heroSubtitle: "Your Comfort, Our Priority",
        heroText: "Experience a charming stay in our hotel with modern amenities in the heart of the city.",
        bookBtn: "Book Now", roomsTitle: "Our Rooms",
        room1Title: "Single Room with Private Bath", room1Desc: "Perfect for solo travellers or couples on a budget.",
        room2Title: "Double Room with Private Bath", room2Desc: "Spacious and elegant, featuring a private bathroom.",
        contactTitle: "Contact Us", langBtn: "FR"
    },
    fr: {
        navRooms: "Chambres", navAbout: "À Propos", navContact: "Contact",
        heroTitle: "Bienvenue à Hote D'Azur", heroSubtitle: "Votre Confort, Notre Priorité",
        heroText: "Vivez un séjour charmant dans notre hôtel avec des équipements modernes au cœur de la ville.",
        bookBtn: "Réserver", roomsTitle: "Nos Chambres",
        room1Title: "Chambre simple avec salle de bain privée", room1Desc: "Idéal pour les voyageurs seuls ou les couples à petit budget.",
        room2Title: "Chambre double avec salle de bain privée", room2Desc: "Spacieux et élégant, avec salle de bain privée.",
        contactTitle: "Contactez-nous", langBtn: "EN"
    }
};

let currentLang = 'en';

function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'fr' : 'en';
    const t = translations[currentLang];

    document.getElementById('nav-rooms').innerText = t.navRooms;
    document.getElementById('nav-about').innerText = t.navAbout;
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
}

function bookNow() {
    window.location.href = "https://www.booking.com/hotel/fr/cozy-downtown-room-near-the-beach-with-private-bath.html?chal_t=1766291207941&force_referer=";
}