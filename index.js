// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Use a Mixin to Add Common Behavior Between Unrelated Objects</h1>`;

/** TODO:
 * Create a mixin named glideMixin that defines a method named glide. Then use the glideMixin to give both bird and boat the ability to glide.
 * 
 let bird = {
   name: "Donald",
   numLegs: 2
 };
 
 let boat = {
   name: "Warrior",
   type: "race-boat"
 };
 
 // Only change code below this line 
 */

let bird = {
  name: 'Donald',
  numLegs: 2,
};

let boat = {
  name: 'Warrior',
  type: 'race-boat',
};

// Only change code below this line
let glideMixin = function (obj) {
  obj.glide = function () {
    console.log('Gliding over the ocean!');
  };
};

glideMixin(bird);
glideMixin(boat);

bird.glide();
boat.glide();
