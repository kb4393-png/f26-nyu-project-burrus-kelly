const container = document.getElementById('education-resources');

//Arrays for different music education tiles, each explaining a different aspect of reading sheet music.//

const educationItems = [
  {
    term: "Crescendo",
    description: "A crescendo, meaning a gradual increase in volume, is often represented by this symbol. Many people call it a hairpin, due to its slight resemblance to one.",
    imageUrl: "images/crescendo.png",
    imageAlt: "Sheet music closeup depicting a crescendo symbol going from volume levels mezzo-piano to mezzo-forte, located above a measure.",
    //Adding category for filter system
    Category:"Outside Staff Symbols"
  },
  {
    term: "Dotted Note",
    description: "You might wonder why some notes, regardless of whether they're quarter, half, etc, come with a small dot to their right side. This dot, called an \"augmentation dot\", indicates that the duration of that note will be extended by 50% of its original duration. For example, a normal quarter note is comprised of two eighth notes - but a dotted quarter note would be comprised of three eighth notes.",
    imageUrl: "images/dottednote.png",
    imageAlt: "Sheet music closeup depicting a dotted quarter note in a measure.",
    //Adding category for filter system
    Category:"Inside Staff Symbols"
  },

  {
    term: "Fermata",
    description: "If you see a symbol that looks sort of like an eyeball over a note or a rest, that's a fermata looking back at you! A fermata indicates that whatever note or rest it sits above should be held for longer than its intended duration. Its eyeball-esque appearance should be a good reminder - LOOK UP at your conductor for a cue as to how long to hold it!",
    imageUrl: "images/fermata.png",
    imageAlt: "Sheet music closeup depicting a fermata symbol directly above a whole note in an isolated measure.",
    //Adding category for filter system
    Category:"Outside Staff Symbols"
  },
  {
    term: "Glissando",
    description: "A glissando is often a straight or wiggly line between two notes, that tells you to glide from one note or pitch to the next. The intensity or amount of glide between the two notes often depends on how far apart the two notes are.",
    imageUrl: "images/glissando.png",
    imageAlt: "Sheet music closeup depicting glissando going up from one half note \(A\) to another half note \(B\)",
    //Adding category for filter system
    Category:"Inside Staff Symbols"
  },
  {
    term: "Important Staff Markings",
    description: "At the beginning of each line of music, you can find the clef that you're reading (usually treble or bass), the key signature that the measures are to be sung or played in (represented by sharps or flats), and the time signature. The time signature is comprised of two numbers stacked on top of each other - the top number representing how many beats are in one measure, and the bottom representing which note gets the beat.",
    imageUrl: "images/staff.png",
    imageAlt: "Sheet music closeup depicting a time signature of 4/4, key signature of D major, and a tempo marking indicating that one quarter note equals 120bpm.",
    //Adding category for filter system
    Category:"Other"
  }];

//selected category defaults to all
let selectedCategory = "all";
const allButton = document.getElementById("all");
const outsideButton = document.getElementById("outsidestaff");
const insideButton = document.getElementById("insidestaff");
const otherButton = document.getElementById("other");
const dataFilter = document.getElementById("data-filter");

//selecting a given filter button changes the selected category to the corresponding category
allButton.addEventListener("click", () => {
  selectedCategory = "all";
  //if category is selected in button, the button highlights yellow, otherwise it is purple
  if (allButton.dataset.filter === selectedCategory) {
    allButton.classList.add("is-selected");
    outsideButton.classList.remove("is-selected");
    insideButton.classList.remove("is-selected");
    otherButton.classList.remove("is-selected");
  }
  else {
    allButton.classList.remove("is-selected");
  }
  console.log("Selected Category:", selectedCategory);
});

outsideButton.addEventListener("click", () => {
  selectedCategory = "outside";
  if (outsideButton.dataset.filter === selectedCategory) {
    outsideButton.classList.add("is-selected");
    allButton.classList.remove("is-selected");
    insideButton.classList.remove("is-selected");
    otherButton.classList.remove("is-selected");
  }
  else {
    outsideButton.classList.remove("is-selected");
  }
  console.log("Selected Category:", selectedCategory);
});

insideButton.addEventListener("click", () => {
  selectedCategory = "inside";
  if (insideButton.dataset.filter === selectedCategory) {
    insideButton.classList.add("is-selected");
    outsideButton.classList.remove("is-selected");
    allButton.classList.remove("is-selected");
    otherButton.classList.remove("is-selected");
  }
  else {
    insideButton.classList.remove("is-selected");
  }
  console.log("Selected Category:", selectedCategory);
});

otherButton.addEventListener("click", () => {
  selectedCategory = "other";
  if (otherButton.dataset.filter === selectedCategory) {
    otherButton.classList.add("is-selected");
    outsideButton.classList.remove("is-selected");
    insideButton.classList.remove("is-selected");
    allButton.classList.remove("is-selected");
  }
  else {
    otherButton.classList.remove("is-selected");
  }
  console.log("Selected Category:", selectedCategory);
});



  educationItems.forEach(function(educationItem){

  const educationItemDiv = document.createElement('div');
  const term = document.createElement('h2');
  const description = document.createElement('p');
  const image = document.createElement("img");
  educationItemDiv.classList.add('item');

  term.textContent = educationItem.term;
  image.src = educationItem.imageUrl;
  image.alt = educationItem.imageAlt;
  description.textContent = educationItem.description;

  educationItemDiv.appendChild(term);
  educationItemDiv.appendChild(image);
  educationItemDiv.appendChild(description);
  container.appendChild(educationItemDiv);
});