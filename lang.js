// Object to store language translations
const translations = {
    en: {
        "main-title": "VTuber Commission Music Video",
        "header-desc": "Order a personalized music video featuring your VTuber character",
        "intro-title": "What We Offer: VTuber Music Videos",
        "intro-desc": "Get a customized music video featuring your VTuber character. Start now to create the best music project!",
        "portfolio-title": "Our Work",
        "portfolio-desc": "Check out some of our amazing VTuber music videos!",
        "features-title": "Key Features",
        "feature-1": "Endless creativity with unique animation designs",
        "feature-2": "Perfect music synchronization with character movements",
        "feature-3": "Unmatched personalization for every project",
        "feature-4": "Easy collaboration process with our team",
        "pricing-title": "Choose Your Package",
        "basic-title": "Basic",
        "basic-desc": "For short music videos with basic elements",
        "basic-price": "$25",
        "advanced-title": "Advanced",
        "advanced-desc": "Music videos with more complex animations and high details",
        "advanced-price": "$60",
        "premium-title": "Premium",
        "premium-desc": "Premium music video with full customization features",
        "premium-price": "$100",
        "faq-title": "Frequently Asked Questions",
        "faq-q1": "What is a VTuber Music Video?",
        "faq-a1": "A VTuber music video is a personalized animated video featuring your VTuber character performing to music of your choice.",
        "faq-q2": "How long does it take to create a VTuber music video?",
        "faq-a2": "It typically takes 2-4 weeks, depending on the complexity of the project.",
        "footer-text": "© 2024 VTuber Music Video. All rights reserved.",
        "made-by": "Made with ❤️ by ChatGPT"
    },
    id: {
        "main-title": "Video Musik Pesanan VTuber",
        "header-desc": "Pesan video musik yang dipersonalisasi dengan karakter VTuber Anda",
        "intro-title": "Apa yang Kami Tawarkan: Video Musik VTuber",
        "intro-desc": "Dapatkan video musik yang dipersonalisasi dengan karakter VTuber Anda. Mulai sekarang untuk membuat proyek musik terbaik!",
        "portfolio-title": "Pekerjaan Kami",
        "portfolio-desc": "Lihat beberapa video musik VTuber luar biasa kami!",
        "features-title": "Fitur Utama",
        "feature-1": "Kreativitas tanpa batas dengan desain animasi unik",
        "feature-2": "Sinkronisasi musik yang sempurna dengan gerakan karakter",
        "feature-3": "Personalisasi tak tertandingi untuk setiap proyek",
        "feature-4": "Proses kolaborasi yang mudah dengan tim kami",
        "pricing-title": "Pilih Paket Anda",
        "basic-title": "Dasar",
        "basic-desc": "Untuk video musik pendek dengan elemen dasar",
        "basic-price": "$25",
        "advanced-title": "Lanjutan",
        "advanced-desc": "Video musik dengan animasi yang lebih kompleks dan detail tinggi",
        "advanced-price": "$60",
        "premium-title": "Premium",
        "premium-desc": "Video musik premium dengan fitur kustomisasi penuh",
        "premium-price": "$100",
        "faq-title": "Pertanyaan yang Sering Diajukan",
        "faq-q1": "Apa itu Video Musik VTuber?",
        "faq-a1": "Video musik VTuber adalah video animasi yang dipersonalisasi yang menampilkan karakter VTuber Anda yang sedang tampil dengan musik pilihan Anda.",
        "faq-q2": "Berapa lama waktu yang dibutuhkan untuk membuat video musik VTuber?",
        "faq-a2": "Biasanya membutuhkan waktu 2-4 minggu, tergantung pada kompleksitas proyek.",
        "footer-text": "© 2024 Video Musik VTuber. Semua hak dilindungi.",
        "made-by": "Dibuat dengan ❤️ oleh ChatGPT"
    }
};

// Function to change the language based on the selected language
function changeLanguage(lang) {
    const elements = document.querySelectorAll('[id]'); // Select all elements with an id
    elements.forEach(element => {
        const key = element.id; // Get the id of the element
        if (translations[lang][key]) {
            element.innerHTML = translations[lang][key]; // Change the content to the selected language
        }
    });
}

// Set default language to English
document.addEventListener('DOMContentLoaded', () => {
    changeLanguage('en'); // Default language is English
});

// Script untuk toggle jawaban FAQ
document.querySelectorAll('.faq-question').forEach((question) => {
    question.addEventListener('click', function () {
        const faqItem = this.parentElement;
        faqItem.classList.toggle('active');
    });
});

// Language change event listener
document.getElementById('language-select').addEventListener('change', (e) => {
    const selectedLanguage = e.target.value;
    changeLanguage(selectedLanguage);
});
