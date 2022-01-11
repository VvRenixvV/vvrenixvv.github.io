window.addEventListener('load', function () { 

  // Get the buttons that will open the cards
  var cardTitles = document.querySelectorAll(".card-title");

  cardTitles.forEach(title => {
    title.addEventListener("click", function () {
      this.classList.toggle("active");
      var card = this.nextElementSibling;
      if (card.style.display === "block") {
        card.style.display = "none";
      } else {
        card.style.display = "block";
      }
    })
  })

  var allCards = this.document.querySelectorAll(".card");
  var expandAllBtn = this.document.querySelector("#expandAllBtn");
  expandAllBtn.addEventListener("click", function () {
    if (expandAllBtn.innerHTML == "Expand All") {
      changeShadows();
      allCards.forEach(card => {
        card.style.display = "block";
      })
      cardTitles.forEach(title => {
        title.classList.add("active");
      })
      expandAllBtn.innerHTML = "Collapse All";
    } else {
      allCards.forEach(card => {
        card.style.display = "none";
      })
      cardTitles.forEach(title => {
        title.classList.remove("active");
      })
      expandAllBtn.innerHTML = "Expand All";
    }
  })

  var colors = ["var(--green)", "var(--dark-green)", "var(--orange)", "var(--yellow)", "var(--ming)"];
  function changeShadows() {
    allCards.forEach(card => {
      card.style.boxShadow = "5px 5px " + colors[Math.floor(Math.random() * colors.length)];
    })
  }
})
