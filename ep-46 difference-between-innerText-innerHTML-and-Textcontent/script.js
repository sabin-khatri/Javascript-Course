 // Using innerHTML to change content of the <h1> element
 function changeInnerHTML() {
    const h1Element = document.querySelector(".css-image");
    h1Element.innerHTML = "<i>Frontend Development Updated</i>";
  }

  // Using innerText to change the text content of the <h2> element
  function changeInnerText() {
    const h2Elements = document.querySelectorAll("h2");
    h2Elements[0].innerText = "Changed Heading 2 Text (innerText)";
  }

  // Using textContent to change the text content of a <p> element
  function changeTextContent() {
    const paragraph = document.querySelector("p");
    paragraph.textContent = "Changed paragraph text (textContent)";
  }

  document.addEventListener("DOMContentLoaded", () => {
    changeInnerHTML();
    changeInnerText();
    changeTextContent();
  });