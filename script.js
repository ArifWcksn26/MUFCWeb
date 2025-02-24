const suggestions = [
    "Home",
    "Sejarah",
    "Stadion",
    "Prestasi",
    "Legend"
];

const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");

searchInput.addEventListener("input", function() {
    const inputValue = this.value.toLowerCase();
    searchResults.innerHTML = ""; 

    if (inputValue) {
        const filteredSuggestions = suggestions.filter(suggestion =>
            suggestion.toLowerCase().includes(inputValue)
        );

        filteredSuggestions.forEach(suggestion => {
            const a = document.createElement("a");
            a.href = "#" + suggestion.toLowerCase(); 
            a.textContent = suggestion;
            a.addEventListener("click", function(event) {
                event.preventDefault(); 
                smoothScrollTo(suggestion.toLowerCase()); 
            });
            searchResults.appendChild(a);
        });

        if (filteredSuggestions.length > 0) {
            searchResults.style.display = "block"; 
        } else {
            searchResults.style.display = "none"; 
        }
    } else {
        searchResults.style.display = "none"; 
    }
});

// Fungsi untuk scroll dengan mulus
function smoothScrollTo(targetId) {
    const targetElement = document.getElementById(targetId);
    targetElement.scrollIntoView({ behavior: 'smooth' }); 
    searchResults.style.display = "none"; 
}


window.onclick = function(event) {
    if (!event.target.matches('#searchInput') && !event.target.matches('#searchButton')) {
        searchResults.style.display = "none"; 
    }
};


function searchContent() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const sections = document.querySelectorAll('article h2, article h3, p'); 

    let found = false;

    sections.forEach(section => {
        if (section.textContent.toLowerCase().includes(searchInput)) {
            found = true;
            const sectionId = section.parentElement.id; 
            if (sectionId) {
                window.location.hash = sectionId; 
            }
        }
    });

    if (!found) {
        alert('Konten tidak ditemukan.');
    }
}


document.getElementById('searchButton').addEventListener('click', searchContent);


document.getElementById('searchInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        searchContent(); 
    }
});

window.onload = function() {
    alert("Selamat datang di situs saya!");
};

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.onclick = function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    };
});

document.querySelector('.cta-button').addEventListener('click', function(event) {
    const confirmation = confirm("Apakah Anda yakin ingin mengirim email?");
    if (!confirmation) {
        event.preventDefault(); 
    }
});

document.getElementById("hamburger").addEventListener("click", function() {
    const navLinks = document.getElementById("nav-links");
    if (navLinks.style.display === "flex") {
        navLinks.style.display = "none"; // Menyembunyikan menu
    } else {
        navLinks.style.display = "flex"; // Menampilkan menu
    }
});