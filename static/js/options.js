document.addEventListener('DOMContentLoaded', function() {
    // Get the modal element
    const imageModal = document.getElementById('imageModal');
    
    // Check if the modal exists before adding the event listener
    if (imageModal) {
        // Event listener for when the modal is about to be shown
        imageModal.addEventListener('show.bs.modal', function (event) {
            // Button that triggered the modal (the clicked image)
            const button = event.relatedTarget;
            
            // Extract info from data-image-url attribute
            const imageUrl = button.getAttribute('data-image-url');
            
            // Get the image element inside the modal
            const modalImage = document.getElementById('modalImage');
            
            // Update the modal's image source
            if (modalImage && imageUrl) {
                modalImage.src = imageUrl;
            }
        });
    }
});