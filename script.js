const text = document.getElementById("color");
const button1 = document.getElementById("change-color");

const colors = ["red", "blue", "green", "yellow", "purple", "orange"];
let currentColorIndex = 1;

button1.addEventListener("click", () => {
    // Change both the color and text content
    text.style.color = colors[currentColorIndex];
    text.textContent = `The color is now ${colors[currentColorIndex]}!`;
    
    currentColorIndex = (currentColorIndex + 1) % colors.length;
});

const h3tag = document.getElementById("remove-h3");
const button2 = document.getElementById("remove");

button2.addEventListener("click", () => {
    // Remove the h3 tag from the document
    const parentDiv = h3tag.parentElement; // Get the parent div
    h3tag.remove();
    // add a new h4 tag
    const newH4 = document.createElement("h4");
    newH4.textContent = "This is a new h4 tag! to replace the h3 tag.";
    parentDiv.appendChild(newH4); // Append to the div instead of body
});
