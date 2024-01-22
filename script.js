let currentUnit = 'cm';

function toggleUnits(unit) {
    if (currentUnit === unit) {
        return;
    }

    const unitMappings = {
        'cm': {
            '.chest': '96',
            '.hip': '103',
            '.waist': '72',
            '.height': '171',
            '.shoe-size': '39.5',
            '.clothing-size': 'M',
        },
        'in': {
            '.chest': '37.8',
            '.hip': '40.6',
            '.waist': '28.3',
            '.height': '67.3',
            '.shoe-size': '15.6',
            '.clothing-size': '8',
        },
    };

    const buttons = document.querySelectorAll('.buttons_top button');

    buttons.forEach(button => {
        const isActive = button.dataset.unit === unit;
        updateButtonStyle(button, isActive);
    });

    const elementsToConvert = ['.chest', '.hip', '.waist', '.height', '.shoe-size', '.clothing-size'];

    elementsToConvert.forEach(selector => {
        const element = document.querySelector(selector);
        if (element) {
            element.textContent = unitMappings[unit][selector] || element.textContent.trim();
        }
    });

    currentUnit = unit;
}

function updateButtonStyle(button, isActive) {
    button.classList.toggle('button-active', isActive);
    button.style.backgroundColor = isActive ? '#c0c0c0' : '#454545';
    button.style.color = isActive ? '#212121' : '#a6a6a6';
}

// Initial setup to mark the default unit as active
toggleUnits(currentUnit);




//change language toggle button

let currentLanguage = 'english';

document.addEventListener('DOMContentLoaded', function () {
    document.body.classList.add('loaded');

    document.querySelectorAll('.german-text').forEach(function (element) {
        element.style.display = 'none';
    });

    var dropdownToggle = document.getElementById('languageDropdown');
    var dropdownMenu = document.querySelector('.dropdown-menu');

    dropdownToggle.addEventListener('click', function () {
        dropdownMenu.style.display = (dropdownMenu.style.display === 'none' || dropdownMenu.style.display === '') ? 'block' : 'none';
    });

    document.addEventListener('click', function (event) {
        if (!dropdownToggle.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.style.display = 'none';
        }
    });
});


function changeLanguage(language) {
    currentLanguage = language;

    document.querySelectorAll('.english-text, .german-text').forEach(function (element) {
        element.style.display = 'none';
    });

    document.querySelectorAll('.' + language + '-text').forEach(function (element) {
        element.style.display = 'inline';
    });

    document.querySelectorAll('.container_parameters_one').forEach(function (element) {
        const shouldShow = window.innerWidth < 1200 && element.classList.contains(language + '-text');
        element.style.display = shouldShow ? 'flex' : 'none';

        if (window.innerWidth > 1024) {
            element.style.display = 'none';
        }
    });
}




//loaded function for body
document.addEventListener('DOMContentLoaded', function () {
    document.body.classList.add('loaded');
});

//hide the navbar when scroling

let prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-50px";
    }
    prevScrollpos = currentScrollPos;
}


document.addEventListener("DOMContentLoaded", function () {

    const internalLinks = document.querySelectorAll('a[href^="#"]');

    internalLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();

            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: "smooth",
                });
            }
        });
    });
});

//modal photo block

var images1 = document.querySelectorAll('.photo_preview img');
var images2 = document.querySelectorAll('.photo_preview2 img');
var images = Array.from(images1).concat(Array.from(images2));
var currentImageIndex = 0;

function openModal(index) {
    var modal = document.getElementById('myModal');
    var modalImg = document.getElementById('modalImg');
    currentImageIndex = index;
    modal.style.display = 'flex';
    modalImg.src = images[index].src;
}

function closeModal() {
    var modal = document.getElementById('myModal');
    modal.style.display = 'none';
}

function prevImage() {
    if (currentImageIndex > 0) {
        currentImageIndex--;
        document.getElementById('modalImg').src = images[currentImageIndex].src;
    }
}

function nextImage() {
    if (currentImageIndex < images.length - 1) {
        currentImageIndex++;
        document.getElementById('modalImg').src = images[currentImageIndex].src;
    }
}

images.forEach(function (image, index) {
    image.addEventListener('click', function () {
        openModal(index);
    });
});


//Button UP

const btnUp = {
    el: document.querySelector('.btn-up'),
    show() {
        this.el.classList.remove('btn-up_hide');
    },
    hide() {
        this.el.classList.add('btn-up_hide');
    },
    addEventListener() {
        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY || document.documentElement.scrollTop;
            scrollY > 400 ? this.show() : this.hide();
        });
        document.querySelector('.btn-up').onclick = () => {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
        }
    }
}

btnUp.addEventListener();


//trigger fot fixed bottom container with parameters

document.addEventListener("DOMContentLoaded", function () {
    var hiddenBlock = document.getElementById("hiddenBlock");
    var triggerElement = document.querySelector(".about");

    window.addEventListener("scroll", function () {
        var triggerPosition = triggerElement.getBoundingClientRect().bottom;

        if (triggerPosition <= window.innerHeight) {
            hiddenBlock.style.opacity = 1;
            hiddenBlock.style.transform = "translateY(0)";
        }
    });
});






