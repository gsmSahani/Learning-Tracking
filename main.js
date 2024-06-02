const modeToggleBtn = document.getElementById('modeToggleBtn');
const modeIcon = document.getElementById('modeIcon');
const body = document.body;
const navbar = document.getElementById('navbar');
const container = document.getElementById('container');
const footer = document.querySelector('footer');
const cards = document.querySelectorAll('.card');

modeToggleBtn.addEventListener('click', () => {
    toggleClass(body, 'bg-gray-800');
    toggleClass(body, 'text-white');
    toggleClass(navbar, 'bg-gray-800');
    toggleClass(navbar, 'text-white');
    toggleClass(footer, 'bg-gray-800');
    toggleClass(footer, 'text-white');
    toggleClass(container, 'bg-gray-800');
    toggleClass(container, 'text-white');

    cards.forEach(card => {
        toggleClass(card.querySelector('a'), 'bg-white', 'dark:bg-gray-800');
        toggleClass(card.querySelector('a'), 'text-white');
        toggleClass(card.querySelector('h2'), 'text-black', 'text-white');
        toggleClass(card.querySelector('p'), 'text-gray-800', 'text-gray-300');
        toggleClass(card.querySelector('button'), 'text-white', 'text-black');
    });

    toggleIconClass(modeIcon, 'ri-sun-line', 'ri-moon-line');
});

function toggleClass(element, ...classNames) {
    classNames.forEach(className => {
        element.classList.toggle(className);
    });
}

function toggleIconClass(iconElement, addClass, removeClass) {
    if (body.classList.contains('bg-gray-800')) {
        iconElement.classList.remove(removeClass);
        iconElement.classList.add(addClass);
    } else {
        iconElement.classList.remove(addClass);
        iconElement.classList.add(removeClass);
    }
}
