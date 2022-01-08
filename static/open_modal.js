document.addEventListener("DOMContentLoaded", function() {
  //alert("This website is still under construction, so some features might not work correctly on some devices. But please feel free to browse nonetheless, thank you! :)");
  // Get the modal
  var modals = document.querySelectorAll(".modal");

  // Get the button that opens the modal
  var panels = document.querySelectorAll(".panel");

  // Get the <span> element that closes the modal
  var spans = document.querySelectorAll(".close");

  // When the user clicks on the button, open the modal
  panels.forEach(panel => {
    panel.addEventListener("click", function() {
      modals.forEach(modal => {
        var mod_id = modal.getAttribute('id');
        var pan_id = panel.getAttribute('id');
        if (mod_id.includes(pan_id)) {
          modal.style.display = "block";
          return;
        }
      })
    })
    }
  )

  // When the user clicks on <span> (x), close the modal
  spans.forEach(span => {
    span.addEventListener("click", function () {
      modals.forEach(modal => {
        modal.style.display = "none";
      })
    })
  })

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
      modals.forEach(modal => {
        if (event.target == modal) {
          modal.style.display = "none";
          return;
        }
    })
  }


})
