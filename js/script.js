
// pageCount: users need to see which page they're currently on, and it needs to start at 1
let pageCount = 1;
//pageTotal: page total should always be 18.
const pageTotal = 18;
//
const fwdButton = document.getElementById("fwd-btn");

const backButton = document.getElementById("back-btn");

fwdButton.addEventListener("click", () => {
  pageCount = pageCount + 1;
  console.log("currentPage:", pageCount);
});

backButton.addEventListener("click", () => {
  pageCount = pageCount - 1;
  console.log("currentPage:", pageCount);
});