
// pageCount: users need to see which page they're currently on, and it needs to start at 1
let pageCount = 1;
let songId = "";

const currentPage = document.getElementById("currentpage");
const fwdButton = document.getElementById("fwd-btn");
const backButton = document.getElementById("back-btn");
const restartButton = document.getElementById("restart");
const pageReport = document.getElementById("pagenumber");
const songSelect = document.getElementById("song-selection");
const selfStudy = document.getElementById("self-study");
const audioAll = document.getElementById("audioAll");
const audioSoprano = document.getElementById("audioSoprano");
const audioAlto = document.getElementById("audioAlto");
const audioTenor = document.getElementById("audioTenor");
const audioBass = document.getElementById("audioBass");

/* HIDDEN CODE FOR REFERENCE BEFORE ADDING IT TO RENDER FUNCTION.
//fwdButton functionality
fwdButton.addEventListener("click", () => {
  console.log("currentPage:", pageCount);
  pageCount = pageCount + 1;
  //change img id currentpage src to Free1-PAGECOUNT.png
  currentPage.src = `images/Free1-${pageCount}.png`;
  //display the back button
  backButton.classList.remove("is-hidden");
  //if the current page equals the pageTotal (the last page)
  if (pageCount === pageTotal) {
    //hide the forward button
    fwdButton.classList.add("is-hidden");
  }
  //else: the forward button is visible
  else {
  fwdButton.classList.remove("is-hidden");
  }
  //update pageReport after click
  pageReport.textContent = `Page ${pageCount} of ${pageTotal}`;
});

//backButton functionality
backButton.addEventListener("click", () => {
  console.log("currentPage:", pageCount);
  pageCount = pageCount - 1;
  //change img id currentpage src to Free1-PAGECOUNT.png
  currentPage.src = `images/Free1-${pageCount}.png`;
  //if the current page is equal to 1, hide the back button
  if (pageCount === 1) {
  backButton.classList.add("is-hidden");
  }
  //else: the back button is visible
  else {
  fwdButton.classList.remove("is-hidden");
  }
  //update pageReport after click
  pageReport.textContent = `Page ${pageCount} of ${pageTotal}`;
});

//add restart button code
restartButton.addEventListener("click", ()=> {
  console.log("currentPage:", pageCount);
  //when clicked, pageCount gets reset to 1
  pageCount = 1;
  //and then currentPage gets set to page 1
  currentPage.src = `images/Free1-1.png`;
  //replaced the forward button after realizing it was staying hidden upon use of the restart button
  fwdButton.classList.remove("is-hidden");
  //also noticed back button was not hiding after use of restart button, fixed this as well to restate defaults of page 1:
  backButton.classList.add("is-hidden");
  pageReport.textContent = `Page ${pageCount} of ${pageTotal}`;
})

//Current Page Sentence in self-study section
pageReport.textContent = `Page ${pageCount} of ${pageTotal}`;
*/


//Array for songs
const songs = [
  {
    title: "Free",
    songUrlAll: "songs/Free1.mp3",
    songUrlSoprano: "songs/Free-Soprano_metronome1.mp3",
    songUrlAlto: "songs/Free-Alto_metronome1.mp3",
    songUrlTenor: "songs/Free-Tenor_metronome1.mp3",
    songUrlBass: "songs/Free-Bass_metronome1.mp3",
    pages: ["images/Free1-1.png", "images/Free1-2.png", "images/Free1-3.png", "images/Free1-4.png", "images/Free1-5.png", "images/Free1-6.png", "images/Free1-7.png", "images/Free1-8.png", "images/Free1-9.png", "images/Free1-10.png", "images/Free1-11.png"]
  },
  {
    title: "Song 2",
    songUrlAll: "#",
    songUrlSoprano: "#",
    songUrlAlto: "#",
    songUrlTenor: "#",
    songUrlBass: "#",
    pages: ["#"]
  },
];
//based on song selected in dropdown, render changes song and redraws so that page is at 1.
songSelect.addEventListener("change", (event) => {
  songId = event.target.value; //sets songId to value in dropdown when selected
  pageCount = 1;
  render();
});

//fwdButton updates page count and calls render
fwdButton.addEventListener("click", () => {
  pageCount = pageCount + 1;
  render();
});

//backButton updates page count and calls render
backButton.addEventListener("click", () => {
  pageCount = pageCount - 1;
  render();
});

//restart updates page count to 1
restartButton.addEventListener("click", () => {
  pageCount = 1;
  render();
});

function render() {
  if (songId === "") {
    selfStudy.classList.add ("is-hidden");
    return //stops rest of render code immediately if this if statement is true
  };
songs.forEach(function(song) {
  if (song.title === songId) {
    selfStudy.classList.remove("is-hidden");
    const pageTotal = song.pages.length;
    currentPage.src = song.pages[pageCount - 1]; //js arrays start at zero
    playlistAll.src = song.songUrlAll;
    playlistSoprano.src = song.songUrlSoprano;
    playlistAlto.src = song.songUrlAlto;
    playlistTenor.src = song.songUrlTenor;
    playlistBass.src = song.songUrlBass;
    
    pageReport.textContent = `Page ${pageCount} of ${pageTotal}`;

    if (pageCount === 1) {
      backButton.classList.add("is-hidden");
    } else {
      backButton.classList.remove("is-hidden");
    };

    if (pageCount === pageTotal) {
      fwdButton.classList.add("is-hidden");
    } else {
      fwdButton.classList.remove("is-hidden");
    };
  }
});
};


render ();

