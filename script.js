document.getElementById('questionForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const question = document.getElementById('questionInput').value.trim();
  const category = document.getElementById('category').value;

  if (!category || !question) {
    alert("Please fill in all fields.");
    return;
  }

  // Save to Firebase
  const newQuestionRef = database.ref('questions').push();
  newQuestionRef.set({
    category: category,
    question: question,
    timestamp: new Date().toISOString()
  });

  alert("✅ Your question has been submitted!");

  // Reset form
  document.getElementById('questionInput').value = '';
  document.getElementById('category').value = '';
});
