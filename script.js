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