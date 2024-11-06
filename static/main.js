document.addEventListener("DOMContentLoaded", function() {
    
    var pageTitle = document.getElementById("page-title");

    pageTitle.addEventListener("mouseenter", () => {
      pageTitle.classList.remove("fade-in-move-down");
      pageTitle.classList.add("peek-page-title");
      pageTitle.classList.remove("hide-page-title");
    })
    
    pageTitle.addEventListener("mouseleave", () => {
      pageTitle.classList.add("hide-page-title");
      pageTitle.classList.remove("peek-page-title");
    })


    var gameDevPortLink = document.getElementById("game-dev-port-link");
    var workXpLink = document.getElementById("work-xp-link");

    var navBtnCampaign = document.getElementById("nav-btn-campaign");
    var navBtnMultiplayer = document.getElementById("nav-btn-multiplayer");

    gameDevPortLink.addEventListener("click", () => {
      navBtnCampaign.click();
    })

    workXpLink.addEventListener("click", () => {
      navBtnMultiplayer.click();
    })
})
