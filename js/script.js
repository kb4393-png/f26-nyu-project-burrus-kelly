
const container = document.getElementById('education-resources');
educationItems.forEach(function(educationItem){

  const educationItemDiv = document.createElement('div');
  const title = document.createElement('h3');
  const description = document.createElement('p');
  const image = document.createElement("img");

  title.textContent = educationItem.title;
  image.src = educationItem.imageUrl;
  description.textContent = educationItem.description;

  educationItemDiv.appendChild(title);
  educationItemDiv.appendChild(image);
  educationItemDiv.appendChild(description);
  container.appendChild(educationItemDiv);
});