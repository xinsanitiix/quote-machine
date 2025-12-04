function displayQuote(response) {
  new Typewriter("#quote", {
    strings: response.data.answer,
    autoStart: true,
    cursor: "",
    delay: 10,
  });
}

function generateQuote(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "7178db21973o74a8d48ft4f8cf3f740b";
  let prompt = `Generate an inspirational quote ${instructionsInput.value}`;
  let context =
    "You are an inspirational quote expert and love to motivate people with short quotes. Make sure to follow the user instructions. Add a line break before you sign the quote with `SJ \uD83D\uDC9B AI` inside a <strong> element";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("test 1");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  axios.get(apiUrl).then(displayQuote);
}

let quoteFormElement = document.querySelector("#quote-generator");
quoteFormElement.addEventListener("submit", generateQuote);
