
const titles = [
  "Web Developer",
  "Software Developer", 
  "Systems Administrator", 
  "IT Support Specialist",
  "Tech Automation Enthusiast"
];

let currentIndex = 0;
const titleElement = document.getElementById("changing-title");

function changeTitle() {
  // 1. Move to the next title in the array
  currentIndex = (currentIndex + 1) % titles.length;
  
  // 2. Update the text
  titleElement.textContent = titles[currentIndex];
}

// Change the title every 3 seconds (3000ms)
setInterval(changeTitle, 3000);