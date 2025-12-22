const translations = {
    en: {
        navRooms: "Rooms",
        navContact: "Contact",
        heroTitle: "Welcome to Hote Azur",
        heroText: "Experience a charming stay in our hotel with modern amenities in the heart of the city.",
        bookBtn: "Book Now",
        roomsTitle: "Our Rooms",
        room1Title: "Deluxe Double Room with bath",
        room1Desc: "Spacious and elegant, featuring a private bathtub.",
        room2Title: "Comfort Triple Room with Shower",
        room2Desc: "Perfect for families, equipped with a modern shower.",
        contactTitle: "Contact Us",
        langBtn: "FR"
    },
    fr: {
        navRooms: "Chambres",
        navContact: "Contact",
        heroTitle: "Bienvenue à l'Hote Azur",
        heroText: "Vivez un séjour charmant dans notre hôtel avec des équipements modernes au cœur de la ville.",
        bookBtn: "Réserver",
        roomsTitle: "Nos Chambres",
        room1Title: "Chambre Double Deluxe avec baignoire",
        room1Desc: "Spacieuse et élégante, disposant d'une baignoire privée.",
        room2Title: "Chambre Triple Confort avec douche",
        room2Desc: "Parfaite pour les familles, équipée d'une douche moderne.",
        contactTitle: "Contactez-nous",
        langBtn: "EN"
    }
};

let currentLang = 'en';

function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'fr' : 'en';
    const t = translations[currentLang];

    document.getElementById('nav-rooms').innerText = t.navRooms;
    document.getElementById('nav-contact').innerText = t.navContact;
    document.getElementById('hero-title').innerText = t.heroTitle;
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