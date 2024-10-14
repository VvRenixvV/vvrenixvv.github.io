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
})
