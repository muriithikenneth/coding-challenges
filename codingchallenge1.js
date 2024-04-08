document.addEventListener('DOMContentLoaded', function() {
  const changeTextBtn = document.getElementById('changeTextBtn');
  const resetTextBtn = document.getElementById('resetTextBtn');
  const textParagraph = document.getElementById('textParagraph');
  const originalText = textParagraph.textContent;

  // Event listener for changing text
  changeTextBtn.addEventListener('click', function() {
      textParagraph.textContent = 'Hello, World!';
  });

  // Event listener for resetting text
  resetTextBtn.addEventListener('click', function() {
      textParagraph.textContent = originalText;
  });
});

  

