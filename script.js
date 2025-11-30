document.addEventListener("DOMContentLoaded", function () {

    function shareOnFacebook() {
      const urlToShare = window.location.href;
      const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(urlToShare)}`;
      window.open(facebookShareUrl, 'Share on Facebook', 'width=600,height=400');
    }
  
    function shareOnTwitter() {
      const urlToShare = window.location.href;
      const textToShare = "Check out this post on Cocky Bites!";
      const twitterShareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(urlToShare)}&text=${encodeURIComponent(textToShare)}`;
      window.open(twitterShareUrl, 'Share on Twitter', 'width=600,height=400');
    }
  
    document.getElementById("share-facebook").addEventListener("click", shareOnFacebook);
    document.getElementById("share-twitter").addEventListener("click", shareOnTwitter);
  });
// Star rating logic for Dining Halls page
document.addEventListener("DOMContentLoaded", function () {
  const starContainers = document.querySelectorAll(".page-dininghalls .stars");

  starContainers.forEach(container => {
    const stars = Array.from(container.querySelectorAll(".star"));

    // Set initial rating based on data-rating
    const initialRating = parseInt(container.getAttribute("data-rating") || "0", 10);
    setRating(container, stars, initialRating);

    stars.forEach(star => {
      // Click: lock in a rating
      star.addEventListener("click", () => {
        const value = parseInt(star.getAttribute("data-value"), 10);
        container.setAttribute("data-rating", value);
        setRating(container, stars, value);
      });

      // Hover: temporary preview
      star.addEventListener("mouseenter", () => {
        const value = parseInt(star.getAttribute("data-value"), 10);
        setRating(container, stars, value);
      });
    });

    // When mouse leaves the container, go back to saved rating
    container.addEventListener("mouseleave", () => {
      const current = parseInt(container.getAttribute("data-rating") || "0", 10);
      setRating(container, stars, current);
    });
  });

  function setRating(container, stars, rating) {
    stars.forEach(star => {
      const value = parseInt(star.getAttribute("data-value"), 10);
      star.classList.toggle("filled", value <= rating);
    });

    container.setAttribute("aria-label", `${rating} out of 5`);
  }
});

document.querySelectorAll(".image-scroll-container").forEach(container => {
    const gallery = container.querySelector(".scroll-gallery");
    const btnLeft = container.querySelector(".scroll-left");
    const btnRight = container.querySelector(".scroll-right");

    btnLeft.addEventListener("click", () => {
        gallery.scrollBy({ left: -250, behavior: "smooth" });
    });

    btnRight.addEventListener("click", () => {
        gallery.scrollBy({ left: 250, behavior: "smooth" });
    });
});

