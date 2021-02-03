# tech-degree-project-6

Style changes:
-I added a fade-in effect to certain elements as the user scrolls down; first few elements left without effect or the page loads with those elements hidden.
-I added the fade-in effect to those last scrolling elements because when the page loads they aren't in sight; they fade in normally.
-I changed the layout for mobile a little; centered things, got rid of bullet points on lists.
-I created index.css and fade.js in the "public" folder to handle these things.
-index.css is also used for mobile styling.

package.json changes:
-Added   "scripts": {
    "start": "node app.js"
  }
  so the project can be initiated in the terminal with "npm start"
