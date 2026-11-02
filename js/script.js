
const container = document.getElementById('education-resources');
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