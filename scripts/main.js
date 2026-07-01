
// ============================================================
// PULSE VR - main.js
// All JavaScript for the Pulse VR website
// ============================================================


// ---- HAMBURGER MENU (Mobile Navigation) --------------------
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

if (hamburger) {
    hamburger.addEventListener("click", function () {
        navLinks.classList.toggle("open");
    });
}


// ---- GAME LIBRARY DATA ------------------------------------
// Array of game objects used to build the game library page
const games = [
    {
        title: "Beat Saber VR",
        icon: "🎵",
        category: "action",
        description: "Slash through incoming blocks to the beat of energetic music.",
        players: "1 Player"
    },
    {
        title: "Zombie Apocalypse",
        icon: "🧟",
        category: "horror",
        description: "Survive waves of undead in this terrifying VR horror experience.",
        players: "1-2 Players"
    },
    {
        title: "Space Explorer",
        icon: "🚀",
        category: "adventure",
        description: "Travel across the galaxy and discover alien worlds in full VR.",
        players: "1-4 Players"
    },
    {
        title: "VR Football",
        icon: "⚽",
        category: "sports",
        description: "Step onto the pitch and experience football like never before.",
        players: "1-2 Players"
    },
    {
        title: "Team Fortress VR",
        icon: "🔫",
        category: "multiplayer",
        description: "Work with your team to defeat the enemy in this classic reimagined.",
        players: "2-4 Players"
    },
    {
        title: "Haunted Mansion",
        icon: "👻",
        category: "horror",
        description: "Explore a terrifying haunted house and uncover its dark secrets.",
        players: "1-2 Players"
    },
    {
        title: "Lone Climber",
        icon: "🧗",
        category: "adventure",
        description: "Scale sheer mountain faces and survive in extreme conditions.",
        players: "1 Player"
    },
    {
        title: "Neon Racer",
        icon: "🏎️",
        category: "sports",
        description: "Race futuristic vehicles through neon-lit circuits at high speed.",
        players: "1-4 Players"
    },
    {
        title: "War Zone",
        icon: "💥",
        category: "action",
        description: "Enter an immersive military combat zone in stunning VR.",
        players: "1-4 Players"
    },
    {
        title: "Party World",
        icon: "🎉",
        category: "multiplayer",
        description: "Play mini-games with friends in this fun-filled VR party game.",
        players: "2-4 Players"
    },
    {
        title: "Ocean Dive",
        icon: "🤿",
        category: "adventure",
        description: "Explore breathtaking coral reefs and encounter sea creatures.",
        players: "1 Player"
    },
    {
        title: "Tennis VR",
        icon: "🎾",
        category: "sports",
        description: "Play realistic tennis matches against AI or a friend.",
        players: "1-2 Players"
    }
];


// ---- RENDER GAMES FUNCTION ---------------------------------
// Builds game cards and inserts them into the page
function renderGames(filter) {
    var grid = document.getElementById("games-grid");
    if (!grid) return; // Only runs on the game library page

    // Filter games array based on selected category
    var filtered;
    if (filter === "all") {
        filtered = games;
    } else {
        filtered = games.filter(function (game) {
            return game.category === filter;
        });
    }

    // Build HTML for each game card
    var html = "";
    for (var i = 0; i < filtered.length; i++) {
        var game = filtered[i];
        var category = game.category.charAt(0).toUpperCase() + game.category.slice(1);
        html += '<div class="game-card">';
        html += '<span class="game-icon">' + game.icon + '</span>';
        html += '<h3>' + game.title + '</h3>';
        html += '<p>' + game.description + '</p>';
        html += '<span class="game-tag">' + category + '</span>';
        html += '<p class="game-players">&#128101; ' + game.players + '</p>';
        html += '</div>';
    }

    grid.innerHTML = html;
}

// ---- GAME FILTER BUTTONS -----------------------------------
var filterButtons = document.querySelectorAll(".filter-btn");

filterButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
        // Remove active from all buttons
        filterButtons.forEach(function (b) {
            b.classList.remove("active");
        });
        // Add active to clicked button
        btn.classList.add("active");
        // Re-render games with the selected filter
        renderGames(btn.getAttribute("data-filter"));
    });
});

// Render all games on page load
renderGames("all");


// ---- PRICING DATA ------------------------------------------
var pricingData = {
    visit: [
        {
            title: "Single Visit",
            price: "£12",
            period: "per hour / per person",
            features: [
                "1 hour VR session",
                "Choice of any game",
                "Equipment included",
                "Staff assistance"
            ],
            popular: false
        },
        {
            title: "Group Session",
            price: "£40",
            period: "per hour (up to 4 people)",
            features: [
                "1 hour VR session",
                "Full game library access",
                "Equipment for all players",
                "Dedicated game host",
                "Free soft drinks"
            ],
            popular: true
        },
        {
            title: "Premium Experience",
            price: "£25",
            period: "per 2 hours / per person",
            features: [
                "2 hour VR session",
                "Premium headset upgrade",
                "Full game library access",
                "Recording of your session",
                "Staff game host"
            ],
            popular: false
        }
    ],
    membership: [
        {
            title: "Starter",
            price: "£20",
            period: "per month",
            features: [
                "4 hours VR per month",
                "Standard game library",
                "Equipment included",
                "10% off group bookings"
            ],
            popular: false
        },
        {
            title: "Regular",
            price: "£35",
            period: "per month",
            features: [
                "10 hours VR per month",
                "Full game library access",
                "Equipment included",
                "20% off group bookings",
                "Priority booking"
            ],
            popular: true
        },
        {
            title: "VIP",
            price: "£60",
            period: "per month",
            features: [
                "Unlimited VR sessions",
                "Full game library access",
                "Premium headset upgrade",
                "1 free group session per month",
                "Exclusive VIP events",
                "Personal game host"
            ],
            popular: false
        }
    ]
};


// ---- RENDER PRICING FUNCTION -------------------------------
function renderPricing(type) {
    var container = document.getElementById("pricing-cards");
    if (!container) return; // Only runs on the pricing page

    var plans = pricingData[type];
    var html = "";

    for (var i = 0; i < plans.length; i++) {
        var plan = plans[i];
        var popularClass = plan.popular ? " popular" : "";
        var popularBadge = plan.popular ? '<div class="popular-badge">&#11088; Most Popular</div>' : "";

        // Build feature list items
        var featureItems = "";
        for (var j = 0; j < plan.features.length; j++) {
            featureItems += "<li>" + plan.features[j] + "</li>";
        }

        html += '<div class="pricing-card' + popularClass + '">';
        html += popularBadge;
        html += "<h3>" + plan.title + "</h3>";
        html += '<div class="price">' + plan.price + "</div>";
        html += '<div class="price-period">' + plan.period + "</div>";
        html += '<ul class="pricing-features">' + featureItems + "</ul>";
        html += '<a href="page2.html" class="btn">Book Now</a>';
        html += "</div>";
    }

    container.innerHTML = html;
}

// ---- PRICING TOGGLE ----------------------------------------
var pricingToggle = document.getElementById("pricing-toggle");

if (pricingToggle) {
    pricingToggle.addEventListener("change", function () {
        if (pricingToggle.checked) {
            renderPricing("membership");
        } else {
            renderPricing("visit");
        }
    });
    // Show pay-per-visit prices on load
    renderPricing("visit");
}


// ---- BOOKING FORM VALIDATION --------------------------------
var bookingForm = document.getElementById("booking-form");

if (bookingForm) {

    // Set today as the minimum selectable date
    var dateInput = document.getElementById("date");
    if (dateInput) {
        var today = new Date().toISOString().split("T")[0];
        dateInput.setAttribute("min", today);
    }

    bookingForm.addEventListener("submit", function (e) {
        e.preventDefault(); // Stop form from reloading page
        var valid = true;

        // Helper: show or hide an error message
        function setError(id, show) {
            var el = document.getElementById(id);
            if (el) {
                el.style.display = show ? "block" : "none";
            }
        }

        // Validate: Full Name (must be at least 2 characters)
        var name = document.getElementById("name").value.trim();
        if (name.length < 2) {
            setError("name-error", true);
            valid = false;
        } else {
            setError("name-error", false);
        }

        // Validate: Email (must match standard email format)
        var email = document.getElementById("email").value.trim();
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setError("email-error", true);
            valid = false;
        } else {
            setError("email-error", false);
        }

        // Validate: Phone (UK format)
        var phone = document.getElementById("phone").value.trim();
        var phoneRegex = /^(\+44|0)[\d\s]{9,12}$/;
        if (!phoneRegex.test(phone)) {
            setError("phone-error", true);
            valid = false;
        } else {
            setError("phone-error", false);
        }

        // Validate: Date (must be selected and in the future)
        var date = document.getElementById("date").value;
        var todayStr = new Date().toISOString().split("T")[0];
        if (!date || date < todayStr) {
            setError("date-error", true);
            valid = false;
        } else {
            setError("date-error", false);
        }

        // Validate: Time slot (must be selected)
        var time = document.getElementById("time").value;
        if (!time) {
            setError("time-error", true);
            valid = false;
        } else {
            setError("time-error", false);
        }

        // Validate: Number of players (must be selected)
        var players = document.getElementById("players").value;
        if (!players) {
            setError("players-error", true);
            valid = false;
        } else {
            setError("players-error", false);
        }

        // If all fields pass validation, show success message
        if (valid) {
            bookingForm.reset();
            var successEl = document.getElementById("form-success");
            if (successEl) {
                successEl.style.display = "block";
                // Hide the success message after 5 seconds
                setTimeout(function () {
                    successEl.style.display = "none";
                }, 5000);
            }
        }
    });
}


// ---- ACCESSIBILITY CONTROLS --------------------------------
var currentFontSize = 16; // Default font size in pixels

var fontIncrease = document.getElementById("font-increase");
var fontDecrease = document.getElementById("font-decrease");
var fontReset = document.getElementById("font-reset");
var contrastToggle = document.getElementById("contrast-toggle");
var dyslexiaToggle = document.getElementById("dyslexia-toggle");
var dyslexiaOn = false;

// Increase font size (max 24px)
if (fontIncrease) {
    fontIncrease.addEventListener("click", function () {
        if (currentFontSize < 24) {
            currentFontSize += 2;
            document.body.style.fontSize = currentFontSize + "px";
        }
    });
}

// Decrease font size (min 12px)
if (fontDecrease) {
    fontDecrease.addEventListener("click", function () {
        if (currentFontSize > 12) {
            currentFontSize -= 2;
            document.body.style.fontSize = currentFontSize + "px";
        }
    });
}

// Reset font size back to default
if (fontReset) {
    fontReset.addEventListener("click", function () {
        currentFontSize = 16;
        document.body.style.fontSize = "16px";
    });
}

// Toggle high contrast mode
if (contrastToggle) {
    contrastToggle.addEventListener("click", function () {
        document.body.classList.toggle("high-contrast");
    });
}

// Toggle dyslexia-friendly font
if (dyslexiaToggle) {
    dyslexiaToggle.addEventListener("click", function () {
        dyslexiaOn = !dyslexiaOn;
        if (dyslexiaOn) {
            document.body.style.fontFamily = "Comic Sans MS, Arial, sans-serif";
            document.body.style.letterSpacing = "0.05em";
            document.body.style.lineHeight = "1.9";
        } else {
            document.body.style.fontFamily = "Arial, Helvetica, sans-serif";
            document.body.style.letterSpacing = "normal";
            document.body.style.lineHeight = "1.6";
        }
    });
}
