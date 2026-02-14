const wordInput = document.getElementById('word-input');
const wordCount = document.getElementById('word-count');

wordInput.addEventListener('input', () => {
  const text = wordInput.value.trim();
  const words = text === '' ? [] : text.split(/\s+/);

  wordCount.innerText = words.length;
});
