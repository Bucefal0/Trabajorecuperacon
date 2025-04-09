// This file is currently empty, but you can add JavaScript here
// if you want to add interactivity to your page.
// For example, you could add a message when a download button is clicked.

// Example (not necessary for basic functionality):
const downloadButtons = document.querySelectorAll('.download-buttons button');

downloadButtons.forEach(button => {
    button.addEventListener('click', () => {
        alert(`Descargando: ${button.textContent}`);
    });
});