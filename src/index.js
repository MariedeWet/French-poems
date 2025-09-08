function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "831401f7db503t1243b3947oa0399a1a";
  let context =
    "You are a limerick expert and love to limericks. You mission is to generate a limerick in basic HTML and separate each line with a <br />. Make sure to follow the user instructions. Do not include a title to the limerick. Sign the limerick with 'SheCodes AI' inside a <strong> element at the end of the limerick and NOT at the beginning. Do not include any code langauge in the poem.";
  let prompt = `User instructions: Generate a limerick about ${instructionsInput.value}`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating">⏳ Generating a limerick about ${instructionsInput.value}</div>`;

  axios.get(apiURL).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
