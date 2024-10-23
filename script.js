// Create a "Scroll to Top" button
const scrollToTopButton = document.createElement('button');
scrollToTopButton.innerHTML = '↑ Top';
scrollToTopButton.style.position = 'fixed';
scrollToTopButton.style.bottom = '20px';
scrollToTopButton.style.right = '20px';
scrollToTopButton.style.display = 'none'; // Hidden by default
scrollToTopButton.style.padding = '10px';
scrollToTopButton.style.fontSize = '16px';
scrollToTopButton.style.backgroundColor = '#343a40';
scrollToTopButton.style.color = '#fff';
scrollToTopButton.style.border = 'none';
scrollToTopButton.style.borderRadius = '5px';
scrollToTopButton.style.cursor = 'pointer';
scrollToTopButton.style.zIndex = '1000';

// Append the button to the body
document.body.appendChild(scrollToTopButton);

// Show the button when scrolling down
window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
};

// Scroll to top functionality
scrollToTopButton.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Smooth scroll effect
    });
};
