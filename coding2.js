document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.color-button');
    const body = document.body;
    let originalColor = body.style.backgroundColor;

    // Function to change background color
    function changeBackground(color) {
        body.style.backgroundColor = color;
    }

    // Event listener for each color button
    buttons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.stopPropagation(); // Stop event propagation to prevent page click event
            changeBackground(button.style.backgroundColor); // Change background color to the button's color
        });
    });

    // Event listener for clicks outside of buttons
    body.addEventListener('click', function(event) {
        if (!event.target.classList.contains('color-button')) {
            changeBackground(originalColor); // Reset background color
        }
    });
});
