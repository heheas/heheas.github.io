/*

========================================

ELEMENT REFERENCES

========================================
*/

const pipButton = document.getElementById("pip-button");

const element = document.getElementById("my-element");

const container = document.getElementById("pip-container");

const counter = document.getElementById("counter");

const plusButton = document.getElementById("plus");

const minusButton = document.getElementById("minus");

/*

========================================

APPLICATION STATE

========================================
*/

let count = 0;

const colors = {
var1: "#ff5555",
var2: "#55ff55",
var3: "#5599ff"
};

/*

========================================

COUNTER

========================================
*/

plusButton.addEventListener("click", () => {

count++;

counter.textContent = count;

});

minusButton.addEventListener("click", () => {

count--;

counter.textContent = count;

});

/*

========================================

COLOR SETTINGS

========================================
*/

const var1Color =
document.getElementById("var1-color");

const var2Color =
document.getElementById("var2-color");

const var3Color =
document.getElementById("var3-color");

/*

========================================

APPLY COLORS

========================================
*/

function applyColors() {

/*

Update CSS variables on the

main document.
*/

document.documentElement.style.setProperty(
"--var1",
colors.var1
);

document.documentElement.style.setProperty(
"--var2",
colors.var2
);

document.documentElement.style.setProperty(
"--var3",
colors.var3
);

/*

If the widget is currently inside

the PiP document, update the PiP

document too.
*/

if (element.ownerDocument !== document) {

const pipDocument =
  element.ownerDocument;


pipDocument.documentElement.style.setProperty(
  "--var1",
  colors.var1
);

pipDocument.documentElement.style.setProperty(
  "--var2",
  colors.var2
);

pipDocument.documentElement.style.setProperty(
  "--var3",
  colors.var3
);


}
}

/*

========================================

VARIABLE 1

========================================
*/

var1Color.addEventListener("input", (event) => {

colors.var1 = event.target.value;

applyColors();

});

/*

========================================

VARIABLE 2

========================================
*/

var2Color.addEventListener("input", (event) => {

colors.var2 = event.target.value;

applyColors();

});

/*

========================================

VARIABLE 3

========================================
*/

var3Color.addEventListener("input", (event) => {

colors.var3 = event.target.value;

applyColors();

});

/*

Apply the initial colors
*/

applyColors();

/*

========================================

DOCUMENT PICTURE-IN-PICTURE

========================================
*/

pipButton.addEventListener("click", async () => {

/*

Check browser support.
*/

if (!("documentPictureInPicture" in window)) {

alert(
  "Document Picture-in-Picture is not supported."
);

return;


}

try {

/*
 * Open the PiP window.
 */

const pipWindow =
  await documentPictureInPicture.requestWindow({
    width: 350,
    height: 300
  });


/*
 * Copy the page's stylesheets
 * into the PiP document.
 */

for (const styleSheet of document.styleSheets) {

  try {

    const cssRules =
      [...styleSheet.cssRules]
        .map(rule => rule.cssText)
        .join("");


    const style =
      pipWindow.document.createElement("style");


    style.textContent = cssRules;


    pipWindow.document.head.appendChild(style);

  } catch (error) {

    /*
     * Some external stylesheets cannot
     * be accessed. Ignore them.
     */

  }
}


/*
 * Copy the current CSS variable values
 * into the PiP document.
 */

pipWindow.document.documentElement.style.setProperty(
  "--var1",
  colors.var1
);

pipWindow.document.documentElement.style.setProperty(
  "--var2",
  colors.var2
);

pipWindow.document.documentElement.style.setProperty(
  "--var3",
  colors.var3
);


/*
 * Move the EXISTING widget into PiP.
 *
 * We are not cloning it.
 */

pipWindow.document.body.appendChild(element);


/*
 * When the PiP window closes,
 * move the widget back to the
 * original container.
 */

pipWindow.addEventListener("pagehide", () => {

  container.appendChild(element);

});


} catch (error) {

console.error(
  "Could not open Picture-in-Picture:",
  error
);


}

});
