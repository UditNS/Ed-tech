const dropdownButton = document.getElementById('dropdownButton');
const dropdownContent = document.getElementById('dropdownContent');

let isHovering = false;

// Show dropdown content when hovering over the button or the dropdown content
dropdownButton.addEventListener('mouseenter', function() {
    isHovering = true;
    dropdownContent.classList.remove('hidden');
});

// Hide dropdown content when moving the mouse out of the button
dropdownButton.addEventListener('mouseleave', function() {
    isHovering = false;
    setTimeout(function() {
        if (!isHovering) {
            dropdownContent.classList.add('hidden');
        }
    }, 200); // Add a delay to give time for the cursor to move to the dropdown content
});

dropdownContent.addEventListener('mouseenter', function() {
    isHovering = true;
});

dropdownContent.addEventListener('mouseleave', function() {
    isHovering = false;
    setTimeout(function() {
        if (!isHovering) {
            dropdownContent.classList.add('hidden');
        }
    }, 200); // Add a delay to give time for the cursor to move to the button
});