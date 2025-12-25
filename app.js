const translations = {
    en: {
        navRooms: "Our Rooms", navContact: "Contact",
        heroTitle: "Welcome to Nice - Hotel Hote D'Azur", heroSubtitle: "Your Comfort, Our Priority",
        heroText: "Experience a charming stay with modern amenities in the heart of the city. Address : 73 Boulevard Francois Grosso.",
        bookBtn: "Book Now", roomsTitle: "Our Rooms",
        room1Title: "4x - Deluxe Double Room", room1Desc: "Spacious and elegant, featuring a private bathtub.",
        room2Title: "3x - Comfort Triple Room", room2Desc: "Perfect for families, equipped with a modern shower.",
        contactTitle: "Contact Us", langBtn: "FR"
    },
    fr: {
        navRooms: "Nos Chambres", navContact: "Contact",
        heroTitle: "Bienvenue à Nice - Hôtel Hote D'Azur", heroSubtitle: "Votre Confort, Notre Priorité",
        heroText: "Séjour charmant avec équipements modernes au cœur de la ville. Adresse : 73 Boulevard François Grosso.",
        bookBtn: "Réserver", roomsTitle: "Nos Chambres",
        room1Title: "4x - Chambre double deluxe", room1Desc: "Spacieuse et élégante, avec une salle d'eau privée",
        room2Title: "3x - Chambre triple confort", room2Desc: "Parfaite pour les familles, équipée d’une salle d'eau moderne.",
        contactTitle: "Contactez-nous", langBtn: "EN"
    }
};

let currentLang = 'en';

function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'fr' : 'en';
    const t = translations[currentLang];

    // Update Text Content
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

    // --- Font Adjustment Logic ---
    const heroTitle = document.getElementById('hero-title');
    const heroContent = document.querySelector('.hero-content');

    if (currentLang === 'fr') {
        heroTitle.style.fontSize = "2.45rem"; // Slightly smaller than 2.5rem
        heroContent.style.fontSize = "0.92rem"; // Shrinks subtitle and text slightly
    } else {
        heroTitle.style.fontSize = "2.5rem"; // Back to original
        heroContent.style.fontSize = "1rem";   // Back to original
    }
}
function bookNow() {
    window.location.href = "https://www.booking.com/hotel/fr/cozy-downtown-room-near-the-beach-with-private-bath.html?chal_t=1766291207941&force_referer=";
}