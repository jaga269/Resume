
    // Get the popup container element
    const popupContainer = document.getElementById('personal_details');
    
    // Get the h1 element
    const jagadeesanHeading = document.getElementById('jagadeesan');

    // Function to open the popup box
    function openPopup() {
      popupContainer.style.display = 'block';
    }

    // Function to close the popup box
    function closePopup() {
      popupContainer.style.display = 'none';
    }

    // Event listener to toggle the popup box when h1 is clicked
    jagadeesanHeading.addEventListener('click', openPopup);