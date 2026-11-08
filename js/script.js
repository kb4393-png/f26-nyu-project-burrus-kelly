
// pageCount: users need to see which page they're currently on, and it needs to start at 1
let pageCount = 1;
//pageTotal: page total should always be 11.
const pageTotal = 11;
//
const currentPage = document.getElementById("currentpage");
const fwdButton = document.getElementById("fwd-btn");
const backButton = document.getElementById("back-btn");
const pageCounter = document.getElementById("pageCounter");
const restartButton = document.getElementById("restart")

//fwdButton functionality
fwdButton.addEventListener("click", () => {
  console.log("currentPage:", pageCount);
  pageCount = pageCount + 1;
  //if the current page is less than/equal to 11
  if (pageCount <= pageTotal && pageCount > 0) {
  //change img id currentpage src to Free1-PAGECOUNT.png
    currentPage.src = `images/Free1-${pageCount}.png`;
  //display the fwdButton
    fwdButton.classList.remove("is-hidden");
  //display the backButton
    backButton.classList.remove("is-hidden");
  }
  //else: the forward button is hidden
  else {
  fwdButton.classList.add("is-hidden");
  }
});

//backButton functionality
backButton.addEventListener("click", () => {
  console.log("currentPage:", pageCount);
  pageCount = pageCount - 1;
  //if the current page is less than/equal to 11, and greater than 0
  if (pageCount <= pageTotal && pageCount >= 1) {
  //change img id currentpage src to Free1-PAGECOUNT.png
    currentPage.src = `images/Free1-${pageCount}.png`;
  //display the fwdButton
    fwdButton.classList.remove("is-hidden");
  }
  //else: hide the back button
  else {
  backButton.classList.add("is-hidden");
  }
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
})

