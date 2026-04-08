// Sample car data
const cars = [
    {
        name: "Tesla Model S",
        description: "Electric luxury sedan with autopilot features.",
        image: "/static/images/car1.jpg"
    },
    {
        name: "BMW M3",
        description: "High-performance sports sedan with twin-turbo engine.",
        image: "/static/images/car2.jpg"
    },
    {
        name: "Audi Q5",
        description: "Luxury SUV with advanced technology and comfort.",
        image: "/static/images/car3.jpg"
    },
    {
        name: "Ford Mustang",
        description: "Iconic American muscle car with powerful V8 engine.",
        image: "/static/images/car4.jpg"
    },
    {
        name: "Honda Civic",
        description: "Reliable and fuel-efficient compact car.",
        image: "/static/images/car5.jpg"
    },
    {
        name: "Mercedes-Benz C-Class",
        description: "Luxury sedan with cutting-edge technology.",
        image: "/static/images/car3.jpg"
    }
];

// Function to load cars
function loadCars() {
    const carGrid = document.getElementById('car-grid');
    if (carGrid) {
        cars.forEach(car => {
            const carCard = document.createElement('div');
            carCard.className = 'car-card';
            carCard.innerHTML = `
                <img src="${car.image}" alt="${car.name}">
                <h3>${car.name}</h3>
                <p>${car.description}</p>
            `;
            carGrid.appendChild(carCard);
        });
    }
}

// Contact form submission
function handleContactForm() {
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! We will get back to you soon.');
            form.reset();
        });
    }
}

// Mobile navigation toggle
function toggleNav() {
    const navLinks = document.querySelector('.nav-links');
    if (navLinks) {
        navLinks.classList.toggle('active');
    }
}

// Initialize functions when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    loadCars();
    handleContactForm();

    // Add mobile nav toggle if needed
    const navToggle = document.createElement('button');
    navToggle.textContent = 'Menu';
    navToggle.style.display = 'none';
    navToggle.addEventListener('click', toggleNav);

    // Show toggle button on mobile
    if (window.innerWidth <= 768) {
        const nav = document.querySelector('nav .container');
        nav.appendChild(navToggle);
        navToggle.style.display = 'block';
    }

    window.addEventListener('resize', function() {
        if (window.innerWidth <= 768) {
            navToggle.style.display = 'block';
        } else {
            navToggle.style.display = 'none';
            document.querySelector('.nav-links').classList.remove('active');
        }
    });
});