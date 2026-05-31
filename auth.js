(function () {
  var PASSWORD = "ilovemydog"; // ← set your password here
  var KEY = "portfolio_auth";

  if (sessionStorage.getItem(KEY) !== PASSWORD) {
    var dest = encodeURIComponent(window.location.href);
    window.location.replace("login.html?next=" + dest);
  }
})();
