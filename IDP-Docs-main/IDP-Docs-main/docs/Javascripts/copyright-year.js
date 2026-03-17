(function () {
  function setCopyrightYear() {
    var el = document.getElementById("copyright-year");
    if (el) el.textContent = new Date().getFullYear();
  }

  // Material for MkDocs: supports instant loading
  if (typeof document$ !== "undefined" && document$ && document$.subscribe) {
    document$.subscribe(setCopyrightYear);
  } else {
    // Fallback for environments without Material instant loading
    document.addEventListener("DOMContentLoaded", setCopyrightYear);
  }
})();