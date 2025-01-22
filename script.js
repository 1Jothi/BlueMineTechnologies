function handleReviewSubmit(event) {
    event.preventDefault();
    const reviewTextarea = event.target.querySelector("textarea");
    const reviewText = reviewTextarea.value;
    const reviewList = document.querySelector(".reviews-list");

    const reviewElement = document.createElement("div");
    reviewElement.textContent = reviewText;
    reviewList.appendChild(reviewElement);

    reviewTextarea.value = "";
}

function handleBookingSubmit(event) {
    event.preventDefault();
    alert("Your booking is confirmed!");
}

function speakText(text) {
    const speech = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(speech);
}
let currentRating = 0;

function setStarRating(rating) {
currentRating = rating;
const stars = document.querySelectorAll('.star-rating span');
stars.forEach((star, index) => {
if (index < rating) {
    star.style.color = '#FFD700';
} else {
    star.style.color = '#ccc';
}
});
}

function handleReviewSubmit(event) {
event.preventDefault();

const reviewTextarea = event.target.querySelector("textarea");
const reviewText = reviewTextarea.value;
const reviewImage = document.getElementById("review-image").files[0];
const reviewList = document.querySelector(".reviews-list");

const reviewElement = document.createElement("div");
const reviewContent = document.createElement("p");
reviewContent.textContent = reviewText;

const starElement = document.createElement("p");
starElement.textContent = `Rating: ${currentRating} stars`;

const imageElement = document.createElement("img");
if (reviewImage) {
const reader = new FileReader();
reader.onload = function(e) {
    imageElement.src = e.target.result;
    imageElement.alt = "Review Image";
    imageElement.style.width = "100px";
    reviewElement.appendChild(imageElement);
}
reader.readAsDataURL(reviewImage);
}

reviewElement.appendChild(reviewContent);
reviewElement.appendChild(starElement);
reviewList.appendChild(reviewElement);

reviewTextarea.value = "";
document.getElementById("review-image").value = "";
currentRating = 0;
resetStarRating();
}

function resetStarRating() {
const stars = document.querySelectorAll('.star-rating span');
stars.forEach(star => star.style.color = '#ccc');
}
const typewriterElement = document.getElementById("typewriter");

// Texts for typewriter effect
const texts = [
  "✋ Welcome to Our Professional Page",
  "Blue-Mine-Technologies",
//   "I'm a Full-Stack 🌐developer",
//   "Graphic designer",
//   "I'm a BCA Student 👨‍🎓",
  "You can 📲 me through ✉️",
];

let textIndex = 0;
let charIndex = 0;
const typingSpeed = 150;
const pauseBetweenTexts = 1500;

// Function to simulate typewriter effect
function typeWriter() {
  if (charIndex < texts[textIndex].length) {
    typewriterElement.textContent += texts[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeWriter, typingSpeed);
  } else {
    setTimeout(() => {
      typewriterElement.textContent = ""; // Clear text
      charIndex = 0; // Reset character index
      textIndex = (textIndex + 1) % texts.length; // Move to the next text
      typeWriter();
    }, pauseBetweenTexts);
  }
}

// Start the typewriter effect
typeWriter();
function navigateTo(section) {
    alert(`Navigating to ${section}!`);
  }
  
// navbar

  // Toggle Sidebar on mobile devices (Hamburger Menu)
  document.querySelector(".hamburger-menu").addEventListener("click", function () {
    const sidebar = document.querySelector(".sidebar");
    sidebar.classList.toggle("sidebar-active");
  });

