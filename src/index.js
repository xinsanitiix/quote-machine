function generateQuote(event) {
  event.preventDefault();

  new Typewriter("#quote", {
    strings:
      "The best time to have planted a tree was 10 years ago, the second best time is today!",
    autoStart: true,
    cursor: "",
    delay: 10,
  });
}

let quoteFormElement = document.querySelector("#quote-generator");
quoteFormElement.addEventListener("submit", generateQuote);
