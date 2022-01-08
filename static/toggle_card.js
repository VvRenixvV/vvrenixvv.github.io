window.addEventListener('load', function () { 

  // Get the buttons that will open the cards
  var cardTitles = document.querySelectorAll(".card-title");

  cardTitles.forEach(title => {
    title.addEventListener("click", function () {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    })
  })

})