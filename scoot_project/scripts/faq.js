// Select all details elements
const detailsElements = document.querySelectorAll('details');

// Iterate over each details element
detailsElements.forEach((details) => {
  let timeoutId;

  // Add event listener for the toggle event
  details.addEventListener('toggle', function() {
    // Check if the details element is open
    if (this.open) {
      // Clear any existing timeout
      clearTimeout(timeoutId);
    }
  });

  // Add event listener for the mouseover event
  details.addEventListener('mouseover', function() {
    // Clear the timeout when the mouse is over the details element
    clearTimeout(timeoutId);
  });

  // Add event listener for the toggle event
  details.addEventListener('toggle', function() {
    // Check if the details element is open
    if (this.open) {
      // Clear any existing timeout
      clearTimeout(timeoutId);

      // Close all other details
      detailsElements.forEach((otherDetails) => {
        if (otherDetails !== this) {
          otherDetails.open = false;
        }
      });
    }
  });

  // Add event listener for the mouseout event
  details.addEventListener('mouseout', function() {
    // Only set the timeout if the details element is still open
    if (this.open) {
      timeoutId = setTimeout(() => {
        this.open = false;
      }, 5000);
    }
  });
});