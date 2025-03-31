
// Used to load common content into other HTML files
// This is for the menu in the header
fetch("header.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("header-placeholder").innerHTML = data;
  });

// This is for the footer
fetch("footer.html")
.then(response => response.text())
.then(data => {
document.getElementById("footer-placeholder").innerHTML = data;
});

// Quiz Functionality Section
// Array of question-answer objects
const quizData = [
  { question: "What is Ariel's most favourite food?", answer: "Bacon" },
  { question: "How old is Ariel?", answer: "9" },
  { question: "Which country was Ariel born in?", answer: "Australia" },
  { question: "What type of dog is Ariel?", answer: "Pug" },
  { question: "What colour is Ariel?", answer: "Fawn" },
  { question: "What does Ariel do whilst she sleeps?", answer: "Snores" },
  { question: "What colour are Ariel's eyes?", answer: "Brown" }
];

// Initiates the currentQuestion variable
let currentQuestion = {};

// Get and display a random question
function displayRandomQuestion() {
  const randomIndex = Math.floor(Math.random() * quizData.length);
  currentQuestion = quizData[randomIndex];
  document.getElementById("questionLabel").innerText = currentQuestion.question;
  // Clear any old input or answers
  document.getElementById("userAnswer").value = "";
  document.getElementById("answerLabel").innerText = "Click 'Submit' to see if you are correct";
}

// Compare the user's answer to the stored answer and display message
function checkAnswer() {
  if (document.getElementById("userAnswer").value == currentQuestion.answer) {
    document.getElementById("answerLabel").style.color = "green";
    document.getElementById("answerLabel").style.fontWeight = "bold";
    document.getElementById("answerLabel").innerText = "Nicely done! You are correct!"
  }
  else {
    document.getElementById("answerLabel").style.color = "red";
    document.getElementById("answerLabel").style.fontWeight = "bold";
    document.getElementById("answerLabel").innerText = "You are incorrect, the answer is " + currentQuestion.answer + ". Try another question.";
  }
}

// Logic for validation of input elements in the 'contact' form. Can be expanded as required.
function validateForm() {
  const vFields = [
    {name: "firstname", message: "First name must be completed", id: "validateFname"},
    {name: "lastname", message: "Last name must be completed", id: "validateLname"},
    {name: "email", message: "Email must be completed", id: "validateEmail"}
  ];

  let valid = true;

  vFields.forEach(vField => {
    const inputValue = document.forms["contact"][vField.name].value.trim();
    const validationElement = document.getElementById(vField.id);

    if(!inputValue) {
      validationElement.innerHTML=vField.message;
      validationElement.style.color="red";
      validationElement.style.fontSize="10px";
      valid = false;
    }
    else {
      validationElement.innerHTML="";
    }
  });
  return valid;
}

// Logic to add a tick to the end of the input boxes on the 'contact' form when information is entered.
function addTick(inputElement) {
  const tickElement = inputElement.nextElementSibling;
  tickElement.style.visibility = inputElement.value.trim().length > 0 ? 'visible' : 'hidden';
}


// This loads the random question on page initiation
window.addEventListener("load", displayRandomQuestion);