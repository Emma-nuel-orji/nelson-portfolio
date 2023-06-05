// Get the 'About' link element
const aboutLink = document.querySelector('.nav-about');

// Get the text element to change
const textToChange = document.getElementById('textToChange');

// Get the content section element
const contentSection = document.getElementById('contentSection');

// Set up click event listener for the 'About' link
aboutLink.addEventListener('click', function(event) {
  event.preventDefault();

  // Check if the text should be changed to 'Close' or 'About'
  if (textToChange.innerText === 'Nelson Okenwa') {
    // Change the text to 'Close'
    textToChange.innerText = 'Close';

    // Animate the content section opacity to 0
    contentSection.style.opacity = 0;
  } else {
    // Change the text back to 'Nelson Okenwa'
    textToChange.innerText = 'Nelson Okenwa';

    // Animate the content section opacity to 1
    contentSection.style.opacity = 1;
  }
});
