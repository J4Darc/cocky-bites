document.addEventListener("DOMContentLoaded", function () {

  /* ============= SOCIAL SHARE BUTTONS ============= */
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

  const fb = document.getElementById("share-facebook");
  const tw = document.getElementById("share-twitter");
  if (fb) fb.addEventListener("click", shareOnFacebook);
  if (tw) tw.addEventListener("click", shareOnTwitter);


  /* ============= STAR RATING ============= */
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

      // Hover: preview
      star.addEventListener("mouseenter", () => {
        const value = parseInt(star.getAttribute("data-value"), 10);
        setRating(container, stars, value);
      });
    });

    // Leave: restore saved rating
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
  /* ============= SCROLL BUTTONS ============= */
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
  /* ============= IMAGE MODAL ENLARGE ============= */
  document.querySelectorAll(".scroll-gallery img").forEach(img => {
    img.addEventListener("click", () => {
      const modal = document.getElementById("img-modal");
      const modalImg = document.getElementById("img-modal-content");
      modal.style.display = "flex";
      modalImg.src = img.src;
    });
  });
  document.querySelector(".close-modal").addEventListener("click", () => {
    document.getElementById("img-modal").style.display = "none";
  });

  document.getElementById("img-modal").addEventListener("click", (e) => {
    if (e.target.id === "img-modal") {
      document.getElementById("img-modal").style.display = "none";
    }
  });

});
  /* For INDEX*/
document.querySelectorAll(".update-item").forEach(item => {
  const btn = item.querySelector(".update-card");
  const content = item.querySelector(".update-content");

  btn.addEventListener("click", () => {
    const isOpen = content.style.display === "block";
    document.querySelectorAll(".update-content").forEach(c => c.style.display = "none");
    content.style.display = isOpen ? "none" : "block";
  });
});

