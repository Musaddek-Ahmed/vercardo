const agreeCheckbox = document.getElementById('agreeCheckbox');
const submitButton = document.getElementById('submitButton');
const closeBtn = document.querySelector('.close-button');
const outerContainer = document.querySelector('.outer-container');


function goBack() {
  window.history.back();
}

agreeCheckbox.addEventListener('change', function () {
  if (this.checked) {
    submitButton.disabled = false;
    submitButton.style.cursor = 'pointer';
    submitButton.style.backgroundColor = '#41c8fd';
  } else {
    submitButton.disabled = true;
    submitButton.style.backgroundColor = '#fefefe';
    submitButton.style.cursor = 'default';
  }
});

closeBtn.addEventListener('click', function () {
  outerContainer.style.display = 'none';
});

document.getElementById("contactForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the default form submission
  submitButton.disabled = true;
  submitButton.style.cursor = 'default';
  submitButton.style.backgroundColor = '#fefefe';


  // Get form data
  const email = document.getElementById("email").value;
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const message = document.getElementById("message").value;

  var jsonObject = {
    replyTo: email,
    subject: `Enquiry from ${name}`,
    emailBody: `${message}\n\n Contact No: ${phone}`
  }

  // Make HTTP POST request to API endpoint
  fetch("https://vercardo-backend.onrender.com/send-email", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(jsonObject)
  })
    .then(response => {
      if (response.ok) {
        // Reset the form
        alert("Enquiry submitted successfully!");
        document.getElementById("contactForm").reset();
      } else {
        alert("Error submitting form. Please try again later.");
      }
    })
    .catch(error => {
      console.error("Error:", error);
      alert("Error submitting form. Please try again later.");
    });
});